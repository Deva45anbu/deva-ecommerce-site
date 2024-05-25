
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Modules/Home/Home"
import { Login } from "./Modules/Login/login"
import { Products } from "./Modules/Products/Products"
import { AccountInfo } from "./Modules/AccountInfo/AccountInfo"
import { Wishlist } from "./Modules/WishList/WishList"
import { Carts } from "./Modules/Carts/Carts"
import { PageNotFound } from "./Modules/Utils/Utils"


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





