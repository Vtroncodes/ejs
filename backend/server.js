import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import cors from "express-cors";

app.use(cors());
app.use(express.json());

const jokes = [
  {
    id: 1,
    title: "Why don't skeletons fight each other?",
    content: "They don't have the guts.",
  },
  {
    id: 2,
    title: "What do you call fake spaghetti?",
    content: "An impasta.",
  },
  {
    id: 3,
    title: "Why did the math book look sad?",
    content: "Because it had too many problems.",
  },
  {
    id: 4,
    title: "What did one wall say to the other wall?",
    content: "I'll meet you at the corner.",
  },
  {
    id: 5,
    title: "Why don’t eggs tell jokes?",
    content: "Because they might crack up.",
  },
];
app.get("/", (req, res) => {
  res.send("Hello World serve is ready!");
});
app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on at: http://localhost:${port}`);
});
