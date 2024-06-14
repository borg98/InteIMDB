import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/Login";
import { SupabaseContext } from "./context/SupabaseContext";
import { createClient } from "@supabase/supabase-js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SupabaseContext.Provider
      value={createClient(
        "https://xjwicnefwjpfsasawebl.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhqd2ljbmVmd2pwZnNhc2F3ZWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3NTA3MzYsImV4cCI6MjAzMzMyNjczNn0.P2w4BvBmBoYe9TYWvlgDXfz9hnZ6LykMDIi83t4NV_g"
      )}
    >
      <Login></Login>
    </SupabaseContext.Provider>
  </React.StrictMode>
);
