import Login from "../Forms/Login";
import Register from "../Forms/Register";
import "./style/home-layout.scss";

export function Layout() {
    return <div className="containerLayout">
        <Login />
        <Register />
    </div>
}