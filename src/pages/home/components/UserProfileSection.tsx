import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const UserProfileSection = () => {
    const messages = [
        '오늘도 건강 챙기고 계신가요?',
        '물 한 잔 마셔보세요 💧',
        '가볍게 스트레칭 해보세요',
        '수면은 충분하셨나요?',
    ];

    const score = 78;
    const grade = 'GOLD';

    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
            <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-xl">
                    👤
                </div>
                <div>
                    <div className="font-semibold text-lg">홍준식 님</div>
                    <div className="h-5 mt-1">
                        <Swiper
                            direction="vertical"
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            slidesPerView={1}
                            allowTouchMove={false}
                            className="h-5"
                        >
                            {messages.map((msg, i) => (
                                <SwiperSlide key={i}>
                                    <div className="text-sm text-gray-500 leading-5">
                                        {msg}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center text-sm mb-2">
                    <span className="font-semibold text-yellow-500">{grade}</span>
                    <span className="font-semibold">{score}점</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${score}%` }}
                    />
                </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 pt-2 border-t">
                <div className="cursor-pointer hover:text-black">크레딧 120</div>
                <div className="cursor-pointer hover:text-black">쿠폰 / 패스</div>
            </div>
        </div>
    );
};

export default UserProfileSection;