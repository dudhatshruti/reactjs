import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './Component/Redux/Store.jsx'
import ProductContainer from './Component/ProductContainer'
import HooksCakeContainer from './Component/HooksCakeContainer.jsx'
import NewCakeContainer from './Component/NewCakeContainer.jsx'
import CakeContainer from './Component/CakeContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      {/* <ProductContainer/> */}
      <App/>
      {/* <HooksCakeContainer/>
      <NewCakeContainer/>
      <CakeContainer/> */}
    </Provider>
  </React.StrictMode>,
)
