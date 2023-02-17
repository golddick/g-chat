import "./register.css";
import { useNavigate} from "react-router-dom";

export default function Register() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/login`; 
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
          <input placeholder="First Name" className="loginInput" />
          <input placeholder="Last Name" className="loginInput" />
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Phone Number" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Confirm Password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton" onClick={routeChange}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
