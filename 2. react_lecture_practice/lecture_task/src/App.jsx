import React from 'react'
import  {  Age_name_photo, Checkbox, Counter, Form, Formobject, Inputvalue, Use_state, Use_state2 } from './task/hooks/Use_state'
import { Task1 } from './challenges/your_first_component/Task1'
import Task2 from './challenges/your_first_component/Task2'
import Task3 from './challenges/your_first_component/Task3'

const App = () => {
  return (
    <>
    {/* --------- use state ----------- */}
    {/* <Use_state/>
    <Use_state2/>
    <Age_name_photo/> */}
    <Inputvalue/>
    <Counter/>
    <Checkbox/>
    <Form/>
    <Formobject/>

    {/* ---------- challenges ------------- */}

    {/* <Task1/>
    <Task2/>
    <Task3/> */}
    </>
  )
}

export default App