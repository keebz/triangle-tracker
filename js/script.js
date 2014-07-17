$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var side1 = parseInt($('#sideOneInput').val());
    var side2 = parseInt($('#sideTwoInput').val());
    var side3 = parseInt($('#sideThreeInput').val());

    var triangle = {
      sideOne: side1,
      sideTwo: side2,
      sideThree: side3,
      type: function() {
        if ((side1 + side2 < side3) || (side1 + side3 < side2) || (side2 + side3 < side1)) {
            alert("NOT A TRIANGLE!");
            return("NOT A TRIANGLE!");
          } else if((side1 === side2) && (side2 === side3)){
            return "equilateral";
          } else if((side1 === side2) || (side1 === side3) || (side2 === side3)){
            return "isosceles";
          } else {
            return "scalene";
          }
        }
      }

    triangleType = triangle.type();

    if (triangleType === "equilateral") {
      $("ul#equilateral").append("<li>" + side1 + ", " + side2 + ", " + side3 + "</li>");
    } else if (triangleType === "isosceles") {
      $("ul#isosceles").append("<li>" + side1 + ", " + side2 + ", " + side3 + "</li>");
    } else if (triangleType === "scalene") {
      $("ul#scalene").append("<li>" + side1 + ", " + side2 + ", " + side3 + "</li>");
    }
 });
});
