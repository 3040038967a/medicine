<template>
	
	<div class="con">
		
		<div v-for="(i,index) in arry" class="item" @click="to(i.id,i.sid)">
			<div class="imgs">
			   <img :src="i.img" alt="">
			</div>
			<p>{{title(i.title)}}</p>
		
		</div>
		
		
		
		<button id="more" @click="more" v-if="kai">查看更多 >></button>
		
		
	</div>
	
	
	
	
</template>


<script>
	import Data from "../../api/index.js";
	export default{
		name:"project2",
		data(){
			return{
				arry:[],
				kai:true,
				length:0
			}
		},
		mounted(){
			// this指向
			let that=this;
			Data.s3().then((res)=>{
			      that.arry=res.val;
				  that.length=res.count;
				  console.log(that.arry);
			})

			// 改变路由指向
			let id=2;
			this.$store.commit("setto2",id);
			
		},
		
		methods:{
			
			// 点击条往详情部分
			to:function(id,sid){
				this.$router.replace({
					name:"chanpin",
					params:{
						id:id,
						sid:sid		
					}
				})
			},
			
			// 点击加载更多
			more:function(){
				let that=this;
				console.log(that.length);
				Data.s3(that.length,null).then((res)=>{
					// 重新赋值
				     that.arry=res.val;
					 that.kai=false;
					
				})
				
			}
			
			
			
			
			
		},
		
		
		computed:{
			title:function(txt){
				return function(txt){
					// let titles=txt.substring(0,15)+"...";
					if(txt.length>10){
						return txt.substring(0,10)+"...";
					}else{
						return txt;
					}
					
	
				}

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