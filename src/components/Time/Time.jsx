import React, { useState, useEffect } from 'react';

const Time = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const tempoEscopo = "31 Jul 2024";

  useEffect(() => {
    const calculateTimeLeft = () => {
      const escopo = new Date(tempoEscopo);
      const hoje = new Date();
      const segundoTotal = (escopo - hoje) / 1000;

      const days = Math.floor(segundoTotal / 60 / 60 / 24);
      const hours = Math.floor((segundoTotal / 60 / 60) % 24);
      const minutes = Math.floor((segundoTotal / 60) % 60);
      const seconds = Math.floor(segundoTotal % 60);

      setTimeLeft({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [tempoEscopo]);

  const textFormat = (tempo) => {
    return tempo < 10 ? `0${tempo}` : tempo;
  };

  return (
    <>
      <h1>Promoção acaba em:</h1>
      <div className="time">
        <p><span id="dia">{textFormat(timeLeft.days)}</span> Dias </p>
        <p><span id="hora">{textFormat(timeLeft.hours)}</span> Horas </p>
        <p><span id="minuto">{textFormat(timeLeft.minutes)}</span> Minutos </p>
        <p><span id="segundo">{textFormat(timeLeft.seconds)}</span> Segundos </p>
      </div>
    </>
  );
};

export { Time };
