import React, {useReducer}from 'react';
import checkInput from "./validate"
/* import account from './account'; */


function removeErrorMessages(arr, container) {
    Array.from(arr).forEach((el) => {
        container.removeChild(el)

    });
}
function validateInputs(state) {

    const { fullName, email, tel, title, message } = state
    const divElement = document.querySelector(".error")
    // eslint-disable-next-line no-console
    console.log(divElement)
    const pElements = divElement.children
    const namePattern = /^[a-zA-Z]{2}/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    removeErrorMessages(pElements, divElement)
    // eslint-disable-next-line no-unused-vars
    let inputName;
    const isfullNameValid = checkInput(fullName, namePattern, inputName = "fullName")
    const isEmailValid = checkInput(email, emailPattern, inputName = "email")

    const isTelValid = checkInput(tel, namePattern, inputName = "tel")
    // eslint-disable-next-line no-unused-vars
    const isTitleValid = checkInput(title, namePattern, inputName = "title")
    // eslint-disable-next-line no-unused-vars
    const isMessageValid = checkInput(message, namePattern, inputName = "message")
    const isFormValid = isfullNameValid && isEmailValid && isTelValid && isTitleValid && isMessageValid

    return isFormValid

}

const sendData = (e, state) => {
    e.preventDefault()
    const isFormValid = validateInputs(state)
    if (isFormValid){
        // eslint-disable-next-line no-console
        console.log("yes")
    }
    
}
function ContactForm() {

    const init = { fullName:'', email:'', tel: '', title: '', message: '' };
    const reducer = (state, {name, value}) => ({ ...state, [name]:value})
    const [state, dispatch] = useReducer(reducer, init);
    const { fullName, email, tel, title, message } = state;

    return <form className = "form"> 
        <h1>Register</h1>
        <div className = "error" />
        <label htmlFor="fullName"> Full Name
            <input 
                name="fullName"
                value={fullName}
                placeholder= "imię i nazwisko" 
                type ='text'
                onChange={e=>dispatch(e.target)} />
        </label>
        <label htmlFor="email"> Email
            <input 
                name="email"
                value={email}
                placeholder= "email" 
                type ='text' 
                onChange={e=>dispatch(e.target)}
                required/>
        </label>
        <label htmlFor="tel"> Telefon
            <input 
                name="tel"
                value={tel}
                placeholder= "telefon" 
                type ="tel"
                onChange={e=>dispatch(e.target)}/>
        </label>
        <label htmlFor="title"> Title
            <input 
                name="title"
                value={title}
                placeholder= "temat" 
                type ='text'
                onChange={e=>dispatch(e.target)} 
                required/>
        </label>
        <label htmlFor="message"> Message
            <input
                name = "message"
                value={message}
                placeholder= "message" 
                type ='text'
                onChange={e=>dispatch(e.target)}
                required />
        </label>
        <input
            type="submit"
            onClick = { e =>  sendData(e, state) } />  
    </form>;
}

export default ContactForm;
