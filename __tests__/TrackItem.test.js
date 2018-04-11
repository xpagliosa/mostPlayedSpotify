import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import TrackItem from '../src/components/TrackContainer/TrackList/TrackItem';
import tracksTagore from './tracksTagore.json';
import tracksConfraria from './tracksConfraria.json';

describe('rendering TrackItem', () => {
    let wrapper = shallow(
        <TrackItem
            key={tracksTagore[0].id} 
            data={tracksTagore[0]}
        />
    );
    it('shouls render Tagore Most Played Track correctly', () => {
        expect(wrapper).toMatchSnapshot();
    }),

    it('shouls render Confraria Most Played Track correctly', () => {
        wrapper.setProps({ key: tracksConfraria[0].id });
        wrapper.setProps({ data: tracksConfraria[0] });
        expect(wrapper).toMatchSnapshot();
    })
});

