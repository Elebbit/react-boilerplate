import App from '../src/components/App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
    const wrapper = shallow(<App/>)

    expect(wrapper.find('h1').text()).toBe('Welcome to Taek2\'s Starter App');
    expect(wrapper).toMatchSnapshot;
});