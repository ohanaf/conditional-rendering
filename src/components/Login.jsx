import React from "react";
import Input from "./Input";
import inputsInfo from "../InputInfo";

function Login(){
    return(
        <form className="form">
            <Input inputInfo={inputsInfo}/>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
