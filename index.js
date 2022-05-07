import { app } from "./src/app";

app.listen(process.env.PORT, () =>
  console.log("listening on port http://localhost:3001")
);
