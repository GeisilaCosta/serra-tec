import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/Context";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import { Container } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState(""); // Use a separate state for the login password
  const { password } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(password);
  }, [password]);

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${loginPassword}`);

    const response = await fetch(
      "http://localhost:8080/clientes/listarClientes"
    );
    const users = await response.json();

    // Find the user that matches the entered email
    const user = users.find((user) => user.email === email);

    if (user && loginPassword === loginPassword) {
      // Check if the entered password matches the stored password
      console.log("Login successful");
      setIsLoggedIn(true); // Update login state
      setUserDetails(user); // Save user details
      navigate("/");
      // Handle successful login here
    } else {
      console.log("Invalid email or password");
      // Handle failed login here
    }
  };

  return (
    <>
      <Container>
        <div>
          <h2>Login Page</h2>
          <form onSubmit={handleLogin}>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={loginPassword} // Use loginPassword here
                onChange={(e) => setLoginPassword(e.target.value)} // Update loginPassword here
                required
              />
            </label>
            <br />
            <input type="submit" value="Login" />
          </form>
        </div>
      </Container>
    </>
  );
}

export default Login;
