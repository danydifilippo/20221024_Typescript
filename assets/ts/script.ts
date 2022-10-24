
function insertBtnA(evA:any) {
    if(evA.which==13 || evA.keycode==13){
        evA.preventDefault();
        let a = <HTMLInputElement>document.getElementById('numberA');
        let inserta = <HTMLElement>document.getElementById('playerA');
        inserta.innerHTML = `${a.value}`
    }
}

function insertBtnB(evB:any) {
    if(evB.which==13 || evB.keycode==13){
        evB.preventDefault();
        let b = <HTMLInputElement>document.getElementById('numberB')
        let insertb = <HTMLElement>document.getElementById('playerB');
        insertb.innerHTML = `${b.value}`
    }
}

function calcolate(number:number, result:number){
    if (number<result){
        return result-number;
    }else {
        return number-result;
    }
}

function giveMeResult(a:number,b:number) {
    let r = Math.floor(Math.random()*100+1);
    let result = <HTMLElement>document.getElementById('result');
    result.innerHTML= `<h2>Il numero esatto è</h2>
    <div>${r}</div>`;
    let nrA = <HTMLInputElement>document.getElementById('numberA');
    let nrB = <HTMLInputElement>document.getElementById('numberB');
    let c = <HTMLElement>document.getElementById('compareNr');
    a = parseInt(nrA.value);
    b = parseInt(nrB.value);
    if(a===r && b===r) { 
        c.innerHTML=`Complimenti entrambi avete indovinato il numero`;
    } else if (a===r && b!==r) {
        c.innerHTML=`<p>Complimenti giocatore A... hai indovinato!!!<br>
         Giocatore B mi spiace.. ritenta sarai più fortunato</p>`;
    } else if (a!==r && b===r) {
        c.innerHTML=`<p>Complimenti giocatore B... hai indovinato!!!<br>
         Giocatore A mi spiace.. ritenta sarai più fortunato</p>`;
    } else if (a!==r && b!==r) {
        let nrComparedA = calcolate(a,r);
        let nrComparedB = calcolate(b,r);
        let winner = nrComparedA<nrComparedB ? `giocatore A` :  `giocatore B`
        c.innerHTML=`<p>Nessuno dei 2 giocatori ha indovinato!!!<br>
        ma il ${winner} si è avvicinato di più!!</p>`;
        }
    }
    



