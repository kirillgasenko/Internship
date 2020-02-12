Ext.define('form.view.login.LoginController', {              //ЛОГИКА ОКНА
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    

    onLoginClick: function(button) {                                      //по сути проверка на правильность входа 
        // qwe = button.lookupViewModel().get('user').data.items
        // console.log(qwe)
        // qwe.forEach(console.log(1))
        // var email = this.lookupReference('name')
        // console.log(email)
        // debugger
        //ext.each
        
        Ext.Array.each(button.lookupViewModel().get('user').data.items, function(name, index, countriesItSelf) {
            login = button.lookupViewModel().getData().login
            password = button.lookupViewModel().getData().pas;
            if(name.data.login === login && name.data.password === password){
                debugger
                user = {
                    log: login,
                    pas: password
                }

                userJ = JSON.stringify(user)
                localStorage.setItem('user', userJ);

            // Remove Login Window
                //this.view.close();
                button.up().up().up().destroy()
                console.log(this)
               
                // Add the main view to the viewport
                Ext.widget('app-main');             //переадрисация на нужную страницу
            } 
             else {
                button.up().up().down('label').setHidden(false)
            }
        });
        


        // for(var i = 0; i< button.lookupViewModel().get('user').data.items.length; i++){
        
        //     some = button.lookupViewModel().getData().user.data.items[i];
        //     console.log(some)
        //     login = button.lookupViewModel().getData().login
        //     password = button.lookupViewModel().getData().pas;
        //     console.log(login)
        //     console.log(password)
        //     // debugger
        //     if(some.data.login === login && some.data.password === password){
                
        //         user = {
        //             log: login,
        //             pas: password
        //         }

        //         userJ = JSON.stringify(user)
        //         localStorage.setItem('user', userJ);

        //     // Remove Login Window
        //         this.getView().destroy();

        //         // Add the main view to the viewport
        //         Ext.widget('app-main');             //переадрисация на нужную страницу
        //     } else {
        //         var red = this.lookupReference('red');
        //         red.setHidden(false)
        //     }
        // }
    }
});