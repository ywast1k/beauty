import Typography from '@mui/material/Typography';
import PageContainerFullScreen from '../components/Navigation';
function Home() {
  return (
    <div>
      <Typography variant="h4">Добро пожаловать на наш сайт!</Typography>
      <Typography variant="body1">
        Мы предоставляем услуги высокого качества для наших клиентов.
      </Typography>
      <PageContainerFullScreen />
    </div>
  );
}

export default Home;