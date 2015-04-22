function updateHeights() {
  var maxHeight = 0, lastY = 0, rowDivs = [], allDivs = $('.block__container'), count = allDivs.length;
  
  allDivs.each(function (i) {
    var div = $(this), offset = div.offset(), y = offset.top, x = offset.left, h = div.height();

    if (h > maxHeight) maxHeight = h;//store the highest value for this row so far
    if (lastY == 0) lastY = y;//get the y position if this is the first element

    //if new row
    if (y > lastY) {
      resizeElements(rowDivs, maxHeight);//resize all elements on this row
      rowDivs.length = 0;//reset the array of row elements, ready for next row
      maxHeight = h;//set maxHeight to first of new row
    }

    lastY = y;//store current y posible for checking if we have a new row or not
    rowDivs.push(div);//add current element to row collection
    
    //check if last item, is so then resize this last row
    if(count - 1 == i)
      resizeElements(rowDivs, maxHeight);
  });
}

function resizeElements(elements, height) {
  for (var i = 0; i < elements.length; i++) {
    $(elements[i]).height(height);
  }
}

$(window).resize(function () {
  updateHeights();
});

$(document).ready(function (){
  updateHeights();
});

