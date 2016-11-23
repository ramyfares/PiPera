$(function(){

	// ::: TAGS BOX

  $("#tags input").on({
    focusout : function() {
      var txt = this.value.replace(/[^a-z0-9\+\-\.\#]/ig,''); // allowed characters
      if(txt) $("<div/>", {text:txt.toLowerCase(), insertBefore:this});
      this.value = "";
    },
    keyup : function(ev) {
      // if: comma|enter (delimit more keyCodes with | pipe)
      if(/(188|13)/.test(ev.which)) $(this).focusout();
    }
  });


  /* FILTER */
  $(window).load(function(){
    if(window.innerWidth < 767) {
      $('.filter-specs').hide();
      $('.filter-title').click(function(){
        $(this).next().toggle(300);
      });
    }
  });

  $(window).resize(function(){
    var filterSpecs = $('.filter-title').next();
    if(window.innerWidth > 767) {
      $('.filter-specs').show();
      $('.filter-title').click(function(){
        $(this).next();
      });
    }
    if(window.innerWidth < 767) {
      $('.filter-specs').hide();
      $('.filter-title').click(function(){
        //$(this).next().show(300);
        if (!filterSpecs.hasClass('animative')) {
          filterSpecs.addClass('animative');
          filterSpecs.slideToggle(2000, function()
          {filterSpecsremoveClass('animative')});
        }
      });
    }
  });

});
