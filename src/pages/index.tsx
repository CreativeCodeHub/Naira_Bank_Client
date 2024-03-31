import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// components
import Layout from "../layout";
import SignUp from "./auth/sign-up";

const Home = lazy(() => import("./home"));

// router setup
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Route>
  )
);

function Pages(): JSX.Element {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Pages;
