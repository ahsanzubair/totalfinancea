/*
 * File: app/view/MainScreenComponent.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MainScreenComponent', {
    extend: 'Ext.form.Panel',
    alias: 'widget.MainScreenComponent',

    config: {
        ui: 'light',
        scrollable: 'vertical',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: 80,
                ui: 'light',
                items: [
                    {
                        xtype: 'button',
                        action: 'LogoutAction',
                        height: 78,
                        width: 145,
                        icon: 'images/logout.png',
                        iconCls: 'logout',
                        text: 'Logout'
                    },
                    {
                        xtype: 'button',
                        action: 'OpenDealAction',
                        docked: 'right',
                        width: 145,
                        icon: 'images/opendeal1.png',
                        iconCls: 'opendeal',
                        text: 'Open Deal'
                    },
                    {
                        xtype: 'button',
                        action: 'OpenQuoteAction',
                        cls: '',
                        docked: 'right',
                        width: 145,
                        icon: 'images/openquote.png',
                        iconCls: 'openquote',
                        text: 'Open Quote'
                    },
                    {
                        xtype: 'button',
                        action: 'NewQuoteAction',
                        border: '',
                        docked: 'right',
                        style: 'whiteBorder',
                        width: 145,
                        icon: 'images/newquote.png',
                        iconCls: 'newquote',
                        text: 'New Quote'
                    }
                ]
            }
        ]
    }

});