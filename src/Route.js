
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home"
import { Login } from "./Components/login"


export const RouteData = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
        </Routes>
    )
}





