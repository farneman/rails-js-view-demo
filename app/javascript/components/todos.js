import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../src/components/App'
import reducer from '../src/reducers'

const store = createStore(reducer)

const Todos = ({subtitle}) => (
  <Provider store={store}>
    <App subtitle={subtitle} />
  </Provider>
);

export default Todos;
