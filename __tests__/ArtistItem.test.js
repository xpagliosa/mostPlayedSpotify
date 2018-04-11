import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import ArtistItem from '../src/components/SearchContainer/TrackList/ArtistItem';
import searchConfraria from './searchConfraria.json';

describe('rendering ArtistItem', () => {
    let wrapper = shallow(
        <TrackItem
            artist={searchConfraria.items[0]}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

