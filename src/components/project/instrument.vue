<template>
		<div class="con">
		
		<div v-for="(i,index) in arry" class="item" @click="to(i.id,i.sid)">
			<div class="imgs">
			   <img :src="i.img" alt="">
			</div>
			<p>{{title(i.title)}}</p>
		
		</div>
		
	
		
		
	</div>
</template>


<script>
	import Data from "../../api/index.js";
	export default{
		name:"instrument",
		data(){
			return{
				arry:[]
			}
		},
		
		mounted(){
			let that=this;
			Data.s4(2).then((res)=>{
				that.arry=res.val;
				
			})
			
			
			
			
			
			
		},
		
		
		
		computed:{
			title:function(title){
				
				return function(title){
					
					return title.substring(0,15)+"...";
					
				}
				
				
				
			}
			
			
			
		},
		
		
		methods:{
			
			to:function(id,sid){
				
				this.$router.replace({
					name:"chanpin",
					params:{
						id:id,
						sid:sid
					}
				})
				
				
				
			}
			
			
			
			
			
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
	
</script>


<style scoped>
	
	#more{
		display: inline-block;
		padding: 12px 80px;
		background-color: rgb(226,44,32);
		border: none;
		color: white;
		border-radius: 6px;
		margin-top: 40px;
		
	}
	
	.con{
		overflow: hidden;
		box-sizing: border-box;
		padding: 5px 10px;
	}
	#more{
		
	}
	
	.item{
		float: left;
		height: 160px;
		width: 45%;
		margin: 10px;
		display: flex;
		flex-direction: column;
		
	}
	.imgs{
		
		
	}
	
	
	
	img{
		border-radius: 7%;
		width: 100%;
		height: 100%;
	}
	
</style>