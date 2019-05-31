let rowCount = 0;
let colCount = 16;
let cellsTable = document.getElementById("cells");

function rowPlus() {
    let newRow = document.createElement("tr");
    for (let i = 0; i < colCount; i++) {
        let newCell = document.createElement("td");
        newRow.appendChild(newCell);
    }
    cellsTable.appendChild(newRow);
    rowCount++;
};

function rowMinus() {
    cellsTable.removeChild(cellsTable.lastChild);
    rowCount--;
};

function colPlus() {
    let children = Array.from(cellsTable.children);
    children.forEach((row) => {
        let newCell = document.createElement("td");
        row.appendChild(newCell);
    });
    colCount++;
};

function colMinus() {
    let children = Array.from(cellsTable.children);
    children.forEach((row) => {
        row.removeChild(row.lastChild);
    });
    colCount--;
};

let colorSelector = document.getElementById("select-color");
let color;
function updateColor() {
    color = colorSelector.value;
};
updateColor();

function fillAll(){
  let tableChildren = Array.from(cellsTable.children);
    tableChildren.forEach((row) => {
      let rowChildren = Array.from(row.children);
      rowChildren.forEach((cell)=>{
        cell.style.backgroundColor =color;

      });
    });
};

function fillEmpty(){
  let tableChildren = Array.from(cellsTable.children);
    tableChildren.forEach((row) => {
      let rowChildren = Array.from(row.children);
      rowChildren.forEach((cell)=>{

        if(cell.style.backgroundColor == ""){

          cell.style.backgroundColor =color;
        }
        //console.log(cell.style.backgroundColor);

      });
    });
};
