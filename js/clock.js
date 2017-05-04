// import 'moment.min.js' from '~/node_modules/moment/min/moment.min.js';
// require('~/node_modules/moment/min/moment.min.js');
// 'C:\Users\Bob\node_modules\moment\min';

function clock(){
    var now = new Date();

    document.getElementsByClassName("clock-value")[0].innerHTML = now.getHours()+':'+addZero(now.getMinutes())+':'+addZero(now.getSeconds());
    setTimeout(clock, 500);
}
function addZero(time){
  if(time<10) return '0'+time;
  return time;
}

clock();
