const express = require("express"); //es5

let data = [
  {
    id: 1,
    name: "Heena",
  },
  {
    id: 2,
    name: "Mahek",
  },
];

// Creating server application
const app = express();
``;
const PORT = 8000;

app.use(express.json());

app.get("/", function (req, res) {
  res.send("<h1>Portfolio CRM APIs</h1>");
});

app.get("/get-json-data", function (req, res) {
  res.json({
    key: "value update",
  });
});

app.get("/students", function (req, res) {
  res.json({
    message: "Student list fetched",
    data: data,
  });
});

app.post("/students", function (req, res) {
  const body = req.body;
  console.log({ body });

  data.push(body);
  // store requested data
  // if success, response on it
  res.json({
    message: "Student Created",
  });
});

app.put("/students/:id", function (req, res) {
  const id = req.params.id;
  const body = req.body;
  console.log({ body, id });

  //  find student object by id
  const foundIndex = data.findIndex((std) => std.id == id);
  data[foundIndex] = {
    ...data[foundIndex],
    ...body,
  };

  // store requested data
  // if success, response on it
  res.json({
    message: "Student Updated",
  });
});

app.delete("/students/:id", function (req, res) {
  const id = req.params.id;

  //  find student object by id
  data = data.filter((std) => std.id != id);
  // store requested data
  // if success, response on it
  res.json({
    message: "Student Deleted",
  });
});

app.get("/students/:id", function (req, res) {
  const id = Number(req.params.id);
  const student = data.find((student) => student.id === id);
  console.log({ student });
  if (!student) {
    res.json({
      message: `No data found of this id : ${id}`,
      data: null,
    });
  } else
    res.json({
      message: "Student fetched",
      data: student,
    });
});

app.listen(PORT, () => console.log("Server running on PORT: " + PORT));