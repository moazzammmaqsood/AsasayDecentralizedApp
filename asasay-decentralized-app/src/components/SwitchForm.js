import SignupForm from "./SignupForm";
import LoginForm
 from "./LoginFormold";
function Getform(props){
    const login= props.issigned;
  
    if(login){
        console.log('true',login)
        return <LoginForm/>
    }else{
        console.log('false',login)
        return <SignupForm/>
    }
}

export default Getform;