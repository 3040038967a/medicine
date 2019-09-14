<template>
	<div>
		
		<ul class="ul">
			<li>销售热线：15827231161</li>
			<li>QQ：2957846607</li>
			<li>简历投递：hr@whmgyy.cn</li>
			<li>投诉建议：complain@whmgyy.cn</li>
			<li>地址：武汉经济技术开发区车城北路5号厂房5楼B502</li>
		</ul>
		
		<!-- 地图插件 -->
		<baidu-map id="container" :center="center"  :zoom="zoom" @ready="handler">
			
			<!-- 比例尺 -->
		<bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
		<!-- 缩放控件 -->
		<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
		
		<!-- 缩略图 -->
		<!-- <div class="small"> -->
			<bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"> </bm-overview-map>
		<!-- </div> -->
		
		
		
		<!-- 定位 -->
		<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
		
		
		<!-- 交通流量图层 -->
		 <bm-traffic :predictDate="{weekday: 7, hour: 12}">
          </bm-traffic>
		
		
		
		</baidu-map >
		
		
		
		<!-- <div id="container">
			
			
					
				
			
		</div> -->
		
		
		<Foot></Foot>
		
	</div>
</template>

<script>
	import Foot from '@/components/foot/footer';
	// 引入高德网络地图js插件
	// import Map from  "../../../static/map.js";
	import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
	//引用百度地圖
	// import Map from "../../../static/bdMap.js";
	
	export default{
		name:"culture",
		data(){
			return{
				 center: {lng: 0, lat: 0},
				 zoom: 4
				
			}
			
		},
		
		components:{
			Foot,
			BaiduMap
		},
		mounted(){
			
			
			
			
		  
			
			
			
			// new BMap.Map("container");   
			 
			 // console.log(Map);
			
			
			// 初始化高德地圖
			 // new AMap.Map('container',{
			 // 	zoom:8,
			 // 	center:[116.39,39.9]
			 // });
			
			
			
		},
		
		methods:{
			 handler ({BMap, map}) {
			  console.log(BMap, map)
			  this.center.lng = 116.404
			  this.center.lat = 39.915
			  this.zoom = 15
			}
			
		}
		
		
	}
</script>



<style scoped>
	.ul{
		padding: 10px;
		text-align: left;
		font-size: 14px;
	}
	#container{
		height: 260px;
		width: 100%;
		margin-top: 10px;
	}
	
	/* .small{
		width: 100px;
		height: 100px;
	} */
	
	
	
</style>