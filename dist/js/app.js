$(function () {
  const mobile = 767;
  const tabElements = $(".faq-tab__item");

  checkScreenWidth();

  function checkScreenWidth() {
    if ($(window).innerWidth() > mobile) {
      tabElements.off("click", mobileAccordionHandler);
      tabElements.on("click", desktopTabHandler);
    } else {
      tabElements.off("click", desktopTabHandler);
      tabElements.on("click", mobileAccordionHandler);
    }
  }

  function desktopTabHandler() {
    let currentTab = $(this).attr("data-tab");

    tabElements.not(this).removeClass("faq-tab__item--active");
    $(this).addClass("faq-tab__item--active");

    if (currentTab) {
      $(".faq-tab-content")
        .not(currentTab)
        .removeClass("faq-tab-content--active")
        .fadeOut();

      $(currentTab).addClass("faq-tab-content--active").fadeIn();
    }
  }

  function mobileAccordionHandler(e) {
    if (!$(e.target).closest(".faq-tab-content").length) {
      $(this)
        .toggleClass("faq-tab__item--active")
        .children(".faq-tab-collapse")
        .find(".faq-tab-content")
        .slideToggle();

      $(".faq-tab__item")
        .not(this)
        .removeClass("faq-tab__item--active")
        .children(".faq-tab-collapse")
        .find(".faq-tab-content")
        .slideUp();
    }
  }

  $(window).on("resize", checkScreenWidth);
  $(window).off("resize", checkScreenWidth);
});
