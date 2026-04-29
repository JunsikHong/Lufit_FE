import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const BannerSection = () => {
    const banners = [
        {
            title: '오늘의 건강 팁',
            desc: '물 2L 마시기 챙기셨나요?',
            emoji: '💧',
        },
        {
            title: '수면 체크',
            desc: '어제 7시간 이상 주무셨나요?',
            emoji: '😴',
        },
        {
            title: '운동 추천',
            desc: '가볍게 10분 스트레칭 해보세요',
            emoji: '🧘‍♂️',
        },
        {
            title: '영양补给',
            desc: '오늘은 채소 많이 드셨나요?',
            emoji: '🥗',
        },
        {
            title: '스트레스 관리',
            desc: '심호흡 한 번 해보세요',
            emoji: '🫁',
        },
        {
            title: '걸음 수 체크',
            desc: '오늘 5,000보 걸으셨나요?',
            emoji: '👟',
        },
    ];


    return (
        <div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={12}
                slidesPerView={1.2}
                centeredSlides={true}
                grabCursor={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={600}
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index} style={{ width: 'calc((100% - 48px) / 1.2)' }}>
                        <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-2xl p-5 flex items-center justify-between h-full min-h-[100px]">
                            <div>
                                <div className="text-lg font-semibold">{banner.title}</div>
                                <div className="text-sm text-gray-600 mt-1">
                                    {banner.desc}
                                </div>
                            </div>
                            <div className="text-3xl">{banner.emoji}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSection;