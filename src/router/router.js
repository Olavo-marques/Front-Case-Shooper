import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "../pages/feed/FeedPage";
import CardPage from "../pages/cart/CartPage";
import HomePage from "../pages/home.js/HomePage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/feed/card" element={<CardPage />} />
            </Routes>
        </BrowserRouter>
    )
}