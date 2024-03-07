

let all = document.querySelectorAll(".blue")

all.forEach(function(a){
    a.addEventListener("click", function blue (){

        let allBlue = document.querySelector("header")
        console.log(allBlue)
        let allchange = allBlue.children
        for(let el of allchange){

        el.classList.remove("change");


        }
        a.classList.add("change")


        
    })
    

    });
    // })