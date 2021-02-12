import { useState } from "react";
import { useDispatch } from "react-redux";

import authOperations from "../redux/auth/auth-operations";
import Button from "@material-ui/core/Button";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

export default function LoginViews() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Сторінка логіна</h1>

      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Пошта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button type="submit" variant="contained" color="primary">
          Увійти
        </Button>
        {/* <button type="submit">Увійти</button> */}
      </form>
    </div>
  );
}
