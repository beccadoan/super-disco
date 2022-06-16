var showDateEl = document.querySelector("#currentDay");

var allTimesEl = document.querySelector("#all-times")



$(".daily-schedule").on("click",".time-color",function(){
    // var text = $(this).text().trim();
    var taskInput = $(this).find("textarea");

    // var textInput = $("<textarea>").addClass("form-control").val(text);
    // $(this).replaceWith(textInput);
    // textInput.trigger("focus");
})



var updateColors = function() {
    // put the current day info in the element to show the date.
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    showDateEl.textContent = currentDay;

    // see what the current hour is
    var currentHour = parseInt(moment().format("H"));

    // loop through all children of the time container
    $(allTimesEl).children().each(function(){
        
        var timeSlot = parseInt($(this).children()[1].getAttribute("id"));
        console.log(timeSlot);
        if (timeSlot < currentHour) {
            $(this).find(".time-color").removeClass("green")
            $(this).find(".time-color").removeClass("red")
            $(this).find(".time-color").addClass("grey")
        } else if (timeSlot === currentHour) {
            $(this).find(".time-color").removeClass("green")
            $(this).find(".time-color").removeClass("grey")
            $(this).find(".time-color").addClass("red")
        } else {
            $(this).find(".time-color").removeClass("grey")
            $(this).find(".time-color").removeClass("red")
            $(this).find(".time-color").addClass("green")
        }
    })
}

updateColors();

// update colors every minute
setInterval(function () {
    updateColors()
}, 60000);