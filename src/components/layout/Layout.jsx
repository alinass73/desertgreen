import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col justify-center w-[402px] self-center mx-auto">
      <Outlet />
    </div>
  );
}

export default Layout;