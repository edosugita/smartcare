import expsress from "express";
import cors from "cors";
import ClickRoute from "./routes/ClickRoute.js";

const app = expsress();
app.use(cors());
app.use(expsress.json());
app.use(ClickRoute);

app.listen(5000, () => console.log('Server up and running'));