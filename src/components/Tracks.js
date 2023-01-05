import React, { Component } from 'react'

class Tracks extends Component {
    state = {
        isPlaying: false,
        playingPreviewUrl: null,
        audio: null,
    }

    playAudio = (previewUrl) => () => {
        const audio = new Audio(previewUrl)
        if(!this.state.isPlaying) {
            audio.play()
            this.setState({
                isPlaying: true,
                playingPreviewUrl: previewUrl,
                audio: audio
            })
        } else {
            this.state.audio.pause()
            if(this.state.playingPreviewUrl === previewUrl) {
                this.setState({
                    isPlaying: false
                })
            } else {
                audio.play()
                this.setState({
                    audio: audio,
                    playingPreviewUrl: previewUrl
                })
            }
        }
        console.log(audio)
    }
    
    render() {
        const { tracks } = this.props
        return (
        <div className='row m-4'>
            {tracks.length > 0 && tracks.map(track => {
                const { id, name, album, preview_url } = track
                return (
                    <div key={id} className="col-4" onClick={this.playAudio(preview_url)}>
                        <img 
                            src={album?.images[0]?.url} 
                            alt="track-image" 
                            style={{
                                height: 200,
                                width: 200,
                                borderRadius: "50%",
                                objectFit:'cover',
                            }}
                        />
                        <p>{name}</p>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default Tracks