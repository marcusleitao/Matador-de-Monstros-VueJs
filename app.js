new Vue({
    el: '#app',
    data: {
        iniciado: false,
        vidaJogador: 100,
        vidaMonstro: 100,
        logJogo: []
    },
    computed: {
        finalizado(){
            if(this.vidaJogador <= 0 || this.vidaMonstro <= 0){
                return true
            } else {
                return false
            }
        },
        resultado(){
            if(this.vidaJogador > this.vidaMonstro){
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        comecar() {
            this.iniciado = true
            this.vidaJogador = 100
            this.vidaMonstro = 100
            this.logJogo = []
        },
        atacar(type) {
            let changeVidaJogador = this.getRandom(10, 15)
            let changeVidaMonstro = this.getRandom(5, 12)

            if(type == 'especial') {
                changeVidaJogador = this.getRandom(10, 15)
                changeVidaMonstro = this.getRandom(14, 16)
            }

            if((this.vidaJogador - changeVidaJogador) >= 0){
                this.vidaJogador -= changeVidaJogador
            } else {
                this.vidaJogador = 0
            }
            
            if((this.vidaMonstro - changeVidaMonstro) >= 0){
                this.vidaMonstro -= changeVidaMonstro
            } else {
                this.vidaMonstro = 0
            } 

            if(this.vidaMonstro >= 0 && this.vidaJogador >= 0){
                this.adicionarAoLog(changeVidaJogador, changeVidaMonstro)
            }
        },
        curar(){
            let cura = this.getRandom(14,16);
            let ataqueMonstro = this.getRandom(13,15);
            this.vidaJogador += (cura - ataqueMonstro)
            this.adicionarAoLog(ataqueMonstro, this.vidaJogador, cura)
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        desistir(){
            this.iniciado = false
        },
        adicionarAoLog(monstro, jogador, cura = 0){
            this.logJogo.push({
                "jogador": jogador,
                "monstro": monstro,
                "cura": cura
            })

            this.logJogo.reverse()

            console.log(this.logJogo)
        }
    }
})