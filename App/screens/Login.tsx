import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import LoginInput from '../components/LoginInput';
import colors from '../constants/colors';
import Login from '../data/login';

export default ({ navigation, route }) => {
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Type in your login to proceed</Text>
			<LoginInput
				secure={false}
				inputType="Email"
				keyboardType="email-address"
				onChange={(email: string) => setEmailInput(email)}
			/>
			<LoginInput
				secure={true}
				inputType="Password"
				keyboardType="visible-password"
				onChange={(password: string) => setPasswordInput(password)}
			/>
			<TouchableOpacity
				style={styles.buttonLoginContainer}
				onPress={() => Login(emailInput, passwordInput, navigation)}
			>
				<Text style={styles.buttonLogin}>Login</Text>
			</TouchableOpacity>
			<View style={styles.createAccountContainer}>
				<TouchableOpacity onPress={() => navigation.push('Register')}>
					<Text style={styles.createAccountText}>
						Don't have an account yet? Create one{' '}
						<Text style={styles.link}>here</Text>.
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	title: {
		marginBottom: 40,
		fontSize: 20,
	},

	buttonLoginContainer: {
		elevation: 8,
		backgroundColor: colors.buttonLogin,
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12,
		width: 100,
	},

	buttonLogin: {
		fontSize: 18,
		color: colors.white,
		fontWeight: 'bold',
		alignSelf: 'center',
		textTransform: 'uppercase',
	},

	createAccountContainer: {
		position: 'absolute',
		bottom: 0,
		paddingBottom: 36,
	},

	link: {
		color: colors.textColor,
		textDecorationLine: 'underline',
	},

	createAccountText: {
		fontSize: 16,
	},
});
