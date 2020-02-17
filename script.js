$(document).ready(function() {

let m = moment().format(`MMMM Do YYYY`);
$("#currentDay").text(m);

let plans = {
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
};

$(document).on("click", ".saveBtn", function(){
    let dataVal = parseInt($(this).attr("data-value"));
    let textInput = $(`textarea.${dataVal}`).val();
    console.log(textInput);
    plans[dataVal] = textInput;
    localStorage.setItem("savedPlans", JSON.stringify(plans));
});

  
  function getPlans() {
      let savedPlans = JSON.parse(localStorage.getItem("savedPlans"));
      if (savedPlans){
          return savedPlans;
        }
        else {
            return plans;
        }
    };
    
function displayPlans () {
    plans = getPlans();
    let planKeys = Object.keys(plans);
    console.log(planKeys);
    planKeys.forEach(function(key, index) {
        $(`textarea.${key}`).val(plans[key]);
    })

}

displayPlans();
    
})