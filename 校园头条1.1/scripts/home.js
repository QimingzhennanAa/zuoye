// 数据，model
let data = {
  user: {
    name: "张三",                        
    academy: "管理学院",                      
    photo: "../images/home/头像.png"    
  },          
  page1news:[],
  page1notices:[],
  page2news:[],
  page2notices:[],
  page3news:[],
  page3notices:[],
  page4news:[],
  page4notices:[],
  page5news:[],
  page5notices:[],
  page6news:[],
  page6notices:[],
  page7news:[],
  page7notices:[], 
  numbers:[],
  pros:[],
  pgs:[],
  drs:[],
  lks:[]
           
  };
let app = new Vue({
  el: "#app",
  data:data,
  methods: {
 showNews: function(){
    function setArray(to, from) {
   from.forEach((item) => { to.push(item); });
    }
            qwest.setDefaultOptions({ cache: true });
            qwest.get(
              "http://cumthzy.coding.me/xiaoyuantoutiao/home-data-01.json"
            ).then(
              function(xhr, msg) {
                  if (msg && msg.success) {
                    setArray(app.page1news,msg.page1news);
                    setArray(app.page1notices,msg.page1notices);
                    setArray(app.page2news,msg.page2news);
                    setArray(app.page2notices,msg.page2notices);
                    setArray(app.page3news,msg.page3news);
                    setArray(app.page3notices,msg.page3notices);
                    setArray(app.page4news,msg.page4news);
                    setArray(app.page4notices,msg.page4notices);
                    setArray(app.page5news,msg.page5news);
                    setArray(app.page5notices,msg.page5notices);
                    setArray(app.page6news,msg.page6news);
                    setArray(app.page6notices,msg.page6notices);
                    setArray(app.page7news,msg.page7news);
                    setArray(app.page7notices,msg.page7notices);
                    setArray(app.numbers,msg.numbers);
                    setArray(app.pros,msg.pros);
                    setArray(app.pgs,msg.pgs);
                    setArray(app.drs,msg.drs);
                    setArray(app.lks,msg.lks);
                  }
              }
           ); 
        }
    },
  });
$(document).ready(function(){  
   app.showNews();
});