import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { createClient } from "@supabase/supabase-js";

interface IMovie {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  img_url: string;
  price: number;
}

const app = express();
app.use(express.json());

// const corsOptions = {
//   origin: "https://inte-imdb-l62e.vercel.app",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

app.use(cors());

// app.options("*", cors(corsOptions));
// app.use(cors({ origin: "*", methods: "*" }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("Cors headers added");

  res.header(
    "Access-Control-Allow-Origin",
    "https://inte-imdb-l62e.vercel.app"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(res.getHeaders());

  next();
});

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

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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

app.post("/cart", async (req, res) => {
  const { movieId, userId } = req.body;
  const { data, error } = await supabase
    .from("CartItems")
    .insert([{ productId: movieId }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json(data);
});

app.get("/cart/:cartId", async (req, res) => {
  const { cartId } = req.params;
  const { data, error } = await supabase
    .from("CartItems")
    .select("movies(*)")
    .eq("cartId", cartId);
  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
});

const calculateOrderAmount = (items: IMovie[] | null | undefined) => {
  if (!items) {
    console.error("Items is null or undefined");
    return 0;
  }

  const totalAmount = items.reduce(
    (acc: number, product: IMovie) => acc + product.price,
    0
  );
  return totalAmount * 100;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items }: { items: IMovie[] } = req.body;
  res.json(items);
  return;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "sek",
    payment_method: "pm_card_mastercard",
    description: "Someone bought something",
  });

  console.log(paymentIntent);

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
