import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';


export const ButtonIcon = ({ ...props }: TouchableOpacityProps) => {
	return (
		<Container {...props}>
			<Title> Confirmar </Title>
		</Container>
	);
};
