// const menus = document.getElementsByClassName('menu-item');
// console.log(menus[0].dataset.status);
// console.log(menus[1].dataset.status);
// console.log(menus[2].dataset.status);
// API_KEY = kkaeq46sq7dzoazhviihhcpba37y4r

const API_KEY = 'kkaeq46sq7dzoazhviihhcpba37y4r';
const result = document.getElementById('result');
const li = document.createElement('li');
const img = document.createElement('img');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const a = document.createElement('a');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const searchText = $('#searchText').val();
  const url = `https://api.twitch.tv/kraken/users/${searchText}?client_id=${API_KEY}`;
  const streamUrl = `https://api.twitch.tv/kraken/streams/${searchText}?client_id=${API_KEY}`;
  $.getJSON(url).done((data) => {
  $.getJSON(streamUrl).done((res) => {
   if (res.stream === null) {
        console.log('basic info: ', data);
        p1.innerText = data.display_name;
        p2.innerText = 'offline now.';
        li.appendChild(p1);
        li.appendChild(p2);
        img.src = data.logo;
        li.appendChild(img);
        result.appendChild(li);
      } else {
        p1.innerText = data.display_name;
        p2.innerText = 'online now.';
        a.href = res.channel.url;
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(a);
        img.src = data.logo;
        li.appendChild(img);
        result.appendChild(li);
    }
  });
});
});


// $.getJSON(url).done((data) => {
//   $.getJSON(streamUrl).done((res) => {
//    if (res.stream === null) {
//         console.log('basic info: ', data);
//         p1.innerText = data.display_name;
//         p2.innerText = 'offline now.';
//         li.appendChild(p1);
//         li.appendChild(p2);
//         img.src = data.logo;
//         li.appendChild(img);
//         result.appendChild(li);
//       } else {
//         p1.innerText = data.display_name;
//         p2.innerText = 'online now.';
//         a.href = res.channel.url;
//         li.appendChild(p1);
//         li.appendChild(p2);
//         li.appendChild(a);
//         img.src = data.logo;
//         li.appendChild(img);
//         result.appendChild(li);
//     }
//   });
// });

// $.getJSON(url).done((data) => {
//   console.log('basic info: ', data);
//   p.innerText = data.display_name;
//   li.appendChild(p);
//   img.src = data.logo;
//   li.appendChild(img);
//   result.appendChild(li);
// });
// $.getJSON(streamUrl).done((data) => {
//   console.log('streaming?: ', data.stream);
// });