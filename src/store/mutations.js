import * as types from './mutations_types'

export default{
	[types.ADD](state,obj){
		state.count++;
		obj.id = state.count;
		state.todolist.unshift(obj);
	},
	[types.CANCEL](state,id){
		for(let i=0;i<state.todolist.length;i++){
			console.log(id);
			if(state.todolist[i].id === id){
				state.todolist.splice(i,1);
				break;
			}
		}
	}
	
}
