<!DOCTYPE html>
<html lang="en">
<head>
  <title>Popup Demo</title>
  <style>
    body {
      text-align: center;
      font-family: sans-serif;
      margin-top: 50px;
    }
    #message {
      font-size: 2em;
      color: red;
    }
  </style>
</head>
<body onload="init();">
  <p id="message">Educational Popup Demo</p>
  <script>
    let popupInterval;
    let popupCount = 0;
    const maxPopups = 100000; // Limit for safety

    function openPopup() {
      const width = Math.floor(350 * 0.7);  // 30% smaller
      const height = Math.floor(370 * 0.7);
      window.open(
        "about:blank",
        "_blank",
        `width=${width},height=${height},menubar=no,status=no,toolbar=no,resizable=no`
      );
      popupCount++;
      if (popupCount >= maxPopups) {
        clearInterval(popupInterval);
      }
    }

    function init() {
      popupInterval = setInterval(openPopup, 500); // One popup every second
    }
  </script>
</body>
</html>

