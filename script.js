window.addEventListener('load', function () {
    const date = new Date();
    date.toLocaleDateString('id-ID', {
        timeZone: 'Asia/Jakarta'
    });
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
    if (date.getHours() > 8 && date.getHours() <= 14) {
        path = 'https://bit.ly/kehadiran-sib-' + date.getDate() + '-' + month + '-pagi';
        return this.window.location.replace(path);
    } else if (date.getHours() > 14 && date.getHours() < 0) {
        path = 'https://bit.ly/kehadiran-sib-' + date.getDate() + '-' + month + '-sore';
        return this.window.location.replace(path);
    } else {
        document.querySelector('#output').innerHTML = '<h1> Udah malem guys, turuuu😴</h1>';
    }
});