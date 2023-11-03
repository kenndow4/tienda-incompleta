export default class Tabs{

constructor(idElemento){

    this.tabs = document.getElementById(idElemento);

    this.nav = this.tabs.querySelector('.tabs');

    this.nav.addEventListener('click', (e)=>{

        e.preventDefault();
     if([...e.target.classList].includes('tabs__button')){

        // obtener la tab

        const tab = e.target.dataset.tab;

        if(this.tabs.querySelector('.tab--active')){

           this.tabs.querySelector('.tab--active').classList.remove('tab--active');

        }
            

            if(this.nav.querySelector('.tabs__button--active')){
                this.nav.querySelector('.tabs__button--active').classList.remove('tabs__button--active');
            }

        // if(tab.querySelector('.tabs__button--active')){
        //     // e.target.querySelector('.tabs__button--active').classList.remove('tabs__button--active');
        //     console.log( 'hola');

        // }

        this.tabs.querySelector(`#${tab}`).classList.add('tab--active');

        e.target.classList.add('tabs__button--active');
       


     }
       
    });
  
}

}