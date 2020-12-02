const $form = document.querySelector('#form')

const $image = document.querySelector('#image')
const $file = document.querySelector('#file')

function renderImage (formData) {
  const file = formData.get('image')
  // se requiere convertir el archivo y podamos renderizar un blob
  const imagen = URL.createObjectURL(file)
  $image.setAttribute('src', imagen)
}


$file.addEventListener('change', (e) => {
  debugger
  const formData = new FormData($form)
  renderImage(formData)
})

$form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData($form)
  fetch('/', {
    method: 'POST',
    body: formData,
  })

})