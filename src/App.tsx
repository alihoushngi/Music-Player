import "./App.css";
import DesktopLayout from "./components/Base/DesktopLayout/DesktopLayout";
import AdvertiseSection from "./components/Home/Main/Advertise/Advertise";
import MostPopularPlayList from "./components/Home/Main/MostPopularPlayList/MostPopularPlayList";
import WelcomeSection from "./components/Home/WelcomeSection/WelcomeSection";

function App() {
  return (
    <div className="flex justify-start min-h-screen">
      <DesktopLayout>
        <main className="w-4/7 px-5 py-9">
          <WelcomeSection />
          <AdvertiseSection />
          <MostPopularPlayList />
        </main>
      </DesktopLayout>
    </div>
  );
}

export default App;
