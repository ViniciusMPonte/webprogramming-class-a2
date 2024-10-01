function apertou(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const dataObject = Object.fromEntries(formData.entries())
    console.log(dataObject)

}

document.