import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'

test('renders a snapshot', () =>{
  //this variable is usually called "tree"
  //saving it to JSON makes it easier to save and compare to other snapshots
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
