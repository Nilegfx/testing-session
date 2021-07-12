require("express")()
  .get("/data", (req, res) => {
    res.send({ name: "ahmed" });
  })
  .listen(3001, () => {
    console.log("listening to 3001");
  });
