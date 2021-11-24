import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';
import { Tela3 } from '../pages/Tela3';

export type RootStackParamList = {
	SignIn: undefined;
	Home: undefined;
	Tela3: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const AuthRoutes = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name='SignIn' component={SignIn} />
			<Screen name='Home' component={Home} />
			<Screen name='Tela3' component={Tela3} />
		</Navigator>
	);
};
