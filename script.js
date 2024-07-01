function searchBtn(){
    var search = document.getElementById("search_dd");
    search.style="display:block; transition:0.8s";
   
}

function messages(){
    alert("Now You have not any Messages :(");
}

function notifications(){
    alert("Now You have not any Notification :(");
}



function open_ddMenu(){
    var open = document.getElementById("mobile_ddMenu");
    open.style="display:block; transition:0.8s";
   
}


function close_dd(){
    var close = document.getElementById("mobile_ddMenu");
    close.style="display:hidden; transition:0.8s";
   
}



let loader = document.querySelector('#preloader');
let header = document.querySelector('header');
header.style.visibility='hidden'

window.addEventListener('load',function(){
    header.style.visibility='visible'
    loader.style.display = 'none'

})