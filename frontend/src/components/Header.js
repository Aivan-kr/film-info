import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {searchData, fetchData} from './../store';

export const Header = connect(null, {searchData, fetchData})(props => {
    const [search, setSearch] = useState("");
    const {searchData, fetchData} = props;
    const history = useHistory();

    useEffect(() => {
        if(search){
            searchData(search);
        }else{
            fetchData();
        }

    }, [search, searchData, fetchData])

    return(
        <header className="bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-light">
                    <Link to="/" className="navbar-brand" onClick={() => fetchData()}><h1>Film Info</h1></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto align-items-center">
                            <li className="input-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Search" 
                                    value={search}
                                    onChange={(e) => {
                                        if (history.location.pathname !== '/') 
                                            history.push('/')
                                        setSearch(e.target.value)}} />
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link text-nowrap">Add new</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
})