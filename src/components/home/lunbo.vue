<template>
	
<div>
	<!-- 轮播图部分 -->
	<div class="swiper-container">
  <div class="swiper-wrapper">
  
     <!-- swiper-no-swiping，禁止手动切换 -->
     <div class="swiper-slide " v-for="(i,index) in arry" :hao="index" :key=index >
    	<img :src=i.src alt=""  @click=to(index)>
    </div>
	
	
  </div>
  
   <!-- 如果需要滚动条 -->
    <div class="swiper-pagination"></div>
   
  
</div>



</div>
	
</template>

<script>
	// console.log(this.$store.nav);
	
	import Swiper from "swiper";
	export default{
		name:"lunbo",
		data:function(){
			return{
				
				arry:[]
				
			}
		},
		
		
		// 创建之后，给数组赋值
		created:function(){
			this.arry=this.$store.state.lb;
			console.log(this.arry);
			
			
		},
		
		mounted:function(){
			
			new Swiper('.swiper-container', {
				// 轮播的淡入淡出时间
				// speed:1600,
				// 环形轮播
				 autoplay:true,//等同于以下设置
					loop : true,
				// 分页器部分
				pagination: {
					pagination : '.swiper-pagination',
					paginationType : 'fraction'
					
				  }
				
			})
			
		},
		
		methods:{
			to:function(index){				
				let id=this.arry[index].hao;
				let id1=this.arry[index].hao1;
				
				let val={
					id:id,
					id1:id1
				}
				console.log(id,id1);
				
				
				
				
				this.$store.commit("setto1",val);
				// this.$store.commit("setto2",id1);
				this.$router.replace(this.arry[index].to);
				
				
				
				
				
				
			}
			
			
			
		}
		
		
		
		
		
	}
	
	
	
	
	
	
</script>

<style scoped>
	@import "swiper/dist/css/swiper.css";
	
	
	
	img{
		width: 100%;
		height: 100%;
	}
	
	.swiper-slide{
		width: 100%;
		height: 220px;
	}
	
	
</style>