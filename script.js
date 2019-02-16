
  $(document).ready(function(){

       var sidebar = $('.container_sidebar'); // sidebar for mobile
       var mobSearch = $('#mob_search'); // input search on mobile screen

      $('.mobile_menu').on('click', function(){
        sidebar.css('display') == 'none' ? sidebar.show() : sidebar.hide();
      });

      $('body').click(function(e){
      var target = $(e.target);
      if((!e.target.classList.contains('hamburger')) && sidebar.css('display') == 'block'){
      sidebar.hide();
      }     
    });

    $('#loupe').on('click', function() {
      mobSearch.css('display') == 'none' ? mobSearch.show() : mobSearch.hide(); 
    });

    $(window).resize(function() {
      if(screen.width > 768){
        mobSearch.hide();
      }
    });
      $('.openmodal').fancybox({
      fitToView: true,
      padding: 0,
      modal: false,
      closeBtn: false,
      
    });

  });

   $('.closeForm').on('click', function(){ //закрытие формы
      $.fancybox.close();
   });

   $(".bxslider").bxSlider({
            mode: 'horizontal',           // тип перехода между слайдами может быть 'horizontal', 'vertical', 'fade'
            captions: false,         // отображение title
            easing: 'easeInOutQuad',// анимация слайда
            controls: false,         // отображение стрелки - вперед, назад
            startSlide: 0,          // Показ начнется с заданного слайда
            infiniteLoop: true,     // показывать первый слайд за последним 
            pager: true,            // показ номера страницы
            auto: true,             // сделать автоматический переход
            autoControls: false,     // показывает кнопку плей и стоп
            video: false,            // включить видео
            pause: 4000,            // время между сменой слайдов в м-сек
            speed: 300,             // длительность перехода слайда в м-сек
            useCSS: false,
            slideWidth: 870
        });

   $(".category_slider").bxSlider({
          mode: 'horizontal',           // тип перехода между слайдами может быть 'horizontal', 
          pagerCustom: '.green-menu',
          captions: false,         // отображение title
          easing: 'easeInOutQuad',// анимация слайда
          controls: true,         // отображение стрелки - вперед, назад
          startSlide: 0,          // Показ начнется с заданного слайда
          infiniteLoop: false,     // показывать первый слайд за последним 
          pager: true,            // показ номера страницы
          auto: false,             // сделать автоматический переход
          autoControls: false,     // показывает кнопку плей и стоп
          video: false,            // включить видео
          pause: 4000,            // время между сменой слайдов в м-сек
          speed: 300,             // длительность перехода слайда в м-сек
          useCSS: false,
          nextSelector: '#bx-next',        
          prevSelector: '#bx-prev',
          nextText: '<img src="img/right_arrow.png" alt="">',
          prevText: '<img src="img/left_arrow.png" alt="">',
          onSlideAfter: function($slideElement, newIndex, oldIndex){
            $('.green-menu').find("a[data-rel=" +oldIndex + "]").addClass('active');
          }
      });