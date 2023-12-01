import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import path from "path";
import { database } from "./models";
import petShopRoutes from "./routes/petShopRoutes";
import { defaultView } from "./controllers/petShopController";

const app = express();

// use morgan middleware for logging
app.use(morgan("dev"));

//express middleware for parsing request body data
app.use(express.json());
// parsing request query data
app.use(express.urlencoded({ extended: true }));
// Configure the public folder to serve static files
app.use(express.static(path.join(__dirname, "../src/public")));

// Configure hbs as the app's view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../src/views"));
app.set("view options", { layout: "layout" });

//setup default routes
app.use("/main", petShopRoutes);
app.use("/", defaultView);

// Configure a default 404 error handler.
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).render("error", {
    message: "This is not the URL you are looking for!"
  });
});

//Sync the database
database.sync().then(() => {
  console.info("successfully connected to the database!");
});

app.listen(4000);
