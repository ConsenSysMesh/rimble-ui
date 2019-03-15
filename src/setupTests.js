import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

// Define globals to cut down on imports in test files
global.React = React;
global.renderer = renderer;
global.shallow = shallow;
global.render = render;
global.mount = mount;
