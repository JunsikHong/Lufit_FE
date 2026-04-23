import { useState } from "react";
import Header from '@/pages/common/Header';
import Footer from '@/pages/common/Footer';
import Menu from "@/pages/common/Menu";
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='layout flex flex-col min-h-screen items-center'>
            <div className='w-full max-w-[750px] relative'>
                {isMenuOpen && (
                    <Menu onClose={() => setIsMenuOpen(false)} />
                )}
                <Header onMenuOpen={() => setIsMenuOpen(true)} />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout; 