import { Button, Typography, Card, TextField } from "@mui/material";
import { useState } from "react";

export function Signup({
  onClick,
  info
}: {
  info: string;
  onClick: (username?: string, password?: string) => void;
}): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <Typography variant="h6">Welcome to Coursera. {info} below</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: 400, padding: 20 }} variant="outlined">
          <TextField
            fullWidth
            label="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            fullWidth
            label="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            variant="outlined"
          />
          <br />
          <br />

          <Button
            onClick={() => {
              onClick(email, password);
            }}
            size="large"
            variant="contained"
          >
            Signup
          </Button>
        </Card>
      </div>
    </div>
  );
}
