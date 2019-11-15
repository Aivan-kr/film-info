import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {addData, addMultipleData, setMessage} from './../../store';
import {Form} from './Form';
import {FileUpload} from './FileUpload';

const mapStateToProps = state => ({
    films: state.films
})

export const NewFilm = connect(mapStateToProps, {addData, addMultipleData, setMessage})(props => {
    const [redirect, setRedirect] = useState(false);
    const {addData, addMultipleData, setMessage, films} = props;
    const [length] = useState(films.length);
    const submitHandler = data => {
        const findDuplicates = arr => arr.filter((el, i) => arr.indexOf(el) !== i);
        const duplicates = findDuplicates(data.stars.split(','));

        if(duplicates.length > 0){
            setMessage(`Can't add repeating actors: ${duplicates}`)
        }else{
            addData(data);
        }
    };
    useEffect(() => {
        if(films.length !== length){
            setRedirect(true)
        }
    }, [films, length])

    return(
        <div>
            <h2>Add new film info to collection</h2>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a 
                        className="nav-link active" 
                        id="manual-tab" 
                        data-toggle="tab" 
                        href="#manual" 
                        role="tab" 
                        aria-controls="manual" 
                        aria-selected="true">
                        Manual
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className="nav-link" 
                        id="file-tab" 
                        data-toggle="tab" 
                        href="#file" 
                        role="tab" 
                        aria-controls="file" 
                        aria-selected="false">
                        From file
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div 
                    className="tab-pane fade show active" 
                    id="manual" 
                    role="tabpanel" 
                    aria-labelledby="manual-tab">
                    <Form submit={submitHandler} />
                </div>
                <div 
                    className="tab-pane fade" 
                    id="file" 
                    role="tabpanel" 
                    aria-labelledby="file-tab">
                    <FileUpload submit={addMultipleData} />
                </div>
            </div>
            {redirect ? <Redirect to="/" /> : null}
        </div>
    )
})