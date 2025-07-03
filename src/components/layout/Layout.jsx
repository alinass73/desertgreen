import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-[402px] mx-auto border-2">
      <Outlet />
    </div>
  );
}

export default Layout;