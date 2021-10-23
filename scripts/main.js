// Dom Events

void function InitDomEvents() {
  $('.accordion li').click(function() {
    $(this).find('.text').slideToggle().closest('li').siblings().find('.text').slideUp()
  })

  $('header .menu').click(function() {
    $(this).toggleClass('active')
    $('.header-info').slideToggle()
  })
}()