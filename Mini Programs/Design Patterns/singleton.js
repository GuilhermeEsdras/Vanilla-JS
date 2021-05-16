function MyApp() {
	if (!MyApp.instance) {
		MyApp.instance = this;
	}
	return MyApp.instance;
}
// retorna sempre a mesma instancia