import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndUp from "./pages/signin-and-signup/signin-and-signup.component";
import { auth, createUserProfile } from "./firebase/firebase.utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot((snapshot) => {
          // setCurrentUser((prevState) => {
          //   prevState = { id: snapshot.id, ...snapshot.data() };
          //   console.log(prevState);
          // });
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/" component={Homepage} exact></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SignInAndUp}></Route>
      </Switch>
    </div>
  );
};

export default App;
