import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarComponent from '../component/NavbarComponent';
import MyPlaylistCard from '../component/MyPlaylistCard';
import { useAppSelector } from '../store/index';

function MyPlaylist() {
  const playlist = useAppSelector((state) => state.tracks.userPlaylist);
  const user = useAppSelector((state) => state.user.user);
  const playlists = playlist?.items;

  return (
    <div className="pb-3 bg-light">
      <NavbarComponent />
      <div>
        <Container style={{ minHeight: '100vh' }}>
          <h1 className="my-4 text-black">
            {user && `${user.display_name}'s Playlist`}
          </h1>
          <Row xs={1} md={2} lg={4} className="g-3">
          {playlists?.length > 0 ? (
              playlists?.map((pl) => (
                <MyPlaylistCard key-={pl.id} playlist={pl} />
              ))
            ) : (
              <div className="text-black">
                You have no tracks.{' '}
                <Link className="text-decoration-none text-info" to="/create">
                  Create One
                </Link>
              </div>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MyPlaylist;