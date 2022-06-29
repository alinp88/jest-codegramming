import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { passwordStrength, validateUser } from "./utils.ts";

const LoginHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  width: 400px;
  height: 400px;
  text-align: left;

  span {
    display: inline-block;
    width: 100px;
    margin-right: 25px;
  }

  input {
    width: 250px;
  }

  .good {
    color: green;
  }

  .bad {
    color: red;
  }
`;

function App() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [loginState, setLoginState] = useState('');

  return (
    <LoginHolder>
      <LoginBox>
        <h1>App Login</h1>
        <hr />
        <span>username</span>
        <input
          type="text"
          aria-label="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <br />
        <span>password</span>
        <input
          type="password"
          aria-label="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <br />
        <span>strength</span>
        <span>{password && passwordStrength(password)}</span>
        <br/>
        <hr/>
        <button onClick={() => {
          setLoginState(validateUser(username, password) ? 'good' : 'bad');
        }}>Login</button>
        <br/>
        {loginState && <p className={loginState}>
          login state: {loginState}
        </p>}
      </LoginBox>
    </LoginHolder>
  );
}

export default App;
