import React from 'react'
import  {  Age_name_photo, Checkbox, Counter, Form, Formobject, Inputvalue, Use_state, Use_state2 } from './task/hooks/Use_state'

// import Button, { ColorSwitch, LightSwitch, Passing, Toolebar } from './task/hooks/Event_andler'
import { Export } from './challenges/1.your_first_component/Export'
import Fix_return from './challenges/1.your_first_component/Fix_return'
import Spot_mistek from './challenges/1.your_first_component/Spot_mistek'
import Profile from './challenges/2.passing_props/Example'
import Example from './challenges/2.passing_props/Example'
import Conditional from './challenges/3.conditional_rendering/Conditional'
import Use_Effect from './task/hooks/use_effect/Use_Effect'
import Side_Effect from './task/hooks/use_effect/Side_Effect'
import Use_Effect_2 from './task/hooks/use_effect/Use_Effect2'
import Use_Effect_3 from './task/hooks/use_effect/Use_Effect3'
import State_components from './components/State_component'
import Use_context from './task/hooks/use_context/Use_context'

const App = ({name}) => {
  return (
    <>
    {/* --------- use state ----------- */}
    {/* <Use_state/> */}
    {/* <Use_state2/> */}
    {/* <Age_name_photo/> */}
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


    {/* ---------- challenges ------------- */}
      {/* 1. your first component */}
      {/* <Export/>
      <Fix_return/>
      <Spot_mistek/> */}

      {/* 2.passing props */}
        {/* <Example/> */}

      {/* 3. conditional rendering */}
        {/* <Conditional/> */}
    {/*--------------------------------------  */}


    {/* ------------- HOOKS--------------------- */}
    {/* <Use_Effect/> */}
    {/* <Side_Effect name="react"/> */}
    {/* <Use_Effect_2 message="react"/> */}
    {/* <Use_Effect_3 message="hello"/> */}

    {/* <State_components/> */}

    {/* --------------Use_context -------------- */}
    <Use_context name="shruti"/>
    {name}

    </>
  )
}

export default App