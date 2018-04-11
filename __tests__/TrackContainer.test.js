import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import TrackContainer from '../src/components/TrackContainer';
import tracksTagore from './tracksTagore.json';
import tracksConfraria from './tracksConfraria.json';

describe('rendering TrackContainer', () => {
    let wrapper = shallow(
        <TrackContainer 
            loading={true}
            loadingText="Carregando Músicas..."
            tryAgain={false}
            artistID="6jesZl7rJFJZ8d5i9pX5q8"
        />
    );
    it('shouls render Loading correctly', () => {
        wrapper.setState({ tracks: [] });
        expect(wrapper).toMatchSnapshot();
    }),

    it('shouls render Tagore correctly', () => {
        wrapper.setState({ loading: false });
        wrapper.setState({ tracks: tracksTagore });
        expect(wrapper).toMatchSnapshot();
    }),

    it('shouls render Confraria correctly', () => {
        wrapper.setState({ loading: false });
        wrapper.setState({ tracks: tracksConfraria });
        wrapper.setState({ artistID: "5slvIMrXIIfl1kNYszWP5G" });
        expect(wrapper).toMatchSnapshot();
    })
    
});

