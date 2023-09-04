import { Link, Outlet } from "react-router-dom";
// import { } from "react-router-dom";
import Nav from "./nav";

const Layout = () => {
    return (
        <>
            <Nav />
            <div>
                <ul>
                    <li>
                        {/* <Link to="/">LOGO</Link> */}
                    </li>
                    <li>
                        {/* <Link to="/blogs"> */}
                            {/* BLOGS */}
                        {/* </Link> */}
                    </li>
                </ul>
            </div>

            <Outlet />
        </>
    )
};

export default Layout;