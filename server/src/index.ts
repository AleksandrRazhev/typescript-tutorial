import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import cookieSession from "cookie-session";

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["asdfasdfasdfs"] }));
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

class Server {
  app: express.Express = express();

  constructor() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieSession({ keys: ["asdfasdfasdfs"] }));
    this.app.use(router);
  }

  start(): void {
    this.app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  }
}

new Server().start();
