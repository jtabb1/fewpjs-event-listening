const input = document.getElementById("input");

function addingEventListener() {
    alert('I was clicked!');
    input.addEventListener('click', clickAlert);
}

input.addEventListener('click', clickAlert);

function clickAlert() {
    alert('I was clicked!');
  }