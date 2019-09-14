import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 导航条数据
let nav={
		state:[
			{name:"首页",to:"/",kai:true},
			{name:"新闻",to:"/news",kai:false},
			{
				name:"产品",
				to:"/project/project2",
				kai:false,
				children:[
					{kai:false,to:"/project/drug",name:"医药产品"},
					{kai:false,to:"/project/instrument",name:"器械产品"}
				   ]
				
			},
			{name:"招聘",to:"/recurit",kai:false},
			{
				name:"简介",
				to:"/notice/brief",
				kai:false,
				children:[
					{kai:true,to:"/notice/brief",name:"公司简介"},
					{kai:false,to:"/notice/concat",name:"企业文化"},
					{kai:false,to:"/notice/culture",name:"联系方式"}
				]
				
			}	
		],
		
		// 点击改变导航状态值
		mutations:{
			setto1:function(state,val){
				
				for(var i=0;i<state.length;i++){
					state[i].kai=false;
				}
				state[val.id].kai=true;
				
				for (var j=0;j<state[val.id].children.length;j++){
					state[val.id].children[j].kai=false;
				}
				
				state[val.id].children[val.id1].kai=true;
			},
			
			
			// 全部变成false
			setto2:function(state,val){
				    
				for (var j=0;j<state[val].children.length;j++){
					state[val].children[j].kai=false;
				}
				
				
			},
			
			// 改变某一个路由
			setto3:function(state,id){
				for(var i=0;i<state.length;i++){
					state[i].kai=false;
					
				}
				state[id].kai=true;
				
				
			}
			
			
			
			
			
			
			
		}	
}

// 轮播图数据
let lb={
	state:[
		{src:"https://0.rc.xiniu.com/g2/M00/8C/D3/CgAGfFrv_tGAal98AAKg_BqBmps055.jpg",to:"/notice/brief",hao:4,hao1:0},
		{src:"https://0.rc.xiniu.com/g2/M00/8D/8C/CgAGfFrxaCKANSzSAAGNPclQnUc256.jpg",to:"/project/drug",hao:2,hao1:0},
		{src:"https://0.rc.xiniu.com/g2/M00/8D/8C/CgAGfFrxaFOAGqzrAAF8MOxwih8342.jpg",to:"/project/instrument",hao:2,hao1:1}	
	]
}


// 声明一个变量接受数据
let state= new Vuex.Store({
	modules:{
		nav,
		lb
		
	}
})

// 将数据反出去
export default state;




