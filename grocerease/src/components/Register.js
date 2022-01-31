import { useState } from "react";
import axios from "axios";
import "../register.css";
import { useNavigate } from "react-router-dom";

export const Register = ({ setAuth, isLoggedIn }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  if (isLoggedIn) {
    navigate("/lists");
  }  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://grocerease.herokuapp.com/auth/users/", {
        username: username,
        password: password,
        email: email
      })
      .then((res) => {
        return axios
          .post("https://grocerease.herokuapp.com/auth/token/login/", {
            username: username,
            password: password,
          })
          .then((data) => {
            console.log(data)
            if (data && data.data.auth_token) {
              setAuth(username, data.data.auth_token);
            }
          });
      });
  };

  const handleChange = (inputType, event) => {
    if (inputType === "username") {
      setUsername(event.target.value);
    }
    if (inputType === "password") {
      setPassword(event.target.value);
    }
    if (inputType === "email") {
      setEmail(event.target.value);
    }
  };

  return (
    <div className="register_container">
      <form onSubmit={handleSubmit}>
        <div className="mt3">
          <label className="db fw4 lh-copy f6 register_label">Username:</label>
          <input
            className="pa2 input-reset ba bg-transparent w-100 measure register_input"
            type="text"
            placeholder="JohnSmith88"
            value={username}
            onChange={(e) => handleChange("username", e)}
          />
        </div>
        <div className="mt3">
          <label className="db fw4 lh-copy f6 register_label">Password:</label>
          <input
            className="pa2 input-reset ba bg-transparent w-100 measure register_input"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => handleChange("password", e)}
          />
        </div>
        <div className="mt3">
          <label className="db fw4 lh-copy f6 register_label">Email:</label>
          <input
            className="pa2 input-reset ba bg-transparent w-100 measure register_input"
            type="text"
            placeholder="JohnSmith@gmail.com"
            value={email}
            onChange={(e) => handleChange("email", e)}
          />
        </div>
        <div className="mt3">
          <button
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 register_button"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
