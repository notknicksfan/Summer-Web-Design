$(document).ready(function(){
  $("#spotify").click(function(){
    alert("Album is not avaliable yet.");
  });
  $("#applemusic").click(function(){
    alert("Album is not avaliable yet.");
  });
  $(".closebox").click( function(){
    $("#subscribebox").fadeOut();
  });
  $("#darkmode").click( function(){
    $("body").css("background-color","black");
    $(this).attr("src", "images/sun.jpg");
    $(this).attr("id","lightmode");
  });
  $(".submit").click(function(){
    $(".message").html("Thank you. <img src='images/close.png' " );
    $("#subscribebox").fadeOut();
  });
  $("#lightmode").click( function(){
    $("body").css("background-color","white");
    $(this).attr("src", "images/darkmode.png");
    $(this).attr("id","darkmode");
  });
});
