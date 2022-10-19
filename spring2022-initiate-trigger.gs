function createTrigger() {
  var form = FormApp.openById('ENTER FORM ID HERE');
  ScriptApp.newTrigger('onFormSubmit')
    .forForm(form)
    .onFormSubmit()
    .create();
}
