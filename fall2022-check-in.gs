function onFormSubmit(){
var form = FormApp.openById('Enter FORM ID here');
  
  var ss = SpreadsheetApp.openById('Enter SPREADSHEET ID here);

  var nufypSlots = ss.getRange("Settings!A11:C12").getValues(); 
  var year1Slots = ss.getRange("Settings!A4:C6").getValues(); 
  var continuing1Slots = ss.getRange("Settings!A2:C4").getValues(); 
  var continuing2Slots = ss.getRange("Settings!A7:C12").getValues();
  var forAllSlots =  ss.getRange("Settings!A11:C28").getValues();
  
  var extraSlotsNufyp = ss.getRange("Settings!A13:C13").getValues();
  var extraSlotsYear1 = ss.getRange("Settings!A14:C14").getValues();
  var extraSlotsContinuing = ss.getRange("Settings!A15:C15").getValues();

  var nufypChoice = [];
  var year1Choice = [];
  var continuingChoice = [];

  for (s in nufypSlots){
    if (nufypSlots[s][0] != "" && nufypSlots[s][2] > 0){
      nufypChoice.push(nufypSlots[s][0]);  
    }
  }

  for (s in year1Slots){
    if (year1Slots[s][0] != "" && year1Slots[s][2] > 0){
      year1Choice.push(year1Slots[s][0]); 
    }
  }

  for (s in continuing1Slots){
    if (continuing1Slots[s][0] != "" && continuing1Slots[s][2] > 0){
      continuingChoice.push(continuing1Slots[s][0]); 
    }
  }

  for (s in continuing2Slots){
    if (continuing2Slots[s][0] != "" && continuing2Slots[s][2] > 0){
      continuingChoice.push(continuing2Slots[s][0]); 
    }
  }
/////////////////////////
  for (s in forAllSlots){
    if (forAllSlots[s][0] != "" && forAllSlots[s][2] > 0){
      nufypChoice.push(forAllSlots[s][0]);
      year1Choice.push(forAllSlots[s][0]); 
      continuingChoice.push(forAllSlots[s][0]); 
    }
  }
///////////////////////
  if(nufypChoice.length==0){
    nufypChoice.push(extraSlotsNufyp[0][0]);
  }

  if(year1Choice.length==0){
    year1Choice.push(extraSlotsYear1[0][0]);
  }

  if(continuingChoice.length==0){
    continuingChoice.push(extraSlotsContinuing[0][0]);
  }
  /*
  Logger.log("Pre-duplicates:");
  Logger.log(nufypChoice);
  Logger.log(year1Choice);
  Logger.log(continuingChoice);*/


  nufypChoice_nonDuplicates = [];
  year1Choice_nonDuplicates = [];
  continuingChoice_nonDuplicates =[];
  // deletion of duplicates - START
  nufypChoice_nonDuplicates = multiDimensionalUnique(nufypChoice);
  year1Choice_nonDuplicates = multiDimensionalUnique(year1Choice);
  continuingChoice_nonDuplicates = multiDimensionalUnique(continuingChoice);

  nufypChoice_nonDuplicates.sort();
  year1Choice_nonDuplicates.sort();
  continuingChoice_nonDuplicates.sort();
  // delete extra dates - START
  nufypChoice_nonDuplicates.shift();
  year1Choice_nonDuplicates.shift();
  continuingChoice_nonDuplicates.shift();

  nufypChoice_nonDuplicates.shift();
  year1Choice_nonDuplicates.shift();
  continuingChoice_nonDuplicates.shift();
  
  nufypChoice_nonDuplicates.shift();
  year1Choice_nonDuplicates.shift();
  continuingChoice_nonDuplicates.shift();
  
  form.getItemById(1723342419).asListItem().setChoiceValues(year1Choice_nonDuplicates);
  form.getItemById(388270230).asListItem().setChoiceValues(continuingChoice_nonDuplicates);
  form.getItemById(1712117637).asListItem().setChoiceValues(nufypChoice_nonDuplicates);


/*
  // delete extra dates - END
  Logger.log("Post-duplicates:");
  Logger.log(nufypChoice_nonDuplicates);
  Logger.log(year1Choice_nonDuplicates);
  Logger.log(continuingChoice_nonDuplicates);*/

  }




function multiDimensionalUnique(arr) {
    var uniques = [];
    var itemsFound = {};
    for(var i = 0, l = arr.length; i < l; i++) {
        var stringified = JSON.stringify(arr[i]);
        if(itemsFound[stringified]) { continue; }
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
    }
    return uniques;
}



















  