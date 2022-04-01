import React from 'react'
import TrackList from './TrackList';

import './Track.css';

const Track = ( { data } ) => {
  return (
          <div className="Track">
            <h1 className="title">Song Playlist</h1>
            <div className="playlist">
              {data.map((track, index) => (
                <TrackList
                  key={index}
                  source={track.album.images[0].url}
                  title={track.name}
                  artist={track.artists[0].name}
                  album={track.album.name} 
                />
              ))}
            </div>
          </div>
        );
}

export default Track