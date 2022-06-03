const ui =new UI();
const yarisma=new Yarisma(sorular);



ui.btn_start.addEventListener("click",function(){
    ui.anasayfa.classList.remove("aktif");
    ui.sorular.classList.add("aktif");
    let soru= yarisma.sonrakiSoru();
    yarisma.soruIndex+=1;
})





// if(yarisma.sorular.length != yarisma.soruIndex){
//     console.log(yarisma.sonrakiSoru());
//     yarisma.soruIndex+=1;
// }
// else{
//     console.log("Bitti");
// }