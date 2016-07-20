$(function(){
  $("body").on("mouseenter", ".info", function(){
    $this = $(this);
    var pInfo = $this.attr('id');
    var aInfo = pInfo.split("|");
    var pName = aInfo[0] + ' ' + aInfo[1];
    var pTeam = aInfo[2] + ' ' + aInfo[3];
    var pYear = aInfo[4];

    var offset = $this.offset();
    var oLeft = offset.left;
    var oTop = offset.top;

    $("body")
      .append("<div class='tip'><p>"+pName+"</p><p class='name'>"+pTeam+"</p><p>"+pYear+"</p></div>");
    $(".tip")
      .css({'position':'absolute', 'top': oTop - 50+"px", 'left':oLeft + 60+"px"});
  })

  var timeout = setTimeout(function(){

  },300);

  $("body").on("mouseleave", ".info", function(){
    $this = $(this);
    $("div.tip").remove();
  })
})
