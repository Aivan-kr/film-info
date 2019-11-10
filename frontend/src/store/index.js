import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {take, put, all} from 'redux-saga/effects';
import axios from 'axios';

// constants
const FETCH_DATA = 'FETCH_DATA';
const DELETE_DATA = 'DELETE_DATA';
const ADD_DATA = 'ADD_DATA';
const ADD_MULTIPLE_DATA = 'ADD_MULTIPLE_DATA';
const SEARCH_DATA = 'SEARCH_DATA';

const SET_ALL = 'SET_ALL';
const SET_ONE = 'SET_ONE';
const SET_MANY = 'SET_MANY';
const DELETE_ONE = 'DELETE_ONE';

// actions
export const addData = data => ({
    type: ADD_DATA,
    data
});

export const addMultipleData = data => ({
    type: ADD_MULTIPLE_DATA,
    data
})

export const fetchData = () => ({
    type: FETCH_DATA
});

export const deleteData = id => ({
    type: DELETE_DATA,
    id
});

export const searchData = search => ({
    type: SEARCH_DATA,
    search
})

// Sagas
function* addDataSaga(){
    while (true) {
        const {data} = yield take(ADD_DATA);
        const response = yield axios.post("/films", data);
        if(response.status === 200)
            yield put({
                type: SET_ONE,
                payload: response.data
            })
    }
}

function* addMultipleDataSaga(){
    while (true) {
        const {data} = yield take(ADD_MULTIPLE_DATA);
        const response = yield axios.post("/films/upload", data, { 
            headers: {'Accept': 'application/json'} 
        });
        if(response.status === 200)
            yield put({
                type: SET_MANY,
                payload: response.data
            })
    }
}

function* fetchDataSaga() {
    while (true) {
        yield take(FETCH_DATA);
        const response = yield axios.get(`/films`);
        yield put({
            type: SET_ALL,
            payload: response.data
        });
    }
}

function* deleteDataSaga() {
    while (true) {
        const {id} = yield take(DELETE_DATA);
        const response = yield axios.delete(`/films/${id}`);
        if(response.status === 200)
            yield put({
                type: DELETE_ONE,
                payload: id
            })
    }
}

function* searchDataSaga() {
    while (true) {
        const {search} = yield take(SEARCH_DATA);
        const response = yield axios.get(`/films/search/${search}`);
        yield put({
            type: SET_ALL,
            payload: response.data
        })
    }
}

function* rootSaga() {
    yield all([fetchDataSaga(), deleteDataSaga(), addDataSaga(), addMultipleDataSaga(), searchDataSaga()]);
}

const initialState = {
    films: []
};

function fetchReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case SET_ALL:
        return {
            ...state,
            films: payload
      };
    case SET_ONE:
        return {
            ...state,
            films: [...state.films, payload]
        };
    case SET_MANY:
        return {
            ...state,
            films: [...state.films, ...payload]
        };
    case DELETE_ONE:
        return {
            ...state,
            films: state.films.filter(el => el._id !== payload)
        }
    default:
      return state;
  }
}

const saga = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(fetchReducer, composeEnhancers(applyMiddleware(saga)));

saga.run(rootSaga);

export default store;