import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ButtonGo } from '../../components/ButtonGo';
import { Container, Emoji, Title } from './styles';

import { RootStackParamList } from '../../routes/auth.routes';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Tela3 = () => {
	const { navigate } = useNavigation<HomeScreenProp>();

	const handleSignIn = () => {
		navigate('SignIn');
	};

	return (
		<Container>
			<Emoji>😁</Emoji>
			<Title>Prontinho </Title>
			<ButtonGo onPress={handleSignIn} />
		</Container>
	);
};
