function myFunction() {
  var fullHolder = SpreadsheetApp.getActiveSpreadsheet();
  var dataHolder = fullHolder.getSheetByName("апрувал");
  var roomsHolder = fullHolder.getSheetByName("разбивка по этажам");
  var allApplicants = dataHolder.getRange("A2:D300").getValues();

  // ranges
  var block11Range = roomsHolder.getRange("X3:Y321");
  var block19Range = roomsHolder.getRange("AA3:AB321");
  var block20Range = roomsHolder.getRange("U3:V321"); 
  var block22Range = roomsHolder.getRange("C3:D321");
  var block23Range = roomsHolder.getRange("F3:G321");
  var block24Range = roomsHolder.getRange("I3:J321");
  var block25Range = roomsHolder.getRange("L3:M321");
  var block26Range = roomsHolder.getRange("O3:P321");
  var block27Range = roomsHolder.getRange("R3:S321");

  var block11Rooms = block11Range.getValues();
  var block19Rooms = block19Range.getValues();
  var block20Rooms = block20Range.getValues();
  var block22Rooms = block22Range.getValues();
  var block23Rooms = block23Range.getValues();
  var block24Rooms = block24Range.getValues();
  var block25Rooms = block25Range.getValues();
  var block26Rooms = block26Range.getValues();
  var block27Rooms = block27Range.getValues();




  var block11 = [];
  var block19 = [];
  var block20 = [];
  var block22 = [];
  var block23 = [];
  var block24 = [];
  var block25 = [];
  var block26 = [];
  var block27 = [];

  for(var i=0; i<allApplicants.length;i++){
    var applicant = allApplicants[i];
    if (applicant[2] == "Блок 11"){
      block11.push([applicant[1],applicant[3]]);
    }
    if (applicant[2] == "Блок 19"){
      block19.push([applicant[1],applicant[3]]);
    }
    if (applicant[2] == "Блок 20"){
      block20.push([applicant[1],applicant[3]]);
    }
    if (applicant[2] == "Блок 22"){
      block22.push([applicant[1],applicant[3]]);
    }
    if (applicant[2] == "Блок 23"){
      block23.push([applicant[1],applicant[3]]);
    }
    if (applicant[2] == "Блок 24"){
      block24.push([applicant[1],applicant[3]]);
    }
    if (applicant[2] == "Блок 25"){
      block25.push([applicant[1],applicant[3]]);
    }
    if (applicant[2] == "Блок 26"){
      block26.push([applicant[1],applicant[3]]);
    }
    if (applicant[2] == "Блок 27"){
      block27.push([applicant[1],applicant[3]]);
    }
  }

  for(var i = 0; i< block11.length; i++){
    for(var j = 0; j<block11Rooms.length; j++){
      if (block11[i][1] == block11Rooms[j][0]){
        var cell2edit = roomsHolder.getRange(j+3,block11Range.getColumn()+1);
        if (cell2edit.getValue() == ""){
          var name2append = block11[i][0];
        } else {
          if(cell2edit.getValue().includes(block11[i][0])){
            var name2append = cell2edit.getValue(); // keep as it is
          } else{
            var name2append = cell2edit.getValue() + ", " + block11[i][0]; // concat as needed
          }
        }
        cell2edit.setValue(name2append);        
      }
    }
  }

  for(var i = 0; i< block19.length; i++){
    for(var j = 0; j<block19Rooms.length; j++){
      if (block19[i][1] == block19Rooms[j][0]){
        var cell2edit = roomsHolder.getRange(j+3,block19Range.getColumn()+1);
        if (cell2edit.getValue() == ""){
          var name2append = block19[i][0];
        } else {
          if(cell2edit.getValue().includes(block19[i][0])){
            var name2append = cell2edit.getValue(); // keep as it is
          } else{
            var name2append = cell2edit.getValue() + ", " + block19[i][0]; // concat as needed
          }
        }
        cell2edit.setValue(name2append);        
      }
    }
  }

  for(var i = 0; i< block20.length; i++){
    for(var j = 0; j<block20Rooms.length; j++){
      if (block20[i][1] == block20Rooms[j][0]){
        var cell2edit = roomsHolder.getRange(j+3,block20Range.getColumn()+1);
        if (cell2edit.getValue() == ""){
          var name2append = block20[i][0];
        } else {
          if(cell2edit.getValue().includes(block20[i][0])){
            var name2append = cell2edit.getValue(); // keep as it is
          } else{
            var name2append = cell2edit.getValue() + ", " + block20[i][0]; // concat as needed
          }
        }
        cell2edit.setValue(name2append);        
      }
    }
  }

  for(var i = 0; i< block22.length; i++){
    for(var j = 0; j<block22Rooms.length; j++){
      if (block22[i][1] == block22Rooms[j][0]){
        var cell2edit = roomsHolder.getRange(j+3,block22Range.getColumn()+1);
        if (cell2edit.getValue() == ""){
          var name2append = block22[i][0];
        } else {
          if(cell2edit.getValue().includes(block22[i][0])){
            var name2append = cell2edit.getValue(); // keep as it is
          } else{
            var name2append = cell2edit.getValue() + ", " + block22[i][0]; // concat as needed
          }
        }
        cell2edit.setValue(name2append);        
      }
    }
  }
  for(var i = 0; i< block23.length; i++){
    for(var j = 0; j<block23Rooms.length; j++){
      if (block23[i][1] == block23Rooms[j][0]){
        var cell2edit = roomsHolder.getRange(j+3,block23Range.getColumn()+1);
        if (cell2edit.getValue() == ""){
          var name2append = block23[i][0];
        } else {
          if(cell2edit.getValue().includes(block23[i][0])){
            var name2append = cell2edit.getValue(); // keep as it is
          } else{
            var name2append = cell2edit.getValue() + ", " + block23[i][0]; // concat as needed
          }
        }
        cell2edit.setValue(name2append);        
      }
    }
  }
  for(var i = 0; i< block24.length; i++){
    for(var j = 0; j<block24Rooms.length; j++){
      if (block24[i][1] == block24Rooms[j][0]){
        var cell2edit = roomsHolder.getRange(j+3,block24Range.getColumn()+1);
        if (cell2edit.getValue() == ""){
          var name2append = block24[i][0];
        } else {
          if(cell2edit.getValue().includes(block24[i][0])){
            var name2append = cell2edit.getValue(); // keep as it is
          } else{
            var name2append = cell2edit.getValue() + ", " + block24[i][0]; // concat as needed
          }
        }
        cell2edit.setValue(name2append);        
      }
    }
  }
  for(var i = 0; i< block25.length; i++){
    for(var j = 0; j<block25Rooms.length; j++){
      if (block25[i][1] == block25Rooms[j][0]){
        var cell2edit = roomsHolder.getRange(j+3,block25Range.getColumn()+1);
        if (cell2edit.getValue() == ""){
          var name2append = block25[i][0];
        } else {
          if(cell2edit.getValue().includes(block25[i][0])){
            var name2append = cell2edit.getValue(); // keep as it is
          } else{
            var name2append = cell2edit.getValue() + ", " + block25[i][0]; // concat as needed
          }
        }
        cell2edit.setValue(name2append);        
      }
    }
  }
  for(var i = 0; i< block26.length; i++){
    for(var j = 0; j<block26Rooms.length; j++){
      if (block26[i][1] == block26Rooms[j][0]){
        var cell2edit = roomsHolder.getRange(j+3,block26Range.getColumn()+1);
        if (cell2edit.getValue() == ""){
          var name2append = block26[i][0];
        } else {
          if(cell2edit.getValue().includes(block26[i][0])){
            var name2append = cell2edit.getValue(); // keep as it is
          } else{
            var name2append = cell2edit.getValue() + ", " + block26[i][0]; // concat as needed
          }
        }
        cell2edit.setValue(name2append);        
      }
    }
  }
  for(var i = 0; i< block27.length; i++){
    for(var j = 0; j<block27Rooms.length; j++){
      if (block27[i][1] == block27Rooms[j][0]){
        var cell2edit = roomsHolder.getRange(j+3,block27Range.getColumn()+1);
        if (cell2edit.getValue() == ""){
          var name2append = block27[i][0];
        } else {
          if(cell2edit.getValue().includes(block27[i][0])){
            var name2append = cell2edit.getValue(); // keep as it is
          } else{
            var name2append = cell2edit.getValue() + ", " + block27[i][0]; // concat as needed
          }
        }
        cell2edit.setValue(name2append);        
      }
    }
  }    
}

function onOpen() {
  let ui = SpreadsheetApp.getUi();
  ui.createMenu('Update the rooms')
      .addItem('Display people in rooms', 'myFunction')
      .addToUi();
}
