<template>
  <div class="todolist">
  	<div class="title">未完成</div>
    <ul>
    	<li v-for="todo in getTodo">
    		<input type="checkbox" class="checkinput" @click="movetodone(todo.id,$event)"/>
    		<div class="newTodo">{{ todo.newTodo}}</div>
    		<button class="cancelbtn" @click="cancel(todo.id)">取消</button>
    	</li>
    </ul>
    <div class="title">已完成</div>
    <ul>
    	<li v-for="todo in getDone">
    		<input type="checkbox" class="checkinput"  checked @click="movetodo(todo.id,$event)"/>
    		<div class="newTodo">{{ todo.newTodo}}</div>
    		<div class="time">{{ todo.time }}</div>
    	</li>
    </ul>
     <div class="title">已取消</div>
    <ul>
    	<li v-for="todo in getCancel">
    		<div class="newTodo" style="text-decoration: line-through;">{{ todo.newTodo}}</div>
    		<button class="cancelbtn" @click="recovery(todo.id)">恢复</button>
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
	name:'todolist',
	computed:{
		getTodo(){
			return this.$store.state.todolist.filter(function(d){
				if(d.type===1){
					return d;
				}
			});
		},
		getDone(){
			return this.$store.state.todolist.filter(function(d){
				if(d.type===2){
					return d;
				}
			});
		},
		getCancel(){
			return this.$store.state.todolist.filter(function(d){
				if(d.type===3){
					return d;
				}
			})
		}
	},
	methods:{
		movetodone(id,event){//移至已完成
			if(event.target.checked){
				this.$store.dispatch('movetodone',id);
				event.target.checked = false;
			}
		},
		movetodo(id,event){//移至未完成
			if(!event.target.checked){
				this.$store.dispatch('movetodo',id);
				event.traget.checked =false;
			}
			//else if(id){
//				this.$store.dispatch('movetodo',id);
//				event.traget.checked =false;
//			}
		},
		cancel(id){
			this.$store.dispatch('cancel',id);
		},
		recovery(id){
			this.$store.dispatch('recovery',id);
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
.time{
	float: right;
}
</style>

