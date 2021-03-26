import React from 'react';
import style from './HomePage.module.css';

const HomePage = () => {
  console.log('Hello');
  return (
    <div className={style.wraper}>
      <h2 className={style.title}>Вітаємо Вас на сайті😃</h2>
      <h1 className={style.h1}>📚Phonebook©️</h1>
    </div>
  );
};

export default HomePage;
