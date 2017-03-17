export default{
	//todolist
	todolist: localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : [],
	
	count:0
}
