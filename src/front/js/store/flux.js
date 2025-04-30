const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		message: null,
		demo: [
		  { title: "FIRST", background: "white", initial: "white" },
		  { title: "SECOND", background: "white", initial: "white" },
		],
		login: false,
		token: null, 
	  },
	  actions: {
		logout: () => {
		  console.log("logout desde flux");
		  localStorage.removeItem("token");
		  setStore({ login: false, token: null });
		},
  
		login: async (email, password) => {
		  console.log("LOGIN desde FLUX");
		  const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		  };
		  try {
			const response = await fetch(
			  process.env.BACKEND_URL + "/api/login",
			  requestOptions
			);
			const data = await response.json();
			if (response.status === 200) {
			  setStore({ login: true, token: data.access_token });
			  localStorage.setItem("token", data.access_token);
			  return true;
			} else {
			  console.log(data.msg);
			  return false;
			}
		  } catch (error) {
			console.log("Error en login:", error);
			return false;
		  }
		},
  
		signup: async (email, password) => {
			
		  const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		  };
		  try {
			const response = await fetch(
			  process.env.BACKEND_URL + "/api/signup",
			  requestOptions
			);
			const data = await response.json();
			if (response.status === 200) {
			  return true;
			} else {
			  console.log(data.msg);
			  return false;
			}
		  } catch (error) {
			console.log("Error en signup:", error);
			return false;
		  }
		},
  
		getMessage: async () => {
		  try {
			const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
			const data = await resp.json();
			setStore({ message: data.message });
			return data;
		  } catch (error) {
			console.log("Error loading message from backend", error);
		  }
		},
  
		changeColor: (index, color) => {
		  const store = getStore();
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
		  setStore({ demo });
		},
	  },
	};
  };
  
  export default getState;