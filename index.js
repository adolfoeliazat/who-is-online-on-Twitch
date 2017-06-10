// const menus = document.getElementsByClassName('menu-item');
// console.log(menus[0].dataset.status);
// console.log(menus[1].dataset.status);
// console.log(menus[2].dataset.status);
$(document).ready(function() {
  const searchText = $('#searchText').val();
  const url = 'https://api.twitch.tv/kraken/streams/freecodecamp';
  $.getJSON(url, (data1) => {
    if (data1.streams === null) {
      console.log('freeCodeCamp is offline');
    } else {
      console.log('Online!');
    }
  });
});