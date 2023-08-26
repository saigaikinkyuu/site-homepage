function fetchData() {
  var api_url = 'https://script.google.com/macros/s/AKfycbwSmhocawGOXs-e0cdiJ_HhkThItCl6U6qBCpBY8xRs8UUAZHwDWZ1BSFR6MCX-SVcWVw/exec';

  fetch(api_url)
    .then(function(fetch_data) {
      return fetch_data.json();
    })
    .then(function(json) {
      var base_element = document.querySelector('.product-item.js-based');
      var table_body = document.getElementById('product-table');
        let t = 0

      // 前回のデータをクリア
      table_body.innerHTML = '';

      // p要素を作成して表示
      for (var i in json) {
          t++
    
        if (json[i].time && json[i].letter1 && json[i].letter2) {
            
    // 時間表記の変換
              var timeValue = json[i].time;
              var date = new Date(timeValue);
              var hours = date.getHours();
              var minutes = date.getMinutes();
              var timeValue = json[i].time;
              var date = new Date(timeValue);
              var month = (date.getMonth() + 1).toString().padStart(2, '0');
              var day = date.getDate().toString().padStart(2, '0');
              var hours = date.getHours().toString().padStart(2, '0');
              var minutes = date.getMinutes().toString().padStart(2, '0');
              var formattedTime = month + '月' + day + '日 ' + hours + ':' + minutes;
            
          var clone_element = base_element.cloneNode(true);
          clone_element.classList.remove('js-based');
          clone_element.classList.add('show');

          var time_element = document.createElement('p');
          time_element.classList.add('time');
          time_element.textContent = formattedTime;
          clone_element.querySelector('.time').replaceWith(time_element);

          var letter1_element = document.createElement('p');
          letter1_element.classList.add('letter1');
          letter1_element.textContent = json[i].letter1;
          clone_element.querySelector('.letter1').replaceWith(letter1_element);

          var letter2_element = document.createElement('p');
letter2_element.classList.add('letter2');
letter2_element.id = 'time2' + t;
letter2_element.textContent = json[i].letter2;
clone_element.querySelector('.letter2').replaceWith(letter2_element);

var letter3_element = document.createElement('a');
letter3_element.classList.add('letter3');
letter3_element.id = 'time' + t;
letter3_element.textContent = '詳しく見る';
if (json[i].letter2.includes('ホーム')) {
    letter3_element.href = 'https://jkisyou.com';
}else if (json[i].letter2.includes('地震情報掲載ページ')) {
    letter3_element.href = 'https://earthquake.kisyou.com';
}else if (json[i].letter2.includes('避難情報・気象警報')) {
    letter3_element.href = 'https://weather.jkisyou.com';
}else if (json[i].letter2.includes('利用規約')) {
    letter3_element.href = 'https://agreement.jkisyou.com';
}else if (json[i].letter2.includes('大規模地震配信')) {
    letter3_element.href = 'https://elive.jkisyou.com';
}else if (json[i].letter2.includes('Jアラートページ')) {
    letter3_element.href = 'https://jalert.jkisyou.com';
}else if (json[i].letter2.includes('業務情報ページ')) {
    letter3_element.href = 'https://business.jkisyou.com';
}else {
    letter3_element.href = 'https://saigaikinkyuu.github.io/site-homepage-404/';
}
clone_element.querySelector('.letter3').replaceWith(letter3_element);





          table_body.appendChild(clone_element);
        }
      }
      // 特定のクラス名を持つ要素を取得
var elements = document.getElementsByClassName('js-based');

// 要素にスタイルを適用
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.display = 'none';
}
// 特定のクラス名を持つ要素を取得
var elements = document.getElementsByClassName('show');

// 要素のスタイルから display: none; を削除
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.display = '';
            }



    });
}            


// 初回実行
fetchData();

// 5分ごとにfetchDataを実行する
setInterval(fetchData, 60 * 1000); // 5分 = 5 * 60 * 1000 ミリ秒
