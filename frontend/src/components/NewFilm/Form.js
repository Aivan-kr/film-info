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
                    name="year" 
                    ref={register({required: true, pattern: /^[0-9]+$/i})} 
                    className="form-control"
                    />
                {errors.year && errors.year.type === 'pattern' && <span className="text-danger">Only digits allowed input</span>}
                {errors.year && errors.year.type === 'required' && <span className="text-danger">Release year is required input</span>}
            </div>
            <div className="form-group">
                <label>Format:</label>
                <input 
                    name="format" 
                    ref={register({required: true})} 
                    className="form-control"
                    />
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