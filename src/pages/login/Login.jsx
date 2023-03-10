
import { useNavigate} from "react-router-dom";

export default function Login() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  
    const Change = () =>{ 
      let path = `/signup`; 
      navigate(path);

  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">G-CHAT</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on G-CHAT.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton" onClick={routeChange}>Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" onClick={Change}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
