import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import Artist from '../src/components/ArtistContainer/Artist';
import tagore from './tagore.json';
import confraria from './confraria.json';

describe('Snapshot Artist', () => {
    it('shouls render Tagore correctly', () => {
        let wrapper = shallow(
            <Artist 
                {...tagore}
            />
        );
        expect(wrapper).toMatchSnapshot();
    }),

    it('shouls render Confraria correctly', () => {
        let wrapper = shallow(
            <Artist 
                {...confraria}
            />
        );
        expect(wrapper).toMatchSnapshot();
    })
});