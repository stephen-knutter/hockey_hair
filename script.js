$(function(){
  $(".info").on("mouseenter", function(){
    $this = $(this);
    var pInfo = $this.attr('id');
    var aInfo = pInfo.split("|");
    var pName = aInfo[0] + ' ' + aInfo[1];
    var pTeam = aInfo[2] + ' ' + aInfo[3];
    var pYear = aInfo[4];

    //console.log(pName + '-' + pTeam + '-' + pYear);

    var offset = $this.offset();
    var oLeft = offset.left;
    var oTop = offset.top;

    var nElem = ("<div class='tip'>");
    var nName = ("<p class='name'></p>");
    var nTeam = ("<p class='team'>");
    var nYear = ("<p class='year'>");

    nName.html(pName);
    nTeam.html(pTeam);
    nYear.html(pYear);
    nElem.html(nName+nTeam+nElem);

    $("body").append(nElem).css({'position':'absolute', 'top':oTop - 5+"px", 'left':oLeft - 10+"px"});
  })
})
