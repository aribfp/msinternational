$(window).on('load', function(){
	// Code ? When the page finished loading.

	// call init()
	/*$("#loading").fadeOut();*/
  init();



});

function init(){
  contact();
  reservation();
  // popup();
  prijzen();
}



// functions

//Magnific Pop up 
function popup(){
  $('.popup-gallery').magnificPopup({
    delegate: 'a.link',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small></small>';
      }
    }
  });

}

function contact() {
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    form = $(this);
    data = $(this).serialize();
    $.post("contact.php", data, function(response){
        form.trigger('reset');
        $.Zebra_Dialog('<strong>Thanks</strong>, We recived your inquire', {
	    'type':     'confirmation',
	    'title':    'Success'
	});
    });
  });
}
function reservation() {
  $("#reservation-form").submit(function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    form = $(this);
    data = $(this).serialize();

    $.post("reservation.php", data, function(response){
     form.trigger('reset');

     $.Zebra_Dialog('<strong>Thanks</strong>, We recived your inquire', {
	    'type':     'confirmation',
	    'title':    'Success'
	});
    });

  });
}
function  prijzen(){
    $("#prijzenForm").submit(function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      form = $(this);
      data = $(this).serialize();
      var cheked=true;
     // var dateRegex = /^[0-9][0-9]?.[0-9][0-9]?.[0-9][0-9][0-9][0-9]$/;
     // console.log( dateRegex.test( $("#vanInput").val() ) );
     // console.log($("#vanInput").val());
      if($("#naamInput").val()==''){
        cheked=false;
        $("#naamInput").css('border','solid 1px red');
      }else{
        cheked=true;
      }
      if($("#emailInput").val()==''){
        checked=false;
        $("#emailInput").css('border','solid 1px red');
      }else{
        cheked=true;
      }
      if($("#accInput").val()=='Uw keus'){
        checked=false;
        $("#accInput").css('border','solid 1px red');
      }else{
        cheked=true;
      }
      if(cheked){
        $.post("/prijzen.php", data, function(response){
       
            msg = JSON.parse(response);
            if (msg=='success'){
             form.trigger('reset');
             $('#successDiv').show();
            }
           
           });
      }
     
  
    });
}
