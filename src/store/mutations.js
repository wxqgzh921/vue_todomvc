import * as types from './mutations_types'

export default{
	[types.ADD](state,obj){
		state.count++;
		obj.id = state.count;
		state.todolist.unshift(obj);
	},
	[types.CANCEL](state,obj){
		for(let i=0;i<state.todolist.length;i++){
			console.log(obj.id);
			if(state.todolist[i].id === obj.id){
				state.todolist.splice(i,1);
				break;
			}
			
		}
		console.log(state.todolist)
	}
	
}
