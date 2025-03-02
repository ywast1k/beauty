import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Home from './pages/Home';
import Registration from './pages/Registration';
import BookTime from './pages/BookTime';
import theme from './theme';
import './index.css';
import Footer from './components/Footer.jsx'; // Импорт компонента Footer
import { UserProvider } from './UserContext';
import BrandLogo from './assets/brand-logoAppBar.png'; // Импорт логотипа
import 'aos/dist/aos.css'; // Импорт стилей для анимации
import AOS from 'aos'; // Импорт библиотеки анимации


function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
      <Router>
        <AppBar position="fixed" color="primary">
          <Toolbar style={{ justifyContent: 'space-between' }}>
        <img src={BrandLogo} alt="Логотип бренда" style={{ width: '60px', marginLeft: '20px'}} />
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Li&Ka
            </Typography>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Button color="inherit" component={Link} to="/">Главная</Button>
              <Button color="inherit" component={Link} to="/registration">Регистрация</Button>
              <Button color="inherit" component={Link} to="/book-time">Бронирование времени</Button>
            </div>
          </Toolbar>
        </AppBar>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/book-time" element={<BookTime />} />
          </Routes>
        </div>
        <Footer /> {/* Добавлен компонент Footer */}
      </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;