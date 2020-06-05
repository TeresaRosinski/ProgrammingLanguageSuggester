$(document).ready(function() {
  $(".hero-text").hide(1).slideToggle(1000);
  $("button#show").click(function(){
    $(".will-be-hidden").slideToggle(1000);
  });
  $("form#formOne").submit(function(event){
    const name = $("input#name").val();
    const company= $("select#company").val();
    const system = $("input:radio[name=computer]:checked").val();
    const problemSolvingPref = $("input:radio[name=problem-solving]:checked").val();
    const dataProcessing = $("input:radio[name=data-processing]:checked").val();
    const whichHouse = $("select#house").val();
      

    if (dataProcessing === "yesData" && problemSolvingPref === "one-way" ){
      $("#output").show();
      $("#typeOfCode").text("Python");
    } else if (company === "Hulu" || company === "Kickstarter" && problemSolvingPref === "ambiguity") {
      $("#typeOfCode").text("Ruby");
      $("#output").show();
    } else if (system ===  "apple") {
      $("#typeOfCode").text("Swift");
      $("#output").show();
    }else if (system === "microsoft"){
      $("#typeOfCode").text("C#");
      $("#output").show(); 
    } else {
      $("#typeOfCode").text("You're a dynamic person, good luck!")
      $("output").show();
    }

    $(".name").text(name);
    event.preventDefault();
  }); 
});