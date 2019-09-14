<template>
	<div class="big">
	        <div class="title">
				<div class="t_left">
					<div class="t_img">
						<img src="https://1.rc.xiniu.com/rc/M/Contents/31895/images/cp-bt.png?d=20180507151810676" alt="">
					</div>
					产品展示
				</div>
				
				<div  class="t_img2">
					<img src="../../assets/add.png" alt="">
				</div>
				
				
			</div>
			
			
			
			<div class="con">
				<div class="item" v-for="(i,index) in arry" @click="to(i.id,i.sid)">
					<div class="imgs">
						<img :src="i.img" alt="">
					</div>
					<p>{{i.title}}</p>
				</div>
				
				
			</div>
		
		
		
	</div>
</template>


<script>
	import Data from "../../api"
	export default{
		name:"product",
		data(){
			return{
				
				arry:[]
				
				
			}
			
		},
		
		methods:{
			to:function(id,sid){
				let idd=parseInt(id);
				this.$store.commit("setto3",idd);
				this.$router.replace({
					name:"chanpin",
					params:{
						id:idd,
						sid:sid
					}
					
				});
			
			}
		},
		
		mounted(){
			var that=this;
			Data.s2(4).then((res)=>{
				that.arry=res.val;
				console.log(res);
				
				
			})
			
			
		}
		
		
	}
	
	
</script>



<style scoped>
	.big{
		display: flex;
		flex-direction: column;
		width: 96%;
		background-color: white;
		/* border: 1px red solid; */
		margin: 20px auto;
	}
	.title{
		box-sizing: border-box;
		padding: 5px 5px;
		width: 100%;
		border-bottom: 1px #6666 solid;
		display: flex;
		flex-direction: row;
		justify-content:space-between;
		
	}
	.t_img{
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}
	
	.t_img2{
		width: 33px;
		height: 30px;
		
	}
	
	.t_img2 img{
		width: 100%;
		height: 100%;
		
	}
	.t_img img{
	
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
	}
	
	.imgs{
		height: 110px;
		/* border: 1px black solid; */
	}
	.t_left{
		/* border: 1px blue solid; */
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.con{
		width: 100%;
		overflow: hidden;
	}
	
	.item{
		display: flex;
		flex-direction: column;
		align-items: center;
	     padding-bottom: 10px;
		width: 45%;
		float: left;
		margin-left: 10px;
		margin-top: 10px;
		border: 1px #6666 solid;
	}
	.item img{
		width: 100%;
		height: 100%;
	}
	.item p{
		font-size: 13px;
	}
</style>