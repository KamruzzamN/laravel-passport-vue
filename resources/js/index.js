export default {
	state: {
		users: [],
	},

	getters: {
		getUsers(state) {
			return state.users;
		},

	},

	actions:{
        users(context){
			axios.get('/get-users')
			.then((response) => {
                context.commit('users', response.data.users)
            }).catch((error) => {
				console.log(error)
			});
		},

		retrieveToken(contex,credentials){
			axios.post('/api/login',{
				username: credentials.username,
				password: credentials.password,
			}).then((response) =>{
				console.log(response);
			})
		}

	},

	mutations:{
		users(state, data){
			return state.users = data;
		},
	},
}