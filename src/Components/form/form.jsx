import React from "react";

import './form.css';

const Form = () => {
    return (
        <div className='form'>
            <form method="GET">
                <label>
                    
                    <input type="text" name="name" placeholder="User" />
                    Date:
                    <input type="date" placeholder="User"/><br/>
                    Title:
                    <input type="text" name="title" />
                    SRC:
                    <input type="text" c="src" />
                    Program:
                    <input type="text" name="prog" /><br/>
                    Sistem:
                    <select name="sistem">
                        <option  value="mowgly">Mowgly</option>
                        <option value="zz">ZZ</option>
                        <option value="fleetwood">Fleetwood</option>
                        <option value="denali">Denali</option>
                        <option value="tuleta">Tuleta</option>
                        <option value="mihawk">mihawk</option>
                        <option value="solution">solution</option>
                    </select>
                    SO:
                    <select name="so">
                        <option>none</option>
                        <option value="linux">Linux</option>
                        <option value="ide">IDE</option>
                        <option value="aix">AIX</option>
                    </select><br/>
                    Text:
                    <input type="text" name="body"/><br/>
                    <input type="submit" value="Submit" />
                </label>           
            </form>
        </div>
    );

}

            
export default Form;