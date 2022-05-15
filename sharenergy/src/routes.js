import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Homepage from "./routs/Homepage/Homepage";
import RouteArticle from "./routs/RouteArticle/RouteArticle"


const MyRoutes = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element={<Homepage/>}  path="/" exact />
                <Route element={<RouteArticle/>}  path="/article" exact />
            </Routes>
       </BrowserRouter>
   )
}

export default MyRoutes;