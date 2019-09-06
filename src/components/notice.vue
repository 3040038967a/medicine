<template>
	<div>
		<p class="nav">
			<span v-for="(i,index) in arry" :class="{navs:i.kai}"  @click="dick(index)">{{i.name}}</span>
		</p>
		
		
		<router-view></router-view>
		
		
		
		
		
		
	</div>
	
	
</template>
<script>
	export default{
		name:"notice",
		data:function(){
			return{
				
				
				arry:[]
				
			}
		},
		
		mounted:function(){
			this.arry=this.$store.state.nav[4].children;
			console.log(this.arry);
			
		},
		
		
		
		methods:{
			dick(index){
				
				// 导航的点击的效果
				for(let i=0;i<this.arry.length;i++){	
					this.arry[i].kai=false;
				}

				this.arry[index].kai=!this.arry[index].kai;
				
				//二级路由的跳转
				this.$router.replace(this.arry[index].to);
				
				
				
				
				
				
			}
			
		}
		
		
	}
</script>

<style scoped>
	
	.nav{
		text-align: left;
	}
	
	span{
		display: inline-block;
		border-bottom:2px white  solid;
		width: 80px;
		height: 35px;
		line-height: 35px;
		text-align: center;
		
	}
	.navs{
		display: inline-block;
		border-bottom:2px #48a3b6  solid;
		width: 80px;
		height: 35px;
		line-height: 35px;
		text-align: center;
		
	}
	
	
	
</style>