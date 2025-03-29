import { Button } from "./components/ui/button";
import { Suspense } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  useRoutes,
} from "react-router-dom";
// import { useRoutes } from "react-router-dom";
import { routes } from "@/routes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function Layout() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup"];

  return (
    // <>
    //   {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
    //   <NavBar />

    //   {useRoutes(routes)}
    //   <Footer />
    // </>
    <div className="flex flex-col min-h-screen">
      {/* Navbar (conditionally rendered) */}
      {!hideNavbarRoutes.includes(location.pathname) && <NavBar />}

      {/* Main content should take all available space */}
      <main className="flex-grow">{useRoutes(routes)}</main>

      {/* Footer will always stick to the bottom */}
      <Footer />
    </div>
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
