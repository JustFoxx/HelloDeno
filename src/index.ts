import { opine } from "https://deno.land/x/opine@2.1.1/mod.ts";

const app = opine();

app.get("/", (req, res) => {
  res.send("Hello World");
});

//listen
app.listen(
    3000,
    () => console.log("Server started on port 3000")
)