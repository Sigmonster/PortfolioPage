$(document).ready(function () {


    $("#add-comments-show-hide-add").click(function () {
        $(".add-comment-section").slideToggle("fast", function () {
            $(".comment-arrow-span-add").html(function (i, v) {
                return v === '<i class="fa fa-angle-double-down" aria-hidden="true"></i>' ? '<i class="fa fa-angle-double-up" aria-hidden="true"></i>' : '<i class="fa fa-angle-double-down" aria-hidden="true"></i>'
            })
        });
    });
    $("#blog-comments-show-hide").click(function () {
        $(".blogpost-comment-section").slideToggle("slow"); 
        ($(".comments-show-hide").text() === 'Show Comments') ? $(".comments-show-hide").text('Hide Comments') : $('.comments-show-hide').text('Show Comments');
    });
        


});
