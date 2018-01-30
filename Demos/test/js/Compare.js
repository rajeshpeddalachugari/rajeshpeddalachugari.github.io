/// <reference path="jquery-1.12.3.js" />

(function ($) {
    var list = [];
    $(document).on('click', '.clickToCompare', function () {
        
        $(".comparePanle").show();
        $(this).toggleClass("rotateBtn");
        $(this).parents(".selectProduct").toggleClass("selected");
        var productID = $(this).parents('.selectProduct').attr('data-title');
        
        var inArray = $.inArray(productID, list);
        if (inArray < 0) {
            if(list.length >2)
            {
                $("#WarningModal").show();
                $("#warningModalClose").click(function(){
                    $("#WarningModal").hide();
                });
                $(this).toggleClass("rotateBtn");
        $(this).parents(".selectProduct").toggleClass("selected");
                return;
            }
            
            if (list.length < 3) {
                list.push(productID);
                
               var displayTitle = $(this).parents('.selectProduct').attr('data-displayTitle'); 
               var image = $('[data-title='+productID+']').find(".productImg").attr("ng-src"); 
    $(".comparePan").append('<div id="'+productID.replace(" ","")+'" class="addedForComparision w3-margin-bottom  w3-col l4 m3 s4"><a class="clsbt w3-closebtn cursor">&times</a><img src="'+image+'" alt="image" style="width:80%"/><p id="'+productID+'">'+displayTitle+'</p></div>');
                
               
            }
        }
        else {
             
            list.splice($.inArray(productID, list), 1);
           var prod=productID.replace(" ","");
             $('#'+prod).remove();
            hideComparePanel();
            
        }
       
        if (list.length > 1) {
            
            $(".cmprBtn").addClass("active");
            $(".cmprBtn").removeAttr('disabled');
        }
        else {
            $(".cmprBtn").removeClass("active");
            $(".cmprBtn").attr('disabled','');
        }
        
        $(".compareCount").text(list.length);
    });
  
    $(document).on('click', '.cmprBtn', function () {
        if ($(".cmprBtn").hasClass("active")) {
            for (var i = 0; i < list.length; i++) {
                product = $('.selectProduct[data-title="' + list[i] + '"]');
                $(".contentPop").append('<div class="w3-col s6 m4 l4 compareItemParent relPos">' + '<a class="w3-btn-floating w3-white compareItemClose addButtonCircular">x</a>' + '<ul class="product">' + '<li><img src="' + $(product).data('image') + '" width="100%"></li>' + '<li>' + $(product).data('title') + '</li>' + '<li>' + $(product).data('description') + '</li>' + '<li>' + $(product).data('accuracy') + '</li>' + '</ul>' + '</div>');
            }
        }


        $(".modPos").show();
    });

    $(document).on('click', '.closeBtn', function () {
        $(".contentPop").empty();
        $(".comparePan").empty();
        $(".comparePanle").hide();
        $(".modPos").hide();
        $(".selectProduct").removeClass("selected");
        $(".cmprBtn").attr('disabled','');
        list.length=0;
        $(".rotateBtn").toggleClass("rotateBtn");
        
        
    });
    
     $(document).on('click', '.clsbt', function (){
           
            var test = $(this).siblings("p").attr('id');
            $('[data-title='+test+']').find(".clickToCompare").click();
         hideComparePanel();
     });


    $(document).on('click', '.compareItemClose', function (){
        $(this).parents(".compareItemParent").remove();
         var itemsCount = $(".compareItemParent");
         
         if (!itemsCount.length) {
             $(".closeBtn").click();
         }
     });
    
function hideComparePanel(){
    if(!list.length){
        $(".comparePan").empty();
             $(".comparePanle").hide();
         }
}
})(jQuery);