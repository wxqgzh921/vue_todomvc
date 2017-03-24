import * as types from './mutations_types'

export default{
	add:({commit},obj) =>{
		commit(types.ADD,obj);
		commit(types.UPLOAD);
	},
	cancel:({commit},obj)=>{
		commit(types.CANCEL,obj);
		commit(types.UPLOAD);
	},
	movetodone:({commit},obj)=>{
		commit(types.MOVETODONE,obj);
		commit(types.UPLOAD);
	},
	movetodo:({commit},obj)=>{
		commit(types.MOVETODO,obj);
		commit(types.UPLOAD);
	},
	recovery:({commit},obj) =>{
		commit(types.RECOVERY,obj);
		commit(types.UPLOAD);
	},
	upload:({commit})=>{
		commit(types.UPLOAD);
	}
}
