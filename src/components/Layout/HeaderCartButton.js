import CartIcon from '../Cart/CartIcon'
import { useContext } from 'react'
import CartContext from '../../Store/Cart-context'
import classes from './HeaderCartButton.module.css'
import CartProvider from '../../Store/CartProvider'

const HeaderCartButton = (props)=>{

    const cartCtx = useContext(CartContext)

    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
            <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                5
            </span>
        </button>
    )
}

export default HeaderCartButton;