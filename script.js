var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'Lightswitch on';
document.body.appendChild(btn);

// schijf hier tussen je code
function button(event){
    console.dir(event)
    if(document.body.style.backgroundColor == "black"){ //== is soort check en = verander
        document.body.style.backgroundColor = "white"
        btn.innerHTML = 'Lightswitch on'
        console.log('Lightswitch on')

    } else{
        document.body.style.backgroundColor = "black"
        btn.innerHTML = 'Lightswitch off'
        console.log('Lightswitch off')
    }
                                                 //document.body.style.backgroundColor = "green"
                                                 //btn.style.backgroundColor = 'red'
}

btn.onclick = button;


// schijf hier tussen je code