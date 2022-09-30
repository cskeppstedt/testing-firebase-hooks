import React from "react";
import { signOut } from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "./firebaseApp";
import "./App.css";
import AuthenticatedView from "./AuthenticatedView";

function App() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const login = () => {
    signInWithGoogle();
  };

  const logout = () => {
    signOut(auth);
  };

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return (
      <div>
        <p>Signed In User: </p>
        <pre>{JSON.stringify(user.user, null, 2)}</pre>
        <button disabled={loading} onClick={logout}>
          Sign Out
        </button>

        <AuthenticatedView />
      </div>
    );
  }

  return (
    <div className="App">
      <button disabled={loading} onClick={login}>
        Sign In
      </button>
    </div>
  );
}

export default App;
