  function update_view(){ 
    var gallery = document.querySelector('#gallery');
    var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
    var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
    var resizeAll = function () {
        console.log("resize");
        var altura = getVal(gallery, 'grid-auto-rows');
        var gap = getVal(gallery, 'grid-row-gap');
        gallery.querySelectorAll('.gallery-item').forEach(function (item) {
            var el = item;
            el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
        });
    };
    gallery.querySelectorAll('img').forEach(function (item) {
        item.classList.add('byebye');
        if (item.complete) {
            item.classList.remove('byebye');
        }
        else {
            item.addEventListener('load', function () {
                var altura = getVal(gallery, 'grid-auto-rows');
                var gap = getVal(gallery, 'grid-row-gap');
                var gitem = item.parentElement.parentElement;
                gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
                item.classList.remove('byebye');
            });
        }
    });
    window.addEventListener('resize', resizeAll);
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
      if(window.screen.width>603){
        item.addEventListener('click', function () {        
            item.classList.toggle('full');        
        });
      }
    });
    } 

function scroll_to_anchor(anchor_id){
  var tag = $(anchor_id);
  $('html,body').animate({scrollTop: tag.offset().top},'slow');
  if(window.screen.width<=603){
    $('#top-menu button').addClass('collapsed');
    $('#bs-example-navbar-collapse-1').removeClass('in');
    $('#top-menu button').attr('aria-expanded', function (i, attr) {
        return attr == 'true' ? 'false' : 'true'
    });
  }
}
jQuery(function($) {
  (function() {
     var container = $('#pagination-portfolio');
    var pageSizeCalculated = 4;
    if(window.screen.width>603){
      pageSizeCalculated = 20;
    }
    container.pagination({
      dataSource: {
            data: ['08.jpg', '04.jpg',  '20.jpg' , '03.jpg', 
                   '02.jpg', '06.jpg', '07.jpg', '37.jpeg',
                    '09.jpg', '10.jpg', '11.jpg', '12.jpg',
                    '13.jpg', '14.jpg', '15.jpg', '16.jpg',
                    '17.jpg', '18.jpg', '19.jpg', '01.jpg',
                    '21.jpg', '22.jpg', '23.jpg', '24.jpg',
                    '25.jpg', '26.jpg', '27.jpg', '28.jpg',
                    '29.jpg', '30.jpg', '31.jpg', '32.jpg',
                    '33.jpg', '34.jpg', '35.jpeg', '36.jpeg',
                   '05.jpg' ]
        },
      locator: 'data',
      pageSize: pageSizeCalculated,
      className: "navigation posts-navigation wow fadeInUp" ,
      callback: function(response, pagination) {
        var dataHtml = ' <div class="gallery" id="gallery">';

        $.each(response, function (index, item) {
          dataHtml += '<div class="gallery-item"><div class="content"><img src="img/full_img/' + item + '" alt=""></div></div>';
          });

        dataHtml += '</div>';

        container.prev().html(dataHtml);
        update_view();
        window.dispatchEvent(new Event('resize'));
      },
      afterPageOnClick : function(){
        scroll_to_anchor('#our-work-block');
            
      }
    });

  })();
  
})