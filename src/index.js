/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams,
  Outlet,
} from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

/* The `<Route path="/profile-page" exact element={<Profile />} />` code snippet is setting up a
route in the React application using the React Router library. */
import Landing from "views/examples/Landing.js";
import Contact from "views/examples/Contact";
import History from "views/examples/History";
import JoinUs from "views/examples/JoinUs";
import Pricing from "views/examples/pricing";
import NotFoundPage from "views/examples/notFound";
import Mention from "views/examples/mention";
import Politique from "views/examples/politique";
import "./i18n"; // Ensure i18n is configured
import { useTranslation } from "react-i18next";
// import Login from "views/examples/Login.js";
// import Profile from "views/examples/Profile.js";
// import Register from "views/examples/Register.js";
// import Index from "views/Index.js";
// import Profile from "views/examples/Profile.js";
// import Register from "views/examples/Register.js";
function App() {
  // localStorage.setItem("isEnabled", "false");
  return (
    <Router>
      <Routes>
        {/* Route pour rediriger vers la langue par défaut */}
        <Route
          path="/"
          element={
            <Navigate to={`/${localStorage.getItem("language") || "fr"}`} />
          }
        />

        {/* Route avec gestion de la langue */}
        <Route path="/:lng/*" element={<LanguageWrapper />}>
          <Route index element={<Landing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about-us" element={<History />} />
          <Route path="join-us" element={<JoinUs />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="mentions-legales" element={<Mention />} />
          <Route path="politique" element={<Politique />} />
          <Route path="*" element={<NotFoundPage />} />{" "}
          {/* Route pour la page 404 */}
        </Route>

        {/* Catch-all route to handle unknown paths */}
        <Route path="*" element={<Navigate to="/error-404" replace />} />
      </Routes>
    </Router>
  );
}

// LanguageWrapper Component to manage language changes
const LanguageWrapper = () => {
  const { i18n } = useTranslation();
  const { lng } = useParams();

  React.useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
      localStorage.setItem("language", lng); // Save language preference
    }
  }, [lng, i18n]);

  return <Outlet />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route
  //       path="/"
  //       element={
  //         <Navigate to={`/${localStorage.getItem("language") || "fr"}`} />
  //       }
  //     />
  //     <Route path="/" exact element={<Landing />} />
  //     <Route path="/contact" exact element={<Contact />} />
  //     {/* <Route path="/login-page" exact element={<Login />} /> */}
  //     <Route path="/about-us" exact element={<History />} />
  //     <Route path="/join-us" exact element={<JoinUs />} />
  //     <Route path="/pricing" exact element={<Pricing />} />
  //     <Route path="/mentions-legales" exact element={<Mention />} />
  //     <Route path="/politique" exact element={<Politique />} />

  //     <Route path="/error-404" exact element={<NotFoundPage />} />
  //     {/* <Route path="/home-example" exact element={<Index />} /> */}
  //     {/* <Route path="/landing-page" exact element={<Landing />} /> */}
  //     {/* <Route path="/profile-page" exact element={<Profile />} /> */}
  //     {/* <Route path="/register-page" exact element={<Register />} /> */}
  //     {/* <Route path="/profile-page" exact element={<Profile />} /> */}
  //     {/* <Route path="/register-page" exact element={<Register />} /> */}
  //     <Route
  //       path="*"
  //       element={
  //         <Navigate
  //           to="/error-404"
  //           /* In the provided code snippet, the `replace` prop in
  //     the `<Navigate>` component is used to replace the
  //     current entry in the history stack with a new
  //     location. */
  //           replace
  //         />
  //       }
  //     />
  //   </Routes>
  // </BrowserRouter>
  <App />
);
