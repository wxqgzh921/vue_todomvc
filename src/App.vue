<template>
  <div id="app">
    <h1>TodoMVC</h1>
    <input type="text" class="input" placeholder="添加你想要做得事" v-model="newTodo" @keyup.enter="add"/>
    <button class="add_btn" @click="add">添加</button>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'app',
  data(){
  	return{
  		newTodo:''
  	}
  },
  components: {
    TodoList
  },
  methods:{
  	add(){
  		let self = this,
  		params={
  			id:0,
  			type:1,
  			newTodo:'',
  			time:''
  		};
  		self.newTodo = self.newTodo.trim();
  		if(self.newTodo){
  			params.newTodo = self.newTodo;
  			self.$store.dispatch('add',params);
  			self.newTodo='';
  		}
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
h1{
	color:#ead7d7;
}
.input{
	width:60%;
	height:30px;
	border-radius: 5px;
	border:1px solid #eee;
	text-indent:10px;
	line-height: 30px;
}
.add_btn{
	width:20%;
	height:34px;
	border-radius: 5px;
	border:1px solid #eee;
	color:#fff;
	background: deepskyblue;
}
</style>
