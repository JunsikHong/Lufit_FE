
const BannerSection = () => {
  return (
    <section className="w-full">
      <div className="w-full h-14 rounded-2xl bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-between px-4 shadow-sm">
        <div className="text-white text-sm font-medium">
          지금 루핏 챌린지 참여하고 보상 받기 💪
        </div>
        <button className="text-white text-xs font-semibold bg-white/20 px-3 py-1 rounded-lg hover:bg-white/30 transition">
          참여하기
        </button>
      </div>
    </section>
  );
};

export default BannerSection;