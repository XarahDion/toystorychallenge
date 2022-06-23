console.log("To infinity and beyond.");

const myForm = document.querySelector("#myForm");
const commentsInput = document.querySelector("#comments");
const ratingsList = document.querySelector("#ratings");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(commentsInput.value === ''){
  } else { const li = document.createElement("li");
  
    li.appendChild(document.createTextNode(`${commentsInput.value}`));
    ratingsList.appendChild(li);
    li.innerHTML = `You said : " ${commentsInput.value} "`;
    commentsInput.value = "";
}
}
