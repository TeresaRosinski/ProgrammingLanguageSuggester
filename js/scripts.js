$(document).ready(function() {
  $("form#formOne").submit(function(event){
    const name = $("input#name").val();
    const company= $("#company").val();
    const system = $("input:radio[name=computer]:checked").val();
    const problemSolvingPref = $("input:radio[name=problem-solving]:checked").val();
    const dataProcessing = $("input:radio[name=data-processing]:checked").val();
    const whichHouse = $("#house").val();
      

    if (dataProcessing === "yesData" && problemSolvingPref === "one-way" && whichHouse === "Slytherin" && company === "Google" || "Spotify") {
      $("#typeOfCode").text("You should definitely learn Python if you enjoy Data Analytics, want to work for Spotify or Google and you're a Slytherin.");
      $("#output").show();
    } else if (problemSolvingPref === "ambiguity" && company === "Hulu" || "Kickstarter") {
      $("#typeOfCode").text("you could really enjoy Ruby. It allows room for many ways to solve problems and companies such as Hulu and Kickstarter use it.");
      $("#output").show();
    } else if (system ===  "apple") {
      $("#typeOfCode").text("Swift was created by Apple, since you prefer Apple to Microsoft you might enjoy this language.");
      $("#output").show();
    }else if (system === "microsoft"){
      $("#typeOfCode").text("C# was created by Microsoft - you might enjoy learning this language");
      $("#output").show(); 
    }


    event.preventDefault();
  });
});