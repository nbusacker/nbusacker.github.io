function cafeFn () {
  var temp = 'assets/data/Gluten-Free-cafe.htm'
  var mytemplate = document.getElementById('myhtmdata')
  mytemplate.innerHTML =
    '<object type="text/html" data=' +
    temp +
    ' style="width: 100%;height: 90vh; min-height: 100%;overflow: scroll;"></object>'
}

function recipeFn () {
  var temp = 'assets/data/Gluten-Free-recipe.htm'
  var mytemplate = document.getElementById('myhtmdata')
  mytemplate.innerHTML =
    '<object type="text/html" data=' +
    temp +
    ' style="width: 100%;height: 90vh; min-height: 100%;overflow: scroll;"></object>'
}

function foodFn () {
  var temp = 'assets/data/Gluten-Free-food.htm'
  var mytemplate = document.getElementById('myhtmdata')
  mytemplate.innerHTML =
    '<object type="text/html" data=' +
    temp +
    ' style="width: 100%;height: 90vh; min-height: 100%;overflow: scroll;"></object>'
}
