import { useState } from 'react';

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className="w-full border-t  bg-gray-50">
      <div className="mx-auto px-4 py-5 text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <div
            onClick={() => setOpen(!open)}
            className="font-bold text-sm text-black cursor-pointer"
          >
            LUFIT
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 text-gray-500 hover:text-black transition"
          >
            <span
              className={`transition-transform duration-200 ${open ? 'rotate-180' : ''
                }`}
            >
              ▼
            </span>
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 mb-3 ${open ? 'max-h-40' : 'max-h-0'
            }`}
        >
          <div className="text-gray-500 leading-relaxed space-y-1 pt-1">
            <div>회사명: 루핏 (LUFIT)</div>
            <div>대표: 홍준식</div>
            <div>사업자등록번호: 123-45-67890</div>
            <div>주소: 서울특별시</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-xs mb-1">
          <button className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            개인정보처리방침
          </button>
          <button className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            이용약관과정책
          </button>
          <button className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            자주묻는질문
          </button>
        </div>
        <div className="text-gray-400 pt-1 mb-1">
          문의전화 : 1588-1600 | 문의메일 : lufitkorea@lufit.com
        </div>
        <div className="text-gray-400 pt-1">
          Copyright © 2026 LUFIT All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;