const Loading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white space-y-4">
            <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-black animate-[loading_1.2s_infinite]" />
            </div>
            <p className="text-sm text-gray-500">
                데이터를 불러오는 중이에요
            </p>
            <style>
                {`
          @keyframes loading {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 100%; }
          }
        `}
            </style>
        </div>
    );
};

export default Loading;