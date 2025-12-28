import express from "express";

import { readFile } from "fs/promises";

import morgan from "morgan";

import path from "path";

import { fileURLToPath } from 'node:url';

const app = express();

let port = 3007;

app.use( morgan("dev") );

app.use( express.static("../views") );

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

let macFilePath = "/Users/donovanfrazier/Projects/portfolio-site/express-server/views/index.html";

let viewPath = "../views";

let indexFile = "/index.html";

let relativeFilePath = path.join(__dirname, viewPath);

app.get("/", async ( req: any, res: any ) => {

    let viewFile = await readFile( relativeFilePath + indexFile, "utf-8");

    res.send( viewFile );

})

app.listen(port, () => console.log("App listening to port " + port + "."));