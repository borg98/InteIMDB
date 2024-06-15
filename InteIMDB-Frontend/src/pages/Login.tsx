import { useState, useEffect, useContext } from "react";
import { Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { RouterProvider } from "react-router-dom";
import { SessionContext } from "../context/SessionContext";
import { router } from "../Router";
import { SupabaseContext } from "../context/SupabaseContext";
import { CartProvider } from "../context/CartContext";

// const supabase = createClient(
//   "https://xjwicnefwjpfsasawebl.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhqd2ljbmVmd2pwZnNhc2F3ZWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3NTA3MzYsImV4cCI6MjAzMzMyNjczNn0.P2w4BvBmBoYe9TYWvlgDXfz9hnZ6LykMDIi83t4NV_g"
// );

export default function Login() {
  const [session, setSession] = useState<Session | null>(null);
  const supabase = useContext(SupabaseContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase?.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    if (supabase) {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
        setIsLoading(false);
      });

      return () => subscription.unsubscribe();
    } else {
      console.log("Supabase not initialized");
    }
  }, []);

  if (!session && supabase) {
    return isLoading ? (
      <div className="spinner"></div>
    ) : (
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    );
  } else {
    return isLoading ? (
      <div className="spinner"></div>
    ) : (
      <SessionContext.Provider value={session}>
        <CartProvider>
          <RouterProvider router={router}></RouterProvider>
        </CartProvider>
      </SessionContext.Provider>
    );
  }
}
