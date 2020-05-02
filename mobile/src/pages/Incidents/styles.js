import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal:24, 
        paddingTop: Constants.statusBarHeight + 10,//statusBar mais 20px
    },

    header: {
        flexDirection: 'row',//coloca os elementos um ao lado do outro
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {//Bem Vindo
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: "#13131a",
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: "#737380"
    },

    incidentList: {
        marginTop: 32,
    },
    
    incident: {//quadrado branco de cada caso
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFFF',
        marginBottom: 16,//distanciando os casos
    },

    incidentProperty: {//Títulos dos casos
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {//valores dos casos
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',//direção do flex: coluna
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {//Texto ver mais detalhes
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    },


});