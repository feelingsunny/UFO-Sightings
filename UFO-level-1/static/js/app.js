// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Function Build Table
function buildTable(data) {
    // Start By Clearing Existing Data
    tbody.text("");
    // Loop Through `data`
    data.forEach(function(UFOsightings) {
        // Append Table Row `tr` to the Table Body `tbody`
        let new_tr = tbody.append("tr");
        // `Object.values` & `forEach` to Iterate Through Values
        Object.entries(UFOsightings).forEach(function([key, value]) {
            // Append a Cell to the Row for Each Value
            let new_td = new_tr.append("td").text(value)
        })
    })
}

// Build Table with data.js 
buildTable(tableData);

// Trigger a Function When the filter Button is Clicked
function handleClick() {
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    //select the web user's input and the filter button
    var dateInputText = d3.select("#datetime")
    var button = d3.select("filter-btn")
        //print the value that was input
    console.log(dateInputText.property("value"));
    //create a new table showing only the filterd data
    var new_table = tableData.filter(sighting => sighting.datetime === dateInputText.property("value"))
        //display the new table
    buildTable(new_table);
}

// event listener to handle change and click
d3.selectAll("#filter-btn").on("click", handleClick);