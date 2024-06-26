import "./App.css";
import DesktopLayout from "./components/Base/DesktopLayout/DesktopLayout";

function App() {
  return (
    <div className="flex justify-between min-h-screen">
      <DesktopLayout>
        <main className="w-2/4"></main>
      </DesktopLayout>
    </div>
  );
}

export default App;
