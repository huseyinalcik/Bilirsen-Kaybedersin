const yarisma=new Yarisma(sorular);
const ui =new UI();


ui.btn_start.addEventListener("click",function(){
    ui.anasayfa.classList.remove("aktif");
    ui.sorular.classList.add("aktif");
    zamanlayici(90);
    let soru= ui.soruGoster(yarisma.sonrakiSoru());
    ui.soruSayisi(yarisma.soruIndex+1,yarisma.sorular.length);
})
ui.btn_restart.addEventListener("click",function(){
    ui.puan.classList.remove("aktif");
    ui.anasayfa.classList.add("aktif");
    window.location.reload();
})



function boxSelected(box_){
    let cevap=box_.querySelector("span b").textContent;
    let soru=yarisma.sonrakiSoru();
    if(soru.cevabKontrol(cevap)){
        yarisma.skor+=10;
        if(yarisma.sorular.length != yarisma.soruIndex+1){
            yarisma.soruIndex+=1;
            ui.puanHesapla(yarisma.skor);
            ui.soruGoster(yarisma.sonrakiSoru());
            ui.soruSayisi(yarisma.soruIndex+1,yarisma.sorular.length);
        }
        else{
            ui.puanHesapla(yarisma.skor);
            ui.sorular.classList.remove("aktif");
            ui.puan.classList.add("aktif");
            alert("Tebrikler Bütün Soruları Bildiniz!");
            clearInterval(tetikleyici);
        }
    }
    else{
        yarisma.soruIndex=0;
        yarisma.skor=0;
        ui.puanHesapla(yarisma.skor);
        ui.soruGoster(yarisma.sonrakiSoru());
        ui.soruSayisi(yarisma.soruIndex+1,yarisma.sorular.length);
    }
}

let tetikleyici;
function zamanlayici(zaman){
    tetikleyici=setInterval(timer,1000);
    function timer(){
        zaman-=1;
        let sure=`  <span class="fs-2 fc">${zaman}</span>`;
        document.querySelector(".sure").innerHTML=sure;
        if(zaman<1){
            clearInterval(tetikleyici);
            ui.puanHesapla(yarisma.skor);
            ui.sorular.classList.remove("aktif");
            ui.puan.classList.add("aktif");
            alert("Süre Doldu");
        }
    }
}

