import { Button } from "./components/ui/button";
import { Suspense } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  useRoutes,
} from "react-router-dom";
// import { useRoutes } from "react-router-dom";
import { routes } from "@/routes";

function Layout() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup"];

  return (
    <>
      {/* {!hideNavbarRoutes.includes(location.pathname) && <Navbar />} */}

      {useRoutes(routes)}
    </>
  );
}

function App() {
  return (
    <>
      {/* <h1 className="text-5xl text-center p-16">Vite React</h1>
      <Button className="align-middle" variant="destructive">
        Destructive
      </Button> */}

      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
