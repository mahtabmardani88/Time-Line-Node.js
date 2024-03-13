const express = require('express');
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const data = [
    {
      name: "Michael Choi",
      createdAt: "16-01-2013",
      message:
        "This is my message. This is my message. This is my message. This is my message. This is my message.",
    },
    {
      name: "Michael Choi",
      createdAt: "23-01-2013",
      message:
        "This is my message. This is my message. This is my message. This is my message. This is my message.",
    },
    {
      name: "Cory Whiteland",
      createdAt: "15-01-2013",
      message:
        "This is my message. This is my message. This is my message. This is my message. This is my message.",
    },
    {
      name: "Cory Whiteland",
      createdAt: "01-01-2013",
      message:
        "This is my message. This is my message. This is my message. This is my message. This is my message.",
    },
  ];
  data.sort((a, b) => {
    const dateA = new Date(a.createdAt.split("-").reverse().join("-"));
    const dateB = new Date(b.createdAt.split("-").reverse().join("-"));
    return dateB - dateA;
  });
  res.render("index", { posts: data });
});
app.use(express.static(`${__dirname}/public`));
app.listen(3000, () => console.log("Web Server running on port 3000"));