import React from 'react'
import { Store } from './Redux/Store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <>
    <Provider store={Store}>

    </Provider>
    </>
  )
}

export default App