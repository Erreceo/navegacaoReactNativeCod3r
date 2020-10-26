import React from 'react';
import TextoCentral from '../components/TextoCentral';

// import { Container } from './styles';

export default (props) => {
  const numero =
    props.route && props.route.params && props.route.params.numero
      ? props.route.params.numero
      : 0;
  const numero2 =
    props.route && props.route.params && props.route.params.numero2
      ? props.route.params.numero2
      : 0;
  return (
    <TextoCentral corFundo="#9932cd">
      Tela C - {numero} - {numero2}
    </TextoCentral>
  );
};
