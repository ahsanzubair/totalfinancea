/*
 * File: app/view/Quote.js
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

Ext.define('MyApp.view.Quote', {
    extend: 'Ext.form.Panel',
    alias: 'widget.quote',

    config: {
        iconCls: 'finance',
        iconMask: 'true',
        title: 'Quote',
        id: 'financeComp',
        itemId: 'financeComp',
        ui: 'light',
        scrollable: 'vertical',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: 80,
                ui: 'light',
                title: '',
                items: [
                    {
                        xtype: 'label',
                        height: 31,
                        html: 'Quote',
                        padding: 5,
                        width: 113
                    },
                    {
                        xtype: 'button',
                        action: 'CancelAction',
                        docked: 'right',
                        width: 105,
                        icon: 'images/cancel.png',
                        iconCls: 'cancel',
                        text: 'Cancel'
                    },
                    {
                        xtype: 'button',
                        action: 'SaveAction',
                        docked: 'right',
                        width: 86,
                        icon: 'images/save.png',
                        iconCls: 'save',
                        text: 'Save'
                    },
                    {
                        xtype: 'button',
                        action: 'PrintAction',
                        docked: 'right',
                        width: 85,
                        icon: 'images/print.png',
                        iconCls: 'print',
                        text: 'Print'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        width: 86,
                        icon: 'images/next1.png',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                height: 220,
                id: 'financierTAB',
                items: [
                    {
                        xtype: 'container',
                        title: '.',
                        cls: [
                            'tabBG'
                        ],
                        items: [
                            {
                                xtype: 'container',
                                height: 58,
                                top: 10,
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        cls: [
                                            'normalRoundCorner'
                                        ],
                                        disabled: true,
                                        docked: 'left',
                                        height: 45,
                                        id: 'financier',
                                        itemId: 'financier',
                                        left: '0.5%',
                                        width: '98.5%',
                                        inputCls: 'textBlack',
                                        label: 'Financier:',
                                        labelCls: 'normalLabelText',
                                        labelWidth: '25%'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                height: 58,
                                top: 100,
                                width: '98%',
                                items: [
                                    {
                                        xtype: 'label',
                                        cls: [
                                            'staticText'
                                        ],
                                        docked: 'left',
                                        height: 45,
                                        html: 'From:',
                                        left: '8%',
                                        top: 10,
                                        width: ''
                                    },
                                    {
                                        xtype: 'label',
                                        cls: [
                                            'staticText'
                                        ],
                                        docked: 'left',
                                        height: 45,
                                        html: '06/06/2012',
                                        left: '15%',
                                        top: 10,
                                        width: ''
                                    },
                                    {
                                        xtype: 'label',
                                        cls: [
                                            'staticText'
                                        ],
                                        docked: 'left',
                                        height: 45,
                                        html: 'To:',
                                        left: '45%',
                                        top: 10,
                                        width: ''
                                    },
                                    {
                                        xtype: 'label',
                                        cls: [
                                            'staticText'
                                        ],
                                        docked: 'left',
                                        height: 45,
                                        html: '05/06/2015',
                                        left: '50%',
                                        top: 10,
                                        width: ''
                                    },
                                    {
                                        xtype: 'label',
                                        cls: [
                                            'staticText'
                                        ],
                                        docked: 'left',
                                        height: 45,
                                        html: 'RT:',
                                        left: '80%',
                                        top: 10,
                                        width: ''
                                    },
                                    {
                                        xtype: 'label',
                                        cls: [
                                            'staticText'
                                        ],
                                        docked: 'left',
                                        height: 45,
                                        html: '10.45',
                                        left: '85%',
                                        top: 10,
                                        width: ''
                                    },
                                    {
                                        xtype: 'image',
                                        docked: 'left',
                                        height: 25,
                                        right: '10',
                                        width: '',
                                        src: 'images/statusfalse.png'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'spacer',
                height: 30,
                width: 988
            },
            {
                xtype: 'tabpanel',
                height: 840,
                id: 'TypeRadiosTAB',
                width: '100%',
                items: [
                    {
                        xtype: 'container',
                        title: '.',
                        cls: [
                            'tabBG'
                        ],
                        id: 'RadioButtons',
                        items: [
                            {
                                xtype: 'radiofield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                disabled: true,
                                docked: 'left',
                                height: 45,
                                id: 'rdAdvance',
                                left: '.5%',
                                right: '1%',
                                top: 10,
                                width: '99%',
                                inputCls: 'textBlack',
                                label: 'Advance',
                                labelAlign: 'right',
                                labelCls: 'normalLabelTextRadio',
                                labelWidth: '75%',
                                name: 'paymentTypeIndicator',
                                value: 'A',
                                checked: true
                            },
                            {
                                xtype: 'radiofield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                disabled: true,
                                docked: 'left',
                                height: 45,
                                id: 'rdArrear',
                                left: '.5%',
                                right: '1%',
                                top: 100,
                                width: '99%',
                                inputCls: 'textBlack',
                                label: 'Arrear',
                                labelAlign: 'right',
                                labelCls: 'normalLabelTextRadio',
                                labelWidth: '75%',
                                name: 'paymentTypeIndicator',
                                value: 'E',
                                checked: true
                            },
                            {
                                xtype: 'numberfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                height: 45,
                                left: '.5%',
                                top: 190,
                                width: '99%',
                                inputCls: 'textBlack',
                                label: 'Retail Price $:',
                                labelCls: 'normalLabelText',
                                labelWidth: '25%'
                            },
                            {
                                xtype: 'textfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                disabled: true,
                                height: '',
                                html: '',
                                left: '.5%',
                                right: '',
                                top: 280,
                                width: '99%',
                                inputCls: 'textBlack',
                                label: 'Insurnce $',
                                labelCls: 'normalLabelText',
                                labelWidth: '25%'
                            },
                            {
                                xtype: 'numberfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                height: 45,
                                left: '.5%',
                                top: 370,
                                width: '99%',
                                inputCls: 'textBlack',
                                label: 'Deposit $:',
                                labelCls: 'normalLabelText',
                                labelWidth: '25%',
                                value: 0
                            },
                            {
                                xtype: 'selectfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                height: 45,
                                left: '.5%',
                                top: 460,
                                width: '99%',
                                inputCls: 'textBlack',
                                label: 'Payment Frequency:',
                                labelCls: 'normalLabelText',
                                labelWidth: '25%',
                                name: 'paymentFrequencyIndicator',
                                options: [
                                    {
                                        value: 'M',
                                        text: 'Monthly'
                                    },
                                    {
                                        value: 'W',
                                        text: 'Weekly'
                                    },
                                    {
                                        value: 'F',
                                        text: 'Fortnightly'
                                    },
                                    {
                                        value: 'Q',
                                        text: 'Quarterly'
                                    },
                                    {
                                        value: 'H',
                                        text: 'Half Yearly'
                                    },
                                    {
                                        value: 'Y',
                                        text: 'Yearly'
                                    }
                                ]
                            },
                            {
                                xtype: 'numberfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                height: 45,
                                left: '',
                                right: '.5%',
                                top: 550,
                                width: '99%',
                                inputCls: 'textBlack',
                                label: 'Term:',
                                labelCls: 'normalLabelText',
                                labelWidth: '25%',
                                name: 'termMonths',
                                value: 36
                            },
                            {
                                xtype: 'numberfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                height: 45,
                                left: '.5%',
                                top: 640,
                                width: '99%',
                                inputCls: 'textBlack',
                                label: 'Balloon Amount $:',
                                labelCls: 'normalLabelText',
                                labelWidth: '25%',
                                name: 'balloonAmount'
                            },
                            {
                                xtype: 'container',
                                height: 45,
                                top: 730,
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'label',
                                        cls: [
                                            'staticText'
                                        ],
                                        docked: 'left',
                                        height: 45,
                                        html: 'Total Payment:',
                                        left: '10%',
                                        padding: 5,
                                        top: 10,
                                        width: ''
                                    },
                                    {
                                        xtype: 'label',
                                        cls: [
                                            'staticText'
                                        ],
                                        docked: 'left',
                                        height: 45,
                                        html: '0.00 ',
                                        left: '25%',
                                        padding: 5,
                                        top: 10,
                                        width: ''
                                    },
                                    {
                                        xtype: 'label',
                                        cls: [
                                            'staticText'
                                        ],
                                        docked: 'left',
                                        height: 45,
                                        html: 'Weekly Equivalent:',
                                        left: '',
                                        padding: 5,
                                        right: '12%',
                                        top: 10,
                                        width: ''
                                    },
                                    {
                                        xtype: 'label',
                                        cls: [
                                            'staticText'
                                        ],
                                        docked: 'left',
                                        html: '0.00 ',
                                        left: '',
                                        padding: 5,
                                        right: '6%',
                                        top: 10,
                                        width: ''
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

});