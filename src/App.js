import { Route, Routes, useNavigate } from 'react-router-dom';
import './Styles/App.css';
import HomePage from './Pages/HomePage';
import ResultPage from './Pages/ResultPage';

function App() {
    const navigate = useNavigate();
    return (
        <div className="app">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/result' element={<ResultPage />} />
            </Routes>
            <div className='logo' onClick={() => navigate('/')} />
        </div>
    );
}

export default App;
