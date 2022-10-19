function onOpen() {
  let ui = SpreadsheetApp.getUi();
  ui.createMenu('Push new dates to Form')
      .addItem('Push new period dates', 'resetForNewPeriod')
      .addToUi();
}

function getDates(range){
  var dateHolder = SpreadsheetApp.getActiveSpreadsheet();
  var dates = dateHolder.getActiveSheet().getRange(range).getValues();
  var newDates = [];
  for (var i=0; i<dates.length; i++){
    newDates.push(dates[i][0]); // convert to 1D
  }
  return newDates;
}

function pushNewDates(dates){
  var form = FormApp.openById('ENTER FORM ID HERE');
  items = form.getItems();
  if (form.isAcceptingResponses() == false){
    form.setAcceptingResponses(true);
  }  
  id = items[2].getId();

  form.getItemById(id).asListItem().setChoiceValues(dates);
}

function resetForNewPeriod(){
  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt('Date range needed', 'Enter the range where your new dates are stored in the following format A2:A14', ui.ButtonSet.OK);
  if (response.getSelectedButton() == ui.Button.OK) {
    var range = response.getResponseText();
  }
  var cell = SpreadsheetApp.getActiveSpreadsheet().getRange("G1");
  cell.setValue(range);

  var resetFullRange = "B2:C"; 
  var resetCellObj = SpreadsheetApp.getActiveSpreadsheet().getRange(resetFullRange);
  resetCellObj.setValue("");



  dates = getDates(range);
  pushNewDates(dates);
}