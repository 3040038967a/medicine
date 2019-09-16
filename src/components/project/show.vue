<template>
	<div>
		<div>
			
		
		<h4>{{arry.title}}</h4>
		<p>{{arry.a}}</p>
		<p>{{arry.b}}</p>
		<p>{{arry.c}}</p>
		<p>{{arry.d}}</p>
		<p>{{arry.e}}</p>
		<p>{{arry.f}}</p>
		<p>{{arry.g}}</p>
		<p>{{arry.h}}</p>
		<p>{{arry.i}}</p>
		<p>{{arry.j}}</p>
		<p>{{arry.k}}</p>
		<p>{{arry.l}}</p>
		<p>{{arry.m}}</p>
		<p>{{arry.n}}</p>
		<p>{{arry.o}}</p>
		<p>{{arry.p}}</p>
		<p>{{arry.q}}</p>
		<p>{{arry.r}}</p>
		<p>{{arry.s}}</p>
		<p>{{arry.t}}</p>
		<p>{{arry.u}}</p>
		<p>{{arry.v}}</p>
		<p>{{arry.w}}</p>
		<p>{{arry.x}}</p>
		<p>{{arry.y}}</p>
		<p>{{arry.z}}</p>
		<p>{{arry.aa}}</p>
		<p>{{arry.bb}}</p>
		<p>{{arry.cc}}</p>
		<p>{{arry.dd}}</p>
		<p>{{arry.ee}}</p>
		<p>{{arry.ff}}</p>
		<p>{{arry.gg}}</p>
		<p>{{arry.hh}}</p>
		<p>{{arry.ii}}</p>
		<p>{{arry.jj}}</p>
		<p>{{arry.kk}}</p>
		<p>{{arry.ll}}</p>
		<h4 @click="topre()">上一页: {{pre_title}}</h4>
		<h4 @click="tonext()">下一页: {{next_title}}</h4>
		</div>
		
		<!-- 相关推荐部分 -->
		<div class="like" v-for="(i,index) in arry2" @click="to(i.id,i.sid)">
			<div class="left">
				<div class="imgs">
					<img :src="i.img" alt="">
				</div>
			</div>
			
			
			<div class="right">
				<p>{{i.title}}</p>
				<p>{{i.a}}</p>
			</div>
			
		</div>
		
		
		
		
		
		
		
		
		
	</div>
	
</template>



<script>
	import Data from "../../api";
	
	export default{
		name:"show",
		data(){
			return{
				arry:[],
				arry2:[],
				pre_title:"",
				next_title:"",
				pre:[],
				next:[],
				sid:"",
				length:""//获取这类型的长度
			}
		},
		
		
		// 创建之后
		created(){
			
			
			
			
			
			// 相关推荐部分
			Data.s2(4).then((res)=>{
				that.arry2=res.val;
			})
			


			let id=parseInt(this.$route.params.id);
			let sid=parseInt(this.$route.params.sid);
			
			this.sid=sid;
			
			// console.log(id,sid);
			
			let that=this;
			
			
			// 获取数据
			Data.s2(id,this.sid).then((res)=>{
				that.arry=res.val[that.sid-1];
				that.length=res.cont;//获取这类型数据的长度
				// console.log(that.arry);
			})
			
			
			// Data.s2(id,this.sid).then((res)=>{
			// 	that.arry=res.val[that.sid-1];
			// 	console.log(that.arry);
			// 	
			// })
			
			
			// 下一页
			Data.s2(id,this.sid+1).then((res)=>{
			
				if(this.sid-1+1>that.length){
				 that.pre_title="暂无";
				}else{
					
				that.next_title=res.val[that.sid-1+1].title;
				
				}
				
			})
			
			
			// 上一页
			Data.s2(id,this.sid-1).then((res)=>{
				// console.log("---------");
				
				if(that.sid-1-1<0){
				 that.pre_title="暂无";
					
				}else{
					that.pre_title=res.val[that.sid-1-1].title;
				}
	
			})

		},
		
		
		methods:{
			// 点击下一页
			tonext:function(){
				let id=parseInt(this.$route.params.id);
				let sid=parseInt(this.$route.params.sid);
				
				this.sid=this.sid+1;
				if(this.sid>this.length){
					this.sid=this.length;
				}

				let that=this;
				Data.s2(id,this.sid).then((res)=>{
					that.arry=res.val[that.sid-1];
					console.log(that.arry);
				})
				
				
				
				
				// 下一页
				Data.s2(id,this.sid+1).then((res)=>{
				
					if(this.sid-1+1>this.length-1){
			
					 that.next_title="暂无";
					 
					}else{
						
					that.next_title=res.val[that.sid-1+1].title;
					
					}
					
				})
				
				
				// 上一页
				Data.s2(id,this.sid-1).then((res)=>{
					console.log("---------");
					
					if(that.sid-1-1<0){
					 that.pre_title="暂无";
						
					}else{
						that.pre_title=res.val[that.sid-1-1].title;
					}
					
					
					
					
					
				})
				
				
				
				
				
				
			},
			
			
			// 点击下一页
			topre:function(){
				let id=parseInt(this.$route.params.id);
				let sid=parseInt(this.$route.params.sid);
				
				this.sid=this.sid-1;
				if(this.sid<1){
					this.sid=1;
				}
				
				
				
				let that=this;
				Data.s2(id,this.sid).then((res)=>{
					that.arry=res.val[that.sid-1];
					console.log(that.arry);
				})
				
				
				
				
				// 下一页
				Data.s2(id,this.sid+1).then((res)=>{
				
					if(this.sid-1+1>that.length){
					 that.pre_title="暂无";
					}else{
						
					that.next_title=res.val[that.sid-1+1].title;
					
					}
					
				})
				
				
				// 上一页
				Data.s2(id,this.sid-1).then((res)=>{
					console.log("---------");
					
					if(that.sid-1-1<0){
					 that.pre_title="暂无";
					}else{
						that.pre_title=res.val[that.sid-1-1].title;
					}
					
					
					
					
					
				})
				
				
				
				
				
				
			},
			
			
			// 点击跳转当前这个路由
			to:function(id,sid){
				
				
				let idd=parseInt(id);
				let sidd=parseInt(sid);
				
					// 获取数据
				// Data.s2(id,this.sid).then((res)=>{
				// 	that.arry=res.val[that.sid-1];
				// 	that.length=res.cont;//获取这类型数据的长度
				// 	// console.log(that.arry);
				// })
				
				let that=this;
				Data.s2(1,5).then((res)=>{
					console.log(res);
					that.arry=res;
					
				})
				
				
				
				
				
				
				
				
				
				// console.log(id,sid);
				// let idd=parseInt(id)+1;
				// this.$router.replace({
				// 	name:"chanpin",
				// 	query:{
				// 		id:id,
				// 		sid:sid
				// 	}
				// });
				
				
				
				
				
				
				
				
				
				
				
				// console.log(id,sid);
				// let that=this;
				// Data.s2(id,sid).then((res)=>{
				// 	that.arry=res.val[that.sid-1];
				// 	console.log(that.arry);
				// })
				// 
				
				
				
				
			}
			
			
			
			
			
			
			
			
		}
		
		
		
		
		
		
		
	}
	
</script>



<style scoped>
	p{
		text-align: left;
		margin-top: 10px;
		
	}
	
	
	.like{
		display: flex;
		flex-direction: row;
	}
	.left{
		width: 30%;
	}
	.right{
		width: 70%;
	}
	
	
	img{
		width: 100%;
		height: 100%;
	}
	
	
	
	
</style>