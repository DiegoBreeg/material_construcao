async function envia_dados() {    
    let url = "/"
    let form = document.querySelector("form")
    let children = [...form.children]
    let data = {}
    children.reduce((acc, ell, index) => {
        if(index%2 == 0 || index == 0) {
            data[`${ell.value}`] = ""
            return acc = ell.value            
        }                  
        else             
            return data[acc] = ell.value
    }, "")
    if(Object.keys(data).includes("") || Object.values(data).includes(""))
        return alert("prencha todos os campos")     
    let response = await fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    console.log("enviou os dados")
    response = await response.json()
    console.log(response)


}