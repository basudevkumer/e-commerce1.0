import React from "react";
import Home from "@pages/Home";
import About from "@pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RootLayout from "@/components/rootLayout/RootLayout";
import Shop from "@/pages/Shop";
import ProductDetails from "./pages/ProductDetailsPage";
import ShoppingCardPg from "./pages/ShoppingCardPg";
import UpdateCard from "./pages/UpdateCard";
import Compare from "./pages/Compare";
import Wishlist from "./pages/Wishlist";
import CustomerSupport from "./pages/CustomerSupport";
import NeedHelp from "./pages/NeedHelp";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Signup from "./components/account/Signup";
import SignIn from "./components/account/SignIn";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product-details/:id" element={<ProductDetails />} />
              <Route path="/shopping-card" element={<ShoppingCardPg />} />

              <Route path="/compare" element={<Compare />} />

              <Route path="/customer-support" element={<CustomerSupport />} />
              <Route path="/need-help" element={<NeedHelp />} />

              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/update-card" element={<UpdateCard />} />
 
              {/* protected route */}
              <Route
                path="/wishlist"
                element={
                  <ProtectedRoute>
                    <Wishlist />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/order-success"
                element={
                  <ProtectedRoute>
                    <OrderSuccess />
                  </ProtectedRoute>
                }
              />
              {/* 404 page not fond */}
              <Route path="*" element={<div>404 page not font...</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
