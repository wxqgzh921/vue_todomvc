import * as types from './mutations_types'

const getDate = ()=>{
	const date = new Date(),
		  mouth = parseInt(date.getMonth())+1;
		  return date.getFullYear()+ '-' + mouth + '-' + date.getDate();
}

export default{
	[types.ADD](state,obj){
		state.count++;
		obj.id = state.count;
		state.todolist.unshift(obj);
		console.log(state.todolist[0].type);
	},
	[types.CANCEL](state,id){
		for(let i=0;i<state.todolist.length;i++){
			if(state.todolist[i].id === id){
				state.todolist[i].type=3;
				var cancel = state.todolist[i];
				state.todolist.splice(i,1);
				break;
			}
		}
		state.todolist.unshift(cancel);
	},
	[types.MOVETODONE](state,id){
		for(let i=0;i< state.todolist.length;i++){
			if(state.todolist[i].id == id){
				state.todolist[i].type=2;
				state.todolist[i].time = getDate();
				var done  = state.todolist[i];
				state.todolist.splice(i,1);
				break;
			}
		}
		state.todolist.unshift(done);
	},
	[types.MOVETODO](state,id){
		for(let i =0;i<state.todolist.length;i++){
			if(state.todolist[i].id == id){
				state.todolist[i].type=1;
				var todo = state.todolist[i];
				state.todolist.splice(i,1);
				break;
			}
		}
		state.todolist.unshift(todo);
	},
	[types.RECOVERY](state,id){
		for(let i=0;i<state.todolist.length;i++){
			if(state.todolist[i].id == id){
				state.todolist[i].type=1;
				var recovery = state.todolist[i];
				state.todolist.splice(i,1);
				break;
			}
		}
		state.todolist.unshift(recovery);
	},
	[types.UPLOAD](state){
		localStorage.setItem('todolist',JSON.stringify(state.todolist));
	}
}
