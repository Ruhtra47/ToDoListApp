import { openDatabase } from 'react-native-sqlite-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import LoginInput from '../components/LoginInput';
import colors from '../constants/colors';

export default ({ navigation }) => {
	const [usernameInput, setUsernameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Type in your informations to create your account!
			</Text>
			<LoginInput
				secure={false}
				keyboardType="default"
				inputType="Username"
				onChange={(text: string) => console.log(text)}
			/>

			<LoginInput
				secure={false}
				keyboardType="default"
				inputType="Email"
				onChange={(text: string) => console.log(text)}
			/>

			<LoginInput
				secure={true}
				keyboardType="default"
				inputType="Password"
				onChange={(text: string) => console.log(text)}
			/>

			<TouchableOpacity
				style={styles.buttonLoginContainer}
				onPress={() => navigation.push('Login')}
			>
				<Text style={styles.buttonLogin}>Register</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.globalBackground,
	},

	title: {
		marginBottom: 50,
		fontSize: 20,
		paddingHorizontal: 16,
		textAlign: 'center',
	},

	buttonLoginContainer: {
		elevation: 8,
		backgroundColor: colors.buttonLogin,
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12,
		width: 120,
	},

	buttonLogin: {
		fontSize: 18,
		color: colors.white,
		fontWeight: 'bold',
		alignSelf: 'center',
		textTransform: 'uppercase',
	},
});
