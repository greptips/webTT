Ext.define('Adrz.view.Viewport',{

    extend : 'Ext.container.Viewport',

    alias : 'viewport',

    layout : 'border',  // fit

    initComponent : function() {

        var me = this;

        me.items = [
            /*{
                xtype : 'panel',
                region: 'north',
                height: 30,
                items: [
                    {
                        xtype: 'label',
                        html: '<span style="font-size:12px;"> WebGi </span>'
                    }
                ]
            },*/
            {
                xtype : 'panel',
                width: 185,
                margins: 5,
                collapsible: true,
                region: 'east',
                animate: false,
                defaults: {
                    //collapsed: true
                },
                layout: {
                    type: 'accordion',
                    //titleCollapse: true,
                    collapsed: true,
                    pack: 'start'
                },
                multi: true,
                collapsible: true,
                //hideCollapseTool: true,
                iconCls: '',
                title: 'Menu'
            },
            {
                xtype : 'panel',
                margins: 5,
                layout: 'fit',
                region : 'center',

                items: [
                    {
                        xtype: 'mainpanel',
                    }
                ],

                dockedItems : [
                    {
                        xtype : 'toolbar',
                        docked: 'top',
                        itemId: 'mainmenu',
                        items : [
                            {
                                text : 'Iniciar',
                                iconCls : 'home-icon16',
                                itemId : 'startbutton',
                                menu : [
                                    {
                                        xtype: 'menuitem',
                                        text:'Amostras',
                                        alias: 'amostras',
                                        iconCls:'clients-icon16',
                                        controller: 'Amostras'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        text:'Artigos',
                                        alias: 'artigos',
                                        iconCls:'invoices-icon16',
                                        controller: 'Artigos'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        text:'Stocks',
                                        iconCls:'categories-icon16'
                                    }
                                ]
                            },
                            {
                                xtype: 'label',
                                html: '<span style="font-size:12px;"> WebGi </span>'
                            },
                            {
                                xtype: 'tbfill'
                            },
                            {
                                xtype: 'button',
                                text : 'admin',
                                icon : 'resources/images/user_suit.png'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                height: 30,
                margins: 5,
                region: 'south',
                //style: 'border-top: 1px solid #4c72a4;',
                html: '<div id="titleHeader"><center><span style="font-size:10px;">WebGi prototype - www.softideia.com </span></center></div>'
            }
        ];

        me.callParent();
    }
});