const aboutmebutton = document.getElementById("aboutmebutton")
    aboutmebutton.addEventListener('click', function(){
        const aboutme = document.getElementById("aboutmeparagraph")
        console.log(aboutme.style.visibility)
        if (aboutme.style.visibility === "hidden"){
            aboutme.style.visibility = "visible"
    }else{
        (aboutme.style.visibility === "visible")
        aboutme.style.visibility = "hidden"
    }
    })
