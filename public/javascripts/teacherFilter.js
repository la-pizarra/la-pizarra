$(document).ready(() => {

  document.getElementById('subject').onchange = function () {
    // let container = document.getElementById('first');
    // //container.classList.remove("on");
    // container.classList.add("off");
    document.getElementById('first').classList.add("off");
    document.getElementById('second').classList.remove("off");
  }


  ocument.getElementById('selectCurrency').onchange = currencyChanged
  document.getElementsByClassName('goToAddMeet');
  console.log(arr)
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i], i)
    arr[i].onclick = doing;
    function doing() {
      console.log('Pasa por el adddd');
      // let container = document.getElementById('first');
      // //container.classList.remove("on");
      // container.classList.add("off");
      document.getElementById('form-meeting').classList.remove("off");
    }
  }
})