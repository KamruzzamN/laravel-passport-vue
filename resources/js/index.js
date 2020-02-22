export default {
	state: {
		token: localStorage.getItem('access_token') || null,
	},

	getters: {
		loggedIn(state){
			return state.token !== null;
		},
		retrieveToken(state){
			return state.token
		},
		destroyToken(state){
			return state.token = null
		}
	},

	actions:{

		retrieveToken(contex,credentials){
			return new Promise((resolve, reject) => {
				axios.post('/api/login',{
					username: credentials.username,
					password: credentials.password,
				}).then((response) =>{
					localStorage.setItem('access_token', response.data.access_token);
					contex.commit('token', response.data.access_token);
					resolve(response)
				}).catch((error) => {
					reject(error)
				})
			});
		},

		destroyToken(contex){
			axios.defaults.headers.common['Authorization'] = 'Bearer '+contex.state.token;
			if(contex.getters.loggedIn){
				return new Promise((resolve, reject) => {
					axios.post('/api/logout').then((response) =>{
						localStorage.removeItem('access_token');
						contex.commit('destroyToken');
						resolve(response)
					}).catch((error) => {
						localStorage.removeItem('access_token');
						contex.commit('destroyToken');
						reject(error)
					})
				});
			}
		}
	},

	mutations:{
		token(state, data){
			return state.token = data;
		},
		destroyToken(state, data){
			return state.token = null
		}
	},
}