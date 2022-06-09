function UI() {
    this.btn_start = document.querySelector(".btn_start"),
        this.anasayfa = document.querySelector(".anasayfa"),
        this.sorular = document.querySelector(".sorular"),
        this.puan = document.querySelector(".puan"),
        this.btn_restart = document.querySelector(".btn_restart")
}

UI.prototype.soruGoster = function (soru) {
    let question = ` <span class="fs-3 fc ">${soru.soru}</span>`;
    let box = '';

    for (let cvp in soru.cevap) {
        box += `
                <div class="col-6 py-4 px-4">
                     <button class="border-0 box"> <span> <b>${cvp}</b>: ${soru.cevap[cvp]}</span> </button>
                </div>
        `;
    }
    const soru_getir = document.querySelector(".soru-getir");
    document.querySelector(".soru").innerHTML = question;
    soru_getir.innerHTML = box;

    const box_ = soru_getir.querySelectorAll(".box");

    for (let bx of box_) {
        bx.setAttribute("onclick", "boxSelected(this)");
    }


}
UI.prototype.soruSayisi = function (suankiSoru, toplamSoru) {
    let badge = `
    
    <span class="badge bg-badge p-3">${suankiSoru} / ${toplamSoru}</span>
    
    `;
    document.querySelector(".toplamsoru").innerHTML = badge;

}

UI.prototype.puanHesapla = function (skor) {
    let text ;
   if (skor<50) {text = "Kötü Oyuncusun";}
   else if(skor<100){ text = "İlk Deneme İçin Fena Değil";}
   else if(skor<150){ text = "Ortalama Oyuncu";}
   else if(skor<180){ text = "Sen Bu İşi Çözmüşsün Artık :)";}
   else{text="Bir şeyler Ters Gitti";}

    let text_=`<span class="fs-5">${text}</span>`;
      
    let skor_=`<span class="fs-1 fw-bold">${skor}</span>`;

    let=innerskor=`<span class=" fs-2 fc">${skor}</span>`;

    document.querySelector(".text").innerHTML=text_;
    document.querySelector(".puan_").innerHTML=skor_;
    document.querySelector(".skor").innerHTML=innerskor;
}
