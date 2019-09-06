import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/home";
import Notice from "@/components/notice";
import Project from "@/components/project";
import News from "@/components/news";
import Recurit from "@/components/recurit";


// 简介页面的三个二级路由
import Brief from "@/components/notice/brief";
import Concat from "@/components/notice/concat";
import Culture from "@/components/notice/culture";

//产品的两个耳机路由
import Drug from "@/components/project/drug";
import Instrument from "@/components/project/instrument";





Vue.use(Router)

export default new Router({
  routes: [
		// 首页
    {
      path: '/',
      component: Home
    },
		
		// 招聘
		{
			path:"/notice",
			component:Notice,
				children:[
				{
					path:"brief",
					component:Brief
				},
				
				{
					path:"concat",
					component:Concat
					
				},
				
				{
					path:"culture",
					component:Culture
					
				}
				
				
				
				
			]
			
			
		},
		
		// 招聘
		{
			path:"/project",
			component:Project,
			children:[
				{
					path:"drug",
					component:Drug
				},
				
				{
					path:"instrument",
					component:Instrument
				}
				
				
				
				
				
				
			]
			
			
		},
		
		{
			path:"/news",
			component:News
		},
		
		// 简介
		{
			path:'/recurit',
			component:Recurit
		
		}
		
		
		
		
		
		
		
  ]
})
