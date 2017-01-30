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
    $('#rightLink').css('text-decoration', 'underline');
  })
  $('#arrowRight > a').on('mouseout', function() {
    $('#rightLink').css('text-decoration', 'none');
  })
  $('#arrowDown > a').on('mouseenter', function() {
    $('#centerLink').css('text-decoration', 'underline');
  })
  $('#arrowDown > a').on('mouseout', function() {
    $('#centerLink').css('text-decoration', 'none');
  })
  $('#arrowLeft > a').on('mouseenter', function() {
    $('#leftLink').css('text-decoration', 'underline');
  })
  $('#arrowLeft > a').on('mouseout', function() {
    $('#leftLink').css('text-decoration', 'none');
  })

  $('a').on('click', function() {
    $('#rightLink, #centerLink, #leftLink').css('text-decoration', 'none');
  })

  $('body').on('click', '#top', function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  })


  $('.materialboxed').materialbox();
})
