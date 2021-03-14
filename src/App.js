import React from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Header from './components/layout/Header';



class App extends React.Component { 
  render() { 
    return ( 
          <Header/>
        ); 
  } 
} 

export default App;
