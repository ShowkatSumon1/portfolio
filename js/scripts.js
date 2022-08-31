(function($){
    jQuery(document).ready(function(){
        "use_strict";

        //// For small menu
        jQuery('.mobile').hide();
        jQuery('.header__icon').on('click', function(){
            jQuery('.mobile').toggle(500);
            jQuery('.header').toggleClass('fixed' , '500');

            return false;
        });
    });
})(jQuery)