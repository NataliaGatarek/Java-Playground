// dom 2
var cols = 3;
var rows = 2;
var table = '';
for (var r = 0; r < rows; r++) {
  table += "<tr>";
  for (var c = 0; c < cols; c++){
    table +="<td>" +c + "</td>"
  }
  table += "</tr>";
}
document.write("<table border ='1'>" +table + "</table>")