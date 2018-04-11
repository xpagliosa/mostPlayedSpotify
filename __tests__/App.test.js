import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import App from '../src';

describe('Snapshots App Component', () => {
  let wrapper = shallow(
    <App 
      loading={true}
      loadingText="Carregando Spotify..."
      tryAgain={true}
      artistID="6jesZl7rJFJZ8d5i9pX5q8"
    />
  );
  it('should renders Loading e TryAgain correctly', () => {
    expect(wrapper).toMatchSnapshot();
  }),

  it('shouls render Loading correctly', () => {
    wrapper.setState({ tryAgain: false });
    expect(wrapper).toMatchSnapshot();
  }),

  it('shouls render ID Tagore correctly', () => {
    wrapper.setState({ loading: false });
    expect(wrapper).toMatchSnapshot();
  }),
    
  it('shouls render ID Confraria correctly', () => {
    wrapper.setState({ artistID: "5slvIMrXIIfl1kNYszWP5G" });
    expect(wrapper).toMatchSnapshot();
  });
})
