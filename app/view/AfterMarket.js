/*
 * File: app/view/AfterMarket.js
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

Ext.define('MyApp.view.AfterMarket', {
    extend: 'Ext.form.Panel',
    alias: 'widget.aftermarket',

    config: {
        iconCls: 'insurance',
        title: 'After Market',
        ui: 'dark',
        width: '100%',
        scrollable: 'vertical',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: 80,
                ui: 'light',
                items: [
                    {
                        xtype: 'label',
                        height: 31,
                        html: 'After Market',
                        padding: 5,
                        width: 113
                    },
                    {
                        xtype: 'button',
                        action: 'CancelAction',
                        docked: 'right',
                        width: 100,
                        icon: 'images/cancel.png',
                        iconCls: 'cancel',
                        text: 'Cancel'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        width: 92,
                        icon: 'images/save.png',
                        iconCls: 'save',
                        text: 'Save'
                    },
                    {
                        xtype: 'button',
                        action: 'PrintAction',
                        docked: 'right',
                        width: 98,
                        icon: 'images/print.png',
                        iconCls: 'print',
                        text: 'Print'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        width: 101,
                        icon: 'images/next1.png'
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                height: 500,
                id: 'AfterMarketTAB',
                left: '1%',
                right: '',
                width: '45%',
                items: [
                    {
                        xtype: 'container',
                        title: 'After Market',
                        cls: [
                            'tabBG'
                        ],
                        items: [
                            {
                                xtype: 'spacer',
                                height: 20
                            },
                            {
                                xtype: 'textfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                height: 45,
                                left: 20,
                                top: '',
                                width: '90%',
                                inputCls: 'textBlack',
                                label: 'Supplier:',
                                labelCls: 'normalLabelText',
                                labelWidth: '40%'
                            },
                            {
                                xtype: 'spacer',
                                height: 100
                            },
                            {
                                xtype: 'numberfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                height: 45,
                                left: 20,
                                top: '',
                                width: '90%',
                                clearIcon: false,
                                inputCls: 'textBlack',
                                label: 'Invoice Price:',
                                labelCls: 'normalLabelText',
                                labelWidth: '40%'
                            },
                            {
                                xtype: 'spacer',
                                height: 100
                            },
                            {
                                xtype: 'numberfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                height: 45,
                                left: 20,
                                top: '',
                                width: '90%',
                                clearIcon: false,
                                inputCls: 'textBlack',
                                label: 'Commission: ',
                                labelCls: 'normalLabelText',
                                labelWidth: '40%'
                            },
                            {
                                xtype: 'spacer',
                                height: 100
                            },
                            {
                                xtype: 'label',
                                cls: [
                                    'staticText'
                                ],
                                docked: 'left',
                                height: 39,
                                html: 'Total:',
                                left: '40%',
                                top: '',
                                width: ''
                            },
                            {
                                xtype: 'label',
                                cls: [
                                    'staticText'
                                ],
                                docked: 'left',
                                height: 39,
                                html: '0.0 ',
                                left: '60%',
                                top: '',
                                width: ''
                            },
                            {
                                xtype: 'spacer',
                                height: 40
                            },
                            {
                                xtype: 'label',
                                cls: [
                                    'staticText'
                                ],
                                docked: 'left',
                                html: 'excluding GST',
                                left: 35,
                                top: '',
                                width: ''
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                height: 500,
                id: 'OtherInsuranceTAB',
                right: '1%',
                width: '45%',
                items: [
                    {
                        xtype: 'container',
                        title: 'Other Insurance',
                        cls: [
                            'tabBG'
                        ],
                        items: [
                            {
                                xtype: 'spacer',
                                height: 20
                            },
                            {
                                xtype: 'textfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                height: '',
                                left: 20,
                                top: '',
                                width: '93%',
                                inputCls: 'textBlack',
                                label: 'Supplier:',
                                labelCls: 'normalLabelText',
                                labelWidth: '40%'
                            },
                            {
                                xtype: 'spacer',
                                height: 100
                            },
                            {
                                xtype: 'numberfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                height: '',
                                left: 20,
                                top: '',
                                width: '93%',
                                clearIcon: false,
                                inputCls: 'textBlack',
                                label: 'Invoice Price:',
                                labelCls: 'normalLabelText',
                                labelWidth: '40%'
                            },
                            {
                                xtype: 'spacer',
                                height: 100
                            },
                            {
                                xtype: 'numberfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                height: '',
                                left: 20,
                                top: '',
                                width: '93%',
                                clearIcon: false,
                                inputCls: 'textBlack',
                                label: 'Commission: ',
                                labelCls: 'normalLabelText',
                                labelWidth: '40%'
                            },
                            {
                                xtype: 'spacer',
                                height: 100
                            },
                            {
                                xtype: 'label',
                                cls: [
                                    'staticText'
                                ],
                                docked: 'left',
                                height: '',
                                html: 'Total:',
                                left: '40%',
                                top: '',
                                width: '10%'
                            },
                            {
                                xtype: 'spacer'
                            },
                            {
                                xtype: 'label',
                                cls: [
                                    'staticText'
                                ],
                                docked: 'left',
                                html: '0.0 ',
                                left: '60%',
                                maxWidth: '10%',
                                minWidth: '10%',
                                top: ''
                            },
                            {
                                xtype: 'spacer',
                                height: 40
                            },
                            {
                                xtype: 'label',
                                cls: [
                                    'staticText'
                                ],
                                docked: 'left',
                                html: 'excluding GST',
                                left: 35,
                                top: '',
                                width: ''
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'spacer'
            }
        ]
    }

});