function Yarisma(sorular){
    this.sorular=sorular;
    this.soruIndex=0;
    this.skor=0;
}
Yarisma.prototype.sonrakiSoru=function(){
    return this.sorular[this.soruIndex];
}

