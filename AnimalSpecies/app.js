const card = document.getElementsByClassName('card');
const search = document.getElementsByClassName('search-bar')[0];
const form = document.getElementsByClassName('form-form')[0];
const display = document.getElementsByClassName('display')[0];
const mode = document.getElementsByClassName('form-switch')[0];
const animalarr = ['Aardvark', 'Abyssinian', 'Aardwolf', 'Acadian Flycatcher', 'Achrioptera Manga', 'Acker Monitor', 'Addax', 'Adelie Penguins', 'Afghan Hound'];

/*
for(let i=0;i<card.length;i++){
    if(card[i].getElementsByClassName('card-title')[0].innerHTML.includes(search.value))
        card[i].style.display = 'block';
    else
        card[i].style.display = 'none';
}
*/

display.classList.add('hide');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    for(let i=0;i<card.length;i++){        
        if(card[i].getElementsByClassName('card-title')[0].innerHTML.toLowerCase().includes(search.value.toLowerCase())){
            card[i].style.display = 'block';  
        }
        else{
            card[i].style.display = 'none';
            display.classList.toggle('hide');
        }
    }

});


/*  Dark Mode */

mode.addEventListener('click',(e)=>{
    
    let arr = e.target.classList.value.split(' ');
    arr.map((item)=>{
        if(item == 'light'){
            document.body.style.backgroundColor = 'black';
            for(let i of card){            
                i.style.backgroundColor = 'black';
                i.style.color = 'white';
                i.style.border = '1px solid #e7e7e7';
            }
            e.target.classList.remove('light');
            e.target.classList.add('dark');
            document.getElementsByClassName('form-check-label')[0].innerHTML = "Enable Lightmode";
        }
        else if(item == 'dark') {
            document.body.style.backgroundColor = '#e7e7e7';
            for(let i of card){            
                i.style.backgroundColor = 'white';
                i.style.color = 'black';
                //i.style.border = '1px solid #e7e7e7';
            }
            e.target.classList.remove('dark');
            e.target.classList.add('light');
            document.getElementsByClassName('form-check-label')[0].innerHTML = "Enable Darkmode";
        }
    });
});