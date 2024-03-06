import React,{useContext} from 'react'
import Component_A from '../../../components/Component_A'

const Use_context = ({name}) => {
  return (
    <>
    <h1>this is use_context{name}</h1>
    <Component_A/>
    </>
  )
}

export default Use_context