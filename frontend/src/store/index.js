import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {take, put, all} from 'redux-saga/effects';
import axios from 'axios';

// constants
const FETCH_DATA = 'FETCH_DATA';
const DELETE_DATA = 'DELETE_DATA';
const ADD_DATA = 'ADD_DATA';

const SET_DATA = 'SET_DATA';

// actions
export const addData = data => ({
    type: ADD_DATA,
    data
})

export const fetchData = () => ({
    type: FETCH_DATA
});

export const deleteData = id => ({
    type: DELETE_DATA,
    id
})

// Sagas
function* addDataSaga(){
    while (true) {
        const {data} = yield take(ADD_DATA);
        const response = yield axios.post("/films/add", data);
        if(response.status === 200)
            yield put(fetchData())
    }
}

function* fetchDataSaga() {
    while (true) {
        yield take(FETCH_DATA);
        const response = yield axios.get(`/films`);
        yield put({
            type: SET_DATA,
            payload: response.data
        });
    }
}

function* deleteDataSaga() {
    while (true) {
        const {id} = yield take(DELETE_DATA);
        const response = yield axios.post('/films/delete', {id});
        if(response.status === 200)
            yield put(fetchData())
    }
}

function* rootSaga() {
    yield all([fetchDataSaga(), deleteDataSaga(), addDataSaga()]);
}

const initialState = {};

function fetchReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case SET_DATA:
      return {
        ...state,
        films: payload
      };
    default:
      return state;
  }
}

const saga = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(fetchReducer, composeEnhancers(applyMiddleware(saga)));

saga.run(rootSaga);

export default store;