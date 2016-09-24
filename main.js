// Currently selected page to display
var selected = 'home';

// Change the currently displayed page
load = function (pageName) {
  if (pageName !== selected){

    // Change displayed content block
    document.getElementById(selected).style.display = 'none';
    document.getElementById(pageName).style.display = 'block';

    // Change title text
    document.getElementById(selected + '-title').className += ' hidden';
    setTimeout(function(){
      document.getElementById(selected + '-title').style.display = 'none';
      document.getElementById(pageName + '-title').style.display = 'inline-block';
      setTimeout(function(){document.getElementById(pageName + '-title').className = document.getElementById(selected + '-title').className.replace(/(?:^|\s)hidden(?!\S)/g, '');}, 50);
      selected = pageName;
    }, 200);

    // Change which button is pushed in
    document.getElementById(selected + '-btn').className = document.getElementById(selected + '-btn').className.replace(/(?:^|\s)btn-left(?!\S)/g, '');
    document.getElementById(pageName + '-btn').className += ' btn-left';
  }
}


// Setup on page load
function setup() {
  //document.getElementById('proj').style.display = 'none';
  //document.getElementById('serv').style.display = 'none';
  return;
}
