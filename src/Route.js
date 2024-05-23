
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home"
import { Login } from "./Components/login"
import { Products } from "./Components/Products"
import { AccountInfo } from "./Components/AccountInfo"
import { Wishlist } from "./Components/WishList"
import { Carts } from "./Components/Carts"
import { PageNotFound } from "./Components/Utils/Utils"


export const RouteData = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/accountinfo" element={<AccountInfo />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Carts />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}





