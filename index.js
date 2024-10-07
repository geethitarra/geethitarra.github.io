const lastPage = document.querySelector('.cover.turn'); 


lastPage.addEventListener('animationend', function() 
{
    document.getElementById('geethipic').style.display = 'block';
})