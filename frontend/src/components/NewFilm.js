import React from 'react';
import {connect} from 'react-redux';
import useForm from 'react-hook-form';
import {addData} from './../store';

export const NewFilm = connect(null, {addData})(props => {
    const {handleSubmit, register, errors} = useForm();
    const {addData} = props;
    const onSubmit = (data) => addData(data);
 
    return(
        <div>
            <h2>Add new film info to collection</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Title:</label>
                    <input 
                        name="title" 
                        ref={register({required: true})} 
                        className="form-control" 
                        />
                    {errors.title && <span className="text-danger">Title is required</span>}
                </div>
                <div className="form-group">
                    <label>Release year:</label>
                    <input 
                        name="year" 
                        ref={register({pattern: /^[0-9]+$/i})} 
                        className="form-control"
                        />
                    {errors.year && <span className="text-danger">Only digits allowed</span>}
                </div>
                <div className="form-group">
                    <label>Format:</label>
                    <input 
                        name="format" 
                        ref={register} 
                        className="form-control"
                        />
                </div>
                <div className="form-group">
                    <label>Stars:</label>
                    <input 
                        name="stars" 
                        ref={register} 
                        className="form-control"
                        />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
})