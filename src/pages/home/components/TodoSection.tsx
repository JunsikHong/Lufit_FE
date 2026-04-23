import Button from "@/pages/common/Button";

const TodoSection = () => {
    const hasRoutine = true;

    const todos = [
        { text: '물 2L 마시기', done: false },
        { text: '10분 스트레칭', done: true },
        { text: '단백질 섭취', done: false },
    ];

    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-4">
            {!hasRoutine ? (
                <div className="flex items-center justify-between">
                    <div>
                        <div className="font-semibold">건강 습관 만들기</div>
                        <div className="text-sm text-gray-500 mt-1">
                            지금 건강 습관을 만들어보세요!
                        </div>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xl hover:scale-105 active:scale-95 transition">
                        +
                    </button>
                </div>
            ) : (
                <div>
                    <div className="flex justify-between items-center mb-3">
                        <div className="font-semibold">오늘의 건강 습관</div>
                        <Button className="text-xs text-gray-400 cursor-pointer">
                            전체보기
                        </Button>
                    </div>
                    <div className="space-y-2">
                        {todos.map((todo, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2"
                            >
                                <div className="flex items-center gap-2">
                                    <div
                                        className={`w-4 h-4 rounded border flex items-center justify-center text-xs
                      ${todo.done ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'}
                    `}
                                    >
                                        {todo.done && '✓'}
                                    </div>
                                    <span
                                        className={`text-sm ${todo.done ? 'line-through text-gray-400' : ''
                                            }`}
                                    >
                                        {todo.text}
                                    </span>
                                </div>
                                <span className="text-xs text-gray-400">
                                    {todo.done ? '완료' : ''}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            )}

        </div>
    );
};

export default TodoSection;