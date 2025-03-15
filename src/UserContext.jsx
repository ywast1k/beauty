// Чтобы только зарегистрированные пользователи могли бронировать время, нужно реализовать систему аутентификации с контекстом или состоянием. В
//  этом файле создадим контекст и провайдер для хранения данных о пользователе. В контексте будем хранить данные о пользователе и функции для входа и выхода из системы.

// 
// src/UserContext.jsx
import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
// 
// Создаём контекст
export const UserContext = createContext(null);
// 
// Создаём провайдер контекста
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
// 
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);
// 
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
    
  );

}
// Проверка типов для пропсов
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
// Хук для использования контекста
export const useUser = () => useContext(UserContext);
