//Arquivo que está por volta de toda aplicação 
//toda importação aqui deixa o pacote disponível para toda aplicação
import 'intl';//pacote de internacionalização de currencys
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import Routes from './src/routes';

export default function App() {
  return (
   <Routes />
  );
}

