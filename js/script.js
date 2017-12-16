var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

var myTable = "<table>";

while(monthNumber<=monthsToPrint){
    numSheep*=4;
    myTable += "<tr>";
    myTable += "<td>" + monthNumber + "</td>";
    myTable += "<td>" + "There will be " + numSheep + " sheep after "
                      + monthNumber + " month(s)!" + "</td>";
    myTable += "</tr>";
    monthNumber++;

}

myTable += "</table>";

var result = document.getElementById("block1");
result.innerHTML = myTable;