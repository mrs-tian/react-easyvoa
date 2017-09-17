let login = false;

try{
	login = localStorage.login ? true : login
}catch(e){}


const defaultState = {
	login:login,
	categories:[],
	normalMenu:[],
	middleMenu:[],
	primeMenu:[]	
}

export default function(state = defaultState, action) {
	
	if(action.type == "LOGOUT") {
		try {
			localStorage.removeItem("login");
		}catch(e){}

		return Object.assign({}, state, {
			login: false
		})

		
	}
	if(action.type == "LOGIN") {
		try {
			localStorage.login = "true";
		}catch(e){}
		
		return Object.assign({}, state, {
			login: true
		})
	}
	if(action.type == "CHANGE_CATEGORIES") {
		let result = Object.assign({}, state, {
			categories: action.value
		})
		return result;
		
	}

	if(action.type == "CHANGE_NORMALMENU") {
		return Object.assign({}, state, {
			normalMenu: action.value
		})
	}

	if(action.type == "CHANGE_MIDDLEMENU") {
		return Object.assign({}, state, {
			middleMenu: action.value
		})
	}

	if(action.type == "CHANGE_PEIMEMENU") {
		return Object.assign({}, state, {
			primeMenu: action.value
		})
	}

	return state;
}