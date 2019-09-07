<template>
	<div>
		<div class="concat">
			<img src="https://0.rc.xiniu.com/g2/M00/82/58/CgAGe1rxW9iAFMD0AACV1jQRI5U537.jpg" alt="">
			<p><b>迈</b>，意味至无惧困难，持续发展与进步。</p>
			<p><b> 高</b>，携手同行、共创辉煌，不仅是公司对合作伙伴的承诺，也是对员工的期许。</p>
			
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
	import Foot from "@/components/foot/footer"
	export default{
		name:"concat",
		components:{
			Foot
		}
			
	}
	
</script>


<style scoped>
	.concat{
		padding: 10px;
		margin-bottom: 100px;
		text-align: left;
	}
	.concat img{
		width: 100%;
		margin-bottom: 10px;
	}
</style>