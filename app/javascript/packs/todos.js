import React from 'react'
import { render } from 'react-dom'
import Todos from '../components/todos'

render(
  <Todos subtitle={"from pack tag"} />,
  document.getElementById('todos_root')
)
