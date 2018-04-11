import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../src/components/Loading';

describe('Snapshot Loading', () => {
    let wrapper = shallow(
        <Loading 
            loadingText="Conectando Spotify..."
            tryAgain={false}
        />
    );
    it('shouls render Loading correctly', () => {
        expect(wrapper).toMatchSnapshot();
    }),
    it('shouls render tryAgain correctly', () => {
        wrapper.setProps({ tryAgain: true });
        expect(wrapper).toMatchSnapshot();
    })
});

// describe('rendering Loading', () => {
//     let wrapper
//     beforeEach(() => {
//         wrapper = shallow(
//             <Loading 
//                 loadingText="Conectando Spotify..."
//                 tryAgain={false}
//             />
//         );
//     })
//     describe('<View />', () => {
//         it('should reander a <View />', () => {
//             expect(wrapper.find('View')).toHaveLength(1)
//         })
//     })
//     describe('<ActivityIndicator />', () => {
//         it('should render a <ActivityIndicator />', () => {
//             expect(wrapper.find('ActivityIndicator')).toHaveLength(1)
//         })
//     })
    
//     describe('<Text />', () => {
//         it('should render a Loading Text', () => {
//             expect(wrapper.find('Text').contains('Conectando Spotify...')).toBe(true)
//         })
//     })

//     describe('NO tryAgain Button', () => {
//         it('should render a <TouchableOpacity />', () => {
//             expect(wrapper.find('TouchableOpacity')).toHaveLength(0)
//         })
//     })
    
//     describe('YES tryAgain Button', () => {
//         beforeEach(() => {
//             wrapper = shallow(
//                 <Loading 
//                     loadingText="Conectando Spotify..."
//                     tryAgain={true}
//                 />
//             );
//         })

//         it('should render a <TouchableOpacity />', () => {
//             expect(wrapper.find('TouchableOpacity')).toHaveLength(1)
//         })
//         it('should render a Label', () => {
//             expect(wrapper.find('Text').contains('Tentar Novamente')).toBe(true)
//         })
//     })
    
// });