import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Show from "../pages/show";
import ROUTES from "./routesPath";

const createRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to={ROUTES.Posts} />} />
    <Route path={ROUTES.Posts} element={<Home />} />
    <Route path={ROUTES.PostsShow} element={<Show />} />
  </Routes>
);

export default createRoutes;
