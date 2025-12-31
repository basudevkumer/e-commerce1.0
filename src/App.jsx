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
import ShoppingLeft from "./components/shppingCardComp/shoppingCardLeft/ShoppingLeft";
import UpdateCard2 from "./components/commonComponent/UpdateCard2/Index";
import UpdateCard from "./pages/UpdateCard";

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
              <Route path="/update-card" element={<UpdateCard />} />
              <Route path="*" element={<div>Here Find Everything....</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
