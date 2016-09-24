// Currently selected page to display
var selected = 'home';

// Change the currently displayed page
load = function (pageName)
{
  if (pageName !== selected)
  {
    // Change displayed content block
    document.getElementById(selected).style.display = 'none';
    document.getElementById(pageName).style.display = '';

    document.getElementById(selected + '-btn').style.textDecoration = '';
    document.getElementById(pageName + '-btn').style.textDecoration = 'underline';

    selected = pageName;
  }
}