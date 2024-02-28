import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Components/CheckoutPage/Checkout";
import Header from "./Components/Header/Header";
import HomePageComponentWrapper from "./Components/HomePageComponentWrapper/HomePageComponentWrapper";
import SigninPage from "./Components/SigninPage/SigninPage";
import { useEffect, useState } from "react";
import { auth } from "./Components/Firebase/Config";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import Button from "./Components/NavMenu/Button";
function App() {
  const [{}, dispatch] = useStateValue();


  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePageComponentWrapper />{" "}
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route path="signin" element={<SigninPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
