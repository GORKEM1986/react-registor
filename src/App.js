import Button from "./components/button/Button";
import Input from "./components/input/Input";
import Form from "./components/form/Form";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({ name: "", password: "" });
  const handleChange = (e) => {
    if (e.target.type === "text") {
      setUser({ ...user, name: e.target.value });
      console.log(user);
    } else if (e.target.type === "password") {
      setUser({ ...user, password: e.target.value });
      console.log(user);
    }
  };
  const handleClick = () => {
    if (user.name === "") {
      alert("User cannot be empty");
    } else if (user.password === "") {
      alert("Password cannot be empty");
    } else {
      alert("User name:" + user.name + " " + "Your password:" + user.password);
    }
  };

  return (
    <div className="App">
      <h2>Login Form</h2>
      <Form>
        <Input
          onChange={handleChange}
          type={"text"}
          value={user.name}
          placeHolder={"User Name"}
        />
        <Input
          type={"password"}
          placeHolder={"Password"}
          value={user.password}
          onChange={handleChange}
        />
        <Button onClick={handleClick} />
      </Form>
    </div>
  );
}

export default App;
