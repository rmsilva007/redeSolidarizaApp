import React from 'react';
import {Feather } from '@expo/vector-icons';
import {useNavigation, useRoute } from '@react-navigation/native';//useRoute serve para pegar informação específicas da página atual do app
import {View, Text, Image, TouchableOpacity, Linking } from 'react-native';//Linking para conectar com o WhatsApp
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';


import styles from './styles';

export  default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    
    const incident = route.params.incident;//incident que vem lá do navigateToDetail function da pasta Incidents
    
    const message = `Olá ${incident.name}, estou entrando em contato, pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
    .format(incident.value)}.`;

    
    function navigateBack(){//voltando para a página anterior
        navigation.goBack()//propriedade Navigation
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}}`,
            recipients: [incident.email],
            body: message, 

        })
    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    
    return(
        <View  style ={styles.container}>
                
            <View style={styles.header}>
                <Image source={logoImg}/>
                
                <TouchableOpacity onPress= { navigateBack }>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            
            </View>
            
            <View style={styles.incident}>
                                                       {/* anexando duas estilizações para uma mesma tag */}
                <Text style={[styles.incidentProperty, {marginTop: 0 }]}>REDE:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>
                {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                .format(incident.value)}</Text>
                
            </View>

            <View style={styles.contactBox}>
                
                <Text style={styles.heroTitle}> Salve o dia! </Text>
                <Text style={styles.heroTitle}> Seja o herói desse caso. </Text>
                <Text style={styles.container.heroDescription}> Entre em contato: </Text>
                
                <View style={styles.actions}>
                    
                    <TouchableOpacity style={styles.action}onPress={sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action}onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity> 

                </View>
            
            </View>
        
        </View>
    );
}





               

                



           





