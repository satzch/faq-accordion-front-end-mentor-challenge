
const questions = document.getElementsByClassName("text")


function toggleAnswer(e){
    const parent = e.currentTarget.parentElement

    for( let element of questions){
        let parentDiv = element.parentElement
        if(element === e.currentTarget) continue
        parentDiv.children[0].classList.remove("bold")
        parentDiv.children[1].classList.add("hidden")
        parentDiv.children[0].children[1].classList.remove("invert")
    }

    //debug prints
    // console.log("Parent of target: ", parent);
    // console.log(parent.childNodes[3]);

    parent.children[0].classList.toggle("bold")
    parent.children[1].classList.toggle("hidden")
    parent.children[0].children[1].classList.toggle("invert")
}

for( let element of questions){
    element.addEventListener("click", toggleAnswer)
}