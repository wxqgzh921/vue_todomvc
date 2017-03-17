import * as types from './mutations_types'

export default{
	add:({commit},obj) =>{
		commit(types.ADD,obj);
	},
	cancel:({commit},obj)=>{
		commit(types.CANCEL,obj);
	}
}
