var scrProperties = PropertiesService.getScriptProperties();
var ssOpt = SpreadsheetApp.openById('ENTER SPREADSHEET ID HERE');
var formOpt = FormApp.openById('ENTER FORM ID HERE');
var MAX_CAP = 10;


function onFormSubmit(e) {
  optDates = getOptDates();

  // get student's answer:
  var formResponse = e.response;
  var itemResponses = formResponse.getItemResponses();
  var listResponse = itemResponses[1].getResponse();
  Logger.log("User picked date: %s", listResponse);
  updateCapValue(listResponse);
  Logger.log("Current capacity b4 check for full = %s",scrProperties.getProperty(listResponse));
  var isFull = checkCap(listResponse);
  if (isFull == true){
    pushOptDates();
    Logger.log("PROPERTIES AFTER DELETION of %s = %s", listResponse, scrProperties.getKeys());
  }
  
}

function pushOptDates(){
  var dates2push = scrProperties.getKeys();
  var newDates2push = dates2push.filter(date => date != 'version');
  var completeDates = newDates2push.sort(
    function (a,b){
      return parseInt(a.match(/\d\d.|\d./)) - parseInt(b.match(/\d\d.|\d./));
    }
  )
  Logger.log ("Keys obtained to Push, %s", newDates2push);
  items = formOpt.getItems();
  id = items[1].getId();
  if (completeDates.length == 0){
    formOpt.setAcceptingResponses(false);
    return;
  }
  formOpt.getItemById(id).asListItem().setChoiceValues(completeDates);
}

function setInitialProps(argument){
  flushProps();
  var versionHolder = ssOpt.getRange("G2").getValue(); 
  range = getRangeOfDates();
  Logger.log("Range selected by Admin (setInProps): %s", range);
  var dates = ssOpt.getActiveSheet().getRange(range).getValues();
  len = getRowCount(range);
  Logger.log("len is %s", len);
  for (var i=0; i<len; i++){
    scrProperties.setProperty (dates[i][0], 0);
  }
  scrProperties.setProperty('version',versionHolder);
}


function flushProps(){
  PropertiesService.getScriptProperties().deleteAllProperties();
}

function updateCapValue(listResponse){
  if (!scrProperties.getKeys().includes(listResponse)){
    return;
  }
  scrProperties.setProperty(listResponse,parseInt(scrProperties.getProperty(listResponse))+1);
}

function checkCap(listResponse){
  if (scrProperties.getProperty(listResponse) >= MAX_CAP){
    Logger.log("Property Deleted: %s with value %s",listResponse, scrProperties.getProperty(listResponse));
    scrProperties.deleteProperty(listResponse); 
    return true;  
  } else{
    return false;
  }
}

function getRowCount(range){
  var rowCount = ssOpt.getActiveSheet().getRange(range).getNumRows();
  return rowCount;
}

function getRangeOfDates(){
  var range = ssOpt.getRange("G1").getValue();
  return range;
}

function getOptDates(){ // returns array of dates
  // check if new dates are pushed
  var currVersion = ssOpt.getRange("G2").getValue(); // version holder
  Logger.log ("VERSION RETIREVED: %s", currVersion);
  if (currVersion > scrProperties.getProperty('version')){
    flushProps();  
    setInitialProps();
    range = getRangeOfDates();
    Logger.log("Range selected by Admin: %s", range);
    var dates = ssOpt.getActiveSheet().getRange(range).getValues(); // 2D array: access arr[i][0]
    return dates;
  } else {
    return;
  }
  
}
