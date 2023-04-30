import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "../components/AppBar/AppBar";

export const SharedLayout = () => {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
       <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
