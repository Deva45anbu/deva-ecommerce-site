import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div div className="child-container">
            <h3>Page Not Found</h3>
            <p className="text-secondary">
                Go to <Link to='/'>Home Page</Link>
            </p>

        </div>
    )
}

export default PageNotFound