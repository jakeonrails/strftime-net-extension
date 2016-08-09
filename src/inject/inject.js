chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

    var updateHeader = function() {
      var h1s = document.getElementsByTagName('h1');
      var format = document.getElementById('this-is-it-baby');

      if (h1s.length > 0) {
        if (format.value.length > 0) {
          h1s[0].innerHTML = strftime(format.value);
        } else {
          h1s[0].innerHTML = "STRFTIME";
        }

      }
      setTimeout(updateHeader, 250);
    };

    setTimeout(updateHeader, 1000);

	}
	}, 10);
});
