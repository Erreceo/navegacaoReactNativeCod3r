import React from 'react';
import TextoCentral from '../components/TextoCentral';

// import { Container } from './styles';

export default (props) => {
  return (
    <TextoCentral corFundo="#9932cd">
      Tela C - {props.route.params.numero} - {props.route.params.numero2}
    </TextoCentral>
  );
};
