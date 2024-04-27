import { connect } from 'react-redux'
import { AddToCart , RemoveToCart} from './Redux/Cart/CartActions'

const ProductContainer = (props) =>{
    return(
        <div>
            <h2 className='btn'>No Of Product - {props.numOfProducts}</h2>
            <button className='btn' onClick={props.AddToCart}>Add To Cart</button>
            <button className='btn' onClick={props.RemoveToCart}>Remove To Cart</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfProducts: state.numOfProducts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        AddToCart : ()=> dispatch(AddToCart()),
        RemoveToCart : ()=> dispatch(RemoveToCart())
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(ProductContainer)