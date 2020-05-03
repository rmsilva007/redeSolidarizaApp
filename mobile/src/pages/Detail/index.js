import React from 'react';
import {Feather } from '@expo/vector-icons';
import {useNavigation } from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export  default function Detail() {
    const navigation = useNavigation();

    function navigateBack(){//voltando para a página anterior
        navigation.goBack()//propriedade Navigation
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
                        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>REDE:</Text>
                        <Text style={styles.incidentValue}>Greice</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>Cesta Básica urgente.</Text>

                        <Text style={styles.incidentProperty}>Valor:</Text>
                        <Text style={styles.incidentValue}>R$ 120,00</Text>
                        
            </View>

            <View style={styles.contactBox}>
                
                <Text style={styles.heroTitle}> Salve o dia! </Text>
                <Text style={styles.heroTitle}> Seja o herói desse caso. </Text>
                <Text style={styles.container.heroDescription}> Entre em contato: </Text>
                
                <View style={styles.actions}>
                    
                    <TouchableOpacity style={styles.action}onPress={() =>{}}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action}onPress={() =>{}}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                </View>
            
            </View>
        
        </View>
    );
}





               

                



           





