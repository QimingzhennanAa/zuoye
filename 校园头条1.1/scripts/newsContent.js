	
	$.ajax({
		url: '/path/to/file',
		type: 'get',
		dataType: 'json',
		success:function(res){
			
		}
	});

	
	//vue部分
	var vue=new Vue({
	el:'.container',
	data:{
		newsTitle:"我校举办“雨课堂”智慧教学平台应用实践培训",
		releaseTime:"2018-08-02",
		source:"新闻网",
		newsArticle:"6月20日下午，应我校教师教学发展中心和公共教学服务中心邀请，清华大学朱桂萍副教授到校做了题为“以学生为中心的本科教学改革”的报告，清华大学学堂在线“雨课堂”教育与培训中心负责人迟婉璐对 “雨课堂”软件的使用方法进行了实操培训。此次培训由公共教学服务中心杨再明主任主持，150余名教师参加了培训。 朱老师首先介绍了我国“慕课”的发展现状，并以清华大学电路原理为例展现了优秀“慕课”的社会影响力，阐述了使用“慕课”改善课堂教学来诠释以学生为中心的教与学，在核心课程大容量班级中实现以学生为中心的教与学；分享了借助“雨课堂”软件实现翻转课堂的经验和收获。 迟婉璐对进行了“雨课堂”软件的功能和使用方法进行了详细的介绍。通过参与问答互动、难点反馈、PPT推送、现场答题、统计调查、发送投稿或弹幕到投影屏幕等功能对参会教师进行了实操演示。 按照培训进度，6月21日-7月5日，“雨课堂”软件南京办事处的培训师团队将对全校各个学院的骨干教师进行“雨课堂”智慧教学工具实际操作培训，从软件的安装到如何制作课件以及雨课堂的各个功能模块进行详细讲解， 保证每位参培教师都能使用“雨课堂”智慧教学平台进行课程教学。 据悉，为加快推进信息技术与教育教学相融合，推动我校课堂教学方式改革，提高教师教学水平和课堂教学质量。我校已经正式启用“雨课堂”专业版智慧教学平台，并于2018年9月全部投入使用。",
		newsImage:"../images/home/教务新闻1.jpg",
		hasCollect:"true",
		collectSrc:"../images/newsContent/collect2.png",
	},
	method:{
	getCollect:function(){
		// alert("123")
		//假设是不收藏的等到后端到时候要删去
			if (app.hasCollect) {
			$.ajax({
				url: '',
				type: 'post',
				dataType: 'json',
				data: {'hasCollect':false},
				success:function(){
					imgObj.src="../images/newsContent/collect.png";}
			})	
		}
			else{
			$.ajax({
				url: '',
				type: 'post',
				dataType: 'json',
				data: {'hasCollect':true},
				success:function(){
					imgObj.src="../images/newsContent/collect2.png";
									}		
					})	
				}
			},
		}
	});
