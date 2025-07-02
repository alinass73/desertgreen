import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="  flex flex-col items-center justify-center w-[402px] mx-auto">
      <Outlet />  
    </div>
  );
}

export default Layout;