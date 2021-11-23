import React from "react";

import './form.css';

const Form = () => {
    return (
        <div className='form'>
            <form method="GET">
                <label>
                    <div>
                        <input type="text" name="name" placeholder="User" /> 
                        <input type="text" name="src" placeholder="SRC" />
                        <input type="text" name="prog" placeholder="Program" /><br/>
                    </div>
                    <div className="form_selectors">
                        <label>Sistem:</label>    
                        <select  name="sistem">
                            <option  value="none">-----</option>
                            <option  value="mowgly">Mowgly</option>
                            <option value="zz">ZZ</option>
                            <option value="fleetwood">Fleetwood</option>
                            <option value="denali">Denali</option>
                            <option value="tuleta">Tuleta</option>
                            <option value="mihawk">mihawk</option>
                            <option value="solution">solution</option>
                        </select>
                        <label>SO:</label>
                        <select  name="so">
                            <option value="none">-----</option>
                            <option value="linux">Linux</option>
                            <option value="ide">IDE</option>
                            <option value="aix">AIX</option>
                        </select><br/>
                    </div>
                    <div>
                        <input type="text" name="title" placeholder="Title" />
                        <textarea id="message" type="text" rows="4" cols="50" placeholder="Your Description"></textarea>
                    </div>
                    <div >
                        <input className="button" type="submit" value="Save" />
                        <input className="button"  type="submit" value="Return" />
                    </div>
                </label>           
            </form>
        </div>
    );

}

            
export default Form;