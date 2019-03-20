// jquery (the open one) allows you to harness the power of Javascrpt to accomplish a myriad of awesome things on your webpage. With JQuery, you might:

// Add,  delete, or modify HTML elememts within your page.

// Change the styles of elements on te page by modifying their associated CSS.

// Animate elements on top of your page.

// Send and recieve data from a server via AJAX (asynchronous JavaScript and XML) so your page doesn't have to be reloeaded after submitting a form.

// And more!

let listItems = document.querySelectorAll("li");
let i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'starred';
}

// JQuery

$("li").addClass("starred");

// You'll notice a lot of semicolons and brackets in JavaScript, and many $



$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
  }); 

//   circle stuff**************************************************************
$(document).ready(function(){
    $(".circle").click(function(){
      $(this).hide();
    });
  }); 
$(document).ready(function(){
    $(".circle").click(function(){
      $(this).fadeIn();
    });
  }); 
// $(document).ready(function(){
//     $(".circle").click(function(){
//       $(this).slideToggle();
//     });
//   }); 

$(document).ready(function(){
    $(".circle").click(function(){
      $(this).animate({
            opacity: '0.5'
      });
    });
  });


  $(document).ready(function(){
    $(".circle").mouseenter(function(){
      $(this).animate({
          opacity: 0.3,
          width: "11rem",
          height: "11rem",
        //   z-index: "10"
      });
    });
    $(".circle").mouseleave(function(){
        $(this).animate({
            opacity: 1,   
            height: "10.25rem",
            width: "10.25rem",
            // z-index: "10"
        });
      });
  }); 



//   $(document).ready(function(){
//     $(".circle").mouseleave(function(){
//       $(this).animate({
//           opacity: 1
//       });
//     });
//   }); 


  $(document).ready(function () {
      $(".jq").click(function () { 
          $(".cart-number").fadeIn("slow" ,function () {
            $(".cart-number").text(function() {
                return $("cart-number").text() + "1 ";
            })
          });
      });
  });