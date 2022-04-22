import CreatePlaylist from './pages/CreatePlaylist';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/index';
import {
    BrowserRouter as Router
  } from 'react-router-dom';

describe ('App', () => {
    test('should render createplaylist', async () => {
        render(<Router><Provider store={store}> <CreatePlaylist> </CreatePlaylist> </Provider> </Router>  );
    
        expect(await screen.getAllByText('Create Playlist')).toHaveLength(2);

        screen.debug()
    })
})
