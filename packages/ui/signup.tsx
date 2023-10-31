/* eslint-disable eslint-comments/require-description */
import { Button, Typography, Card, TextField } from "@mui/material";
import { JSX, useState } from "react";

export function Signup(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(email, password);

  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Typography variant={"h6"}>
          Welcome to Coursera. Sign up below
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
          <TextField
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            fullWidth={true}
            label="Email"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth={true}
            label="Password"
            variant="outlined"
            type={"password"}
          />
          <br />
          <br />

          <Button
            size={"large"}
            variant="contained"
            onClick={() => {
              // eslint-disable-next-line no-alert
              alert("Hello World!");
            }}
          >
            Signup
          </Button>
        </Card>
      </div>
    </div>
  );
}
