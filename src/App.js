import { Route, Routes } from 'react-router-dom';
import './Styles/App.css';
import HomePage from './Pages/HomePage';
import ResultPage from './Pages/ResultPage';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path='/home' element={<HomePage />} />
                <Route path='/' element={<ResultPage />} />
            </Routes>
            <div className='logo' />
        </div>
    );
}

export default App;
