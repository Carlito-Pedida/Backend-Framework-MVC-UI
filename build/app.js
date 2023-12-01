"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const models_1 = require("./models");
const petShopRoutes_1 = __importDefault(require("./routes/petShopRoutes"));
const petShopController_1 = require("./controllers/petShopController");
const app = (0, express_1.default)();
// use morgan middleware for logging
app.use((0, morgan_1.default)("dev"));
//express middleware for parsing request body data
app.use(express_1.default.json());
// parsing request query data
app.use(express_1.default.urlencoded({ extended: true }));
// Configure the public folder to serve static files
app.use(express_1.default.static(path_1.default.join(__dirname, "../src/public")));
// Configure hbs as the app's view engine
app.set("view engine", "hbs");
app.set("views", path_1.default.join(__dirname, "../src/views"));
app.set("view options", { layout: "layout" });
//setup default routes
app.use("/main", petShopRoutes_1.default);
app.use("/", petShopController_1.defaultView);
// Configure a default 404 error handler.
app.use((req, res, next) => {
    res.status(404).render("error", {
        message: "This is not the URL you are looking for!"
    });
});
//Sync the database
models_1.database.sync().then(() => {
    console.info("successfully connected to the database!");
});
app.listen(4000);
