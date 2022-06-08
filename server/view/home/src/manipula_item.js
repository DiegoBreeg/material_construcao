let input_name = 1

function novo_item() {
    const form = document.querySelector("#form")
    
    let item = document.createElement("input")
    let quantidade = document.createElement("input")
    let att_item = document.createAttribute("name")
    let att_quantidade = document.createAttribute("name")
    att_item.value = input_name
    att_quantidade.value = input_name++
    item.setAttributeNode(att_item)
    quantidade.setAttributeNode(att_quantidade)

    form.appendChild(quantidade)    
    form.appendChild(item) 

}

function remover_item() {
    const form = document.querySelector("#form")
    
    if(input_name !== 1) {
        form.removeChild(form.lastChild)
        form.removeChild(form.lastChild)
        input_name -= 1
    }
    else
        alert("impossível deletar item")
    

}