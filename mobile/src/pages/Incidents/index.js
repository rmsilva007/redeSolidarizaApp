import React, {useState, useEffect} from 'react';//useState = para pegar as informações dentro de um estado//useEffect = carregar uma informação assim que o componente é exibido na tela.
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';//navegar o usuário p/ a próxima tela em "Ver mais detalhes"
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';//TouchableOpacity = torna qualquer coisa clicável e diminui a opacidade do elemento
import api from '../../services/api';                                                                           //FlatList = Scroll da tela

import logoImg from '../../assets/logo.png';
import styles from './styles';


 export  default function Incidents() {
    //criando estados 
    const [incidents, setIncidents] = useState([]);//inincia-se o estado com o mesmo tipo de informação que será preenchida depois
    const [total, setTotal] = useState(0);//total de casos iniciais
    const [page, setPage] = useState(1);//iniciando na página 1
    const [loading, setLoading] = useState(false);//controlando para que estados de casos já carregados no scrolling não sejam carregados novamente
    
    const navigation = useNavigation();
    

    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents() {
        if (loading) {//evitar que uma requisição ja feita se repita
            return;
        }

        if (total > 0 && incidents.length === total) {//total de registros do banco
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: {page}
        });
        //anexando dois vetores no React
        setIncidents([...incidents, ...response.data]);//... = copiando todos os valores //.data = são os dados que estão na api
        setTotal(response.headers['x-total-count']);//total de casos: que vai no header do response no atributo x-total-count
        setPage(page + 1);// estado de page começa com 1, chegando aqui pula para a próxima página 
        setLoading(false);
        
    }

    //função que será disparada quando array mudar
    useEffect(() => {
        loadIncidents();
    }, []);

    return(
        <View style= {styles.container}>
            
            <View style={styles.header}>
                
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total}</Text>
                </Text>
           
            </View>
            
            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.description}>Ecolha um dos casos abaixo e salve o dia.</Text>
            
        
            <FlatList
                
                data={incidents}
                style={styles.incidentList}
                keyExtractor = {incident => String(incident.id)}
                showsVerticalScrollIndicator={false}//apagando a barra de rolagem lateral da list
                onEndReached = {loadIncidents}//propriedade disparada quando o usuário chega no final da lista
                onEndReachedThreshold= { 0.2 }//quantos por cento do final da página o usuário precisa estar para que a página seja carregada

                            
                renderItem = {({ item: incident }) => (        //como irá retornar um código JSX se coloca parêntesis e não chaves
                    <View style={styles.incident}>
                        
                        <Text style={styles.incidentProperty}>REDE:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>Valor:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                            .format(incident.value)}</Text>
                        
                        <TouchableOpacity 
                            
                            style = {styles.detailsButton}
                            onPress={ () => navigateToDetail(incident) }>
                            <Text style={styles.detailsButtonText}> Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#006400"/>
                        
                        </TouchableOpacity>
                    
                    </View>
                )}
            />
        </View>
    );
}
                            






           
                
           
 