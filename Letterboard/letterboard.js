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
      var rnd = Math.floor(Math.random() * 15);
      if (rnd === 0 || rnd === 1) {
        spans = spans + "<span class='" + cls + " rotleft'>" + value + "</span>";
      } else if (rnd === 2 || rnd === 3) {
        spans = spans + "<span class='" + cls + " rotright'>" + value + "</span>";
      } else {
        spans = spans + "<span class='" + cls + "'>" + value + "</span>";
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
