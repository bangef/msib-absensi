 window.addEventListener('load', function () {
     const date = new Date();
     const day = date.getDate();
     let path = '';
     let month = date.getMonth();
     switch (month + 1) {
         case 6:
             month = 'juni';
             break;
         case 7:
             month = 'juli';
             break;
         case 8:
             month = 'agustus';
             break;
         default:
             return month = month;
             break;
     }
     if (date.getHours() > 0 && date.getHours() <= 12) {
         path = 'https://bit.ly/kehadiran-sib-' + date.getDate() + '-' + month + '-pagi';
     } else {
         path = 'https://bit.ly/kehadiran-sib-' + date.getDate() + '-' + month + '-sore';
     }
     return window.location.replace(path);
 });