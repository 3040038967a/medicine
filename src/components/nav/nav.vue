<template>
	
	<div class="nav">
		<span v-for="(i,index) in mag" :class="{span:i.kai}" @click="dick(index)">{{i.name}}</span>
		
	</div>
	
	
</template>

<script>
	export default{
		name:"nav",
		data:function(){
			return{
				mag:[]
			}
		},
		mounted:function(){
			this.mag=this.$store.state.nav;
			console.log(this.mag);	
		},
		
		methods:{
			dick:function(index){
				for(var i=0;i<this.mag.length;i++){
					this.mag[i].kai=false;
				}
				this.mag[index].kai=!this.mag[index].kai;
				
				this.$router.replace(this.mag[index].to);
			}
		}
		
		
	}
</script>

<style scoped>
	
	.nav{
		width: 100%;
		overflow: hidden;
		padding: 0px;
		
	}
	
	span{
		
		float: left;
		margin: 0px;
		background-color:#3e91a2;
		color: white;
		font-weight: 700;
		display: inline-block;
		width: 20%;
		padding: 7px 0px;
	}
	
	
	.span{
		
		background-color:lightblue;
		
	}
	
	
</style>