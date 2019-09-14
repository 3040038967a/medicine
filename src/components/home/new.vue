<template>
	<div>
		

	<div  class="big">
		 <div class="title">
			<div class="t_left">
				<div class="t_img">
					<img src="https://1.rc.xiniu.com/rc/M/Contents/31895/images/cp-bt.png?d=20180507151810676" alt="">
				</div>
				新闻资讯
			</div>
			
			<div  class="t_img2">
				<img src="../../assets/add.png" alt="">
			</div>
		</div>
		
		
		
		<p v-for="(i,index) in arry"><span class="dian"></span>{{title(i.title)}}</p>
	
	
		
		
	</div>
	
		<!-- 底部 -->
	
	<p>Copyright © 2018 武汉迈高医药有限公司.All Rights Reserved </p>
	<p>犀牛云提供企业云服务</p>
	
	<div class="bottom">
		
		
		<div class="b_item">
			<div><img src="../../assets/tel.png" alt=""></div>
			<span>电话</span>
		</div>
		
		<div class="b_item">
			<div><img src="../../assets/map.png" alt=""></div>
			<span>地图</span>
			
		</div>
		
		
		
		<div class="b_item">
			<div><img src="../../assets/text.png" alt=""></div>
			<span>留言</span>
		</div>
		
	</div>
	
		</div>
</template>



<script>
	
	import Data from "../../api"
	export default{
		name:"new",
		data(){
			return{
				arry:[]
				
			}
			
		},
		
		
		mounted(){
			var that=this;
			Data.s1().then((res)=>{
				
				that.arry=res.val;
				// console.log(that.arry);
				
			})
			
			
			
		},
		
	    computed:{
				 title:function(){
						return function(txt){
							let text=txt.substring(0,23)+"..."
							return text;
						}
					}

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
		margin: 20px auto 0px;
		padding-bottom: 20px;
	}
	.title{
		box-sizing: border-box;
		padding: 5px 5px;
		width: 100%;
		border-bottom: 1px #6666 solid;
		display: flex;
		flex-direction: row;
		justify-content:space-between;
		margin-bottom: 20px;
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
	p{
		 width: 100%;
		 box-sizing: border-box;
		 padding: 10px 10px;
		font-size: 14px;
		text-align: left;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.dian{
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: #3E91A2;
		margin-right: 10px;
	}
	
	.bottom{
		background-color: rgb(248,248,248);
		margin-top: 14px;
		width: 100%;
		display: flex;
		flex-direction: row;
	}
	
	.b_item{
		
		width: 33.3%;
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
	.b_item span{
		
		color: rgb(61,152,170);
		
	}
	
</style>