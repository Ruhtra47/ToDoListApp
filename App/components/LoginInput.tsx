import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import colors from '../constants/colors';

export default ({ inputType, keyboardType, onChange, secure }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{inputType}</Text>
			<TextInput
				secureTextEntry={secure}
				onChangeText={onChange}
				style={styles.input}
				keyboardType={keyboardType}
				placeholder={inputType}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.globalBackground,
		flexDirection: 'row',
		paddingBottom: 30,
	},

	text: {
		backgroundColor: colors.textInputBackground,
		color: colors.textColor,
		height: 60,
		width: 90,
		textAlign: 'center',
		textAlignVertical: 'center',
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		fontWeight: 'bold',
	},

	input: {
		borderColor: colors.border,
		backgroundColor: colors.white,
		borderWidth: 1,
		width: 285,
		paddingLeft: 20,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
	},
});
