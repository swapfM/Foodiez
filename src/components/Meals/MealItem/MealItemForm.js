import { useRef, useState } from 'react';

import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'


const MealItemForm = ()=>{

    const [amountIsValid, setamountIsValid] = useState(true);

    const amountInputRef = useRef();
    const submitHandler = (props,event) => {

        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +(enteredAmount)

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5)
        {setamountIsValid(false);
        return
        }

        props.onAddToCart(enteredAmountNumber);

    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input  ref={amountInputRef} label="Amount" input={{id:'amount', type:'number', min:'0', max:'5',step:'1',defaultValue:'0'}}/>
            <button>Add To Cart</button>
            {!amountIsValid && <p>Please Enter a valid Amount(1-5).</p>}
        </form>
    )
};

export default MealItemForm;