export class FormPost{
    constructor(idForm, idTextarea, idPost){
    this.form = document.getElementById(idForm);
    this.textarea = document.getElementById(idTextarea);
    this.ulPost = document.getElementById(idPost);
    this.addSubmit();
   
    }

    onSubmit(func){
        this.form.addEventListener('submit', func)
    }

    addSubmit(){
        const handleSubmit = (event) => {
            event.preventDeFault();
            console.log('Evento add.')
        }
        this.onSubmit(handleSubmit)
    }   

}
const postForm = new FormPost('formPost','textarea', 'posts')