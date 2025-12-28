import express from "express";

import { readFile } from "fs/promises";

import morgan from "morgan";

import path from "path";

const app = express();

let port = 3007;

morgan("dev");

app.use(express.static("../views"));

app.get("/", async ( req: any, res: any ) => {

    // let viewFile = await readFile( "./server.js", "utf-8");

    res.send( "<html><body><h1>Hello World</h1></body></html>" );

})

app.listen(port, () => console.log("App listening to port " + port + "."));