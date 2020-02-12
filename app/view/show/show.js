Ext.define('form.view.show.show', {                    //ОКНО ВХОДА
    extend: 'Ext.window.Window',
    xtype: 'info',

    requires: [                                                  //указываем как классы должны подгрузиться 
        'form.view.show.showController',
        'Ext.form.Panel',
    ],
    title: 'Info',
    height: 200,
    width: 400,
    layout: {
        type: 'vbox',
        align: 'left'
    },
    margin: '30 0 0 30',
    controller: 'show',
    closable: true,
    border: true,
    items: [ 
        {
            xtype: 'label',
            margin: '0 0 0 10',
            reference: 'city',
        },
        {
            xtype: 'label',
            margin: '0 0 0 10', 
            reference: 'country',        
        },
        {
            xtype: 'label',
            margin: '0 0 0 10',
            reference: 'year',
        },
        {
            xtype: 'label', 
            margin: '0 0 0 10',
            reference: 'date',
            text: 'wqien'
        }
    ]

});