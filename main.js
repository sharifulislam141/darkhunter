// dark mood option start 
document.getElementById('theme').addEventListener('click',function(){
    console.log("clicked")
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        document.getElementById('mood').innerText = "Light Mood"

    }
    else{
        document.getElementById('mood').innerText = "Dark Mood"
    }
})
// dark mood option end 