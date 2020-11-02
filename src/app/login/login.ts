import { component } from '@angular/core';
import { NavController } from 'ionic-angular';

@component({
selector: 'page.login',
templateUrl: 'login.html'
})
export class loginPage{

    username: string;
    password: string;

    constructor(public navCtrl: NavController) {

    }

login (){
console.log("Username: "+ this.username);
;
console.log("Password: "+ this.password)
}

goCadastro(){
this.navCtrl.push(this.goCadastroPage)
}
}