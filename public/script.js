$(document).ready(function() {

  responsiveColumns();
  $(window).resize(responsiveColumns);
  $(document).on('click', responsiveColumns);

  function responsiveColumns() {
    columnHeight('#majorsList', '#majorDescription');
    columnHeight('#liberalArts', '#foundations');
    columnHeight('#slIntro', '#slstudents');
    columnHeight('#slMuseum', '#slNatureLab', '#slGalleries');
    columnHeight('#slLibrary', '#slAlumni', '#slEHP');
    columnHeight('#slDining', '#slCafes');
    columnHeight('#slDorms', '#slClubs')
  }

  function columnHeight(left, right, center) {
    var height1 = $(left).css('height');
    var height2 = $(right).css('height');
    var height3 = $(center).css('height');

    if(center != undefined) {
      if(height1 > height2 && height1 > height3) {
        $(right).css('min-height', height1);
        $(center).css('min-height', height1);
      } else if(height2 > height1 && height2 > height3) {
        $(left).css('min-height', height2);
        $(center).css('min-height', height2);
      } else {
        $(left).css('min-height', height3);
        $(right).css('min-height', height3);
      }
    } else {
      if(height1 > height2) {
        $(right).css('min-height', height1);
      } else {
        $(left).css('min-height', height2);
      }
    }
  }

  $('#arrowRight > a').on('mouseenter', function() {
    $('#rightLink').css({
      backgroundColor: "#4dd2ff",
      color: 'white'
    });
  })
  $('#arrowRight > a').on('mouseout', function() {
    $('#rightLink').css({
      backgroundColor: "transparent",
      color: '#4dd2ff'
    });
  })
  $('#arrowDown > a').on('mouseenter', function() {
    $('#centerLink').css({
      backgroundColor: "#4dd2ff",
      color: 'white'
    });
  })
  $('#arrowDown > a').on('mouseout', function() {
    $('#centerLink').css({
      backgroundColor: "transparent",
      color: '#4dd2ff'
    });
  })
  $('#arrowLeft > a').on('mouseenter', function() {
    $('#leftLink').css({
      backgroundColor: "#4dd2ff",
      color: 'white'
    });
  })
  $('#arrowLeft > a').on('mouseout', function() {
    $('#leftLink').css({
      backgroundColor: "transparent",
      color: '#4dd2ff'
    });
  })

  $('a').on('click', function() {
    $('#rightLink, #centerLink, #leftLink').css({
      backgroundColor: "transparent",
      color: '#4dd2ff'
    });
  })

  $('body').on('click', '#top', function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  })


  $('.materialboxed').materialbox();
  $('select').material_select();

})
