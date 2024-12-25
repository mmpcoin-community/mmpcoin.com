function menuopen() {
  if ($("body").hasClass("menu-open")) {
    $("body").addClass("menu-ani");
    setTimeout(function () {
      $("body").removeClass("menu-ani");
      $("body").removeClass("menu-open");
    }, 300);
  } else {
    $("body").addClass("menu-open");
  }
}

function menuclose() {
  if ($("body").hasClass("menu-open")) {
    $("body").removeClass("menu-open");
  }
}

$(document).ready(function ($) {
  var md = window.md;

  $(".nav-trigger").click(function () {
    menuopen();
    return false;
  });

  $("#bg-wrapper").click(function () {
    menuopen();
  });

  $(".home-wrap #content-wrapper").waypoint(
    function (direction) {
      $("#navbar").toggleClass("sticky", direction == "down");
    },
    {
      offset: "300px",
    }
  );

  $(".home-wrap #main-wrapper").waypoint(
    function (direction) {
      $("#navbar").toggleClass("sticky-ani", direction == "down");
    },
    {
      offset: "-100px",
    }
  );

  var currentyear = new Date().getFullYear();
  $("#copyright-year").html(currentyear);

  $(".n-link-1").click(function () {
    menuclose();
    var elem = $("#content-1")[0];

    if (!md.is(md.mobile())) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    } else {
      $("html,body").animate(
        {
          scrollTop: $("#content-1").offset().top - 56,
        },
        800
      );
    }
    return false;
  });
  $(".n-link-2").click(function () {
    menuclose();
    var elem = $("#content-roadmap")[0];
    if (!md.is(md.mobile())) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    } else {
      $("html,body").animate(
        {
          scrollTop: $("#content-roadmap").offset().top - 56,
        },
        800
      );
    }
    return false;
  });
  $(".n-link-3").click(function () {
    menuclose();
    var elem = $("#content-icons")[0];
    if (!md.is(md.mobile())) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    } else {
      $("html,body").animate(
        {
          scrollTop: $("#content-icons").offset().top - 56,
        },
        800
      );
    }
    return false;
  });
  $(".n-link-4").click(function () {
    menuclose();
    var elem = $("#content-team")[0];
    if (!md.is(md.mobile())) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    } else {
      $("html,body").animate(
        {
          scrollTop: $("#content-team").offset().top - 56,
        },
        800
      );
    }
    return false;
  });
  $(".n-link-5").click(function () {
    menuclose();
    var elem = $("#content-5")[0];
    if (!md.is(md.mobile())) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    } else {
      $("html,body").animate(
        {
          scrollTop: $("#content-5").offset().top - 56,
        },
        800
      );
    }
    return false;
  });
  $(".n-link-6").click(function () {
    menuclose();
    var elem = $("#content-faq")[0];
    if (!md.is(md.mobile())) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    } else {
      $("html,body").animate(
        {
          scrollTop: $("#content-faq").offset().top - 56,
        },
        800
      );
    }
    return false;
  });

  setTimeout(function () {
    $("#banner-wrapper").addClass("animate");
  }, 100);

  if (!md.is(md.mobile())) {
    $("#content-1").waypoint(
      function (direction) {
        $("#content-1").addClass("animate", direction == "down");
      },
      {
        offset: "40%",
      }
    );
  } else {
    $("#content-1").waypoint(
      function (direction) {
        $("#content-1").addClass("animate", direction == "down");
      },
      {
        offset: "40%",
      }
    );
  }

  if (!md.is(md.mobile())) {
    $("#content-video").waypoint(
      function (direction) {
        $("#content-video").addClass("animate", direction == "down");
        setTimeout(function () {
          video1.play();
        }, 300);
      },
      {
        offset: "40%",
      }
    );
  } else {
    $("#content-video").waypoint(
      function (direction) {
        $("#content-video").addClass("animate", direction == "down");
        setTimeout(function () {
          video1.play();
        }, 300);
      },
      {
        offset: "40%",
      }
    );
  }

  if (!md.is(md.mobile())) {
    $("#content-roadmap").waypoint(
      function (direction) {
        $("#content-roadmap").addClass("animate", direction == "down");
      },
      {
        offset: "40%",
      }
    );
  } else {
    $("#content-roadmap").waypoint(
      function (direction) {
        $("#content-roadmap").addClass("animate", direction == "down");
      },
      {
        offset: "40%",
      }
    );
  }

  if (!md.is(md.mobile())) {
    $("#content-icons").waypoint(
      function (direction) {
        $("#content-icons").addClass("animate", direction == "down");
      },
      {
        offset: "40%",
      }
    );
  } else {
    $("#content-icons").waypoint(
      function (direction) {
        $("#content-icons").addClass("animate", direction == "down");
      },
      {
        offset: "40%",
      }
    );
  }

  if (md.is(md.mobile())) {
    $("#content-icons .i-blk-1").waypoint(
      function (direction) {
        $("#content-icons .i-blk-1").addClass("ani-blk", direction == "down");
      },
      {
        offset: "60%",
      }
    );
    $("#content-icons .i-blk-2").waypoint(
      function (direction) {
        $("#content-icons .i-blk-2").addClass("ani-blk", direction == "down");
      },
      {
        offset: "60%",
      }
    );
    $("#content-icons .i-blk-3").waypoint(
      function (direction) {
        $("#content-icons .i-blk-3").addClass("ani-blk", direction == "down");
      },
      {
        offset: "60%",
      }
    );
    $("#content-icons .i-blk-4").waypoint(
      function (direction) {
        $("#content-icons .i-blk-4").addClass("ani-blk", direction == "down");
      },
      {
        offset: "60%",
      }
    );
    $("#content-icons .i-blk-5").waypoint(
      function (direction) {
        $("#content-icons .i-blk-5").addClass("ani-blk", direction == "down");
      },
      {
        offset: "60%",
      }
    );
    $("#content-icons .i-blk-6").waypoint(
      function (direction) {
        $("#content-icons .i-blk-6").addClass("ani-blk", direction == "down");
      },
      {
        offset: "60%",
      }
    );
  }

  if (!md.is(md.mobile())) {
    $("#content-team").waypoint(
      function (direction) {
        $("#content-team").addClass("animate", direction == "down");
      },
      {
        offset: "40%",
      }
    );
  } else {
    $("#content-team").waypoint(
      function (direction) {
        $("#content-team").addClass("animate", direction == "down");
      },
      {
        offset: "40%",
      }
    );
  }
  if (!md.is(md.mobile())) {
    $("#content-5").waypoint(
      function (direction) {
        $("#content-5").addClass("animate", direction == "down");
      },
      {
        offset: "40%",
      }
    );
  } else {
    $("#content-5").waypoint(
      function (direction) {
        $("#content-5").addClass("animate", direction == "down");
      },
      {
        offset: "40%",
      }
    );
  }
  if (!md.is(md.mobile())) {
    $("#content-faq").waypoint(
      function (direction) {
        $("#content-faq").addClass("animate", direction == "down");
      },
      {
        offset: "40%",
      }
    );
  } else {
    $("#content-faq").waypoint(
      function (direction) {
        $("#content-faq").addClass("animate", direction == "down");
      },
      {
        offset: "40%",
      }
    );
  }

  if (md.is(md.mobile())) {
    $("#profile-users").owlCarousel({
      items: 1,
      loop: false,
      dots: true,
      nav: false,
      smartSpeed: 400,
      stagePadding: 48,
      //			startPosition: 1
    });
  } else {
    $("#profile-users").owlCarousel({
      items: 5,
      loop: false,
      dots: true,
      nav: false,
      smartSpeed: 400,
      stagePadding: 0,
      startPosition: 0,
      margin: 72,
    });
  }

  $('[data-toggle="tooltip"]').tooltip();
});
