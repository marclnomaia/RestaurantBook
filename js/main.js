(function ($) {
    // USE STRICT
    "use strict";

    $(".form-radio .radio-item").click(function(){
        //Spot switcher:
        $(this).parent().find(".radio-item").removeClass("active");
        $(this).addClass("active");
    });
  
    $('#time').parent().append('<ul class="list-item" id="newtime" name="time"></ul>');
    $('#time option').each(function(){
        $('#newtime').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#time').remove();
    $('#newtime').attr('id', 'time');
    $('#time li').first().addClass('init');
    $("#time").on("click", ".init", function() {
        $(this).closest("#time").children('li:not(.init)').toggle();
    });

    $('#diners').parent().append('<ul class="list-item" id="newdiners" name="diners"></ul>');
    $('#diners option').each(function(){
        $('#newdiners').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#diners').remove();
    $('#newdiners').attr('id', 'diners');
    $('#diners li').first().addClass('init');
    $("#diners").on("click", ".init", function() {
        $(this).closest("#diners").children('li:not(.init)').toggle();
    });
    
    var allOptions = $("#time").children('li:not(.init)');
    $("#time").on("click", "li:not(.init)", function() {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#time").children('.init').html($(this).html());
        allOptions.toggle();
    });

    var dinersOptions = $("#diners").children('li:not(.init)');
    $("#diners").on("click", "li:not(.init)", function() {
        dinersOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#diners").children('.init').html($(this).html());
        dinersOptions.toggle();
    });
})(jQuery);