import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req: Request, res: Response) {
  res.send("test");
});

app.get("/sample", function (req: Request, res: Response) {
  res.send("sample");
});

app.listen(PORT, () => {
  console.log(`dev server running at: http://localhost:${PORT}/`);
});
