//state argument is not application state, only the state this reducer is responsible for
export default function(state = null, action){
	
	//reducer can never return an 'undefined'
	//set state=null for default
	//never change the state directly
	//return a freshly created object
	//state.title = "X" is wrong
	//prevents redux from maintaining history
	switch(action.type){
		case 'BOOK_SELECTED' :
			return action.payload;
	}

	return state

}