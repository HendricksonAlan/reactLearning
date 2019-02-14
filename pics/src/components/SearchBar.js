import React from 'react';
import App from './App';

class SearchBar extends React.Component{
    state = {term: ''};

    render (){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <input type='text' value={this.state.term} onChange={e => this.setState({term: e.target.value})} />
                        <label> Search Bar </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar; 