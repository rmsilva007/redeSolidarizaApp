import React, { useState, useEffect } from 'react';//useEffect dispara uma determinada funçaõ em algum momento específico do componente
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Profile() {
    const[incidents, setIncidents] = useState([]);//usando o estado inicial  do componente para gravar as informações
    const ongId = localStorage.getItem('ongId');//ongName lá do profile que esta no storage do navegador
    const ongName = localStorage.getItem('ongName');//ongName lá do profile que esta no storage do navegador
    const history = useHistory();
    useEffect(() => {
        api.get('profile', { //função para carregar os casos da rota profile
            headers: {//passando qual pessoa esta logada, informação essa que vai através de um header
                Authorization: ongId,//ongId do local storage
            }
        }).then(response => {//then para pegar os dados
            setIncidents(response.data);//array de incidents
        })
    }, [ongId]); // a função use effect será carregada toda vez que este ongId mudar 

   async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {//pessoa que esta deletando um incidente
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));//filtrando somente os elementos que não foram deletados
            
        } catch (error) {
            alert('Erro ao deletar caso, tente novamente.');
            
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    
    return (

        <div className='profile-container'>
            <header>
                <img src={logoImg} alt="Rede Solidária" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            
            <h1>Casos cadastrados</h1>
            
            <ul>
                {incidents.map(incident => (//percorrendo os casos
                //parêntesis para retornar diretamente sem precisar do return
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>
                        
                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>
                        
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
 }
            
                    

                

                












