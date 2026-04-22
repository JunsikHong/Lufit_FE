import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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
    ];

    return (
        <div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={12}
                slidesPerView={1.1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-2xl p-5 flex items-center justify-between h-full">
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