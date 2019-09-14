<template>
	<div>
		<p>新闻</p>
		
		<p v-for="(i,index) in arry">{{i.text}}</p>
		
	</div>
	
	
	
	
	
	
	
	
	
	
</template>



<script>
	
	import axios from "axios"
	import qs from "qs"
	export default{
		name:"news",
		data:function(){
			return{
				arry:[]
			}
		},
		
		// 挂载后钩子函数
		created(){
			var that=this;
			axios.post("/val/news.php",qs.stringify({id:1}))
			.then((res)=>{
				that.arry=res.data;
				console.log(that.arry);
			})
			
			
			
		}
		
		
		
	}
	
</script>



<style scoped>
	
	
	p{
		text-align: left;
		margin-bottom: 20px;
	}
	
</style>