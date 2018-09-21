var chatClass = "";
$("#schedule-button").click(function(){
    //window.location.href="index.html"
    $("#index-page").show();
    $("#schedule-button").addClass ("button-active");
    $("#players-page").hide();
    $("#players-button").removeClass("button-active");
    $("#more-page").hide();
    $("#more-button").removeClass("button-active");
    $("#chat-page").hide();
});
$("#players-button").click(function(){
    //window.location.href="players.html"
    $("#index-page").hide();
    $("#schedule-button").removeClass("button-active");
    $("#players-page").show();
    $("#players-button").addClass ("button-active");
    $("#more-page").hide();
    $("#more-button").removeClass("button-active");
    $("#chat-page").hide();
});
$("#more-button").click(function(){
    //window.location.href="more.html"
    $("#index-page").hide();
    $("#schedule-button").removeClass("button-active");
    $("#players-page").hide();
    $("#players-button").removeClass("button-active");
    $("#more-page").show();
    $("#more-button").addClass ("button-active");
    $("#chat-page").hide();
});
$(".chat1, .chat2, .chat3, .chat4, .chat5, .chat6, .chat7, .chat8, .chat9, .chat10, .chat11, .chat12, .chat12, .chat13, .chat14, .chat15, .chat16, .chat17").click(function(){
    $("#index-page").hide();
    $("#schedule-button").removeClass("button-active");
    $("#chat-page").show();
    $("#chat").addClass ("chatActive");
    $("#menu-chat1").show();
    chatClass = this.className;
    showSection(chat1Section, buttonChat1);
});

$("#u1").click(function(){
    $("#u1-players").show();
    $("#u2-players").hide();
    $("#u3-players").hide();
    $("#u4-players").hide();
    $("#u5-players").hide();
    $("#u6-players").hide();
})
$("#u2").click(function(){
    $("#u1-players").hide();
    $("#u2-players").show();
    $("#u3-players").hide();
    $("#u4-players").hide();
    $("#u5-players").hide();
    $("#u6-players").hide();
})
$("#u3").click(function(){
    $("#u1-players").hide();
    $("#u2-players").hide();
    $("#u3-players").show();
    $("#u4-players").hide();
    $("#u5-players").hide();
    $("#u6-players").hide();
})
$("#u4").click(function(){
    $("#u1-players").hide();
    $("#u2-players").hide();
    $("#u3-players").hide();
    $("#u4-players").show();
    $("#u5-players").hide();
    $("#u6-players").hide();
})
$("#u5").click(function(){
    $("#u1-players").hide();
    $("#u2-players").hide();
    $("#u3-players").hide();
    $("#u4-players").hide();
    $("#u5-players").show();
    $("#u6-players").hide();
})
$("#u6").click(function(){
    $("#u1-players").hide();
    $("#u2-players").hide();
    $("#u3-players").hide();
    $("#u4-players").hide();
    $("#u5-players").hide();
    $("#u6-players").show();
})


$("#menu-recent").click(function(){
    $("#icono-all").addClass("color-active-chat")
    $("#icono-mine").removeClass("color-active-chat")
});
$("#menu-my-posts").click(function(){
    $("#icono-mine").addClass("color-active-chat")
    $("#icono-all").removeClass("color-active-chat")
})