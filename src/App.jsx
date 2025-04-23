import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/Home";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Header />
          <HomePage />
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
