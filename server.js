import { app } from "./app.js";

try {
  app.listen(8080, () => {
    console.log("Server is a running, url: http://localhost:8080");
  });
} catch (error) {
  console.log(error);
}
