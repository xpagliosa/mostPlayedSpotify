import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import ArtistList from '../src/components/SearchContainer/ArtistList';
import searchConfraria from './searchConfraria.json';

describe('rendering ArtistList', () => {
    let wrapper = shallow(
        <ArtistList
            artists={searchConfraria}
            loading={true}
        />
    );
    it('shouls render Loading correctly', () => {
        expect(wrapper).toMatchSnapshot();
    }),

    it('shouls render Confraria correctly', () => {
        wrapper.setProps({ loadign: false });
        expect(wrapper).toMatchSnapshot();
    })
});

