import {connect} from 'react-redux'
import { buyCake } from './Redux/Cake/CakeAction'

const CakeContainer = (props) =>{
    return (
        <div>
          <h2 className="link">Number Of Cakes-{props.numOfCakes}</h2>
          <button className="btn" onClick={props.buyCake}>Buy Cake</button>
        </div>
      )
}

const mapStateToProps = state =>{
    return{
         numOfCakes : state.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
         buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer) 
