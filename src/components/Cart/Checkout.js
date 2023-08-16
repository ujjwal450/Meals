import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === ''
const isFiveChars = value => value.trim().length === 6
const Checkout = (props) => {
    const [formInputValidity, setFromInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })
    const nameUserInput = useRef()
    const streetUserInput = useRef()
    const postalUserInput = useRef()
    const cityUserInput = useRef()
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameUserInput.current.value
    const enteredStreet = streetUserInput.current.value
    const enteredPostal = postalUserInput.current.value
    const enteredCity = cityUserInput.current.value
    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredPostalIsValid = isFiveChars(enteredPostal)
    const enteredCityIsValid = !isEmpty(enteredCity)
    setFromInputValidity({
        name:enteredNameIsValid,
        street: enteredStreetIsValid,
        city: enteredCityIsValid,
        postalCode: enteredPostalIsValid
    })
    const formIsValid = enteredNameIsValid && enteredStreetIsValid&&enteredCityIsValid&&enteredPostalIsValid

    if(!formIsValid){
        return
    }
    props.onSubmit({
        name:enteredName,
        street: enteredStreet,
        postalCode: enteredPostal,
        city: enteredCity
    })
  };
  const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`
  const streetControlClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`
  const postalControlClasses = `${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`
  const cityControlClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameUserInput}/>
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetUserInput} />
        {!formInputValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalUserInput} />
        {!formInputValidity.postalCode && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityUserInput}/>
        {!formInputValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;