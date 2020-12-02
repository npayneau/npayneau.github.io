jQuery(function($) {
  (function(name) {
    var container = $('#pagination-portfolio');
    var pageSizeCalculated = 4;
    if(window.screen.width>603){
      pageSizeCalculated = 6;
    }
    container.pagination({
      dataSource: {
            data: ['01.jpg', '02.jpg', '03.jpg', '04.jpg',
                    '05.jpg', '06.jpg', '07.jpg', '08.jpg',
                    '09.jpg', '10.jpg', '11.jpg', '12.jpg',
                    '13.jpg', '14.jpg', '15.jpg', '16.jpg',
                    '17.jpg', '18.jpg', '19.jpg', '20.jpg',
                    '21.jpg', '22.jpg', '23.jpg', '24.jpg',
                    '25.jpg', '26.jpg', '27.jpg', '28.jpg',
                    '29.jpg', '30.jpg', '31.jpg', '32.jpg',
                    '33.jpg', '34.jpg', '35.jpeg', '36.jpeg',
                    '37.jpeg']
        },
      locator: 'data',
      pageSize: pageSizeCalculated,
      className: "navigation posts-navigation wow fadeInUp" ,
      callback: function(response, pagination) {
        var dataHtml = '<ul class="grid">';

        $.each(response, function (index, item) {
          dataHtml += '<li class="wow fdeInUp"><figure> <img src="img/full/' + item + '" alt="Screenshot 01"></figure></li>';
        });

        dataHtml += '</ul>';

        container.prev().prev().html(dataHtml);
      }
    })
  })();
})