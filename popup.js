document.getElementById('refreshButton').addEventListener('click', function() {
    var proverbs = [
        "1-Yağmurdan kaçarken doluya tutulmak",
        "2-Aklı havada olmak",
        "3-Sabrı taşmak",
        "4-İnce eleyip sık dokumak",
        "5-Kılı kırk yarmak",
        "6-Kulak asmamak",
        "7-Su gibi akıp gitmek",
        "8-İşin içinden çıkamamak",
        "9-Gözü pek olmak",
        "10Kulağı kesik olmak"
        
    ];
    var randomIndex = Math.floor(Math.random() * proverbs.length);
    document.getElementById('quote').textContent = proverbs[randomIndex];
});