'use strcit';

const tabs = document.querySelectorAll('[data-id]');
console.log(tabs)
const contents = document.querySelectorAll('[data-content]');
console.log(contents)

let id = 0;

tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
        tabs[id].classList.remove('active');
        tab.classList.add('active');
        id = tab.getAttribute('data-id');
        contents.forEach(function(box){
            box.classList.add('hide');
            if(box.getAttribute('data-content') == id){
                box.classList.remove('hide');
                box.classList.add('show')
            }
        })

    })
})