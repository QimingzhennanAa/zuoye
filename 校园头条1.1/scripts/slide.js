$(document).ready(function(){ 
    $(document.body).scroll(function(evt){ 
        $(".header").css("display", evt.target.scrollTop > 0 ? "block" : "none");
    });
});

Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: 'convex', // none/fade/slide/convex/concave/zoom
  dependencies: [
    { src: '../cpnts/reveal/plugin/menu/menu.js' },
    { src: '../cpnts/reveal/plugin/chalkboard/chalkboard.js' },
    { src: '../cpnts/reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: '../cpnts/reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: '../cpnts/reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: '../cpnts/reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: '../cpnts/reveal/plugin/zoom-js/zoom.js', async: true },
    { src: '../cpnts/reveal/plugin/notes/notes.js', async: true }
  ],
  chalkboard: { 
    src: null,
    readOnly: undefined, 
    toggleChalkboardButton: { left: "-1000px", bottom: "30px", top: "auto", right: "auto" },
    toggleNotesButton: { left: "80px", bottom: "30px", top: "auto", right: "auto" },
    transition: 800,
    theme: "chalkboard",
    color: [ 'rgba(0,0,255,1)', 'rgba(255,255,255,0.5)' ],
    background: [ 'rgba(127,127,127,.1)' , '../cpnts/reveal/plugin/chalkboard/img/blackboard.png' ],
    pen:  [ 'url(../cpnts/reveal/plugin/chalkboard/img/boardmarker.png), auto', '../cpnts/reveal/url(plugin/chalkboard/img/chalk.png), auto' ],
  },
  keyboard: {
    67: function() { RevealChalkboard.toggleNotesCanvas() },  // toggle notes canvas when 'c' is pressed
    66: function() { RevealChalkboard.toggleChalkboard() },  // toggle chalkboard when 'b' is pressed
    46: function() { RevealChalkboard.clear() },  // clear chalkboard when 'DEL' is pressed
    8: function() { RevealChalkboard.reset() },  // reset chalkboard data on current slide when 'BACKSPACE' is pressed
    68: function() { RevealChalkboard.download() },  // downlad recorded chalkboard drawing when 'd' is pressed
  },
  menu: {
    side: 'left',
    numbers: false,
    titleSelector: 'h1, h2, h3, h4, h5, h6',
    hideMissingTitles: false,
    markers: false,
    themes: [
      { name: '黑色', theme: '../cpnts/reveal/css/theme/black.css' },
      { name: '白色', theme: '../cpnts/reveal/css/theme/white.css' },
      { name: '联盟', theme: '../cpnts/reveal/css/theme/league.css' },
      { name: '天空', theme: '../cpnts/reveal/css/theme/sky.css' },
      { name: '米黄', theme: '../cpnts/reveal/css/theme/beige.css' },
      { name: '简洁', theme: '../cpnts/reveal/css/theme/simple.css' },
      { name: '衬线', theme: '../cpnts/reveal/css/theme/serif.css' },
      { name: '血色', theme: '../cpnts/reveal/css/theme/blood.css' },
      { name: '夜晚', theme: '../cpnts/reveal/css/theme/night.css' },
      { name: '月色', theme: '../cpnts/reveal/css/theme/moon.css' },
      { name: '日色', theme: '../cpnts/reveal/css/theme/solarized.css' }
    ],
    transitions: false,
    openButton: true,
    openSlideNumber: false,
    keyboard: true,
    sticky: false,
    autoOpen: true,
    custom: [
      { title: '关于', icon: '<i class="fa fa-info">', content: '<p>基于 Reveal.js 生成。</p>' }
    ]
  }  
});
  
Reveal.addEventListener('slidechanged', function(event) {
  let curSlide = $(event.currentSlide);
  
  let title = curSlide.attr("data-menu-title");
  
  $("#stitle h2").html(title ? title : "&emsp;");
  
  let note = curSlide.find("aside.notes");

  if (note.length == 1) {
    $("#snote").html(note.html());
  }
  else {
    $("#snote").html("<div class=\"lead text-center text-warning\"><i class=\"fa fa-frown-o\"></i>&nbsp;当前幻灯片没有备注</div>");
  }
});