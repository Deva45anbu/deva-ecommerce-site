import { NavLink } from "react-router-dom"
import "./Menu.css"
import { useState } from "react"
// import "../../../public/laptopadd.png"


export const Menu = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false)


    return (
        <>
            {/* <div className="home-page"> */}
            <div className="header-containner">
                <div className="website-title">
                    <NavLink to="/home">
                        Deva Ecommerce Site
                    </NavLink>
                </div>
                <div className="header-search-container">
                    <input
                        className="search-input"
                    ></input>
                    <button
                        className="search-button"
                    > Search</button>
                </div>
                <div className="header-links">
                    <NavLink className="header-link-item" to="/">Home</NavLink>
                    <NavLink className="header-link-item" to="/products">Products</NavLink>
                    <NavLink className="header-link-item" to="/carts">Carts</NavLink>
                    <NavLink className="header-link-item" to="/home">Theme Change</NavLink>
                    <NavLink className="header-link-item" to="/accountinfo">Account</NavLink>
                    <NavLink className="header-link-item" to="/wishlist">wish list</NavLink>
                    <p className="header-link-item click-me"
                        onClick={() => {
                            setIsSideBarOpen(!isSideBarOpen)
                        }}


                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </p>
                </div>

            </div>
            {
                isSideBarOpen ?
                    <div className="sidebar">
                        <div className="sidebar-link-item"
                            onClick={() => {
                                setIsSideBarOpen(!isSideBarOpen)
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                        </div>
                        <NavLink
                            className="sidebar-link-item"
                            to="/"
                            onClick={() => {
                                setIsSideBarOpen(false)
                            }}
                        >Home</NavLink>
                        <NavLink
                            className="sidebar-link-item"
                            to="/products"
                            onClick={() => {
                                setIsSideBarOpen(false)
                            }}
                        >Products</NavLink>
                        <NavLink
                            className="sidebar-link-item"
                            to="/carts"
                            onClick={() => {
                                setIsSideBarOpen(false)
                            }}>Carts</NavLink>
                        <NavLink
                            className="sidebar-link-item"
                            to="/home"
                            onClick={() => {
                                setIsSideBarOpen(false)
                            }}>Theme Change</NavLink>
                        <NavLink
                            className="sidebar-link-item"
                            to="/accountinfo"
                            onClick={() => {
                                setIsSideBarOpen(false)
                            }}>Account</NavLink>
                        <NavLink
                            className="sidebar-link-item"
                            to="/wishlist"
                            onClick={() => {
                                setIsSideBarOpen(false)
                            }}>wish list</NavLink>

                    </div>

                    : null
            }
            {/* </div > */}
        </>

    )

}