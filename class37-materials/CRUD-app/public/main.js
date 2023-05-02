// main.js
document.querySelector('#update-button').addEventListener('click', () => {
    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vader',
            quote: 'I find your lack of faith disturbing.',
        }),
    })
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(res => {
            window.location.reload(true)
        })
})

document.querySelector('#delete-button').addEventListener('click', _ => {
    fetch(`/quotes`, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vader'
        })
    })
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(response => {
            if (response === 'No quote to delete') {
                document.querySelector("#message").textContent = 'No Darth Vader quote to delete'
            } else {
                window.location.reload(true)
            }
        })
        .catch(error => console.error(error))
})