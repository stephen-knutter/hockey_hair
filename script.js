$(function(){
  //DISPLAY USER INFO TOOLTIP ON HOVER
  var timeoutId = null;
  $("body").on("mouseenter", ".info", function(){
    if(timeoutId) clearTimeout(timeoutId);
    $(".tip").remove();
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

  //CLEAR AND SET TIMEOUT MOUSE LEAVING PIC
  $("body").on("mouseleave", ".info", function(){
    if(timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(function(){
      $(".tip").remove();
    },150)
  })

  //IF MOUSE ENTERS TOOLTIP REMOVE THE TIMEOUT
  $("body").on("mouseenter", ".tip", function(){
    if(timeoutId) clearTimeout(timeoutId);
  });

  //IF MOUSE LEAVES TOOLTIP CLOSE IT
  $("body").on("mouseleave", ".tip", function(){
    $(".tip").remove();
    if(timeoutId) clearTimeout(timeoutId);
  })
})
