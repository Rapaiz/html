$("#btnenvelope").addEvent("click", function(){
  var SM = new SimpleModal({"btn_ok":"Confirm button"});
      SM.addButton("Action button", "btn primary", function(){
        alert("Add your code");
        this.hide();
      });
      SM.addButton("Cancel", "btn");
      SM.show({
        "model":"modal",
        "title":"Title",
        "contents":"Your message..."
      }); 
});