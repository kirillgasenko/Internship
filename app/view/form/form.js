Ext.define('form.view.login.Login', {                    
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [                                                  //указываем как классы должны подгрузиться
        'form.view.login.LoginController',           
        'Ext.form.Panel'
    ],

    viewModel: {
        type: 'login'
    },


    controller: 'login',                                //название блока который включает все классы
    bodyPadding: 10,
    title: 'Login Window',                              //название окна
    closable: false, //могу ли закрыть
    autoShow: true,  //что бы показывалось

    items: {
        xtype: 'form',                                  //тип окна входа
        reference: 'form',
        items: [

             {                               // создаем необходимые комоненты в форме
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'login',
            allowBlank: false,
            bind: {
                value: '{login}'
            }
        }, {    
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'password',
            allowBlank: false,
            bind: {
                value: '{pas}'
            }
        }, {    
            xtype: 'displayfield',
            hidden: true,
            value: 'Error'
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }, 
        {
            xtype: 'label',
            text: 'Something wrong',
            hidden: true,
            reference: 'red'
        }
        ],
        buttons: [{                                           
            text: 'Enter',
            formBind: true,                                     
            submit: 'onSubmit',
            listeners: {                                     
                click: 'onLoginClick',
            }
        }]
    }
});
