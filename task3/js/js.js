function FormSelect(options){
    var form = document.getElementById(options.formid);
    
    form.addEventListener('click', function(event){
        var target = event.target;
        var parent = target.parentElement;
        
        if(target.classList.contains('select_title')){
            target.classList.add('select_title_active');
        }
        
        parent.addEventListener('mouseleave', function(event){
            target.classList.remove('select_title_active');
        });
    });
}

var signUp = document.getElementById('js_sign_up');
var paranja = document.getElementById('paranja');
var modalClose = paranja.querySelector('.modal_close');

signUp.addEventListener('click', function(){
    paranja.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

modalClose.addEventListener('click', function(){
    paranja.style.display = '';
    document.body.style.overflow = '';
});