import React from 'react';
import styled from 'styled-components';
import blunt from '../assets/blunt2.png'
import Image from 'next/image'

const Button = styled.a`
  line-height: 2;
  margin-top:10px;
  height: 4rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  background-color: #FF813F;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.7rem 3.5rem 0.7rem 3.5rem;
  font-size: 1rem;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  transition: 0.3s all linear;
  font-family: cursive;
  &:hover, &:active, &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color:#FFFFFF;
  }
`;



// const Image = styled.img`
//   height: 34px;
//   width: 35px;
//   margin-bottom: 1px;
//   box-shadow: none;
//   border: none;
//   vertical-align: middle;
// `;

const Text = styled.span`
  margin-left: 15px;
  font-size: 30px;
  vertical-align: middle;
`;

function Blunt() {
  return (
    
    <Button target="_blank" href="https://cash.app/$Smok3Dank420">
      <Image src={blunt} alt=''
      height={35}
      width={35} 
      />
      <Text>Buy me a blunt</Text>
    </Button>
  
  );
}

export default Blunt;