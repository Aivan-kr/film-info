import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {deleteData} from './../store';

const mapStateToProps = state => ({
    films: state.films
})

export const FilmList = connect(mapStateToProps, {deleteData})(props => {
    const {deleteData, films} = props;
    const [filmList, setFilmList] = useState([]);

    useEffect(() => {
        if(films.length === 0){
            const emptyList = <li className="list-group-item">Nothng found</li>
            setFilmList(emptyList)
        }else{
            let list = [...films].sort((a, b) => a.title.localeCompare(b.title));
            setFilmList(list.map(el => 
                <li key={el._id} className="list-group-item">
                    <Film id={el._id} title={el.title} />
                </li>));
        }
    }, [films]);

    const Film = props => (
        <div className="row d-flex align-items-center">
            <Link to={`/film/${props.id}`} className="col-9">{props.title}</Link>
            <button className="col-3 btn btn-danger" onClick={() => deleteData(props.id)}>Delete</button>
        </div>
    )

    return(
        <div>
            <h2>Films List</h2>
            <ul className="list-group">
                {filmList}
            </ul>
        </div>
    )
})