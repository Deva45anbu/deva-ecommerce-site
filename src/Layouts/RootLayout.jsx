import { Outlet } from "react-router-dom"
import { Menu } from "../Modules/Menu/Menu"
import "../Layouts/RootLayout.css"



export const RootLayout = () => {
    return (
        <div>
            <div className="sticky-menubar">
                <Menu></Menu>
            </div>
            <Outlet></Outlet>
        </div>
    )
}
