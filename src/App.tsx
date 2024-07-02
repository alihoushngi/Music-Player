import "./App.css";
import DesktopLayout from "./components/Base/DesktopLayout/DesktopLayout";
import AdvertiseSection from "./components/Home/Main/Advertise/Advertise";
import MostPopularPlayList from "./components/Home/Main/MostPopularPlayList/MostPopularPlayList";
import PopularMusic from "./components/Home/Main/PopularMusic/PopularMusic";
import WelcomeSection from "./components/Home/WelcomeSection/WelcomeSection";

function App() {
  return (
    <div className="flex justify-start min-h-screen">
      <DesktopLayout>
        <main className="w-[60%] px-5 py-9">
          <WelcomeSection />
          <AdvertiseSection />
          <MostPopularPlayList />
          <PopularMusic />
        </main>
      </DesktopLayout>
    </div>
  );
}

export default App;
