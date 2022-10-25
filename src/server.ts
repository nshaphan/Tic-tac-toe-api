import gameController from "./api"
import express from "express";

const app = express()
const port = process.env.PORT || 3000;

app.get('/', gameController)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})