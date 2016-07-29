$(document).ready(function () {


    $("#blog-comments-show-hide").click(function () {
        $(".blogpost-comment-section").slideToggle("fast", function () {
            $(".comment-arrow-span").html(function(i, v){
                return v === '<i class="fa fa-angle-double-down" aria-hidden="true"></i>' ? '<i class="fa fa-angle-double-up" aria-hidden="true"></i>' : '<i class="fa fa-angle-double-down" aria-hidden="true"></i>'
            })
        });
        
    });


});