function onFormSubmit(e) {
  generalForm = FormApp.getActiveForm();
  formItems = generalForm.getItems();

  
  var maleChoicesList = generalForm.getItemById(1629029923);
  var maleChoicesArray = maleChoicesList.asListItem().getChoices();


  var femaleChoiceList = generalForm.getItemById(945608457);
  var femaleChoicesArray = femaleChoiceList.asListItem().getChoices();


  var formResponse = e.response;
  var itemResponses = formResponse.getItemResponses();
  var genderResponse = itemResponses[2].getResponse();
  var listResponse = itemResponses[3].getResponse(); // handles the actual Block and floor choice tied to actual page break (they've same name)


  var indexToDelete = -1;
  if (genderResponse == "Male"){
    indexToDelete = maleChoicesArray.map(x => x.getValue()).indexOf(listResponse);
    if (indexToDelete != -1){
      maleChoicesArray.splice(indexToDelete,1);
      maleChoicesList.asListItem().setChoices(maleChoicesArray);
    }
  } else {
    indexToDelete = femaleChoicesArray.map(x => x.getValue()).indexOf(listResponse);
    if (indexToDelete != -1){
      femaleChoicesArray.splice(indexToDelete,1);
      femaleChoicesList.asListItem().setChoices(femaleChoicesArray);
    }
    
  }
  



  var pageBreakToDelete = formItems.map(x => x.getTitle()).indexOf(listResponse);
  generalForm.deleteItem(pageBreakToDelete);
  generalForm.deleteItem(pageBreakToDelete);
  
}
