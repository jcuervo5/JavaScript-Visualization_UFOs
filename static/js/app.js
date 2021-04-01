var tableData = data;

var table = d3.select("tbody")

function make_table(data) {
    table.html("")
    data.forEach((table_row) => {
        var row = table.append("tr");
        Object.values(table_row).forEach((val) => {
            var cell = row.append("td");
            cell.text(val)
        }
        );
    }
    );
}

function on_click() {
var input_date = d3.select("#datetime").property("value");

var new_data = tableData;

new_data = new_data.filter(table_row => table_row.datetime === input_date);

make_table(new_data);

}

d3.select("#filter-btn").on("click", on_click);


make_table(tableData);