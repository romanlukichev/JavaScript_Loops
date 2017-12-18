var myTable = "<table>";
var totalGen = 19;
var totalMW = 0;

for(currentGen=1; currentGen<=totalGen; currentGen++ ){
    myTable += "<tr>";
    if( currentGen%2 == 1 ){
        myTable += "<td>" + "Generator #" + currentGen + " is off." + "</td>";
        continue;
    }
    else
    {
        if(currentGen>=1 && currentGen<=4){
            totalMW += 62;
            myTable += "<td>" + "Generator #" + currentGen + " is on, adding "
                + 62 + " MW, for a total of " + totalMW + " MW!" + "</td>";

        }
        else if(currentGen>=5 && currentGen<=totalGen){
            totalMW += 124;
            myTable += "<td>" + "Generator #" + currentGen + " is on, adding "
                + 124 + " MW, for a total of " + totalMW + " MW!" + "</td>";

        }
    }
    myTable += "</tr>";
}

myTable += "</table>";

var result = document.getElementById("block1");
result.innerHTML = myTable;