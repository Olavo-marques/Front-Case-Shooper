import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "../pages/feed/FeedPage";
import CardPage from "../pages/cart/CartPage";
import HomePage from "../pages/home/HomePage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/feed/card" element={<CardPage />} />
                <Route path="*" element={<h1>Página não encontrada ヾ(＠⌒ー⌒＠)ノ</h1>} />
            </Routes>
        </BrowserRouter>
    )
}