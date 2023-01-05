import React, { Component } from 'react'
import PAUSE_ICON from '../assets/pause-icon.svg'
import PLAY_ICON from '../assets/play-icon.svg'

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
    
    trackIcon = (track) => {
        if(!track.preview_url) return <span>N/A</span>

        if(this.state.isPlaying && this.state.playingPreviewUrl === track.preview_url) {
            return <img src={PAUSE_ICON} alt='pause'/>
        } else {
            return <img src={PLAY_ICON} alt='play'/>
        }
    }

    render() {
        const { tracks } = this.props
        return (
        <div>
            {tracks.length > 0 && tracks.map(track => {
                const { id, name, album, preview_url } = track
                return (
                    <div 
                        key={id} 
                        onClick={this.playAudio(preview_url)}
                        className = "track"
                    >
                        <img 
                            src={album?.images[0]?.url} 
                            alt="track-image" 
                            className='track-image'
                        />
                        <p className='track-text'>{name}</p>
                        <p className='track-icon'>{this.trackIcon(track)}</p>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default Tracks