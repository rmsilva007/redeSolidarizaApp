import React, {useState} from 'react';//useState será usado para ciar um estado para cada um dos inputs
import { Link,useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo5.svg';


export default function Register() {
   const[name, setName] = useState('');
   const[email, setEmail] = useState('');
   const[whatsapp, setWhatsapp] = useState('');
   const[city, setCity] = useState('');
   const[uf, setUf] = useState('');
   const history = useHistory();//history é para fazer a navegação através de uma função javascript quando não é possível colocar o link do react-router-dom
   
   //buscando os dados do input e enviando para api
    async function handleRegister(e) {//função que será disparada assim que o formulário der um submit e que dá acesso aos submits do cliente
      e.preventDefault();//evita o comportamento padrão de carregamento da página. 
      
      const data = {
         name,
         email,
         whatsapp,
         city,
         uf,
      };
      
      try {
         const response = await api.post('myong', data);//enviando a rota e os dados que serão enviados para  api
         alert(`Este é o seu ID de acesso: ${response.data.id}`);
         history.push('/');
      
      } catch (err) {
         alert('Erro no cadastro, tente novamente.');
      }
}   

   return (
      //div register-conteiner é o register inteiro
      //div content é a borda cinza em volta do conteúdo
      //section é o lado esquerdo da content
      //div input-group é porque estes inputs terão que ficar um ao lado do outro
      //A primeira chave{{}} é um código javascript a segunda chave aninhada à primeira é de um objeto javascript
      <div className="register-container">

         <div className="content">

            <section>
               <img src={logoImg} alt="Rede Solidária" />
               <h1>Cadastro</h1>
               <p>Faça seu cadastro, entre na plataforma e crie a sua rede solidária</p>

               <Link className="back-link" to="/">
                  <FiArrowLeft size={16} color="E02041" />
                    Não tenho cadastro
               </Link>
            </section>

            <form onSubmit={handleRegister}>
               
               <input 
                  placeholder="Nome da Rede" 
                  value={name}
                  onChange={e => setName(e.target.value)} //colocando o valor do input dentro de name que esta armazenando o estado da variável.             
               />
               <input 
                  type="email" 
                  placeholder="E-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)} 
               />
               <input 
                   placeholder="WhatsApp" 
                   value={whatsapp}
                   onChange={e => setWhatsapp(e.target.value)}
               />
               
               <div className="input-group">
                  <input 
                     placeholder="Cidade"
                     value={city}
                     onChange={e => setCity(e.target.value)}
                  />
                        
                  <input 
                     placeholder="UF" 
                     style={{ width: 80 }} 
                     value={uf}
                     onChange={e => setUf(e.target.value)}
                  />
                     
               </div>

               <button className="button" type="submit">Cadastrar</button>
            </form>
         </div>
      </div>
   );
      
}


