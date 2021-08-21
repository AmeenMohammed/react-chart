import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePickerComponent from '../components/DatePicker';
import { formatDate } from '../utils/functions';

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  function getAnswers(dateFrom, dateTo) {
    axios.get(`${process.env.REACT_APP_ANSWERS_URL}?date_from=${formatDate(dateFrom)}&date_to=${formatDate(dateTo)}`, {
      headers: {
        authorization: 'Bearer SLSmxK17vjRInEWIiFQjwE1QIDfeSM',
      },
    })
      .then((res) => {
        setAnswers(res.data);
      }).catch((err) => {
        console.error(`Something went wrong !${err}`);
      });
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_QUESTIONS_URL}`)
      .then((res) => {
        setQuestions(res.data);
      }).catch((err) => {
        console.error(`Something went wrong !${err}`);
      });
    getAnswers(startDate, endDate);
  }, [startDate, endDate]);

  const handleDateChange = (date, type) => {
    if (type === 'from') {
      setStartDate(date);
      getAnswers(date, endDate);
    } else {
      setEndDate(date);
      getAnswers(startDate, date);
    }
  };

  console.log(questions);
  console.log(answers);
  return (
    <>
      <DatePickerComponent datevalue={startDate} changeDate={(date) => handleDateChange(date, 'from')} dateLabel="Date from: " />
      <DatePickerComponent datevalue={endDate} changeDate={(date) => handleDateChange(date, 'to')} dateLabel="Date to: " />
    </>
  );
};

export default Home;
