import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import SearchContainer from '../src/components/SearchContainer';
import searchConfraria from './searchConfraria.json';

describe('rendering SearchContainer', () => {
    let wrapper = shallow(
        <SearchContainer />
    );
    it('shouls render Footer Input Search correctly', () => {
        expect(wrapper).toMatchSnapshot();
    }),

    it('shouls render SearchBox Loading correctly', () => {
        wrapper.setState({ searchText: "confraria" });
        wrapper.setState({ showSearch: true });
        wrapper.setState({ searchLoading: true });
        expect(wrapper).toMatchSnapshot();
    }),

    it('shouls render Search Confraria correctly', () => {
        wrapper.setState({ searchText: "confraria" });
        wrapper.setState({ showSearch: true });
        wrapper.setState({ searchLoading: false });
        wrapper.setState({ search: searchConfraria });
        expect(wrapper).toMatchSnapshot();
    })
    
});

