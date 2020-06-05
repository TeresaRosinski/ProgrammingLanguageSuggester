$(document).ready(function() {
  $("#formOne").submit(function(event){
    const name = $("input#name").val();
    const company= $("#company").val();
    const system = $("input:radio[name=computer]:checked").val();
    const problemSolvingPref = $("input:radio[name=problem-solving]:checked").val();
    const dataProcessing = $("input:radio[name=data-processing]:checked").val();
    const whichHouse = $("#house").val();
      console.log (name);

    event.preventDefault();
  });
});