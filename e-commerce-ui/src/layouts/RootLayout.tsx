import Sidebar from "../components/Sidebar";
import RightRail from "../components/RightRail";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 py-6 lg:grid-cols-[280px_1fr_320px]">
          <Sidebar />
          <Outlet />
          <RightRail />
        </div>
      </div>
    </div>
  );
}
