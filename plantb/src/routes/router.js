import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import { useSessionContext } from '../context/session.context';
import UserRouter from './user.router';
import VisitorRouter from './visitor.router';

export const AppRouter = () => {
    const { user } = useSessionContext()

    return (
        <BrowserRouter>
            <NavBar />
            { user.active 
                ? <UserRouter />
                : <VisitorRouter />
            }
            <Footer />
        </BrowserRouter>
    )
}