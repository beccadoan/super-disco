var showDateEl = document.querySelector("#currentDay");
var allTimesEl = document.querySelector("#all-times");


var schedule = {};

$(".time-save").on("click", function(){
    var textEl =  $(this)[0].parentElement.querySelector(".time-color").getAttribute("id").replace("t-","");
    saveTask(textEl);
  })

var updateColors = function() {
    // put the current day info in the element to show the date.
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    showDateEl.textContent = currentDay;

    // see what the current hour is
    var currentHour = parseInt(moment().format("H"));

    // loop through all children of the time container
    $(allTimesEl).children().each(function() {
        // grab the time data from the time slot
        var timeSlot = parseInt($(this).children()[1].getAttribute("id").replace("t-",""));

        // grey if time is complete
        if (timeSlot < currentHour) {
            $(this).find(".time-color").removeClass("green")
            $(this).find(".time-color").removeClass("red")
            $(this).find(".time-color").addClass("grey")
        // red if time is current
        } else if (timeSlot === currentHour) {
            $(this).find(".time-color").removeClass("green")
            $(this).find(".time-color").removeClass("grey")
            $(this).find(".time-color").addClass("red")
        // green if time has not yet happened
        } else {
            $(this).find(".time-color").removeClass("grey")
            $(this).find(".time-color").removeClass("red")
            $(this).find(".time-color").addClass("green")
        }
    })
}

var saveTask = function(id) {
    var element = document. querySelector('#'+'t-'+id);
    text = element.querySelector("textarea");
    text = $(text).val();
    console.log(text);
    schedule[id] = text;
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

var loadSchedule = function() {
    schedule = JSON.parse(localStorage.getItem("schedule"));

    if (!schedule) {
        schedule = {
            9: "",
            10: "",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
            16: "",
            17: ""
        }
    }

    $(allTimesEl).children().each(function() {
        var timeSlot = $(this).children()[1].getAttribute("id").replace("t-","");
        var textValue = $(this).find("textarea");
        $(textValue).val(schedule[timeSlot]);
    })
}

loadSchedule();
updateColors();


// update colors every minute
setInterval(function () {
    updateColors()
}, 60000);