import React from 'react';
import { SCCardCustomer, SCCardCustomerIcon, SCCardCustomerAvatar, SCCardCustomerBags } from './styles';
import Baggage from './Baggage.svg';

const colors = ['#f47d34', '#9C27B0', '#3F51B5', '#03A9F4', '#009688', '#8BC34A', '#FBC02D', '#FF9800', '#795548', '#ff7424', '#9E9E9E', '#607D8B'];

const simpleHash = str => {
  const len = str.length;
  let hash = 0;
  for (let i = 1; i <= len; i++) {
    let char = str.charCodeAt(i - 1);
    hash += char * Math.pow(31, len - i);
    hash = hash & hash;
  }
  return hash;
};

/**
 * Función para hashear un contenido y mapearlo de manera reproducible a los valores de un array
 * @param {string} seed 
 * @param {array} data 
 */
const getHash = (seed, data) => {
  let hash = Math.abs(simpleHash(seed)) % data.length;
  return data[hash];
};

export default function CardCustomer({ name, bags }) {
  return (
    <SCCardCustomer>
      <SCCardCustomerAvatar color={getHash(name, colors)}>
      {name.substr(0,1)}
      </SCCardCustomerAvatar>
      {name}
      <SCCardCustomerBags>{bags}</SCCardCustomerBags>
      <SCCardCustomerIcon src={Baggage}></SCCardCustomerIcon>
    </SCCardCustomer>
  )
}
