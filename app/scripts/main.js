$(document).ready(function() {

    // show and hide the main nav

    $('body').on('click', '.hide-nav', function(event) {
        event.preventDefault();
        $('body').toggleClass('nav-hidden');
    });

    $('.owl-carousel').owlCarousel({
        loop: false,
        rtl: true,
        dots: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    $('input.autocomplete').autocomplete({
        data: {
            'Apple': null,
            'Microsoft': null,
            'Google': null
        },
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    });
    $('#textarea-edit').trigger('autoresize');
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year
        today: 'اليوم',
        clear: 'مسح',
        close: 'اغلاق'
    });
    $('.modal:not("#edit-date-modal")').modal({
        opacity: .8,
        ready: function(modal, trigger) {
            if ($('#textarea-edit').length > 0) {
            $('#textarea-edit').focus();
}

        },
    });
    $('#edit-date-modal').modal({
        ready: function(modal, trigger) {

            $('select.iphone').drum({
                dail_w: 0,
                dail_h: 0
            });


        }
    })
    $('.special-tabs').tabs();
    $('.chips-placeholder').material_chip({
        placeholder: 'إضافة الكلمات الدالة يدوياً',
        secondaryPlaceholder: 'إضافة الكلمات الدالة يدوياً',
    });
    $('.chips-placeholder input').addClass('icon_prefix');
    var icon = '<i class="material-icons prefix">account_circle</i>';
    $('.chips-placeholder').prepend('<i class="material-icons prefix">queue</i>');

    var startScroll = function() {
            var rtl_direction = $('html').attr('dir');
            var scrollHeight = $(window).height() - $('.scroll').offset().top - $('.after-scroll a').height() - 30;
            $('.scroll').css('height', scrollHeight);

            var footer = $('.scroll');
            var footer_scroll = footer.niceScroll({
                cursorcolor: '#999999',
                cursorwidth: '12px',
                touchbehavior: true

            });
            footer_scroll.cursor.parent().css({

            });

            if (rtl_direction) {
                setTimeout(function() {
                    footer_scroll.cursor.parent().css({
                        'left': footer.offset().left
                    });
                }, 1000);

                footer_scroll.cursor.parent().css({
                    'left': footer.offset().left
                });
                $(window).resize(function() {
                    setTimeout(function() {
                        footer_scroll.cursor.parent().css({
                            'left': footer.offset().left
                        });
                    }, 100);
                });
            }
        }
        //nice scroll start
    if ($('.scroll').length) {
        startScroll();
        $(window).resize(function() {
            startScroll();
        });
    }
    // nice scroll end

    // task with options toggle options
    $('body').on('click', '.task-with-options', function(event) {
        event.preventDefault();
        var headerWidth = $(this).find('.task-header').offset();
        $(this).children('.options').css({
            'left': headerWidth.left - 210,
            'top': headerWidth.top - 20
        }).toggle();
    });

    $('body').on('click', '.options a', function(event) {
        event.preventDefault();
        $(this).parents('.options').toggle();
    });

    var mouse_is_inside = false;


    $('.options').hover(function() {
        mouse_is_inside = true;
    }, function() {
        mouse_is_inside = false;
    });

    $('body').mouseup(function(e) {
        if (mouse_is_inside = true) {
            $('.options').hide()
        };
    });


    Hammer.plugins.fakeMultitouch();

    $('body').on('click', '.open-filter, .apply-filter', function(event) {
        event.preventDefault();
        $('#filter-modal').toggleClass('open');
    });

    $('body').on('click', '.edit-small', function(event) {
        event.preventDefault();
        $('.edit-text').removeClass('active');
        $(this).addClass('active');
        $('.scroll').css('font-size', '.8rem');
    });
     $('body').on('click', '.edit-normal', function(event) {
        event.preventDefault();
        $('.edit-text').removeClass('active');
        $(this).addClass('active');
        $('.scroll').css('font-size', '1rem');
    });
     $('body').on('click', '.edit-large', function(event) {
        event.preventDefault();
        $('.edit-text').removeClass('active');
        $(this).addClass('active');
        $('.scroll').css('font-size', '1.4rem');
    });

var toolbarOptions = [['bold', 'italic', 'underline', ],[{ 'color': [] }, { 'background': [] }],[{ 'direction': 'rtl' }],['clean'] ];

var quill = new Quill('#editor', {
  modules: {
    toolbar: toolbarOptions
  },
  theme: 'snow'
});
quill.format({'align', 'right'});

});
var $input = $('.monthPicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    today: 'اليوم',
    clear: 'مسح',
    close: 'اغلاق',
    format: 'mmmm, yyyy',
    disable: [
        true, [2016, 1, 1],
        [2016, 2, 1],
        [2016, 3, 1],
        [2016, 4, 1],
        [2016, 5, 1],
        [2016, 6, 1],
        [2016, 7, 1],
        [2016, 8, 1],
        [2016, 9, 1],
        [2016, 10, 1],
        [2016, 11, 1],
        [2016, 12, 1],
        [2017, 1, 1],
        [2017, 2, 1],
        [2017, 3, 1],
        [2017, 4, 1],
        [2017, 5, 1],
        [2017, 6, 1],
        [2017, 7, 1],
        [2017, 8, 1],
        [2017, 9, 1],
        [2017, 10, 1],
        [2017, 11, 1],
        [2017, 12, 1],
        [2018, 1, 1],
        [2018, 2, 1],
        [2018, 3, 1],
        [2018, 4, 1],
        [2018, 5, 1],
        [2018, 6, 1],
        [2018, 7, 1],
        [2018, 8, 1],
        [2018, 9, 1],
        [2018, 10, 1],
        [2018, 11, 1],
        [2018, 12, 1]
    ]
});
var picker = $input.data('pickadate');
$('.monthPickerIcon img').click(function(e) {
    // stop the click from bubbling
    e.stopPropagation();
    // prevent the default click action
    e.preventDefault();
    // open the date picker
    picker.open();
});
