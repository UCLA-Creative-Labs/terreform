import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from './Home';

const Centered = styled.div`
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;

  & p {
    margin-top: 40vh;
    transition: opacity 0.5s;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  padding: 10px 20px;
  margin-top: 40vh;
  margin-left: 80%;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: all 0.4s;

  &:hover {
    color: #00c853;
    background-color: #eee;
    cursor: pointer;
  }
`;

const introText = [
  'Welcome to Terreform.',
  'By 2020, sea levels will rise between 1 to 4 feet worldwide.',
  'No more freshwater is available in Australia.',
  'Bananas are going extinct.',
  'There are currently fires in Westwood.',
  '33 penguins lose their homes every other third second.',
  "The world's largest glacier will disappear in 50 years."
];

const Intro = () => {
  const [count, setCount] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const cycle = () => {
    setOpacity(0);
    setTimeout(() => {
      setCount((count) => (count == introText.length - 1 ? 1 : count + 1));
      setOpacity(1);
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(cycle, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Centered>
      <p style={{ opacity }}>{introText[count]}</p>
      <StyledLink to="/home">Skip</StyledLink>
    </Centered>
  );
};

export default Intro;
