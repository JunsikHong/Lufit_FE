import { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(
    monthlyData.length - 1 // 기본 이번달 활성화
  );

  const diff = healthScore - monthlyData[monthlyData.length - 2].score;

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

      {/* 점수 변화 */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold">건강 점수 변화</h2>
          <p className="text-sm text-green-500">
            이번달은 지난달보다 {diff}점 올랐어요
          </p>
        </div>

        <div className="w-full h-64 bg-white rounded-2xl p-4 shadow-sm">
          <ResponsiveContainer>
            <LineChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis hide />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="score"
                stroke="#22c55e"
                strokeWidth={2}
                isAnimationActive
                dot={(props: any) => {
                  const { cx, cy, index, value } = props;
                  const isActive = index === activeIndex;

                  return (
                    <g
                      onClick={() => setActiveIndex(index)}
                      style={{ cursor: "pointer" }}
                    >
                      {/* 점 */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isActive ? 6 : 4}
                        fill={isActive ? "#22c55e" : "#d1d5db"}
                      />

                      {/* 점수 */}
                      <text
                        x={cx}
                        y={cy - 10}
                        textAnchor="middle"
                        fontSize={12}
                        fill={isActive ? "#22c55e" : "#9ca3af"}
                      >
                        {value}
                      </text>
                    </g>
                  );
                }}
              />
            </LineChart>
          </ResponsiveContainer>
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