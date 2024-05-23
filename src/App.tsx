import "./App.css";
import LeftSidebar from "./components/Home/LeftSidebar/LeftSidebar";
import RightSidebar from "./components/Home/RightSidebar/RightSidebar";

function App() {
  return (
    <div className="flex justify-between min-h-screen">
      <LeftSidebar />
      <main className="w-2/4"></main>
      <RightSidebar />
    </div>
  );
}

export default App;
