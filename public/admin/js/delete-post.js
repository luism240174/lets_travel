let articlesBlock = document.querySelector('.articles');

articlesBlock.addEventListener('click', function (e) {
    if(e.target.classList.contains('btn-remove')) {
        //1st parentNode(div class remove) 2nd parentNode(article)
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('http://localhost:3000/posts/' + id, {
            method: 'DELETE'
        }).then((resp) => resp.text())
        .then(() => window.history.go());
    }
})