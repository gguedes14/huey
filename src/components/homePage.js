'use strict'

class HomePage {
    constructor() {
        this.addListButton = document.getElementById('addList')
        this.manageItensButton = document.getElementById('manageItens')

        this.addListButton.addEventListener('click', () => this.handleAddListClick())
        this.manageItensButton.addEventListener('click', () => this.handleManageItensClick())
    }

    handleAddListClick() {
        console.log('Botão "Adicionar à Lista" clicado!')
    }

    handleManageItensClick() {
        console.log('Botão "Gerenciar Itens" clicado!')
    }
}

new HomePage()
