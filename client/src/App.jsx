import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import Blog from "./pages/Blog/Blog";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Header />
          <HomePage />
          <Category />
          <Product />
          <Blog />
          <Footer />
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
