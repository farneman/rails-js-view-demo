import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = (props) => (
  <div>
    <h2>Redux Todos Example</h2>
    {Boolean(props.subtitle) &&
      <h3>{props.subtitle}</h3>}
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
