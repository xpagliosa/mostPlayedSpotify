import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import TrackList from '../src/components/TrackContainer/TrackList';
import tracksTagore from './tracksTagore.json';
import tracksConfraria from './tracksConfraria.json';

describe('rendering TrackList', () => {
    let wrapper = shallow(
        <TrackList
            tracks={[]}
        />
    );
    it('shouls render Empty correctly', () => {
        expect(wrapper).toMatchSnapshot();
    }),

    it('shouls render Tagore correctly', () => {
        wrapper.setProps({ tracks: tracksTagore });
        expect(wrapper).toMatchSnapshot();
    }),

    it('shouls render Confraria correctly', () => {
        wrapper.setProps({ tracks: tracksConfraria });
        expect(wrapper).toMatchSnapshot();
    })
    
});

