$(document).ready(function(){
    // ======features easy & tabs
    $(".easy_btn").click(function(){
        const tabId = $(this).data("target");
        $(".easy_btn").removeClass("easy_active"); //remove active on the tab heading
        $(".easy_tab").removeClass("active_tab"); //remove active_tab on the tab content

        $(this).toggleClass("easy_active"); //add active color on the tab heading
        $(`#${tabId}`).addClass("active_tab"); //add active on the content
    });

    // ========downloader_Section
    $(".normal_article_div").click(function(){
        // slideUp all article except from the recent one that was clicked
        $(".question_article").not($(this).next(".question_article")).slideUp();
        $(".arrow_div ion-icon").not($(this).find("ion-icon")).removeClass("rotate");

        // toggle slide up and down if any of the article is been clicked
        $(this).next(".question_article").slideToggle();
        $(this).find("ion-icon").toggleClass("rotate");
    });

    // =================if open button is clicked and close button is clicked
    $("#openBtn").click(function (){
        $(".modal_content").fadeIn();
        $(".section_head").addClass("hide_head");
    });
    
    $("#closeBtn").click(function (){
        $(".modal_content").fadeOut();
        $(".section_head").removeClass("hide_head");
    });
;});