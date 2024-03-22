import React, { createContext } from "react";
import {
  Age_name_photo,
  Checkbox,
  Counter,
  Form,
  Formobject,
  Inputvalue,
  Use_state,
  Use_state2,
} from "./task/hooks/Use_state";

// import Button, { ColorSwitch, LightSwitch, Passing, Toolebar } from './task/hooks/Event_andler'
import { Export } from "./challenges/1.your_first_component/Export";
import Fix_return from "./challenges/1.your_first_component/Fix_return";
import Spot_mistek from "./challenges/1.your_first_component/Spot_mistek";
import Profile from "./challenges/2.passing_props/Example";
import Example from "./challenges/2.passing_props/Example";
import Conditional from "./challenges/3.conditional_rendering/Conditional";
import Use_Effect from "./task/hooks/use_effect/Use_Effect";
import Side_Effect from "./task/hooks/use_effect/Side_Effect";
import Use_Effect_2 from "./task/hooks/use_effect/Use_Effect2";
import Use_Effect_3 from "./task/hooks/use_effect/Use_Effect3";
import State_components from "./components/State_component";
import Child_A from "./task/hooks/use_context/Child_A";
import Use_Reducer from "./task/hooks/Use_Reducer/Use_Reducer";
import Use_Reducer1 from "./task/hooks/Use_Reducer/Use_Reducer1";
import Reducer_multiple from "./task/hooks/Use_Reducer/Reducer_multiple";
import Reducer_Multiple_2 from "./task/hooks/Use_Reducer/Reducer_multiple_2";
import Reducer_Multiple_3 from "./task/hooks/Use_Reducer/Reduce_multiple_3";
import Reducer_Multiple_4 from "./task/hooks/Use_Reducer/Reduce_multiple_4";
import Passing_initstate from "./task/hooks/Use_Reducer/Passing_initstate";
import Use_callback from "./task/hooks/Use_callback/Use_callback";
import UseRef from "./task/hooks/Use_Ref/UseRef";
import Click_counter from "./task/hooks/Use_Ref/Click_counter";
import Stop_watch from "./task/hooks/Use_Ref/Stop_watch";
// import Component_A from './task/hooks/use_context/Component_A'/

{
  /* use context in props_drills */
}

{
  /* createContext() Provider , useContext()  */
}

export const Object1 = createContext();
export const Object2 = createContext();
export const Object3 = createContext();
export const Object4 = createContext();

// export const Usercontext = React.createContext();
const App = () => {
  const name = "skillQode";
  const place = "City Center, Yogichowk";
  const item = {
    name: "iphone",
    price: "600$",
    color: "pink",
  };

 

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
      {/*     
      <Usercontext.Provider value={"react"}>
        <Component_A/>
      </Usercontext.Provider> */}

      <div>
        <Object1.Provider value={name}>
          <Object2.Provider value={place}>
            <Object3.Provider value={item}>
              {/* <Object4.Provider value={products}> */}
                {/* <Child_A /> */}
              {/* </Object4.Provider> */}
            </Object3.Provider>
          </Object2.Provider>
        </Object1.Provider>
      </div>

    {/*----------- use_Reducer------------  */}
      {/* <Use_Reducer/> */}
      {/* <Use_Reducer1/> */}
      {/* <Reducer_multiple/> */}
      {/* <Reducer_Multiple_2/> */}
      {/* <Reducer_Multiple_3/> */}
      {/* <Reducer_Multiple_4/> */}
      {/* <Passing_initstate/> */}

    {/*-------------Use_callback-----------*/}

      {/* <Use_callback/> */}

    {/*-------------Use_Ref----------------*/}

    {/* <UseRef/> */}
    {/* <Click_counter/> */}
    <Stop_watch/>
    </>
  );
};
// export { Object1, Object2, Object3};
export default App;
