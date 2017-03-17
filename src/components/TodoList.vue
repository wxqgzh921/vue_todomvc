<template>
  <div class="todolist">
  	<div class="title">未完成</div>
    <ul>
    	<li v-for="todo in todolist">
    		<input type="checkbox" class="checkinput"/>
    		<div class="newTodo">{{ todo.newTodo}}</div>
    		<button class="cancelbtn" @click="cancel(todo.id)">取消</button>
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
	name:'todolist',
	computed:{
		todolist(){
			return this.$store.state.todolist;
		}
	},
	methods:{
		cancel(id){
			this.$store.dispatch('cancel',id);
		}
	}
}
</script>
<style>
.todolist{
	margin-top:20px;
}
.title{
	width:80%;
	margin-left:10%;
	height:30px;
	color:#fff;
	background: #00BFFF;
	border-radius: 2px;
	border:none;
	line-height:30px;
}
ul{
	width:80%;
}
ul li{
	width:100%;
	list-style: none;
	height:30px;
	line-height:30px;
	border-bottom: 1px solid #ddd;
}
li .checkinput{
	float: left;
	margin-top:10px;
	margin-right:10px;
}
li .newTodo{
	float: left;
	line-height:30px;
}
li .cancelbtn{
	float: right;
	border-radius: 4px;
	border:1px solid #eee;
	height:28px;
	line-height:28px;
	background: #fff;
}
</style>

