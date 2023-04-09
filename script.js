function closePopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("show");
}
window.onload = function() {
  var popup = document.getElementById("popup");
  popup.classList.add("show");
}
    var countdownElement = document.getElementById("countdown");
		var countdown = parseInt(countdownElement.innerHTML);

		var interval = setInterval(function() {
			countdown--;
			countdownElement.innerHTML = countdown;

			if (countdown <= 0) {
				clearInterval(interval);
			}
      if (countdown <= 0) {
				window.location.href = "http://koidolashahbazpurhighschool.liveblog365.com/";
			}
		}, 1000);