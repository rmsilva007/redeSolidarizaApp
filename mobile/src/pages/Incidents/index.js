import React from 'react';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';//navegar o usuário p/ a próxima tela em "Ver mais detalhes"
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';//TouchableOpacity = torna qualquer coisa clicável e diminui a opacidade do elemento
                                                                             //FlatList = Scroll da tela
import logoImg from '../../assets/logo.png';
import styles from './styles';

export  default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return(
        <View style= {styles.container}>
            
            <View style={styles.header}>
                
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos.</Text>
                </Text>
           
            </View>
            
            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.description}>Ecolha um dos casos abaixo e salve o dia.</Text>
            
        
            <FlatList
                
                data={[1, 2, 3, 4, 5 , 6]}
                style={styles.incidentList}
                keyExtractor = {incident => String(incident)}
                showsVerticalScrollIndicator={false}//apagando a barra de rolagem lateral da list
                
                renderItem = {() => (        //como irá retornar um código JSX se coloca parêntesis e não chaves
                    <View style={styles.incident}>
                        
                        <Text style={styles.incidentProperty}>REDE:</Text>
                        <Text style={styles.incidentValue}>Greice</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>Cesta Básica urgente.</Text>

                        <Text style={styles.incidentProperty}>Valor:</Text>
                        <Text style={styles.incidentValue}>R$ 120,00</Text>
                        
                        <TouchableOpacity 
                            
                            style = {styles.detailsButton}
                            onPress={ navigateToDetail }>
                            <Text style={styles.detailsButtonText}> Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>
                        
                        </TouchableOpacity>
                    
                    </View>
                )}
            />
        </View>
    );
}
                            






           
                
           
 