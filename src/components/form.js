import React from "react";

function Form() {

    //Handle onchange
    // const handleChange = (event) => {
    //   event.preventDefault();
    //   console.log("Value :", event.target.value);
    // }

    //Handle SUbmit
    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, tel } = event.target.elements;
        alert(`Hello ${name.value}! Your email is ${email.value} and your tel is ${tel.value}`)
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name" name="name" />
                <input type="text" placeholder="Enter your email" name="email" />
                <input type="tel" placeholder="Enter your phone" name="tel" />
                <button type="submit" className="action-btn">
                    Submit
                </button>
            </form>
        </div>

    )
}

export default Form;
