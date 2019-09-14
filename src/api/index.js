
import Vue from "vue";
import axios from "axios";
import qs from "qs";


// 新闻信息
const s1=(hao)=>{
	if(hao==""){
		
		return axios.post("/val/news.php").then((res)=>res);
		
	}else{
		return axios.post("/val/news.php",qs.stringify({id:hao})).then((res)=>res.data);
	}
	
}


// 产品
const s2=(hao1,hao2)=>{
	
	if(hao2==null){
		return axios.post("/val/medical.php",qs.stringify({count:hao1})).then((res)=>res.data);
	}else{
		return axios.post("/val/medical.php",qs.stringify({hao1:hao1,hao2:hao2})).then((res)=>res.data);
	}
	
}


const s3=(count)=>{
	if(!count){
		return axios.post("/val/medical2.php").then((res)=>res.data);
	}else{
		
		return axios.post("/val/medical2.php",qs.stringify({count:count})).then((res)=>res.data);
	}

}



const s4=(hao)=>{
	
	return axios.post("/val/medical2.php",qs.stringify({hao:hao})).then((res)=>res.data);

}









export default{
	s1,
	s2,
	s3,
	s4
	
}











