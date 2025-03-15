
import {  Container, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

import { Link } from 'react-router-dom';
import services from '../services';
// Импортируем массив услуг из файла services.js

// Внутри компонента Services
function Services() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom paddingBottom={10}>
        Наши услуги
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {services.map((service) => (
          <Grid item key={service.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={service.image}
                alt={service.title}
                height="200"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
              <Button
                
                size="large"
                variant="contained"
                color="#fff"
                component={Link}
                to={`/services/${service.id}`}
                sx={{ margin: 2, backgroundColor: 'purple' }}
              >
                Подробнее
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;



