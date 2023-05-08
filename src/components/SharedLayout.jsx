import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import DiagramTab from '../components/DiagramTab/DiagramTab';

export const SharedLayout = () => {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
        <DiagramTab/>
      </Suspense>
    </div>
  );
};
