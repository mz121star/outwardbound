/* Author:

*/

function equalHeight(group) {
  var tallest = 0;
  group.each(function() {
    var thisHeight = $(this).height();
    if(thisHeight > tallest) {
      tallest = thisHeight;
    }
  });
  group.height(tallest);
}

 jQuery.fn.doesExist = function(){
    return jQuery(this).length > 0;
 };

jQuery(document).ready(function($) {

/* ==========================================================================
   iCheck plugin
   ========================================================================== */

  $('input').iCheck({
    checkboxClass: 'icheckbox_minimal-blue',
    radioClass: 'iradio_minimal-blue',
    increaseArea: '20%' // optional
  });

/* ==========================================================================
   Course Finder
   ========================================================================== */

  $('.filter_label').on('change', function(event, element){
    var $this = $(element);
    $('.active').removeClass('active');
    if( true == $this.hasClass('filter_label') ){
      $this.addClass('active');
    }else{
      $this.parents('label').addClass('active');
    }
  });

  $('.course_filter label').on('filter', function(event, element){
    var $this = $(element);
    var $input_val = '';
    if( true == $this.hasClass('filter_label') ){
      $input_val = $this.find('input').val();
    }else{
      $input_val = $this.prev('input').val();
    }

    $('.type-course').not('.'+$input_val).fadeOut();
    $('.'+$input_val+':hidden').fadeIn();
  });

  $('.course_filter .iCheck-helper, .course_filter label').on('click', function(event){
    var $this = $(this);
    $this.trigger( 'change', $this );
    $this.trigger( 'filter', $this );
  });

  // Show all courses
  $('a.show_all').on('click', function(event) {
    event.preventDefault();
    var active_filter = $('label.active');
    active_filter.removeClass('active').find('.checked').removeClass('checked').find('input[name="course_type"]').attr('checked', false);
    $('.show_all:hidden').fadeIn();
  });

/* ==========================================================================
   Misc
   ========================================================================== */

  $('.carousel').carousel();

  $('.image_content_section:last, .location_wrapper').css('border-bottom','0 none');

/* ==========================================================================
   Navigation
   ========================================================================== */

  $('#menu-primary-navigation .dropdown a').on('click', function(event) {
    $parent = $(this).parent();
    $dropdown = $parent.find('.dropdown-menu');
    $isActive = $parent.hasClass('open');
    $isOtherActive = $('#menu-primary-navigation .dropdown').hasClass('open');
    if( !$isOtherActive ){
      if ($isActive) {
        $parent.animate({
          paddingBottom: '0'
        },700,"easeInOutCubic");
        $dropdown.animate({
          height: '0'
        },700,"easeInOutCubic");
      }else{
        $parent.animate({
          paddingBottom: '58px'
        },700,"easeInOutCubic");
        $dropdown.animate({
          height: '58px'
        },700,"easeInOutCubic");
      }
    }else{
      if ($(this).parent().hasClass('open')) {
        $parent.animate({
          paddingBottom: '0'
        },700,"easeInOutCubic");
        $dropdown.animate({
          height: '0'
        },700,"easeInOutCubic");
      }else{
        $(this).parent().css('padding-bottom','58px');
        $(this).parent().find('.dropdown-menu').css('height', '58px');
        $('#menu-primary-navigation .dropdown').not($(this).parent()).css('padding-bottom','0');
        $('#menu-primary-navigation .dropdown').not($(this).parent()).find('.dropdown-menu').css('height', '0');
      }
    }
  });


  $('body, .main_heading').on('click', function(event) {
    if ( this === event.target ) {
      hideMenu();
    }
  });
  $('.wrap, .obnetwork').children().on('click', function(event) {
    hideMenu();
  });

  function hideMenu () {
    $parent = $('#menu-primary-navigation .dropdown');
    $dropdown = $parent.find('.dropdown-menu');
    $isActive = $parent.hasClass('open');
    if ($isActive) {
      $parent.animate({
        paddingBottom: '0'
      },700,"easeInOutCubic");
      $dropdown.animate({
        height: '0'
      },700,"easeInOutCubic");
    }
  }

/* ==========================================================================
   Front Page Scripts
   ========================================================================== */

  $('.home .image_content_section:last').find('.next-section').remove();

  var section_item = 1;
  $('.home .main').find('.section_item').each(function(index) {
    var $this = $(this);
    var $anchor = $this.find('.next-section');
    var section_id = 'section_'+section_item;
    var section_href = section_item + 1;
    section_href = '#section_' + section_href;

    $this.prop('id', section_id);
    $anchor.prop('href',section_href)

    section_item = section_item + 1;
  });

  $('.next-section').on("click", function(event){
    event.preventDefault();
    $anchor = $(this);
    $section_position = $($anchor.attr('href')).offset().top - 15;
    $('html, body').stop().animate({
            scrollTop: $section_position
    }, 500);
  });

/* ==========================================================================
   Expandable effect
   ========================================================================== */

  $('.expandable h6.alt').click(function(event) {
    var tallest_col = $('.expandable .span4').height();
    var expandable = $(this).parent('.expandable');
    isActive = $(this).hasClass('expanded');
    if (!isActive) {
      expandable.find('.row').animate({
        height: tallest_col
      },700,"easeInOutCubic");
      $(this).addClass('expanded').find('.context').text("See Less");
    }else{
      expandable.find('.row').animate({
        height: '310px'
      },700,"easeInOutCubic");
      $(this).removeClass('expanded').find('.context').text("See More");
    }
    event.preventDefault();
  });

/* ==========================================================================
   FAQs
   ========================================================================== */
  $('.faq_section .collapse').on('shown', function () {
    $(this).next('.toggle_answer').text('Hide Answer');
  });
  $('.faq_section .collapse').on('hidden', function () {
    $(this).next('.toggle_answer').text('See Answer');
  });

/* ==========================================================================
   Equal Height
   ========================================================================== */

   if( true == $('.video_container').doesExist() ){
    $video_top = $('.video_container').height() / 2;
    $('.video_container').css('margin-top', '-' + $video_top + 'px');
   }

/* ==========================================================================
   Equal Height
   ========================================================================== */

  equalHeight( $('.expandable .span4') );
  equalHeight( $('.recent_container') );
  equalHeight( $('.footer_sidebar .widget_nav_menu') );

	/* ==========================================================================
	   Open external links in a new window
	   ========================================================================== */

	  $(function() {
	    $('a:not([href=""])').each(function() {
	      if (this.hostname !== location.hostname) {
	        $(this).addClass('externalLink').attr('target', "_blank");
	      }
	    });
	  });

});