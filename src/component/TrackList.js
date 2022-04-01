import React, { useState } from "react";

const TrackList = ({source, title, artist, album, index}) => {
    const [active, setActive] = useState(null)
    return (
        <div className= "track-item" key= {index} >
            <div className="album">
                <div className="album-image">
                    <img src={source} />
                </div>
                <div className="album-info">
                    <h2>{title}</h2>
                    <h3>{artist} - {album}</h3>
                    <button type="submit" onClick={() => setActive(!active)}>{ active ? 'Deselect' : 'Select'}</button>
                </div>
            </div>
        </div>
    )
}

export default TrackList