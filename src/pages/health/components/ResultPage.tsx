import { useState } from "react";
import { useMemo } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { ArrowUpRight } from "lucide-react";

const ResultPage = () => {
  // ---------------- 데이터 ----------------
  const data = {
    body: 70,
    lifestyle: 60,
    diet: 65,
    activity: 75,
    sleep: 55,
  };

  const healthScore = Math.round(
    (data.body +
      data.lifestyle +
      data.diet +
      data.activity +
      data.sleep) / 5
  );

  const chartData = [
    { subject: "신체", value: data.body },
    { subject: "생활", value: data.lifestyle },
    { subject: "식단", value: data.diet },
    { subject: "활동", value: data.activity },
    { subject: "수면", value: data.sleep },
  ];

  const monthlyData = [
    { month: "1월", score: 62 },
    { month: "2월", score: 65 },
    { month: "3월", score: 63 },
    { month: "4월", score: 68 },
    { month: "5월", score: healthScore },
  ];

  // ---------------- 인터랙션 ----------------
  const maxScore = Math.max(...monthlyData.map((v) => v.score));
const minScore = Math.min(...monthlyData.map((v) => v.score));

const prevScore = monthlyData[monthlyData.length - 2]?.score ?? 0;
const diff = healthScore - prevScore;
const getPosition = (score: number) => {
    // 높이 퍼센트 계산
    const range = maxScore - minScore || 1;

    // 아래 여백 조금 주기
    return ((score - minScore) / range) * 120 + 20;
  };

  const recommendations = [
    {
      title: "수면 개선",
      desc: "매일 7시간 이상 수면을 유지하세요",
    },
    {
      title: "유산소 운동",
      desc: "주 3회 30분 걷기를 추천합니다",
    },
    {
      title: "식단 관리",
      desc: "가공식품 섭취를 줄이세요",
    },
  ];

  // ---------------- UI ----------------
  return (
    <div className="px-6 py-8 flex flex-col gap-10">
      {/* 건강 점수 */}
      <div className="text-center">
        <p className="text-gray-500">나의 건강 점수</p>
        <h1 className="text-5xl font-bold text-green-500">
          {healthScore}
        </h1>
        <p className="text-sm text-gray-400">/ 100</p>
      </div>

      {/* 레이더 차트 */}
      <div className="w-full h-64">
        <ResponsiveContainer>
          <RadarChart data={chartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar
              dataKey="value"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* AI 요약 */}
      <div className="bg-gray-100 rounded-2xl p-5">
        <h2 className="font-semibold mb-2">AI 분석</h2>
        <p className="text-gray-700">
          전반적으로 양호하지만 수면과 식습관 개선이 필요합니다.
        </p>
      </div>

      {/* 추천 습관 */}
      <div>
        <h2 className="font-semibold mb-4">추천 건강 습관</h2>

        <div className="flex flex-col gap-3">
          {recommendations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>

              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <ArrowUpRight className="text-green-500 w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 헤더 */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">건강 점수 변화</h2>

        <p className="text-sm text-gray-400">
          이번달은 지난달보다{" "}
          <span
            className={`font-bold ${
              diff >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {Math.abs(diff)}점
          </span>{" "}
          {diff >= 0 ? "올랐어요." : "줄었어요."}
        </p>
      </div>

      {/* 차트 */}
      <div className="bg-white rounded-2xl shadow-sm p-5 overflow-x-auto">
        <div className="relative min-w-[900px] h-64">
          {/* 선 */}
          <svg className="absolute inset-0 w-full h-full">
            {monthlyData.map((item, index) => {
              if (index === monthlyData.length - 1) return null;

              const currentX = 60 + index * 120;
              const nextX = 60 + (index + 1) * 120;

              const currentY = 180 - getPosition(item.score);
              const nextY =
                180 - getPosition(monthlyData[index + 1].score);

              return (
                <line
                  key={index}
                  x1={currentX}
                  y1={currentY}
                  x2={nextX}
                  y2={nextY}
                  stroke="#22c55e"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>

          {/* 점 + 텍스트 */}
          {monthlyData.map((item, index) => {
            const x = 60 + index * 120;
            const y = 180 - getPosition(item.score);

            const isCurrent = index === monthlyData.length - 1;

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: x,
                  top: y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* 점수 */}
                <p
                  className={`text-sm font-semibold mb-2 text-center ${
                    isCurrent ? "text-green-500" : "text-gray-400"
                  }`}
                >
                  {item.score}
                </p>

                {/* 점 */}
                <div
                  className={`w-4 h-4 rounded-full mx-auto ${
                    isCurrent ? "bg-green-500" : "bg-gray-300"
                  }`}
                />

                {/* 월 */}
                <p className="text-sm text-gray-500 mt-4 text-center">
                  {item.month}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 건강 데이터 요약 */}
      <div>
        <h2 className="font-semibold mb-4">건강 데이터 요약</h2>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <p className="text-sm text-gray-500">평균 수면 시간</p>
            <p className="text-xl font-semibold">6.5시간</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <p className="text-sm text-gray-500">습관 달성률</p>
            <p className="text-xl font-semibold text-green-500">
              72%
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <p className="text-sm text-gray-500">운동 횟수</p>
            <p className="text-xl font-semibold">주 3회</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <p className="text-sm text-gray-500">식단 점수</p>
            <p className="text-xl font-semibold">65점</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;