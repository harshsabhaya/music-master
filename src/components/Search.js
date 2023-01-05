import React, { Component } from 'react';

class Search extends Component {
    state = {
        artistName: ""
    }

    handleArtistName = event => {
        this.setState({
          artistName : event.target.value
        })
    }

    keyPresshandler = event => {
        event.key === "Enter" ? this.searchArtist() : null;
    }

    searchArtist = () => {
        this.props.searchArtist(this.state.artistName)
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    placeholder="Search for an Artist"
                    onChange={this.handleArtistName}
                    onKeyDown={this.keyPresshandler}
                />
                <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}

export default Search