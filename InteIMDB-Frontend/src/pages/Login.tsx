import { useState, useEffect, useContext } from "react";
import { Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { RouterProvider } from "react-router-dom";
import { SessionContext } from "../context/SessionContext";
import { router } from "../Router";
import { SupabaseContext } from "../context/SupabaseContext";
import { CartProvider } from "../context/CartContext";

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
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google"]}
      />
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
