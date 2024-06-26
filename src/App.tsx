import "./App.css";
import DesktopLayout from "./components/Base/DesktopLayout/DesktopLayout";
import AdvertiseSection from "./components/Home/Main/AdvertiseSection/AdvertiseSection";
import WelcomeSection from "./components/Home/WelcomeSection/WelcomeSection";

function App() {
  return (
    <div className="flex justify-between min-h-screen">
      <DesktopLayout>
        <main className="w-2/4 px-5 py-9">
          <WelcomeSection />
          <AdvertiseSection />
        </main>
      </DesktopLayout>
    </div>
  );
}

export default App;
