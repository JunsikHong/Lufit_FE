import Header from '@/pages/common/Header';
import Footer from '@/pages/common/Footer';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <div className='layout flex flex-col min-h-screen items-center'>
            <div className='w-full max-w-[750px]'>
                <Header />
                <main className='min-h-[calc(100vh-120px)]'>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout; 