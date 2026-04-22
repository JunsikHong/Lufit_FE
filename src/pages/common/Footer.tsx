const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 px-6 py-10">
      
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 text-sm text-gray-600">
        
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">About</h3>
          <ul className="space-y-2">
            <li>서비스 소개</li>
            <li>팀</li>
            <li>채용</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Support</h3>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>문의하기</li>
            <li>이용약관</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Contact</h3>
          <ul className="space-y-2">
            <li>Email: support@healthapp.com</li>
            <li>Tel: 1234-5678</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-gray-400 mt-10">
        © 2026 HealthApp. All rights reserved.
      </div>
      
    </footer>
  );
};

export default Footer;