import UserProfileSection from "@/pages/home/components/UserProfileSection";
import TodoSection from "@/pages/home/components/TodoSection";
import ButtonSection from "@/pages/home/components/ButtonSection";
import BannerSection from "@/pages/home/components/BannerSection";
import BoardSection from "@/pages/home/components/BoardSection";

const Home = () => {
  return (
    <div className="px-4 py-6 space-y-6">
      <UserProfileSection />
      <TodoSection />
      <ButtonSection />
      <BannerSection />
      <BoardSection />
    </div>
  );
};

export default Home;