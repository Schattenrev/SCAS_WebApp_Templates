function includeHTML() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("header-container").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "../Header.html", true);
    xhr.send();
  }
  
  window.onload = includeHTML;