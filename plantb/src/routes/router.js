import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/navbar/navbar.component';
import Footer from '../components/footer/footer.component';
import { useSessionContext } from '../context/session.context';
import UserRouter from './user.router';
import VisitorRouter from './visitor.router';

export const PlantBRouter = () => {
    const { user } = useSessionContext()

    return (
        <Router>
            <NavBar />
            { user.active
                ? <UserRouter />
                : <VisitorRouter />
            }
            <Footer />
        </Router>
    )
}