var api_url = 'https://script.google.com/macros/s/AKfycbxzgEeiR-5Ha_zlyRutxKxLdfnowV1D1vQcYByQ5wWOoVAdFSwSSvUc0S1lyaklxFW7/exec';

  fetch(api_url)
    .then(function (fetch_data) {
      return fetch_data.json();
    })
    .then(function (json) {
      for (var i in json) {
        if (json[i].title && json[i].bodytext) {
          var base_element = document.getElementsByClassName('product-item2 js-based2');
          var clone_element = base_element[0].cloneNode(true);
          clone_element.classList.remove('js-based2');
          clone_element.querySelector('.title').textContent = json[i].title;
          clone_element.querySelector('.bodytext').textContent = json[i].bodytext;

          // 条件に応じてスタイルを適用
          if (json[i].title === '【障害】') {
            clone_element.querySelector('.product-data').classList.add('back-red');
          };
          if (json[i].title === '掲載停止中') {
            clone_element.querySelector('.product-data').classList.add('back-red');
          };
          if (json[i].title === '【重要】') {
            clone_element.querySelector('.product-data').classList.add('back-red');
          };
          if (json[i].title === '【緊急】') {
            clone_element.querySelector('.product-data').classList.add('back-red');
          };
          if (json[i].title === '【復旧】') {
            clone_element.querySelector('.product-data').classList.add('back-green');
          };

          base_element[0].parentNode.appendChild(clone_element);
        }
      }
    });
