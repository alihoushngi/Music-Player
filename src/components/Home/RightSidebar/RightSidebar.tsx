import Friend from "../RightSidebarComponents/Friend/Friend";
import PremiumAdvertise from "../RightSidebarComponents/PremiumAdvertise/PremiumAdvertise";
import RecentPlayed from "../RightSidebarComponents/RecentPlayed/RecentPlayed";
import UserProfile from "../RightSidebarComponents/UserProfile/UserProfile";

const RightSidebar = () => {
  return (
    <aside className="flex w-1/6 justify-center">
      <UserProfile />
      <Friend />
      <RecentPlayed />
      <PremiumAdvertise />
    </aside>
  );
};

export default RightSidebar;
