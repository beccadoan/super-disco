var showDateEl = document.querySelector("#currentDay");

var allTimesEl = document.querySelector("#all-times")



$(".daily-schedule").on("click",".time-color",function(){
    // var text = $(this).text().trim();
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
        
        $(this).children()[1].getAttribute("id");
        $(this).find(".time-color").addClass("green")
    })
}

updateColors();