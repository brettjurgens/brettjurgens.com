/**
  brettjurgens.com Javascript
  by: Brett Jurgens (well, the jQuery (UI) team had some input...)
  Libraries: jQuery & jQuery UI (check below for more details)
  
  Kopimi.
  (^except jQuery and jQuery UI, check below for licensing)
*/
  // This function is pointless, but amuses me for some 'strange' reason.
  function brettjurgens(y) {
    text(1,y);
    load();         // Load the other pages, so the images load and stuff
    $('.move').hover(function(){aHov(this,10,'a');}, function(){aHov(this,0,'d');});
  }
  
  // On boy! JavaScript (lol jk, it's jQuery) recursion!
  function text(x,y) {
    if(x>y) {arrowHelper(); return;}
    var speed = 750 + 7.5*($('#' + x).html().length);
    $('#' + x).fadeIn(speed, function() {text(++x,y);}).removeClass('hid');
  }
  
  function override() {
    $('.hid').show();
  }
  // Oh no! not another function...
  function arrowHelper() {
    $('<a>&larr; portfolio</a>').appendTo('#pa');
    $('<a>&larr; about me</a>').appendTo('#aa');
    $('#footer').fadeIn('slow');
  }

  // Hovering over arrow elements
  function aHov(element,move,color) {
    name = $(element).attr('id');
    name = (name==2) ? 'aa' : ((name==5) ? 'pa' : name);
    $('#' + name).stop().animate({left: move}, 'slow').css('color', '#' + color + color + color);
  }
  
  // Loads the pages
  function load() {
    $('#about').load('about.html');
    $('#portfolio').load('portfolio.html'); // preloads portfolio elements
  }
  
  // View Change
  function changeView(view) {
    var d1,d2;
    var current = $('.current').attr('id');
    currentNum = $('.current').attr('number');
    viewNum = $('#' + view).attr('number');
    window.location.hash = view;
    if(current != view) {
        if(currentNum > viewNum){d1='right';d2='left';} // 'home' view should be opposite
        else {d1='left'; d2='right';}
        $('.current').hide('slide', {direction: d1}, 1000, function(){
            $('#' + view).show('slide', {direction: d2}, 1000, function(){
                $('.nav').hide();
                $('.view').hide();
                $('.homearrow').hide();
                $('.currentfnav').addClass('fnav').removeClass('currentfnav');
                $('#' + view.substr(0,1) + 'nav').addClass('currentfnav');
                $('.current').removeClass('current');
                if(view!='home')$('#' + view + 'nav').fadeIn();
                if(view=='home')$('.homearrow').fadeIn();
                if(view=='portfolio')$('.view').fadeIn();
                $('#' + view).addClass('current');
            });
        });
    }
  }
  
  // Loads the page directly
  function getIt(thepage){
    changeView(thepage);
    override();
    $('#footer').fadeIn('slow');
  }
  
  // Portfolio Javascript
  function portfolio() {
    $('#batchdefine').fadeIn(1000).removeClass('unselectedSite').addClass('selectedSite'); // fixes the disappear bug and looks cleaner
    $('#siteList li').click(function(){theOlSwitcheroo($(this));});
  }
  function theOlSwitcheroo(element){            // It's like these hip musicians with their complicated shoes!
    var load = element.attr('load');            // gets the name of the loading element
    var id = $('.selectedSite').attr('id');     // gets the name of the fading element
    if (load != id){
        $('#' + id).fadeOut(750, function() {
            $('#' + load).fadeIn(1250).removeClass('unselectedSite').addClass('selectedSite');
            $('<span id="site">' + load + '</span>').replaceAll('#site');     // updates the top nav
            $('.selected').removeClass('selected').addClass('unselected');    // updates the
            element.removeClass('unselected').addClass('selected');           // nav list
    
        }).removeClass('selectedSite').addClass('unselectedSite'); // hides current view and loads the new one
    }
  }
  
  // About / Email Javascript
  function printEmail(name, site, tld) {
    var at = "@";
    $('<a id="email" class="pro" href="mailto:' + name + at + site + '.' + tld + '">' + name + at + site + '.' + tld + '</a>').replaceAll('#email');
  }