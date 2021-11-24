import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.background};
`;

export const Emoji = styled.Text`
	font-size: 80px;
	height: 320px;
	margin-bottom: -200px;
	margin-top: 50px;
`;

export const Content = styled.View`
	margin-top: 8px;
	padding: 0 50px 0 50px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.heading};
	font-size: 40px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 6px;
`;

export const SubTitle = styled.Text`
	color: ${({ theme }) => theme.colors.heading};
	font-size: 15px;
	font-weight: 400;
	text-align: center;
	margin-bottom: 64px;
	line-height: 22px;
`;

export const Button = styled.Text`
	color: ${({ theme }) => theme.colors.heading};
	text-align: center;
	margin-bottom: 100px;
	line-height: 22px;
`;