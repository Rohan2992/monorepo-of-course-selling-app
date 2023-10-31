import { Signup } from "ui";

export default function signupPage(): JSX.Element {
  return (
    <Signup
      info="Sign Up"
      onClick={(username, password) => {
        alert(username);
        alert(password);
      }}
    />
  );
}
