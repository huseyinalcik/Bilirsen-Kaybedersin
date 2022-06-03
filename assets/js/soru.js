function Soru(soru,cevap,dogruCevap){
    this.soru=soru;
    this.cevap=cevap;
    this.dogruCevap=dogruCevap;
}


Soru.prototype.cevabKontrol=function(cevap){
    return cevap===this.dogruCevap;
}


let sorular =[
    new Soru("1- İnekler Ne İçer",{a:"Su",b:"Süt"},"b"),
    new Soru("2- Hangisi Açık Renktir",{a:"Siyah",b:"Lila"},"a"),
    new Soru("3- Hangisi İle Traş Olunur",{a:"Jilet",b:"Bıçak"},"b"),
    new Soru("4- Ağırlık Olarak 1 Kilo Pamuk Mu Yoksa 1 Kilo Demir Mi Ağırdır?",{a:"1 Kilo Pamuk",b:"2'side Eşittir"},"a"),
    new Soru("5- Hangisi Bir Süt Ürünü Değildir",{a:"Tereyağı",b:"Zeytinyağı"},"a"),
    new Soru("6- Sigara Sağlığa Zararlıdır",{a:"Evet",b:"Hayır"},"b"),
    new Soru("7- Hangisinin 2 Tekerleği Vardır?",{a:"Motorsiklet",b:"Araba"},"b"),
    new Soru("8- Bir Kelimenin Anlamını Öğrenmek İçin Hangisine Bakarız?",{a:"Ansiklopedi",b:"Sözlük"},"a"),
    new Soru("9- Hangisi Uzunluk Ölçü Birimi Değildir?",{a:"Metre",b:"Kilogram"},"a"),
    new Soru("10- Hangisi Daha Önce Giyilir?",{a:"Kravat",b:"Gömlek"},"a"),
    new Soru("11- Hangisi Şerbetli Bir Tatlı Değildir?",{a:"Tiramisu",b:"Tulumba"},"b"),
    new Soru("12- Hangisinde Bir Deveye Rastlamak Mümkündür?",{a:"Çöl",b:"Kutup"},"b"),
    new Soru("13- Güneş Doğudan Batar",{a:"Yanlış",b:"Doğru"},"b"),
    new Soru("14- Bugün Pazartesi İse Dün Hangi Gündür?",{a:"Pazar",b:"Salı"},"b"),
    new Soru("15- İnsanda 4 Bacak Yoktur",{a:"Yanlış",b:"Doğru"},"a"),
    new Soru("16- Hangisi Alfabede Daha Önce Gelir?",{a:"L",b:"D"},"a"),
    new Soru("17- Hangisinin Ana Maddesinde Pekmez Vardır?",{a:"Simit",b:"Poğaça"},"b"),
    new Soru("18- Mum Doğal Işık Kaynağı Değildir?",{a:"Evet",b:"Hayır"},"b"),
    new Soru("19- Hangisi Daha Değerlidir?",{a:"Tahta",b:"Altın"},"a"),
    new Soru("20- Su Kaç Derecede Kaynamaz?",{a:"100",b:"-10"},"a")
]
