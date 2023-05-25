import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Contact from "../Pages/Contact/Contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Products" element={<Products />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Login" element={<Login />}></Route>
    </Routes>
  );
};

export default AppRouter;