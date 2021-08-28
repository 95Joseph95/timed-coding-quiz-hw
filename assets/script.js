var myDay = [
    {
        id: "0",
        hour: "1",
        time: "1",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "0",
        hour: "2",
        time: "2",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "0",
        hour: "3",
        time: "3",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "0",
        hour: "4",
        time: "4",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "0",
        hour: "5",
        time: "5",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "0",
        hour: "6",
        time: "6",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "0",
        hour: "7",
        time: "7",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "0",
        hour: "8",
        time: "8",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "0",
        hour: "9",
        time: "9",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "0",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "0",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "0",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "0",
        hour: "1",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "0",
        hour: "2",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "0",
        hour: "3",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "0",
        hour: "4",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "0",
        hour: "5",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "0",
        hour: "6",
        time: "18",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "0",
        hour: "7",
        time: "19",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "0",
        hour: "8",
        time: "20",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "0",
        hour: "9",
        time: "20",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "0",
        hour: "10",
        time: "21",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "0",
        hour: "11",
        time: "22",
        meridiem: "pm",
        reminder: ""
    },
    
]

//------------------------------------------------------------------------------------------FUNCTIONS---------------------------------------------------------------------------------------------
function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}

function saveReminders() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}

function displayReminders() {
    myDay.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}

function init() {
    var storedDay = JSON.parse(localStorage.getItem("myDay"));

    if (storedDay) {
        myDay = storedDay;
    }

    saveReminders();
    displayReminders();
}
//------------------------------------------------------------------------------------------FUNCTIONS---------------------------------------------------------------------------------------------


getHeaderDate();


myDay.forEach(function(thisHour) {
    // creates timeblocks row
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    
    var hourField = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
    });

    
    var hourPlan = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        planData.attr ({
            "class": "past", 
        })
    } else if (thisHour.time === moment().format("HH")) {
        planData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        planData.attr({
            "class": "future"
        })
    }

    
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
})


init();



$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    displayReminders();
})