import {Signup} from "ui";


export default function login(){
    return <Signup 
    info="Log In "
        onClick={(username , password)=>{
            alert(username)
            alert(password);
        }}
    />
}