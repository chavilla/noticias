import React,{Fragment} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>
      <Header
      title="Buscador de Noticias"
      />
      <div className="container white">
        <Formulario></Formulario>
      </div>
    </Fragment>
  
  );
}

export default App;
