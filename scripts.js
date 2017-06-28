
function selectAd() {
    var ads = [
      ["bowlingad.svg", "Hollywood Bowl - Let the good times roll!", "http://www.hollywoodbowl.co.uk/"],
      ["gbkad.svg", "Gourmet Burger Kitchen - Just Good Food", "https://www.gbk.co.uk/"],
      ["shaakead.svg", "Shaake - Fresh Juices Smoothies Milkshakes & More!", "https://www.shaake.com"]
    ];

    var adid = Math.floor(Math.random() * ads.length);
    document.getElementById("advert").src = "images/"+ads[adid][0];
    document.getElementById("advert").alt = ads[adid][1];
    document.getElementById("adlink").href = ads[adid][2];
}
