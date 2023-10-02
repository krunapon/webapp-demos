export default function Form() {
    let firstName = '';
    let lastName = '';

    function handleFirstNameChange(event) {
        firstName = event.target.value;
    }

    function handleLastNameChange(event) {
        lastName = event.target.value;
    }

    function handleReset() {
        firstName = '';
        lastName = '';
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