import { useState } from "react";
import ToggleButton from "@/pages/common/ui/ToggleButton";

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    push: true,
    marketing: false,
    comment: true,
    like: true,
    follow: false,
  });

  const toggle = (key: string) => {
    setSettings((prev: any) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="py-4 space-y-6">
      <div className="bg-white rounded-xl p-4 ">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-base">전체 알림</p>
            <p className="text-sm text-gray-500">
              모든 알림을 켜거나 끌 수 있어요
            </p>
          </div>
          <ToggleButton
            isOn={settings.push}
            onClick={() => toggle("push")}
          />
        </div>
      </div>
      <div className="bg-white rounded-xl p-4  space-y-4">
        <p className="font-bold text-base">활동 알림</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">댓글</p>
            <p className="text-xs text-gray-400">
              내 게시글에 댓글이 달리면 알림
            </p>
          </div>
          <ToggleButton
            isOn={settings.comment}
            onClick={() => toggle("comment")}
            disabled={!settings.push}
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">좋아요</p>
            <p className="text-xs text-gray-400">
              좋아요를 받으면 알림
            </p>
          </div>
          <ToggleButton
            isOn={settings.like}
            onClick={() => toggle("like")}
            disabled={!settings.push}
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">팔로우</p>
            <p className="text-xs text-gray-400">
              새로운 팔로워가 생기면 알림
            </p>
          </div>
          <ToggleButton
            isOn={settings.follow}
            onClick={() => toggle("follow")}
            disabled={!settings.push}
          />
        </div>
      </div>
      <div className="bg-white rounded-xl p-4 ">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-base">마케팅 알림</p>
            <p className="text-sm text-gray-500">
              이벤트 및 혜택 정보를 받아볼 수 있어요
            </p>
          </div>
          <ToggleButton
            isOn={settings.marketing}
            onClick={() => toggle("marketing")}
            disabled={!settings.push}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;