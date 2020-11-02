import { component } from '@angular/core';
import { ionicPage,  NavController, Navparams } from 'ionic-angular';

@ionicPage()
@component({
    selector: 'page-cadastro',
    templateUrl: "cadastro.html",
})
export class cadastroPage{

    username:string;
    password:string;
    repassword:string;

    constructor(public navCtrl: navController, public navParams: NavParams){

    }

ionViewDidLoad(){
    console.log('ionViewDidLoad CadastroPage');

}

cadastro(){

    if(this.username.length==0 || this.password.lenght==0 || this.repassword.lengh==0)
    alert("Porfavor preencha todos os campos");
    }
}