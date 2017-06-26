var GotoTop = document.getElementById("GotoTop"),
    ProgressCircle = GotoTop.getContext("2d"),
    percent = 0.0,
    Circle_x = GotoTop.width / 2,
    Circle_y = GotoTop.height / 2,
    radius = 40,
    lineWidth = 5,
    fontSize = 30;

function sector(cx, cy, r, startAngle, endAngle, pre) {
    ProgressCircle.beginPath();
    ProgressCircle.moveTo(cx, cy + r);
    ProgressCircle.lineWidth = lineWidth;
    ProgressCircle.strokeStyle = "#FFAEB9";
    ProgressCircle.lineCap = 'round';
    ProgressCircle.arc(
        cx, cy, r,
        startAngle * (Math.PI / 180.0) + (Math.PI / 2),
        endAngle * (Math.PI / 180.0) + (Math.PI / 2),
        pre
    );
    ProgressCircle.stroke();
}

function Drawing() {
    ProgressCircle.clearRect(0, 0, Circle_x * 2, Circle_y * 2);
    ProgressCircle.font = fontSize + 'px sans-serif';
    ProgressCircle.textAlign = 'center';
    ProgressCircle.textBaseline = 'middle';
    ProgressCircle.fillStyle = '#999';
    ProgressCircle.fillText('Top', Circle_x, Circle_y);
    ProgressCircle.beginPath();
    ProgressCircle.moveTo(Circle_x + radius, Circle_y);
    ProgressCircle.lineWidth = lineWidth;
    ProgressCircle.strokeStyle = '#eee';
    ProgressCircle.arc(Circle_x, Circle_y, radius, 0, Math.PI * 2);
    ProgressCircle.closePath();
    ProgressCircle.stroke();
    sector(Circle_x, Circle_y, radius, 0, percent / 100 * 360);

}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("GotoTop").style.display = "block";
    } else {
        document.getElementById("GotoTop").style.display = "none";
    }
    if ($(window).width() < 991) { $('#GotoTop').delay(3000).fadeOut('slow'); }
    var wintop = $(window).scrollTop(),
        AllDocHeight = $(document).height(),
        ViewWinHeight = $(window).height();
    percent = (wintop / (AllDocHeight - ViewWinHeight)) * 100;
    Drawing();
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}