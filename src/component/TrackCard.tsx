import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { trackAction } from '../store/tracks-slice';
import { Item } from '../type/TrackType';

import './TrackCard.css';

interface trackProps {
  track: Item;
}

const TrackCard: FC<trackProps> = ({ track }) => {
  const { album, name, artists, uri } = track;
  const selectedTracks = useAppSelector((state) => state.tracks.selectedTracks);
  const dispatch = useAppDispatch();

  const handleSelect = () => {
    const selected = selectedTracks?.find((turi) => turi === uri);
    let newSelected;
    if (!selected) {
      newSelected = [...selectedTracks, uri];
    } else {
      newSelected = selectedTracks?.filter((turi) => turi !== uri);
    }
    dispatch(trackAction.setSelectedTracks(newSelected));
  };

  const isSelected = selectedTracks?.find((turi) => turi === uri);

  return (
    <div className="trackcard">
      <div className="trackcard_header">
        <img src={album.images[0].url} alt={name} />
      </div>
      <div className="trackcard_body">
        <h2>{name}</h2>
        <h4>
          {artists[0].name} - {album.name}
        </h4>
      </div>
      <div className="trackcard_footer">
        <button type="button" className="trackcard_btn" onClick={handleSelect}>
          {isSelected ? 'Deselect' : 'Select'}
        </button>
      </div>
    </div>
  );
};

export default TrackCard;
