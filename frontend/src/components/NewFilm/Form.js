import React from 'react';
import useForm from 'react-hook-form';

export const Form = props => {
    const {handleSubmit, register, errors} = useForm();

	return (
        <form onSubmit={handleSubmit(props.submit)}>
            <div className="form-group">
                <label>Title:</label>
                <input 
                    name="title" 
                    ref={register({required: true})} 
                    className="form-control" 
                    />
                {errors.title && <span className="text-danger">Title is required input</span>}
            </div>
            <div className="form-group">
                <label>Release year:</label>
                <input 
                    type="number"
                    name="year" 
                    ref={register({required: true, min: 1850, max: 2020})} 
                    className="form-control"
                    />
                {errors.year && errors.year.type === 'required' 
                    && <span className="text-danger">Release year is required input</span>}
                {errors.year && errors.year.type === 'min' 
                    && <span className="text-danger">Release year can't be earlier 1850</span>}
                {errors.year && errors.year.type === 'max' 
                    && <span className="text-danger">Release year can't be later 2020</span>}
            </div>
            <div className="form-group">
                <label>Format:</label>
                <select name="format" ref={register({required: true})} className="form-control">
                    <option value="VHS">VHS</option>
                    <option value="DVD">DVD</option>
                    <option value="Blu-Ray">Blu-Ray</option>
                </select>
                {errors.format && <span className="text-danger">Format is required input</span>}
            </div>
            <div className="form-group">
                <label>Stars:</label>
                <input 
                    name="stars" 
                    ref={register({required: true})} 
                    className="form-control"
                    />
                {errors.stars && <span className="text-danger">Stars is required input</span>}
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>

	)
}