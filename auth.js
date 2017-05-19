function authenticate (login, password) {
	if (login === 'login' && password === 'password')
		return 'You were lagged in';
} else {
	return 'Login is incorrect';
}
