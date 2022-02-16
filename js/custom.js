
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})

// document.addEventListener("click" , function(e){
// 	if(e.target.classList.contains("gallery-item")){
// 		myModal = modal(document.getElementById("gallery-modal"))
// 		myModal.toggle()
// 	}
// })