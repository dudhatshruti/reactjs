import React from 'react'
import  {  Age_name_photo, Checkbox, Counter, Form, Formobject, Inputvalue, Use_state, Use_state2 } from './task/hooks/Use_state'

// import Button, { ColorSwitch, LightSwitch, Passing, Toolebar } from './task/hooks/Event_andler'
import Use_Effect from './task/hooks/Use_Effect'
import { Export } from './challenges/1.your_first_component/Export'
import Fix_return from './challenges/1.your_first_component/Fix_return'
import Spot_mistek from './challenges/1.your_first_component/Spot_mistek'
import Profile from './challenges/2.passing_props/Example'
import Example from './challenges/2.passing_props/Example'
import Conditional from './challenges/3.conditional_rendering/Conditional'

const App = () => {
  return (
    <>
    {/* --------- use state ----------- */}
    {/* <Use_state/>
    <Use_state2/>
    <Age_name_photo/> */}
    {/* <Inputvalue/>
    <Counter/>
    <Checkbox/>
    <Form/>
    <Formobject/> */}

    {/* Handle event */}

    {/* <Button/>
    <Passing/>
    <Toolebar/>
    <LightSwitch/>
    <ColorSwitch/> */}
    {/* <Use_Effect/> */}


    {/* ---------- challenges ------------- */}
      {/* 1. your first component */}
      {/* <Export/>
      <Fix_return/>
      <Spot_mistek/> */}

      {/* 2.passing props */}
        {/* <Example/> */}

        {/* 3. conditional rendering */}
        <Conditional/>
    </>
  )
}

export default App