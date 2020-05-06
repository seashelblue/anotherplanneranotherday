const plan = moment();

var words;
var hourInfo;

console.log(plan.format("dddd, MMMM Do"));

$("#currentDay").text(plan.format("dddd, MMMM Do"));



$(document).ready( function() {
    colorChange ();
    renderText ();
});

function colorChange () {
    
    var realTime = moment().hours();
    
    console.log("Current Time" + realTime);

    $(".input").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        console.log(timeTest);
        
        if (realTime > timeTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (realTime < timeTest) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

$(".saveBtn").click(function() {
    words = $(this).siblings(".input").val();
    console.log(words);
    hourInfo = $(this).siblings(".hour").text();
    console.log(hourInfo);
    localStorage.setItem(hourInfo, JSON.stringify(words));
    
    colorChange ();
    renderText ();
})


// local storage
function renderText () {
    var saveWords9 = JSON.parse(localStorage.getItem("9:00 AM"));
    $("#nine").val("");
    $("#nine").val(saveWords9);
    
    var saveWords10 = JSON.parse(localStorage.getItem("10:00 AM"));
    $("#ten").val("");
    $("#ten").val(saveWords10);
    
    var saveWords11 = JSON.parse(localStorage.getItem("11:00 AM"));
    $("#eleven").val("");
    $("#eleven").val(saveWords11);
    
    var saveWords12 = JSON.parse(localStorage.getItem("12:00 PM"));
    $("#twelve").val("");
    $("#twelve").val(saveWords12);
    
    var saveWords1 = JSON.parse(localStorage.getItem("1:00 PM"));
    $("#one").val("");
    $("#one").val(saveWords1);

    var saveWords2 = JSON.parse(localStorage.getItem("2:00 PM"));
    $("#two").val("");
    $("#two").val(saveWords2);

    var saveWords3 = JSON.parse(localStorage.getItem("3:00 PM"));
    $("#three").val("");
    $("#three").val(saveWords3);

    var saveWords4 = JSON.parse(localStorage.getItem("4:00 PM"));
    $("#four").val("");
    $("#four").val(saveWords4);

    var saveWords5 = JSON.parse(localStorage.getItem("5:00 PM"));
    $("#five").val("");
    $("#five").val(saveWords5);
}