import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndUp from "./pages/signin-and-signup/signin-and-signup.component";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

const App = ({ setCurrentUser, currentUser }) => {
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
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Homepage} exact></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInAndUp />)}
        ></Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
