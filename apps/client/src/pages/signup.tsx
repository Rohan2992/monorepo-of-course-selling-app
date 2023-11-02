import { Signup } from "ui";
import axios from "axios";

export default function signupPage(): JSX.Element {
  return (
    <Signup
      info="Sign Up"
      onClick={async (username, password) => {
        const response = await axios.post("/api/signup", {
          username,
          password
        });
        localStorage.setItem("token", response.data.token);
      }}
    />
  );
}
