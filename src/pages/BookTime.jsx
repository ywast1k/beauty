// src/pages/BookTime.jsx

import { useState, useContext, useEffect } from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { UserContext } from '../UserContext';

function BookTime() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs());
  const [procedure, setProcedure] = useState('');
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(UserContext); 

  if (!user) {
    return (
      <Typography variant="h6" sx={{ mt: 4 }}>
        Пожалуйста, войдите или зарегистрируйтесь для бронирования.
      </Typography>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете отправить данные бронирования на сервер
    console.log('Бронирование:', {
      date: selectedDate.format('DD.MM.YYYY'),
      time: selectedTime.format('HH:mm'),
      procedure,
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Бронирование времени
        </Typography>
        <DatePicker
          label="Дата"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          slots={{ textField: TextField }}
          slotProps={{
            textField: {
              fullWidth: true,
              required: true,
              margin: 'normal',
            },
          }}
        />
        <TimePicker
          label="Время"
          value={selectedTime}
          onChange={(newValue) => setSelectedTime(newValue)}
          slots={{ textField: TextField }}
          slotProps={{
            textField: {
              fullWidth: true,
              required: true,
              margin: 'normal',
            },
          }}
        />
        <FormControl fullWidth required margin="normal">
          <InputLabel id="procedure-label">Процедура</InputLabel>
          <Select
            labelId="procedure-label"
            value={procedure}
            label="Процедура"
            onChange={(e) => setProcedure(e.target.value)}
          >
            <MenuItem value="Маникюр">Маникюр</MenuItem>
            <MenuItem value="Педикюр">Педикюр</MenuItem>
            <MenuItem value="Ресницы">Ресницы</MenuItem>
            <MenuItem value="Брови">Брови</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Забронировать
        </Button>
      </Box>
    </LocalizationProvider>
  );
}

export default BookTime;