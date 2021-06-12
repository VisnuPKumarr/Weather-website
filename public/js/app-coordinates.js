const coordinatesForm = document.querySelector('#form-coordinates')
const find = document.querySelector('#input-coordinates')
const replyOne = document.querySelector('#message-3')
const replyTwo = document.querySelector('#message-4')

// messageOne.textContent = ''

coordinatesForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = find.value
    replyOne.textContent = 'Loading........'
    replyTwo.textContent = ''
    const urlc = '/location?address=' + encodeURIComponent(location)
    fetch(urlc).then((response) => {
        response.json().then((data) => {
            if(data.error){
                replyOne.textContent = data.error
            }
            else{
                replyOne.textContent = data.location 
                replyTwo.textContent = 'The coordinates of this location are (' + data.latitude + ',' + data.longitude + ').'
            }
        })
    })
})