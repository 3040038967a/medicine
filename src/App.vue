<template>
  <div id="app">
   <hea-der></hea-der>
	 <navs></navs>
    <router-view/>
		
  </div>
</template>

<script>
	
 import Hea from "@/components/header/head.vue";
 import Nav from "@/components/nav/nav.vue";
	
export default {
  name: 'App',
	components:{
		"hea-der":Hea,
		"navs":Nav
	},
	// 每次刷新跳到首页
	mounted:function(){
		this.$router.replace("/");
		
	}
	
	
	
	
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
	margin: 0px;
	padding: 0px;
}

body{
	
	background-color: rgb(248,248,248);
	
}
</style>
