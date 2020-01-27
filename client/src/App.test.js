import React from 'react';
import * as rtl from '@testing-library/react'
import NavBar from './components/NavBar'
import Players from './components/Players'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('App rendering with no crash',()=>{
  const wrapper =  rtl.render(<App/>);
  expect(wrapper).toBeVisible
});

test('Nav is loading with no crash', ()=>{
  const wrapper =  rtl.render(<NavBar/>)
  const navElement = wrapper.getByText(/toggle/i)
  expect(navElement).toBeInTheDocument()
 });

 test('Players are loading with no crash', ()=>{
  const wrapper =  rtl.render(<Players/>)
  const element = wrapper.getByText(/country/i)
  expect(element).toBeInTheDocument()
 });