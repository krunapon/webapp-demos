import { useState } from "react";

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(''); 

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    function handleReset() {
        setFirstName('');  
        setLastName('');
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>Hi, {firstName} {lastName}</h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    )
}