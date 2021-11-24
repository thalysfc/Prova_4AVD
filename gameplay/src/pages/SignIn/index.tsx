import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ButtonNext } from '../../components/ButtonNext';
import { Container, Image, Title, SubTitle } from './styles';
import IllustrationImg from '../../assets/watering.png';
import { RootStackParamList } from '../../routes/auth.routes';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const SignIn = () => {
	const { navigate } = useNavigation<HomeScreenProp>();

	const handleSignIn = () => {
		navigate('Home');
	};

	return (
		<Container>
			<Title>Gerencie {'\n'} suas plantas de {'\n'} forma fácil</Title>
			<Image source={IllustrationImg} />
			<SubTitle> Não esqueça mais de regar suas {'\n'} plantas. Nós cuidamos de lembrar você {'\n'} sempre que precisar. </SubTitle>
			<ButtonNext onPress={handleSignIn} />
		</Container>
	);
};
