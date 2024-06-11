import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

const app = express();
app.use(express.json());
app.use(cors({ origin: "https://inte-imdb.vercel.app", methods: "*" }));
app.use(bodyParser.json());

dotenv.config();
const PORT = process.env.PORT;
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
if (!PORT || !supabaseUrl || !supabaseKey) {
  throw new Error(
    "Please define the PORT, SUPABASE_URL, and SUPABASE_KEY environment variables"
  );
}
const supabase = createClient(supabaseUrl, supabaseKey);

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.get("/movies", async (req, res) => {
  const { data, error } = await supabase.from("movies").select("*");
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
});

app.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .eq("id", id);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
});

app.get("/movies/pagenr/:nr", async (req, res) => {
  const { nr } = req.params;
  const pageEnd = Number(nr) * 10 - 1;
  const pageStart = pageEnd - 9;

  const totalPages = async () => {
    const { data, error } = await supabase.from("movies").select("*");
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return Math.ceil(data.length / 10);
  };
  const nrOfPages = await totalPages();
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .range(pageStart, pageEnd);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  if (data.length === 0) {
    return res.status(404).json({ error: "Page not found" });
  }
  res.status(200).json({ data: data, totalPages: nrOfPages });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
