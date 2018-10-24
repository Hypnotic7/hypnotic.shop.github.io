import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
//CSS
import './searchBox.css';


class SearchBox extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (       
                <div className="search-box center">                    
                    <input className="search-txt" type="text" placeholder="Type to search"/>
                    <div>
                        <a className="search-btn pb2" href="#">
                            <FontAwesomeIcon  icon={faSearch}/>              
                        </a>
                    </div>
                   
                </div>
        );
    }
}

export default SearchBox;