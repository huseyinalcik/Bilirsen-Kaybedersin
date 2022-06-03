function UI(){
    this.btn_start=document.querySelector(".btn_start"),
    this.anasayfa=document.querySelector(".anasayfa"),
    this.sorular=document.querySelector(".sorular")
}
const soru =new Soru();

UI.prototype.soruGoster =function(soru){
    let question=`${soru.soru}`;
    let box='';

    for(let cvp in soru.cevap){
        box+= `
            <span> <b> ${cvp}</b>: ${soru.cevap[cvp]}</span>
        
        `;
    }
}
document.querySelector(".soru").innerHTML=question;
document.querySelector("box").innerHTML=box;