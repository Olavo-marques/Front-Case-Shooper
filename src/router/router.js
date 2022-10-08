import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "../pages/feed/FeedPage";
import  CardPage  from "../pages/cart/CartPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<FeedPage />} />
                <Route path="card" element={<CardPage />} />
            </Routes>
        </BrowserRouter>
    )
}