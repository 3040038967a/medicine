<template>
	<div>
		<ul class="ul">
			<li>销售热线：15827231161</li>
			<li>QQ：2957846607</li>
			<li>简历投递：hr@whmgyy.cn</li>
			<li>投诉建议：complain@whmgyy.cn</li>
			<li>地址：武汉经济技术开发区车城北路5号厂房5楼B502</li>
		</ul>
		
		<Foot></Foot>
	</div>
</template>

<script>
	import Foot from '@/components/foot/footer'
	export default{
		name:"culture",
		components:{
			Foot
		}
		
	}
</script>



<style scoped>
	.ul{
		padding: 10px;
		text-align: left;
		font-size: 14px;
	}
	
	
	
</style>