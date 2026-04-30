interface Notification {
  title: string;
  description?: string;
  time: string;
  isRead?: boolean;
}

const NotificationList = () => {
    const data: Notification[] = [
    {
      title: "오늘 운동 목표 달성 💪",
      description: "30분 러닝을 완료했어요!",
      time: "방금 전",
      isRead: false,
    },
    {
      title: "새로운 챌린지 오픈",
      description: "이번 주 챌린지에 참여해보세요",
      time: "1시간 전",
      isRead: true,
    },
    {
      title: "새로운 챌린지 오픈",
      description: "이번 주 챌린지에 참여해보세요",
      time: "1시간 전",
      isRead: true,
    },
    {
      title: "새로운 챌린지 오픈",
      description: "이번 주 챌린지에 참여해보세요",
      time: "1시간 전",
      isRead: true,
    },
  ];

    return (
        <div>
            {data.map((item, idx) => (
                <div
                    key={idx}
                    className={`w-full px-4 py-3 rounded-2xl flex items-start gap-3 cursor-pointer transition
          ${item.isRead ? "bg-white" : "bg-green-50"}
          hover:bg-gray-50`}
                >
                    {!item.isRead && (
                        <div className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0" />
                    )}
                    <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">
                            {item.title}
                        </div>
                        {item.description && (
                            <div className="text-xs text-gray-500 mt-1">
                                {item.description}
                            </div>
                        )}
                        <div className="text-[11px] text-gray-400 mt-2">
                            {item.time}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NotificationList;