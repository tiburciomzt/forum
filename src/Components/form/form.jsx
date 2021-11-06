import React from "react";

import './form.css';

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>
                user:
                <input type="text" name="name" />
                SRC:
                <input type="text" src="src" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );

}

            
export default Form;