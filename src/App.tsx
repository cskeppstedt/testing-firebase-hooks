import React from "react";
import {
  browserLocalPersistence,
  setPersistence,
  signOut,
} from "firebase/auth";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "./firebaseApp";
import "./App.css";
import AuthenticatedView from "./AuthenticatedView";

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, , gLoading, gError] = useSignInWithGoogle(auth);

  const authError = error || gError;
  const isLoading = loading || gLoading;

  const login = async () => {
    await setPersistence(auth, browserLocalPersistence);
    signInWithGoogle();
  };

  const logout = () => {
    signOut(auth).then(() => document.location.reload());
  };

  if (authError) {
    return (
      <div>
        <p>Error: {authError.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return (
      <div>
        <p>Signed In User:</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <button disabled={isLoading} onClick={logout}>
          Sign Out
        </button>
        <AuthenticatedView />
      </div>
    );
  }

  return (
    <div className="App">
      <button disabled={isLoading} onClick={login}>
        Sign In
      </button>
    </div>
  );
}

export default App;
