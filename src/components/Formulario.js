import React,{useState} from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = () => {

    //f654e32a68c448ebab9c86d46bdb805a

    //Array para pasar opciones de categorías a elegir
    const opcionesNoticias=[
        {value:'general',label:'General'},
        {value:'business',label:'Negocios'},
        {value:'entertaiment',label:'Entretenimiento'},
        {value:'health',label:'Salud'},
        {value:'science',label:'Ciencia'},
        {value:'sports',label:'Deportes'},
        {value:'technology',label:'Tecnología'}
    ]

    //Utilizar useSelect
    const [categoria,Select]=useSelect('general',opcionesNoticias);

    return ( 
    <div className={`row ${styles.buscador}`}>
        <div className="col s12 m8 offset-m2">
            <form>
                <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
                <Select/>
                <div className="input-field col s12">
                    <input
                    type="submit"
                    className={`btn-large amber darken-2 ${styles.btnBlock}`}
                    value="Buscar"
                    />
                </div>
            </form>
        </div>

    </div> 
    );
}
 
export default Formulario;
