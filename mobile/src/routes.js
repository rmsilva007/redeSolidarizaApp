import React from 'react';
import { NavigationContainer } from '@react-navigation/native';//Equivale ao BrowserRouter do React
import { createStackNavigator } from '@react-navigation/stack';//navegação botões

const AppStack = createStackNavigator();
import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
    return (
        //sempre vai em volta de todas as rotas
        <NavigationContainer>
            <AppStack.Navigator screenOptions= {{ headerShown: false }}>
                <AppStack.Screen  name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}



