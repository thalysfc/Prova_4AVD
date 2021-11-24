import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Container, Emoji, Title, Button } from './styles';
import { RootStackParamList } from '../../routes/auth.routes';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Home = () => {
	const { navigate } = useNavigation<HomeScreenProp>();

	const handleSignIn = () => {
		navigate('Tela3');
	};

	return (
		<Container>
			<Title>Como podemos {'\n'} chamar você? </Title>
			<Emoji>😀</Emoji>
			<Button>
				<ButtonIcon onPress={handleSignIn} />
			</Button>
		</Container>
	);
};
