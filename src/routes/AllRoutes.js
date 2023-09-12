import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsList, ProductDetail, Login, Register, CartPage, PageNotFound } from "../pages";
import { Team, Features } from "../components";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { OrderPage } from "../pages/Order/OrderPage";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import { Downloads } from "../pages/Dashboard/components/Downloads";
import { Purchases } from "../pages/Dashboard/components/Purchases";
import { Places } from "../pages/Dashboard/components/Places";
import { Files } from "../pages/Dashboard/components/Files";


export const AllRoutes = () => {

  return (
    <>
     <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsList />} />
    <Route path="/products/:id" element={<ProductDetail />} />
    <Route path="/team" element={<Team />} />
    <Route path="/features" element={<Features />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/cart" element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
    <Route path="/order-summary" element={<ProtectedRoutes><OrderPage /></ProtectedRoutes>} />
    <Route path="/dashboard" element={<ProtectedRoutes><DashboardPage /></ProtectedRoutes>} />
    <Route path="/downloads" element={<ProtectedRoutes><Downloads /></ProtectedRoutes>} />
    <Route path="/purchases" element={<ProtectedRoutes><Purchases /></ProtectedRoutes>} />
    <Route path="/places" element={<ProtectedRoutes><Places /></ProtectedRoutes>} />
    <Route path="/files" element={<ProtectedRoutes><Files /></ProtectedRoutes>} />
    <Route path="*" element={<PageNotFound />} />
</Routes>
    </>
  );
};
