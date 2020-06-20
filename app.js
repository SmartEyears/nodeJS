import bodyparser from "body-parser";
import cookieparser from "cookie-parser";
import express from "express";
import { localsMiddleware } from "./middlewares";
import helmet from "helmet";
import morgan from "morgan";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(helmet()); //보안 관련 미들웨어 이기 떄문에 가장 위에 위치한다.
app.set("view engine", "pug");
app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
