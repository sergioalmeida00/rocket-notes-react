import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function RoutesNew(){
  return(
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}