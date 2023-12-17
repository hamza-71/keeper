import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Auth() {
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [isSignUp, setIsSignUP] = useState(false);
  const handleAuth = () => {
    setIsSignUP((prevSignUp) => !prevSignUp);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const submitUser = (event) => {
    event.preventDefault();
    if (isSignUp) {
      axios
        .post("http://localhost:8000/auth/register", user)
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            title: "Good job!",
            text: "You have been registered",
            icon: "success"
          });
          setIsSignUP(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:8000/auth/login", user)
        .then((res) => {
          //console.log(res.data)
          Swal.fire({
            title: "Good job!",
            text: "logged In",
            icon: "success"
          });
          localStorage.setItem("user",JSON.stringify(res.data));
          Navigate("/");
        })
        .catch((err) => {
          console.log(err.response?.data.message);
          Swal.fire(err.response.data.message,"please try again","error")
        });
    }
  };
  return (
    <div className="userContainer">
      <form className="userForm">
        <h1 style={{ cursor: "pointer" }} onClick={handleAuth}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={user.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        />
        <button onClick={submitUser}>{isSignUp ? "REGISTER" : "LOGIN"}</button>
      </form>
    </div>
  );
}
export default Auth;
