const api = 'https://api.open-meteo.com/v1/forecast?latitude=35.7&longitude=139.6875&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Asia%2FTokyo';

fetch(api)
.then(response => response.json())
.then(data => makePage(data));

function makePage(data) {
  setData('day0', dateFormat(data.daily.time[0]));
  setData('day1', dateFormat(data.daily.time[1]));
  setData('day2', dateFormat(data.daily.time[2]));

  setData('weathercode0', getWMO(data.daily.weather_code[0]));
  setData('weathercode1', getWMO(data.daily.weather_code[1]));
  setData('weathercode2', getWMO(data.daily.weather_code[2]));

  setData('temperature_max0', data.daily.temperature_2m_max[0] + '°C');
  setData('temperature_max1', data.daily.temperature_2m_max[1] + '°C');
  setData('temperature_max2', data.daily.temperature_2m_max[2] + '°C');

  setData('temperature_min0', data.daily.temperature_2m_min[0] + '°C');
  setData('temperature_min1', data.daily.temperature_2m_min[1] + '°C');
  setData('temperature_min2', data.daily.temperature_2m_min[2] + '°C');

  setData('precipitation_sum0', data.daily.precipitation_sum[0] + 'mm');
  setData('precipitation_sum1', data.daily.precipitation_sum[1] + 'mm');
  setData('precipitation_sum2', data.daily.precipitation_sum[2] + 'mm');
}

function setData(id,data) {
  document.getElementById(id).innerHTML = data;
}

function dateFormat(date) {
  let dateObject = new Date(date);

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  return month + '月' + day + '日';
}

function getWMO(w) {
    if (w==0) {
      return '<img src="./img/0.png">';
    } else if (w==1) {
      return '<img src="./img/1.png">';
    } else if (w==2) {
      return '<img src="./img/1.png">';
    } else if (w==3) {
      return '<img src="./img/3.png">';
    } else if (w==45) {
      return '<img src="./img/61.png">';
    } else if (w==48) {
      return '<img src="./img/61.png">';
    } else if (w==51) {
      return '<img src="./img/61.png">';
    } else if (w==53) {
      return '<img src="./img/61.png">';
    } else if (w==55) {
      return '<img src="./img/61.png">';
    } else if (w==56) {
      return '<img src="./img/61.png">';
    } else if (w==57) {
      return '<img src="./img/61.png">';
    } else if (w==61) {
      return '<img src="./img/61.png">';
    } else if (w==63) {
      return '<img src="./img/61.png">';
    } else if (w==65) {
      return '<img src="./img/61.png">';
    } else if (w==66) {
      return '<img src="./img/51.png">';
    } else if (w==67) {
      return '<img src="./img/51.png">';
    } else if (w==71) {
      return '<img src="./img/45.png">';
    } else if (w==73) {
      return '<img src="./img/45.png">';
    } else if (w==75) {
      return '<img src="./img/45.png">';
    } else if (w==77) {
      return '<img src="./img/45.png">';
    } else if (w==80) {
      return '<img src="./img/61.png">';
    } else if (w==81) {
      return '<img src="./img/61.png">';
    } else if (w==82) {
      return '<img src="./img/61.png">';
    } else if (w==85) {
      return '<img src="./img/45.png">';
    } else if (w==86) {
      return '<img src="./img/45.png">';
    } else if (w==95) {
      return '<img src="./img/95.png">';
    } else if (w==96) {
      return '<img src="./img/95.png">';
    } else if (w==99) {
      return '<img src="./img/95.png">';
    } else {
      return w;
    }
  }

  function updateScreen() {
    setData('time',new Date());
  }
  
  window.onload=updateScreen;

  setInterval(updateScreen,1000);



  function dateFormat(date, mode) {
    let dateObject = new Date(date);
  
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
  
    const hour = dateObject.getHours();
    const minute = dateObject.getMinutes();
    const second = dateObject.getSeconds();
  
    if(mode == 1) {
      return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`;
    } else {
      return month + '月' + day + '日';
    }
  }

  function add0 (val) {
    if(val < 10) {
      val = '0' + val;
    }
    return val;
  }

  function dateFormat(date, mode) {
    let dateObject = new Date(date);
  
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
  
    const hour = add0(dateObject.getHours());
    const minute = add0(dateObject.getMinutes());
    const second = add0(dateObject.getSeconds());
  
    if(mode == 1) {
      return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`;
    } else {
      return month + '月' + day + '日';
    }
  }
  function updateScreen() {
    setData('time',dateFormat(new Date(),1));
  }
  window.onload=updateScreen;
  
  setInterval(updateScreen,1000);

  