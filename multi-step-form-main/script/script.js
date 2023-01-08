$(document).ready(function(){
  
    // Adding the active class to the side numbers
    $('.step1').addClass("active");  

    // Adding the active class to step-one
    $('.step-2').addClass("active"); 
     // Adding the active class to step-one
    $('.step-4').addClass("active");

    // STEP ONE
    // if next1 button is clicked
    $("#nextBtn1").click(function(){
        // defining variables
        let name			= $("#name").val().trim();
        let email			= $("#email").val().trim();
        let phonenumber		= $("#phonenumber").val();
        // let regex  = /^[a-zA-Z\s]+$/;
        
        // name validation
        if( email == ''|| name == '' || phonenumber == ''){
            $(".error").text("This field is required");
        }else{
            $("#e-error").text("");
            $(".error").text("");

            // changing the active class to step-2
            $('.step-one').removeClass("active");
            $('.step-2').addClass("active");

            // changing the active number to 2
            $('.step2').addClass("active");  
            $('.step1').removeClass("active");
        }
    });

    // STEP TWO checkbox function when clicked
    $("#box1").click(function(){
        // when it's clicked it should remove classes of other radio button 
        $("#span1").toggleClass("active");
        $("#span2").removeClass("active");
        $("#span3").removeClass("active");

    });
 
    $("#box2").click(function(){
        // when it's clicked it should remove classes of other radio button
        $("#span3").removeClass("active");
        $("#span1").removeClass("active");
        $("#span2").toggleClass("active");

        // what it does after
        $("#h3").text("Advance(monthly)");
        $("#price").text("$12/mo");
    });

    $("#box3").click(function(){
        // when it's clicked it should remove classes of other radio button
        $("#span1").removeClass("active");
        $("#span2").removeClass("active");
        $("#span3").toggleClass("active");

        // what it does after
        $("#h3").text("Pro(monthly)");
        $("#price").text("$15/mo");

        // total

    });
    
    // if next2 button is clicked
    $("#nextBtn1").click(function(){
        // defining variables
        let name			= $("#name").val().trim();
        let email			= $("#email").val().trim();
        let phonenumber		= $("#phonenumber").val();
        // let regex  = /^[a-zA-Z\s]+$/;
        
        // name validation
        if( email == ''|| name == '' || phonenumber == ''){
            $(".error").text("This field is required");
        }else{
            $("#e-error").text("");
            $(".error").text("");

            // changing the active class to step-2
            $('.step-one').removeClass("active");
            $('.step-2').addClass("active");

            // changing the active number to 2
            $('.step2').addClass("active");  
            $('.step1').removeClass("active");
        }
    });

    $("#")
});

// "2 month free text" 
function chk() {
    document.getElementsByClassName("free").innerHTML("2 months free")
};

// function 
    function pricingVal(){
        
    }