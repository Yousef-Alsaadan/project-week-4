if(window.innerWidth<=600){
    document.querySelectorAll('.info-box').forEach(box=>{
        const p =box.querySelector('p');
        const text =p.innerText;
    
        const numtext= text.slice(0,100);
        if(text.length>100){
            p.innerText=numtext + '...';
             const showbutton=document.createElement('span');
             showbutton.classList.add('show-more');
             showbutton.innerText='عرض المزيد';
    
             showbutton.addEventListener('click',function(){
                p.innerText=text;
                showbutton.style.display='none';
             });
             box.appendChild(showbutton);
        }
    })
    }
    