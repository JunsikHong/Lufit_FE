import UserProfileSection from "@/pages/home/components/UserProfileSection";
import TodoSection from "@/pages/home/components/TodoSection";
import ButtonSection from "@/pages/home/components/ButtonSection";
import BannerSection from "@/pages/home/components/BannerSection";
import BoardSection from "@/pages/home/components/BoardSection";
import UnAuthenticationSection from "@/pages/home/components/UnAuthenticationSection";
import { useUser } from "@/api/useUser";

const Home = () => {
  const { data: user } = useUser();
  return (
    <div className="px-4 space-y-6">
      {user ? (
        <>
          <UserProfileSection />
          <TodoSection />
          <ButtonSection />
        </>
      ) : (
        <UnAuthenticationSection />
      )}
      <BannerSection />
      <BoardSection />
    </div>
  );
};

export default Home;