import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { appRoute } from "../../const/routes.const";
import { Overview } from "./pages/overview/Overview";
import "./style.scss";
export default function Admin() {
  const user = useSelector(state => state.auth.user)
  return (
    <>
      {
        user ? (
          <div className="container-admin" >
            <Routes>
              <Route index element={<Overview />} />
            </Routes>
          </div>
        ) : <Navigate to={appRoute.login} />
      }
    </>
  )
}