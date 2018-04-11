import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import ArtistContainer from '../src/components/ArtistContainer';
import tagore from './tagore.json';
import confraria from './confraria.json';

describe('rendering ArtistContainer', () => {
    let wrapper = shallow(
        <ArtistContainer 
            loading={true}
            loadingText="Carregando Artista..."
            tryAgain={false}
            artistID="6jesZl7rJFJZ8d5i9pX5q8"
        />
    );
    it('shouls render Loading correctly', () => {
        wrapper.setState({ artist: [] });
        expect(wrapper).toMatchSnapshot();
    }),

    it('shouls render Tagore correctly', () => {
        wrapper.setState({ loading: false });
        wrapper.setState({ artist: tagore });
        expect(wrapper).toMatchSnapshot();
    }),

    it('shouls render Confraria correctly', () => {
        wrapper.setState({ loading: false });
        wrapper.setState({ artist: confraria });
        wrapper.setState({ artistID: "5slvIMrXIIfl1kNYszWP5G" });
        expect(wrapper).toMatchSnapshot();
    })
});

