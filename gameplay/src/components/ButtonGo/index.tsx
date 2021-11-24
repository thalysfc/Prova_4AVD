import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';


export const ButtonGo = ({ ...props }: TouchableOpacityProps) => {
	return (
		<Container {...props}>
			<Title> Começar </Title>
		</Container>
	);
};
