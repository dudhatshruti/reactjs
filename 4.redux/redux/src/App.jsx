// import React from 'react'
// import { Store } from './Redux/store'
// // import { Provider } from 'react-redux'
// import {reducer} from './Example_redux/Index'
// import { configureStore } from '@reduxjs/toolkit';
import FormikForm from './FormikForm'

// const store = configureStore({
//   reducer
// })
// console.log(store.getState());

// store.dispatch({
//     type : 'ADD_TODOS',
//     text : 'Use_redux'
// })
// console.log(store.getState());

import React from 'react'

const App = () => {
  return (
    <div>
      <FormikForm/>
    </div>
  )
}

export default App