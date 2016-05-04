function setLbHeadText() {
  $(".lb-head").each(function(index) {
    if ($(this).attr("data-text") != null) {
      $(this).html(wobbleify($(this).attr("data-text"), 1));
    }
  });
}

function setLbBodyText() {
  $(".lb-body").each(function(index) {
    if ($(this).attr("data-text") != null) {
      $(this).html(wobbleify($(this).attr("data-text"), 0));
    }
  });
}

function wobbleify(str, ishead) {
  var spans = "";
  var arr = str.split('');
  var cls = ""
  if (ishead === 1) {
    cls = "lb-head"
  } else {
    cls = "lb-body"
  }
  arr.forEach(
    function spanify(value) {
      var rnd = Math.floor(Math.random() * 25);
      if (value === " ") {
        spans = spans + "<span class='" + cls + "'>" + value + "</span>";
      } else {
        if (rnd === 0) {
          spans = spans + "<span class='" + cls + " rot r5'>" + value + "</span>";
        } else if (rnd === 1) {
          spans = spans + "<span class='" + cls + " rot r4'>" + value + "</span>";
        } else if (rnd === 2) {
          spans = spans + "<span class='" + cls + " rot r3'>" + value + "</span>";
        } else if (rnd === 3) {
          spans = spans + "<span class='" + cls + " rot r2'>" + value + "</span>";
        } else if (rnd === 4) {
          spans = spans + "<span class='" + cls + " rot r1'>" + value + "</span>";
        } else if (rnd === 5) {
          spans = spans + "<span class='" + cls + " rot l5'>" + value + "</span>";
        } else if (rnd === 6) {
          spans = spans + "<span class='" + cls + " rot l4'>" + value + "</span>";
        } else if (rnd === 7) {
          spans = spans + "<span class='" + cls + " rot l3'>" + value + "</span>";
        } else if (rnd === 8) {
          spans = spans + "<span class='" + cls + " rot l2'>" + value + "</span>";
        } else if (rnd === 9) {
          spans = spans + "<span class='" + cls + " rot l1'>" + value + "</span>";
        } else {
          spans = spans + "<span class='" + cls + "'>" + value + "</span>";
        }
      }
    }
  );
  return spans
}


function setLbText() {
  setLbHeadText();
  setLbBodyText();
}
$(document).ready(function() {
  setLbText();
});
