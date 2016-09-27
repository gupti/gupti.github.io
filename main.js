// Currently selected page to display
var selected = 'home';

// Change the currently displayed page
load = function (pageName)
{
  if (pageName !== selected)
  {
    // Change displayed content block
    var elementToHide = document.getElementById(selected);
    var elementToShow =  document.getElementById(pageName);
    elementToHide.className += ' container-hide';

    setTimeout(function()
    {
      elementToHide.className += ' container-none';
      elementToShow.className = 'container container-hide';
      setTimeout(function() {
        elementToShow.className = 'container';
      }, 100);
    }, 350);

    document.getElementById(selected + '-btn').style.textDecoration = '';
    document.getElementById(pageName + '-btn').style.textDecoration = 'underline';

    selected = pageName;
  }
}