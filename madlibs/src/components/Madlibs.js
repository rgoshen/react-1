import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import fetchText from '../data/fetchText';
import MadLibsForm from './MadLibsForm';

export const Madlibs = () => {
  const [madlibs, setMadlibs] = useState({});
  const [userInput, setUserInput] = useState({});
  const [errorIds, setErrorIds] = useState([]);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const data = fetchText;
    setMadlibs({ ...data });

    console.log('====================================');
    console.log(data);
    console.log('====================================');

    data.blanks.map((blank, index) => {
      setUserInput((prevUserInput) => ({
        ...prevUserInput,
        [`${index}-${blank}`]: '',
      }));
    });
  }

  //save user input
  function handleUserInput(event) {
    const key = event.target.id;
    const value = event.target.value;
    setUserInput({ ...userInput, [key]: value });
  }

  //submit user input
  function formSubmitHandler(event) {
    event.preventDefault();
    //show missing data alerts
    let newList = [];
    for (const key in userInput) {
      if (userInput[key] === '') {
        newList.push(key);
      }
    }
    setErrorIds([...newList]);

    //validate form
    if (newList.length === 0) {
      setFormIsValid(true);
    }
  }

  //generate new story
  function newStory() {
    setFormIsValid(false);
    getData();
  }

  return (
    <>
      <Header />
      {!formIsValid ? (
        <MadLibsForm
          blanks={madlibs.blanks}
          handleUserInput={handleUserInput}
          userInput={userInput}
          formSubmitHandler={formSubmitHandler}
          errorIds={errorIds}
        />
      ) : (
        <h2>{madlibs.title}</h2>
      )}
    </>
  );
};
