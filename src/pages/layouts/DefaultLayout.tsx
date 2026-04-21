import Header from '@/pages/common/Header';
import Footer from '@/pages/common/Footer';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <div className='layout'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout; 