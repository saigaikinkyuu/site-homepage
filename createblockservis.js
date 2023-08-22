                   function fetchData() {
                    var api_url = 'https://script.google.com/macros/s/AKfycbyg0PznUw7VfJfOEVu-IctS4AcCyTBYWxvPEJSf8e4r125Cnp_X-VPTDuH855kYz8LUcA/exec';
                
                    fetch(api_url)
                      .then(function(fetch_data) {
                        return fetch_data.json();
                      })
                      .then(function(json) {
                        for (var i = 0; i < json.length; i++) {
                          if (json[i].kind && json[i].situation) {
                            var situation_text;
                            if (json[i].situation === '通常通り') {
                              situation_text = '○';
                            } else if (json[i].situation === '障害復旧') {
                              situation_text = '◎';
                            } else if (json[i].situation === '一部制限あり') {
                              situation_text = '※○';
                            } else if (json[i].situation === '障害発生中') {
                              situation_text = '✕';
                            } else if (json[i].situation === '制限中') {
                              situation_text = '✕';
                            } else if (json[i].situation === '終了') {
                              situation_text = 'ー';
                            } else if (json[i].situation === '不明') {
                              situation_text = 'ー';
                            }
                
                            var situation_id = 'situation' + (i + 1);
                            var situation_cell = document.getElementById(situation_id);
                            if (json[i].situation === '通常通り') {
                              situation_cell.classList.add('green_text')
                            } else if (json[i].situation === '障害復旧') {
                              situation_cell.classList.add('green_text')
                            } else if (json[i].situation === '一部制限あり') {
                              situation_cell.classList.add('orange_text')
                            } else if (json[i].situation === '障害発生中') {
                              situation_cell.classList.add('red_text')
                            } else if (json[i].situation === '制限中') {
                              situation_cell.classList.add('orange_text')
                            } else if (json[i].situation === '終了') {
                              situation_cell.classList.add('black_text')
                            } else if (json[i].situation === '不明') {
                              situation_cell.classList.add('black_text')
                            }
                            if (situation_cell) {
                              situation_cell.textContent = situation_text;
                            }
                          }
                          // 最終変更時刻を更新
        var lastUpdatedElement = document.getElementById('last-updated');
        if (lastUpdatedElement) {
          var currentTime = new Date();
          var formattedTime = currentTime.toLocaleString();
          lastUpdatedElement.textContent = '最終変更時刻: ' + formattedTime;
        }
                        }
                      });
                  }
                
                  // 初回実行時にデータを取得する
                  fetchData();
                
                  // 10分ごとにfetchDataを実行する
                  setInterval(fetchData, 10 * 60 * 1000); // 10分 = 10 * 60 * 1000 ミリ秒
