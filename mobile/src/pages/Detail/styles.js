import { StyleSheet } from 'react-native'
 import Constants from  'expo-constants';

export default StyleSheet.create ({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 10,
    }, 

    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {//quadrado branco de cada caso
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFFF',
        marginBottom: 16,//distanciando os casos
        marginTop: 48,
    },

    incidentProperty: {//Títulos dos casos
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentValue: {//valores dos casos
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFFF',
        marginBottom: 16,//distanciando os casos
        
    },
    
    heroTitle: {//salve o dia seja o herói deste caso
        fontWeight: 'bold',
        fontSize: 20,
        color: "#13131a",
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: "#737380",
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {//cada um dos botões
        backgroundColor: "#e02041",
        borderRadius: 8,
        height: 50,
        width: "48%",
        justifyContent: 'center',//alinha texto vertical
        alignItems: 'center'//alinha texto horizontal
    },

    actionText: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: 'bold'
    }
});



