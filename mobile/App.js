// Início de nossa aplicação em React Native

// Utilizado para conversão de valores monetarios em R$#,00 
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}