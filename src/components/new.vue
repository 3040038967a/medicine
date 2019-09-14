<template>
	<div>
		
		<h3>{{arry[0].title}}</h3>
		<h4 v-html="arry[0].titles">{{arry[0].titles}}</h4>
		<p class="from">来自:{{arry[0].from}} 时间:{{time}}</p>
		
		
		<p v-for="(i,index) in arry">{{i.text}}</p>
		
		<p @click="preto" class="card">上一篇: {{pre_title}}</p>
		<p @click="nexto" class="card">下一篇: {{next_title}}</p>
	</div>
</template>


<script>
	
	import axios from "axios"
	import qs from "qs"
	import Data from "../api";
	
	
	
	export default{
		name:"new",
		data:function(){
			return{
				arry:[],
				pre_title:"",
				next_title:"",
				pre:[],
				next:[],
				id:1
			}
			
		},
		
		
		
		// 挂载后钩子函数
		created(){
			var that=this;
			// axios.post("/val/news.php",qs.stringify({id:this.id}))
			// .then((res)=>{
			// 	that.arry=res.data;
			// 	console.log(that.arry);
			// })
			
			// 初始加载数据
			Data.s1(this.id).then((res)=>{
				that.arry=res.val;
				console.log(that.arry);
			})
			
			// 下一篇新闻标题
			Data.s1(this.id+1).then((res)=>{
				console.log(res.val);
				if(res.val.length==0){
				that.next_title="暂无"
					
				}else{
					that.next_title=res.val[0].title;
				}
				
			})
			
			//上一篇新闻
			Data.s1(this.id-1).then((res)=>{
				
				if(res.count==0){
				that.pre_title="暂无"
					
				}else{
					that.pre_title=res.val[0].title;
				}
			})
			
			
			
			
			
			
			
			
		},
		
		methods:{
			// 点击下一页
			nexto:function () {
				this.id++;
				// console.log(this.id);
				
				var that=this;
				Data.s1(this.id).then((res)=>{
					that.arry=res.val;
					// console.log(that.arry);
				})
				
				
				
					// 下一篇新闻标题
				Data.s1(this.id+1).then((res)=>{
					
					if(res.count==0){
					that.next_title="暂无"
						
					}else{
						that.next_title=res.val[0].title;
					}
					
				})
				
				//上一篇新闻
				Data.s1(this.id-1).then((res)=>{
					if(res.val.count==0){
					that.pre_title="暂无"
						
					}else{
						that.pre_title=res.val[0].title;
					}
				})
				
				
	
			},
			
			
			   // 点击上一页
				preto:function () {
				this.id--;
				console.log(this.id);
				// var that=this;
				Data.s1(this.id).then((res)=>{
					that.arry=res;
					console.log(that.arry);
				})
				
				
				
				// 下一篇新闻标题
				Data.s1(this.id+1).then((res)=>{
					console.log(res.val);
				if(res.val.count==0){
				that.next_title="暂无"
					
				}else{
					that.next_title=res.val[0].title;
				}
					
				})
				
				
				//上一篇新
				Data.s1(this.id-1).then((res)=>{
					console.log(res);
					if(res.val.count==0){
					that.pre_title="暂无"
						
					}else{
						that.pre_title=res.val[0].title;
					}
				})
	
			}
	
		},
		// 发布时间，computed计算属性
		computed:{
			time:function(){
				
				let val=this.arry[0].time.replace(":","-");
				val=val.replace(":","-");
				return val;
				// return 1;
			}
			
		}
		
		
		
	}
	
</script>



<style scoped>
	h3{
		margin-bottom: 20px;
	}
	p{
		
		margin-bottom: 20px;
	}
	.card{
		font-size: 13px;
		text-align: left;
	}
	
	.from{
		text-align: center;
	}
	
	
</style>