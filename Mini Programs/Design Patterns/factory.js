function FakeUser(customProperties) {
	return {
		name: 'Guilherme',
		lastName: 'Esdras',
		...customProperties
	}
}

// Factory
const user = FakeUser({name: 'Fulano', age: 55});