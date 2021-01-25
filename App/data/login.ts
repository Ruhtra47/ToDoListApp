import Navigation from '../config/Navigation';

function Login(email: string, password: string, navigation: any) {
	if (email === 'arthur' && password === '0810') {
		navigation.push('Home');
	} else {
		alert('Invalid login. Please try again.');
	}
}

export default Login;
