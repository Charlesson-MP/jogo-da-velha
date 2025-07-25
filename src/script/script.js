// Elementos do placar
const placarX = document.getElementsByClassName("scoreX")[0];
const placarO = document.getElementsByClassName("scoreO")[0];
// Botões para resetar
const btnReset = document.getElementById("btn-reset");
const btnResetTabuleiro = document.getElementById("btn-reset-tabuleiro");
// Tabuleiro
const tabuleiro = [...document.getElementsByClassName("celula")];

let jogadorDaVez = 1;

let lin0 = 0,
    lin1 = 0,
    lin2 = 0,
    col0 = 0,
    col1 = 0,
    col2 = 0,
    diag0 = 0,
    diag1 = 0;

function fazerJogada(jogador, pos) {
    switch(pos) {
        case 0:
            if(tabuleiro[pos].innerText != "") return;
            if(jogador == 1) {
                tabuleiro[pos].textContent = "X";
                lin0 += jogador;
                col0 += jogador;
                diag0 += jogador;
            } else {
                tabuleiro[pos].textContent = "O";
                lin0 += jogador;
                col0 += jogador;
                diag0 += jogador;
            }
            break;
        case 1:
            if(tabuleiro[pos].innerText != "") return;
            if(jogador == 1) {
                tabuleiro[pos].textContent = "X";
                lin0 += jogador;
                col1 += jogador;
            } else {
                tabuleiro[pos].textContent = "O";
                lin0 += jogador;
                col1 += jogador;
            }
            break;
        case 2:
            if(tabuleiro[pos].innerText != "") return;
            if(jogador == 1) {
                tabuleiro[pos].textContent = "X";
                lin0 += jogador;
                col2 += jogador;
                diag1 += jogador;
            } else {
                tabuleiro[pos].textContent = "O";
                lin0 += jogador;
                col2 += jogador;
                diag1 += jogador;
            }
            break;
        case 3:
            if(tabuleiro[pos].innerText != "") return;
            if(jogador == 1) {
                tabuleiro[pos].textContent = "X";
                lin1 += jogador;
                col0 += jogador;
            } else {
                tabuleiro[pos].textContent = "O";
                lin1 += jogador;
                col0 += jogador;
            }
            break;
        case 4:
            if(tabuleiro[pos].innerText != "") return;
            if(jogador == 1) {
                tabuleiro[pos].textContent = "X";
                lin1 += jogador;
                col1 += jogador;
                diag0 += jogador;
                diag1 += jogador;
            } else {
                tabuleiro[pos].textContent = "O";
                lin1 += jogador;
                col1 += jogador;
                diag0 += jogador;
                diag1 += jogador;
            }
            break;
        case 5:
            if(tabuleiro[pos].innerText != "") return;
            if(jogador == 1) {
                tabuleiro[pos].textContent = "X";
                lin1 += jogador;
                col2 += jogador;
            } else {
                tabuleiro[pos].textContent = "O";
                lin1 += jogador;
                col2 += jogador;
            }
            break;
        case 6:
            if(tabuleiro[pos].innerText != "") return;
            if(jogador == 1) {
                tabuleiro[pos].textContent = "X";
                lin2 += jogador;
                col0 += jogador;
                diag1 += jogador;
            } else {
                tabuleiro[pos].textContent = "O";
                lin2 += jogador;
                col0 += jogador;
                diag1 += jogador;
            }
            break;
        case 7:
            if(tabuleiro[pos].innerText != "") return;
            if(jogador == 1) {
                tabuleiro[pos].textContent = "X";
                lin2 += jogador;
                col1 += jogador;
            } else {
                tabuleiro[pos].textContent = "O";
                lin2 += jogador;
                col1 += jogador;
            }
            break;
        case 8:
            if(tabuleiro[pos].innerText != "") return;
            if(jogador == 1) {
                tabuleiro[pos].textContent = "X";
                lin2 += jogador;
                col2 += jogador;
                diag0 += jogador;
            } else {
                tabuleiro[pos].textContent = "O";
                lin2 += jogador;
                col2 += jogador;
                diag0 += jogador;
            }
            break;
    }

    jogadorDaVez = -jogador;
}

function testarVitoria() {
    if(lin0 == 3 || lin1 == 3 ||
        lin2 == 3 || col0 == 3 ||
        col1 == 3 || col2 == 3 ||
        diag0 == 3 || diag1 == 3 ) {
        return 1;
    } else if(lin0 == -3 || lin1 == -3 ||
        lin2 == -3 || col0 == -3 ||
        col1 == -3 || col2 == -3 ||
        diag0 == -3 || diag1 == -3 ) {
        return -1;
    } else {
        return 0;
    }
}

let contJogada = 0, numVitoriasX = 0, numVitoriasO = 0;
tabuleiro.forEach((el, index, array) => {
    el.addEventListener('click', () => {
        fazerJogada(jogadorDaVez, index);
        contJogada++;
        let vencedor = testarVitoria();

        if(vencedor == 1) {
            numVitoriasX++;
            placarX.innerText = numVitoriasX;
            jogadorDaVez = 1;
            alert("X é o vencedor!");
            resetarJogo();
            return true;
        } else if( vencedor == -1) {
            numVitoriasO++;
            placarO.innerText = numVitoriasO;
            jogadorDaVez = 1;
            alert("O é o vencedor!");
            resetarJogo();
            return true;
        } else if(contJogada == array.length) {
            jogadorDaVez = 1;
            alert("Empate!");
            resetarJogo();
            return true;
        }
    });
});

btnReset.addEventListener("click", () => {
    placarO.innerText = 0;
    placarX.innerText = 0;
});

function resetarJogo() {
    tabuleiro.forEach(el => {
        el.innerText = "";
    })

    contJogada = lin0 = lin1 = lin2 = col0 = col1 = col2 = diag0 = diag1 = 0;
}