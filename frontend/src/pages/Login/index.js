import React, {useState} from 'react';

//Propriedade Link aplica o conceito de Single Page Application
import { Link, useHistory } from 'react-router-dom'

import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';

import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

export default function Login() {
    const [id, setId] = useState('');
    const history = useHistory();


   async function handleLogin(e) {
        e.preventDefault();//recomendável em todo formulario do react para evitar o redirect

        try {
            const response = await api.post('sessions', { id });
            localStorage.setItem('ongId', id);//salvando estes valores no storage do navegador p/ o mesmo estar disponível em toda a aplicação
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (error) {
            alert('Falha no login, tente novamente.');
        }
    }
            


    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Rede Solidaria"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input 
                    placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button className="button"  type="submit">Entrar </button>

                    <Link className= "back-link" to="/register"> 
                    <FiLogIn size = {16} color="#E02041" />
                    Não tenho cadastro 
                    </Link>
                </form>

            </section>
         
         <img src={heroesImg} alt="Heroes" />
        </div>
            
    );
}