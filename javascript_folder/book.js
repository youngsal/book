$(document).ready(function(){
    $(".normal_article_div").click(function(){
        // slideUp all article except from the recent one that was clicked
        $(".question_article").not($(this).next(".question_article")).slideUp();
        $(".arrow_div ion-icon").not($(this).find("ion-icon")).removeClass("rotate");

        // toggle slide up and down if any of the article is been clicked
        $(this).next(".question_article").slideToggle();
        $(this).find("ion-icon").toggleClass("rotate");
    });

    $(".easy_btn").click(function(){
        $(".easy_btn").not($(this)).removeClass("easy_active");
        $(this).toggleClass("easy_active");
    });
;});