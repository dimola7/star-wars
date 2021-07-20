import { useState, FormEvent } from "react";
import { useHistory} from "react-router-dom";
import formStyles from "./Form.module.css";

const Form = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const history = useHistory();

  const validPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

  const validatePassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validPassword.test(password)) {
      setPasswordError(true);
    } else{
        setPasswordError(false);
        history.push(`/dashboard`);
    }
  };
  // const login = () => {

  // }

  return (
    <div>
      <form className={formStyles.form} onSubmit={validatePassword}>
        <h3>
          Sign in to continue to <br /> your account.
        </h3>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>
          <button>Sign in</button>
        {passwordError && <p className={formStyles.error}>Your password is invalid</p>}
      </form>
    </div>
  );
};

export default Form;
