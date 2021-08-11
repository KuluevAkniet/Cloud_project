$(document).ready(function(){


    var owl = $('.owl-carousel');
    owl.owlCarousel(
        {
            items:1,
            loop:true,
            dots:false,
            autoHeight: true

        }
    );
// Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.843731, 74.623135],
        zoom: 13
       
    });
    var myIcon = DG.icon({
        iconUrl: 'https://www.pngjoy.com/pngm/196/3858960_map-marker-how-to-set-use-map-marker.png',
        iconSize: [38, 95],

    });
    DG.marker([42.843731, 74.623135], {icon: myIcon}).addTo(map);
})
$('#tel').inputmask('+//9//(.996) 9999[9]-9999');

$(window).on('scroll',function(){
    if($(this).scrollTop() > 500){
        $('.go-top').fadeIn('slow')
    }else{
            $('.go-top').fadeOut('slow')  
    }
})

//tabs

  $('ul.tab__caption').on('click', 'li:not(.tab__item_active)', function() {
    $(this)
      .addClass('tab__item_active').siblings().removeClass('active')
      .closest('div.tab__catalog').find('div.tab__content').removeClass(' tab__content_active').eq($(this).index()).addClass('active');
     
  });

});

