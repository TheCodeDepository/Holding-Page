document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  $('nav #collapsibleNavbar a').on('click', function(){
    if($('nav #collapsibleNavbar').hasClass("show"))
    {
      $('nav button').click();
    }    
     
});

