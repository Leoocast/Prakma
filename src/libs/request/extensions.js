export const downloadFile = (result, fileName) => {
    const url = window.URL.createObjectURL(result)
    const a = document.createElement('a')
    a.href = url
    a.classList.add('d-none')
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    a.remove()
}