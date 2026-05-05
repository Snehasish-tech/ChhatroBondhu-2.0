import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

// context create (no types in JS)
const AuthContext = createContext(undefined);

const SUPABASE_CONFIGURED = Boolean(
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);

const DEMO_CREDENTIALS = {
  email: "demo@study.local",
  password: "Demo1234!",
  fullName: "Demo Student",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDemo, setIsDemo] = useState(false);
  const { toast } = useToast();

  const demoMode = !SUPABASE_CONFIGURED;

  const activateDemoSession = (email, fullName) => {
    const demoUser = {
      id: "demo-user",
      email,
      user_metadata: {
        full_name: fullName || DEMO_CREDENTIALS.fullName,
        demo: true,
      },
    };

    setUser(demoUser);
    setSession({ user: demoUser, access_token: "demo-token" });
    setIsDemo(true);
    setLoading(false);
  };

  useEffect(() => {
    if (demoMode) {
      setLoading(false);
      return undefined;
    }

    // listen auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session ? session.user : null);
      setLoading(false);
    });

    // get existing session
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session ? data.session.user : null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [demoMode]);

  const signUp = async (email, password, fullName) => {
    const isDemoCredentials =
      email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password;

    if (demoMode || isDemoCredentials) {
      activateDemoSession(email, fullName);
      toast({
        title: "Demo account created",
        description: "You are signed in with a local demo account.",
      });
      return { error: null };
    }

    try {
      const redirectUrl = `${window.location.origin}/`;

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) {
        toast({
          title: "Sign up failed",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      toast({
        title: "Welcome to ChhatroBondhu!",
        description: "Your account has been created successfully.",
      });

      return { error: null };
    } catch (err) {
      toast({
        title: "Sign up failed",
        description: err?.message || "Unable to reach the auth server.",
        variant: "destructive",
      });
      return { error: err };
    }
  };

  const signIn = async (email, password) => {
    const isDemoCredentials =
      email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password;

    if (demoMode || isDemoCredentials) {
      activateDemoSession(email, DEMO_CREDENTIALS.fullName);
      toast({
        title: "Signed in (demo)",
        description: "You are signed in with a local demo account.",
      });
      return { error: null };
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: "Sign in failed",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      toast({
        title: "Welcome back!",
        description: "You have been signed in successfully.",
      });

      return { error: null };
    } catch (err) {
      toast({
        title: "Sign in failed",
        description: err?.message || "Unable to reach the auth server.",
        variant: "destructive",
      });
      return { error: err };
    }
  };

  const signOut = async () => {
    if (isDemo || demoMode) {
      setUser(null);
      setSession(null);
      setIsDemo(false);
      setLoading(false);
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });
      return;
    }

    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signUp,
        signIn,
        signOut,
        demoMode,
        demoCredentials: DEMO_CREDENTIALS,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
