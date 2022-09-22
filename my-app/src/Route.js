import { Route, Routes } from "react-router-dom";
import MainHeader from "./components1/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function AppRoute() {
  return (
    <div>
        <MainHeader></MainHeader>
      <Routes>
        <Route path=""></Route>
        <Route path="/welcome" element={<Welcome></Welcome>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/products/:id" element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </div>
  );
}

export default AppRoute;
