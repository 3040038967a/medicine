<template>
	<div>
		<div>
			<lunbo></lunbo>
		</div>
		
		
		<!-- 产品部分 -->
		<products></products>
		
		<!-- 新闻部分 -->
		<new></new>
		
		
		
	</div>
	
</template>

<script>
	
	
	import lunbo from "@/components/home/lunbo"
	import Product from "@/components/home/product"
	import New from "@/components/home/new"
	import Data from "../api"
	import axios from "axios"
	import qs from "qs"
	
	export default{
		name:"home",
		components:{
			lunbo,
			products:Product,
			new:New
		}
		
		
		
		
		
		
	}
	
	
</script>

<style>
	
	
	
	
	
	
</style>