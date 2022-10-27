import React from "react";
import { AppProvider } from "./contextes";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainPageLayout from "./components/Layout/MainPageLayout";
import Catalog from "./pages/Catalog/Catalog";
import PageLayout from "./components/Layout/PageLayout";
import About from "./pages/About/About";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";

import { fetchCatalog } from "./redux/catalog/slice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<MainPageLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="404" element={<h1>Такой страницы нет</h1>} />
          <Route path="*" element={<h1>Такой страницы нет</h1>} />
        </Route>
        <Route path="/*" element={<PageLayout />}>
          <Route path="catalog/*" element={<Catalog />} />
          <Route path="catalog/:category" element={<Category />} />
          <Route path="catalog/:category/:product" element={<Product />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
