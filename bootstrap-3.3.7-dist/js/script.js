
$(function(){//ituma izi code ziba run nyuma ya html content ariko mbere ya image ni izindi external file .same as document.addEventListener("DOMContentLoader")
    
    //same as document.querySelector("#navbarToggle").addEventListener("blur",)

    $("#navbarToggle").blur(function(event){
        let screenWidth=window.innerWidth;
        if(screenWidth<768){
            $("#collapsable-nav").collapse("hide");


        }

    });
})
