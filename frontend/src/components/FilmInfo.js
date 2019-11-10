import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    films: state.films
})

export const FilmInfo = connect(mapStateToProps)(props => {
    const {films} = props;
    const url = window.location.pathname.split("/");
    const id = url.pop() || url.pop();

    const [filmData, setFilmData] = useState({});

    useEffect(() => {
        if(films)
            setFilmData(films.find(el => el._id === id))
    }, [films, id]);
    
    return(
        <React.Fragment>
            {filmData ?
            <div>
                <h2>Film Info</h2>
                <ul className="jumbotron">
                    <li className="row">
                        <p className="col-sm-4 font-weight-bold">ID:</p>
                        <p className="col-sm-8">{filmData._id}</p>
                    </li>
                    <li className="row">
                        <p className="col-sm-4 font-weight-bold">Title:</p>
                        <p className="col-sm-8">{filmData.title}</p>
                    </li>
                    <li className="row">
                        <p className="col-sm-4 font-weight-bold">Release year:</p>
                        <p className="col-sm-8">{filmData.year}</p>
                    </li>
                    <li className="row">
                        <p className="col-sm-4 font-weight-bold">Format:</p>
                        <p className="col-sm-8">{filmData.format}</p>
                    </li>
                    <li className="row">
                        <p className="col-sm-4 font-weight-bold">Stars:</p>
                        <p className="col-sm-8">{filmData.stars}</p>
                    </li>
                </ul>
            </div>
            :
            null}
        </React.Fragment>
    )
})