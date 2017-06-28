
function selectAd() {
    var ads = [
      ["bowlingad.svg", "Hollywood Bowl - Let the good times roll!", "https://www.hollywoodbowl.co.uk/"]
    ];

    var adid = Math.floor(Math.random() * ads.length);
    document.getElementById("advert").src = "images/"+ads[adid][0];
    document.getElementById("advert").alt = ads[adid][1];
    document.getElementById("adlink").href = ads[adid][2];
}