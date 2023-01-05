import React, { Component } from "react";
import Artist from "./Artist";
import Search from "./Search";
import Tracks from "./Tracks";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com"

class App extends Component {
    state = {
        artist: null,
        tracks: []
    }

    searchArtist = (artistName) => {
        
        fetch(`${API_ADDRESS}/artist/${artistName}`)
            .then(response => response.json())
            .then(json => {
                if(json.artists.total > 0 ) {
                    const artist = json.artists.items[0]
                    
                    fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                        .then(responce => responce.json())
                        .then(json => {
                            this.setState({
                                artist: artist,
                                tracks: json.tracks
                            })
                        })
                        .catch(error => alert(error.message))

                }
            })
            .catch(error => alert(error.message))

    }
    
    render() {
        console.log("this.state", this.state)
        return (
            <div>
                <h2>Music Master</h2>
                <Search searchArtist={this.searchArtist}/>
                <Artist artist={this.state.artist} />
                <Tracks tracks={this.state.tracks} />
            </div>
        )
    }
}

export default App