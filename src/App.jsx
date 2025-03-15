import { useEffect } from "react"; // Добавлен импорт useEffect
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import BookTime from "./pages/BookTime";
import theme from "./theme";
import "./index.css";
import Footer from "./components/Footer.jsx"; // Импорт компонента Footer
import { UserProvider } from "./UserContext";
import BrandLogo from "./assets/brand-logoAppBar.png"; // Импорт логотипа
import "aos/dist/aos.css"; // Импорт стилей для анимации
import AOS from "aos"; // Импорт библиотеки анимации
// import ContactPage from './pages/ContactPage'; // Импорт компонента ContactPage

import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BookIcon from "@mui/icons-material/Book";

import services from "./services";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
 
  const isMobile = useMediaQuery("(max-width:768px)");
  // Инициализация AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации в миллисекундах
      once: true, // Анимация выполняется только один раз при прокрутке
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <Router>
          <AppBar position="fixed" color="primary">
            <Toolbar style={{ justifyContent: "space-between" }}>
              <img
                src={BrandLogo}
                alt="Логотип бренда"
                style={{ width: "60px", marginLeft: "20px" }}
              />
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                Li&Ka
              </Typography>
              <div style={{ display: "flex", gap: "10px" }}>
                {isMobile ? (
                  <>
                    <IconButton
                      color="inherit"
                      component={Link}
                      to="/"
                      aria-label="Главная"
                      title="Главная"
                    >
                      <HomeIcon />
                    </IconButton>
                    <IconButton
                      color="inherit"
                      component={Link}
                      to="/registration"
                      aria-label="Регистрация"
                      title="Регистрация"
                    >
                      <PersonAddIcon />
                    </IconButton>
                    <IconButton
                      color="inherit"
                      component={Link}
                      to="/book-time"
                      aria-label="Бронирование"
                      title="Бронирование"
                    >
                      <BookIcon />
                    </IconButton>
                  </>
                ) : (
                  <>
                    <Button color="inherit" component={Link} to="/">
                      Главная
                    </Button>
                    <Button color="inherit" component={Link} to="/registration">
                      Регистрация
                    </Button>
                    <Button color="inherit" component={Link} to="/book-time">
                      Бронирование времени
                    </Button>
                     {/* <Button color="inherit" component={Link} to="/ServiceDetails">
                      Наш сервис
                    </Button> */}
                    </>
                )}
              </div>
            </Toolbar>
          </AppBar>
          <Toolbar /> {/* Добавляем этот компонент для создания отступа */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/book-time" element={<BookTime />} />
            <Route path="/services/:id" element={<ServiceDetails services={services} />} /> 
            
          </Routes>
          <Footer /> {/* Добавлен компонент Footer */}
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
