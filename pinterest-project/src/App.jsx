import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Boards from "./pages/Boards";
import { Toaster } from "sonner";
import Sidebar from "./components/sidebar/Sidebar";
import BoardDetails from "./pages/BoardDetails";
import CreateBoardModal from "./components/modals/CreateBoardModal";
import SavePinPopover from "./components/modals/SavePinPopover";

const App = () => {
  return (
    <div className="h-screen w-screen flex bg-(--white) overflow-hidden">
      <Sidebar />

      {/* Main content  */}
      <main className="flex-1 h-screen overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/boards/:boardId" element={<BoardDetails />} />
        </Routes>
      </main>

      
      <SavePinPopover />
      <CreateBoardModal />

      {/* Toaster  */}
      <Toaster
        position="bottom-center"
        visibleToasts={5}
        duration={3000}
        toastOptions={{
          className: "mx-auto",
        }}    
        containerStyle={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default App;
