/* 
    1 -> Login User
    2 -> Splash Screen
    3 -> TermsUI
    4 -> User Welcome Screen
    5 -> Client List Screen
*/

(function () {
    setTimeout(() => {
        GlobalVarInit();
        // CallScreen(0);
        CallScreen(1);
        CallScreen(14);
        let data = {
            "start_date": "Jan 01, 22",
            "last_date": "Jan 31, 24",
            "locale": {
                "labels": {
                    "title": "Plan Progress",
                    "lastOrder": "Last Order",
                    "orderHistory": "Order History",
                    "startDate": "Start Date",
                    "endDate": "End Date",
                    "start": "Start",
                    "end": "End",
                    "estPrice": "Est. <br/>Price",
                    "units": "Units",
                    "freeGoods": "Free <br/>Goods",
                    "payTerm": "Pay <br/>Term",
                    "pickDate": "Pick Date",
                    "offInvoice": "Off Invoice",
                    "onInvoice": "On Invoice",
                    "offInvoiceDiscount": "Off Invoice <br />Discount",
                    "onInvoiceDiscount": "On Invoice <br />Discount",
                    "discAbbr": "Disc",
                    "discount": "Discount",
                    "value": "Value",
                    "additionalDiscount": "Additional Discount",
                    "orderDetails": "Order Details",
                    "products": "Products",
                    "rebates": "Period Eligible / Rebates",
                    "orderNo": "Order No",
                    "status": "Status",
                    "orderDate": "Order Date",
                    "orderedOn": "Ordered On",
                    "statusDate": "Status Date",
                    "periodTotal": "Period Total",
                    "deliveryOn": "Delivery On",
                    "yes": "Yes",
                    "no": "No",
                    "logOutPopupTitle": "Are you sure you want to log-off?",
                    "downloadOrderHistory": "Download Order History",
                    "chooseBrands": "Choose Brands"
                },
                "buttons": {
                    "back": "Back",
                    "cancel": "Cancel",
                    "confirm": "Confirm",
                    "continue": "Continue",
                    "placeNewOrder": "Place New Order",
                    "logOut": "Logout",
                    "chooseBrands": "Choose Brands",
                    "checkout": "Checkout",
                    "addAnotherAccount": "Add Another Account or Deferral Date",
                    "accept": "Accept the terms",
                    "decline": "Decline"
                },
                "snackbars": {
                    "exceedMaxLimit": "Value exceeding the max limit.",
                    "selectDate": "Please select date!!!",
                    "maxReached": "Maximum reached!!!",
                    "accountSelected": "All Acc Selected!!!"
                }
            },
            "download_url": "LOC,Period,Order Date,Order Type,Internal Order Status,Internal Order Number,External Order Number,External Order Status,External Order Date,Wholesaler Code,Account Code,Legal Id Code,Brand #,Brand,EAN,SKU#,SKU,Requested Volume,Invoiced Volume,On Invoice Discount,On Invoice Free Goods,On Invoice Payment Terms,Off Invoice Discount,Off Invoice Free Goods,Offer Type,User Identifier,Order Id,Delete Record(YES/NO)\n                Master,alpha,2022-12-09,ORDER,OPEN,,,NOT_CONFIRMED,,ABC001,LBS004,BLSL004,S_BRD_010,SKU Brand New 10,10042,S_BRD_010_SKU_001,Medicine SKU 10,104,104,,,,,,SEGMENT,51,2212000003,\n                Master,alpha,2022-12-09,ORDER,OPEN,,,IN_PROCESS,,ABC001,LBS004,BLSL004,BRD_001,Brand New 1,10003,BRD_001_SKU_001,Brand New 250Mg,200,200,4.0,0,0,,,PREDEFINED,51,2212000001,\n                Master,alpha,2022-12-09,ORDER,OPEN,,,NOT_CONFIRMED,,ABC001,LBS004,BLSL004,BRD_002,Brand New 2,10006,BRD_002_SKU_001,Brand New 250Mg,75,75,,,,,,PREDEFINED,51,2212000003,\n                Master,alpha,2022-12-09,ORDER,OPEN,,,NOT_CONFIRMED,,ABC001,LBS004,BLSL004,BRD_002,Brand New 2,10007,BRD_002_SKU_002,Brand New 650Mg,75,75,,,,,,PREDEFINED,51,2212000003,\n                Master,alpha,2022-12-09,ORDER,OPEN,,,NOT_CONFIRMED,,ABC001,LBS004,BLSL004,S_BRD_010,SKU Brand New 10,10043,S_BRD_010_SKU_002,TABLET SKU 10,201,201,,,,,,SEGMENT,51,2212000003,\n                ",
            "totalcheckout": "",
            "selected_brand": "GSK-BRAND-AUGMENTIN",
            "plan_progress": {
                "title": "Plan Progress",
                "last_date": "Jan 31, 22",
                "brands": [
                    {
                        "name": "Augmentin",
                        "isSku": false,
                        "additional_discount": true,
                        "purchased": "125",
                        "selected": 1,
                        "max_limit": "500",
                        "sku": "GSK-BRAND-AUGMENTIN",
                        "on_invoice_range": [
                            {
                                "discount": "0",
                                "label": "100"
                            },
                            {
                                "discount": "10",
                                "label": "200"
                            },
                            {
                                "discount": "20",
                                "label": "300"
                            },
                            {
                                "discount": "30",
                                "label": "400"
                            },
                            {
                                "discount": "40",
                                "label": "500"
                            }
                        ],
                        "off_invoice_range": [
                            {
                                "discount": "0",
                                "label": "100"
                            },
                            {
                                "discount": "10",
                                "label": "200"
                            },
                            {
                                "discount": "20",
                                "label": "300"
                            },
                            {
                                "discount": "30",
                                "label": "400"
                            },
                            {
                                "discount": "40",
                                "label": "500"
                            }
                        ],
                        "total_invoice_range": [
                            {
                                "discount": "0",
                                "label": "100"
                            },
                            {
                                "discount": "10",
                                "label": "200"
                            },
                            {
                                "discount": "20",
                                "label": "300"
                            },
                            {
                                "discount": "30",
                                "label": "400"
                            },
                            {
                                "discount": "40",
                                "label": "500"
                            }
                        ],
                        "eligible_discount": "10"
                    },
                    {
                        "name": "Ventolin",
                        "isSku": false,
                        "additional_discount": true,
                        "purchased": "45",
                        "selected": "0",
                        "max_limit": "500",
                        "sku": "GSK-BRAND-VENTOLIN",
                        "on_invoice_range": [
                            {
                                "discount": "0",
                                "label": "100"
                            },
                            {
                                "discount": "10",
                                "label": "200"
                            },
                            {
                                "discount": "20",
                                "label": "300"
                            },
                            {
                                "discount": "30",
                                "label": "400"
                            },
                            {
                                "discount": "40",
                                "label": "500"
                            }
                        ],
                        "off_invoice_range": [
                            {
                                "discount": "0",
                                "label": "100"
                            },
                            {
                                "discount": "10",
                                "label": "200"
                            },
                            {
                                "discount": "20",
                                "label": "300"
                            },
                            {
                                "discount": "30",
                                "label": "400"
                            },
                            {
                                "discount": "40",
                                "label": "500"
                            }
                        ],
                        "total_invoice_range": [
                            {
                                "discount": "0",
                                "label": "100"
                            },
                            {
                                "discount": "10",
                                "label": "200"
                            },
                            {
                                "discount": "20",
                                "label": "300"
                            },
                            {
                                "discount": "30",
                                "label": "400"
                            },
                            {
                                "discount": "40",
                                "label": "500"
                            }
                        ]
                    },
                    {
                        "name": "Seretide",
                        "isSku": false,
                        "additional_discount": false,
                        "purchased": "75",
                        "selected": "0",
                        "max_limit": "500",
                        "sku": "GSK-BRAND-SERETIDE",
                        "on_invoice_range": [
                            {
                                "discount": "0",
                                "label": "100"
                            },
                            {
                                "discount": "10",
                                "label": "200"
                            },
                            {
                                "discount": "20",
                                "label": "300"
                            },
                            {
                                "discount": "30",
                                "label": "400"
                            },
                            {
                                "discount": "40",
                                "label": "500"
                            }
                        ],
                        "off_invoice_range": [
                            {
                                "discount": "0",
                                "label": "100"
                            },
                            {
                                "discount": "10",
                                "label": "200"
                            },
                            {
                                "discount": "20",
                                "label": "300"
                            },
                            {
                                "discount": "30",
                                "label": "400"
                            },
                            {
                                "discount": "40",
                                "label": "500"
                            }
                        ],
                        "total_invoice_range": [
                            {
                                "discount": "0",
                                "label": "100"
                            },
                            {
                                "discount": "10",
                                "label": "200"
                            },
                            {
                                "discount": "20",
                                "label": "300"
                            },
                            {
                                "discount": "30",
                                "label": "400"
                            },
                            {
                                "discount": "40",
                                "label": "500"
                            }
                        ]
                    }
                ]
            },
            "available_orders": {
                "orders": [
                    {
                        "account_no": "Wholesaler A - Accoount: A0001",
                        "order_no": "6921030003",
                        "sku": "GSK-ACCOUNT_NO-A0001",
                        "product_details": [
                            {
                                "name": "Augmentin 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Augmentin",
                                    "isSku": false,
                                    "additional_discount": true,
                                    "purchased": "125",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-AUGMENTIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Augmentin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-AUGMENTIN-A0001-2",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Augmentin",
                                    "isSku": false,
                                    "additional_discount": true,
                                    "purchased": "125",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-AUGMENTIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Ventolin 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-VENTOLIN-A0001-3",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Ventolin",
                                    "isSku": true,
                                    "additional_discount": true,
                                    "purchased": "45",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-VENTOLIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Ventolin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-VENTOLIN-A0001-4",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Ventolin",
                                    "isSku": true,
                                    "additional_discount": true,
                                    "purchased": "45",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-VENTOLIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Seretide 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-SERETIDE-A0001-5",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Seretide",
                                    "isSku": true,
                                    "additional_discount": false,
                                    "purchased": "75",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-SERETIDE",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Seretide 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-SERETIDE-A0001-6",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Seretide",
                                    "isSku": true,
                                    "additional_discount": false,
                                    "purchased": "75",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-SERETIDE",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "account_no": "Wholesaler A - Accoount: A0002",
                        "order_no": "6921030003",
                        "sku": "GSK-ACCOUNT_NO-A0002",
                        "product_details": [
                            {
                                "name": "Augmentin 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-AUGMENTIN-A0002-1",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Augmentin",
                                    "isSku": false,
                                    "additional_discount": true,
                                    "purchased": "125",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-AUGMENTIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Augmentin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-AUGMENTIN-A0002-2",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Augmentin",
                                    "isSku": false,
                                    "additional_discount": true,
                                    "purchased": "125",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-AUGMENTIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Ventolin 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-VENTOLIN-A0002-3",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Ventolin",
                                    "isSku": true,
                                    "additional_discount": true,
                                    "purchased": "45",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-VENTOLIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Ventolin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-VENTOLIN-A0002-4",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Ventolin",
                                    "isSku": true,
                                    "additional_discount": true,
                                    "purchased": "45",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-VENTOLIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Seretide 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-SERETIDE-A0002-5",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Seretide",
                                    "isSku": true,
                                    "additional_discount": false,
                                    "purchased": "75",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-SERETIDE",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Seretide 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-SERETIDE-A0002-6",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Seretide",
                                    "isSku": true,
                                    "additional_discount": false,
                                    "purchased": "75",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-SERETIDE",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "previous_orders": {
                "orders": [
                    {
                        "account_no": "Wholesaler A - Accoount: A0001",
                        "order_no": "6921030003",
                        "status": "Cancelled",
                        "delivery_date": "May 30 22",
                        "ordered_date": "Jan 01, 22",
                        "sku": "GSK-ACCOUNT_NO-A0001",
                        "on_invoice": false,
                        "product_details": [
                            {
                                "name": "Augmentin 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Augmentin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-AUGMENTIN-A0001-2",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Ventolin 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-VENTOLIN-A0001-3",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Ventolin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-VENTOLIN-A0001-4",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Seretide 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-SERETIDE-A0001-5",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Seretide 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-SERETIDE-A0001-6",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            }
                        ]
                    },
                    {
                        "account_no": "Wholesaler A - Accoount: A0002",
                        "order_no": "6921030003",
                        "status": "Invoiced",
                        "delivery_date": "May 30 22",
                        "ordered_date": "Jan 01, 22",
                        "sku": "GSK-ACCOUNT_NO-A0002",
                        "on_invoice": false,
                        "product_details": [
                            {
                                "name": "Augmentin 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-AUGMENTIN-A0002-1",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Augmentin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-AUGMENTIN-A0002-2",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Ventolin 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-VENTOLIN-A0002-3",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Ventolin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-VENTOLIN-A0002-4",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Seretide 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-SERETIDE-A0002-5",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Seretide 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-SERETIDE-A0002-6",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            }
                        ]
                    }
                ]
            },
            "rebates_orders": {
                "orders": [
                    {
                        "account_no": "Wholesaler A - Accoount: A0001",
                        "order_no": "6921030003",
                        "sku": "GSK-REBATES-A0001",
                        "ordered_date": "Dec 01, 22",
                        "product_details": [
                            {
                                "name": "Augmentin 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-A0001-1",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Augmentin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-A0001-2",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Ventolin 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-A0001-3",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Ventolin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-A0001-4",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Seretide 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-A0001-5",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Seretide 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-A0001-6",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            }
                        ]
                    },
                    {
                        "account_no": "Wholesaler A - Accoount: A0002",
                        "order_no": "6921030003",
                        "sku": "GSK-REBATES-A0002",
                        "ordered_date": "Dec 01, 22",
                        "product_details": [
                            {
                                "name": "Augmentin 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-A0001-1",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Augmentin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-A0001-2",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Ventolin 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-A0001-3",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Ventolin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-A0001-4",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Seretide 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-A0001-5",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            },
                            {
                                "name": "Seretide 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-A0001-6",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                }
                            }
                        ]
                    }
                ]
            },
            "profileDetails": {
                "firstName": "Ashish",
                "lastName": "Bhardwaj",
                "phoneNumber": "9639417178",
                "email": ""
            },
            "associatedAccounts": [
                {
                    "wholeSalerName": "ABC1",
                    "wholeSalerStatus": "Active",
                    "accounts": [
                        {
                            "accountNumber": "A00000001",
                            "legalIdCode": "12345",
                            "invoice": "https://www.google-analytics.com/analytics.js",
                            "accountStatus": "Active"
                        },
                        {
                            "accountNumber": "A00000001",
                            "legalIdCode": "12345",
                            "invoice": "https://www.google-analytics.com/analytics.js",
                            "accountStatus": "Active"
                        }
                    ]
                },
                {
                    "wholeSalerName": "ABC2",
                    "wholeSalerStatus": "Active/Inactive",
                    "accounts": [
                        {
                            "accountNumber": "A00000001",
                            "legalIdCode": "12345",
                            "invoice": "https://www.google-analytics.com/analytics.js",
                            "accountStatus": "Active"
                        },
                        {
                            "accountNumber": "A00000001",
                            "legalIdCode": "12345",
                            "invoice": "https://www.google-analytics.com/analytics.js",
                            "accountStatus": "Active"
                        }
                    ]
                }
            ],
            "notifications": "yes",
            "new_orders": {
                "orders": [
                    {
                        "account_no": "Wholesaler A - Accoount: A0001",
                        "order_no": "6921030003",
                        "sku": "GSK-ACCOUNT_NO-A0001",
                        "product_details": [
                            {
                                "name": "Augmentin 25mcg Tabs",
                                "price": "4.01",
                                "units": "1",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Augmentin",
                                    "isSku": false,
                                    "additional_discount": true,
                                    "purchased": "125",
                                    "selected": "1",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-AUGMENTIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                },
                                "quantity": "1"
                            },
                            {
                                "name": "Augmentin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-AUGMENTIN-A0001-2",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Augmentin",
                                    "isSku": false,
                                    "additional_discount": true,
                                    "purchased": "125",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-AUGMENTIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Ventolin 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-VENTOLIN-A0001-3",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Ventolin",
                                    "isSku": true,
                                    "additional_discount": true,
                                    "purchased": "45",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-VENTOLIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Ventolin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-VENTOLIN-A0001-4",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Ventolin",
                                    "isSku": true,
                                    "additional_discount": true,
                                    "purchased": "45",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-VENTOLIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Seretide 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-SERETIDE-A0001-5",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Seretide",
                                    "isSku": true,
                                    "additional_discount": false,
                                    "purchased": "75",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-SERETIDE",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Seretide 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-SERETIDE-A0001-6",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Seretide",
                                    "isSku": true,
                                    "additional_discount": false,
                                    "purchased": "75",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-SERETIDE",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            }
                        ],
                        "_id": "672eaa37-ec9b-4678-b0eb-27f9e92d3231",
                        "brandsku": "GSK-ACCOUNT_NO-A0001-GSK-BRAND-AUGMENTIN",
                        "ordered_date": "Oct 17, 23"
                    }
                ]
            },
            "appstate": {
                "orderCartData": [
                    "GSK-BRAND-AUGMENTIN"
                ],
                "updateCartData": {},
                "cartData": {
                    "GSK-ACCOUNT_NO-A0001_672eaa37-ec9b-4678-b0eb-27f9e92d3231": {
                        "GSK-PRODUCT-AUGMENTIN-A0001-1": "1"
                    }
                },
                "wholesalerAccountData": [
                    {
                        "account_no": "Wholesaler A - Accoount: A0001",
                        "order_no": "6921030003",
                        "sku": "GSK-ACCOUNT_NO-A0001",
                        "product_details": [
                            {
                                "name": "Augmentin 25mcg Tabs",
                                "price": "4.01",
                                "units": "1",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Augmentin",
                                    "isSku": false,
                                    "additional_discount": true,
                                    "purchased": "125",
                                    "selected": "1",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-AUGMENTIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                },
                                "quantity": "1"
                            },
                            {
                                "name": "Augmentin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-AUGMENTIN-A0001-2",
                                "brand": "GSK-BRAND-AUGMENTIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Augmentin",
                                    "isSku": false,
                                    "additional_discount": true,
                                    "purchased": "125",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-AUGMENTIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Ventolin 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-VENTOLIN-A0001-3",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Ventolin",
                                    "isSku": true,
                                    "additional_discount": true,
                                    "purchased": "45",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-VENTOLIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Ventolin 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-VENTOLIN-A0001-4",
                                "brand": "GSK-BRAND-VENTOLIN",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Ventolin",
                                    "isSku": true,
                                    "additional_discount": true,
                                    "purchased": "45",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-VENTOLIN",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Seretide 25mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-SERETIDE-A0001-5",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Seretide",
                                    "isSku": true,
                                    "additional_discount": false,
                                    "purchased": "75",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-SERETIDE",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            },
                            {
                                "name": "Seretide 50mcg Tabs",
                                "price": "4.01",
                                "units": "0",
                                "free_goods": "2",
                                "discount": "40",
                                "payterm": "30",
                                "sku": "GSK-PRODUCT-SERETIDE-A0001-6",
                                "brand": "GSK-BRAND-SERETIDE",
                                "additional_discount": true,
                                "free_goods_range": {
                                    "limit": "40",
                                    "eligible_goods": "4"
                                },
                                "discounts": {
                                    "name": "Seretide",
                                    "isSku": true,
                                    "additional_discount": false,
                                    "purchased": "75",
                                    "selected": "0",
                                    "max_limit": "500",
                                    "sku": "GSK-BRAND-SERETIDE",
                                    "on_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "off_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ],
                                    "total_invoice_range": [
                                        {
                                            "discount": "0",
                                            "label": "100"
                                        },
                                        {
                                            "discount": "10",
                                            "label": "200"
                                        },
                                        {
                                            "discount": "20",
                                            "label": "300"
                                        },
                                        {
                                            "discount": "30",
                                            "label": "400"
                                        },
                                        {
                                            "discount": "40",
                                            "label": "500"
                                        }
                                    ]
                                }
                            }
                        ],
                        "_id": "672eaa37-ec9b-4678-b0eb-27f9e92d3231",
                        "brandsku": "GSK-ACCOUNT_NO-A0001-GSK-BRAND-AUGMENTIN",
                        "ordered_date": "Oct 17, 23"
                    }
                ],
                "discountData": {},
                "brandArr": {
                    "GSK-BRAND-AUGMENTIN": [
                        "GSK-ACCOUNT_NO-A0001"
                    ]
                }
            }
        };
        // ToApp("choosebrands-screen", data);
    }, 500);
})();

function GlobalVarInit(data) {
    if(data && data["appstate"]) {
        console.log(data["appstate"]);
        window.orderCartData = data["appstate"]["orderCartData"];
        window.updateCartData = data["appstate"]["updateCartData"];
        window.cartData = data["appstate"]["cartData"];
        window.wholesalerAccountData = data["appstate"]["wholesalerAccountData"];
        window.dataStore = {};
        window.discountData = data["appstate"]["discountData"];
        // window.currentScreen = "";
        window.brandArr = data["appstate"]["brandArr"];
    } else {
        window.orderCartData = [];
        window.updateCartData = {};
        window.cartData = {};
        window.wholesalerAccountData = [];
        window.dataStore = {};
        window.discountData = {};
        // window.currentScreen = "";
        window.brandArr = {};
    }
}

function StoreDataIn(data) {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("init", JSON.stringify(data));
}

function ToBot(eventName, data) {
    console.log("to bot called --> ", eventName);
    switch (eventName) {
        case "fetch-user-details":
            delete data["isLoggedIn"];
            break;
        case "terms-conditions":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "update-order-data":
            console.log("update-order-data", data);
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            let newData = localStorage.getItem("data");
            let parseNewData = JSON.parse(newData);
            parseNewData["plan_progress"]["brands"].forEach(brand => {
                brand["purchased"] = Number(brand["purchased"]) + 5;
            })
            ToApp("userwelcome-screen", parseNewData);
            break;
        case "logout":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "place-new-order":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "view-checkout":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            if(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                ToApp('ordercart-screen', data);
            }
            break;
        case "brand-select":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "back-brand-select":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "ordercart-continue":
            console.log("ordercart-continue -> ", data);
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "ordercart-back":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "confirm-order":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            if(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                loadUserWelcomeUI(data);
                data["plan_progress"] && loadPlanProgress(data["plan_progress"], true, true);
            }
            GlobalVarInit();
            break;
        case "cancel-order":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "confirm-order-total-invoice":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            if(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                ToApp("userwelcome-screen", data);
            }
            break;
        case "cancel-order-total-invoice":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "update-data-on-refresh":
            let updatedData = JSON.parse(data);
            if(window.currentScreen) {
                updatedData["currentScreen"] = window.currentScreen || "";
                console.log("updatedData -> ", updatedData);
                window.parent.postMessage(JSON.stringify({
                    event_code: eventName,
                    data: updatedData
                }), '*');
                if(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                    ToApp("get-data-on-refresh", updatedData);
                }
            }
            break;
        case "back-on-orderhistory":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "checkout-add-brands":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "checkout-to-brand-detailing":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "help":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "profile-details":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "associated-accounts":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "notification":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "addaccount-associatedaccounts":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
        case "delete":
            console.log("data ", data);
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "client-select":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "get-client-list":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "delete-user":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        default:
            break;
    }
}

function ToApp(eventName, data, orgData) {
    window.currentScreen = eventName;
    switch (eventName) {
        case "user-login":
            userData = data;
            if(data['rep']) {
                localStorage.setItem('rep', true);
            } else {
                localStorage.removeItem('rep');
            }
            showHeader(userData, 'user');
            break;
        case "welcome-screen":
            StoreDataIn(data);
            loadGeneralWelcome(data);
            break;
        case "termsui-screen":
            // showHeader();
            loadTermsUI(data);
            break;
        case "userwelcome-screen":
            console.log("===== userwelcome =====\n", data);
            StoreDataIn(data);
            GlobalVarInit(data);
            loadUserWelcomeUI(data);
            data["plan_progress"] && loadPlanProgress(data["plan_progress"], true, false, "init");
            // loadBrandSelectionUIByBrandName(data);
            break;
        case "choosebrands-screen":
            loadBrandSelectionUI(data);
            break;
        case "value":
            loadEditProfile(data);
            break;
        case "user-details":
            loadUserProfile(data)
            break;
        case "planprogress":
            loadPlanProgress(data);
            break;
        case "clientlist-screen":
            loadClientList(data);
            break;
        case "ordercart-screen":
            localStorage.setItem("data", JSON.stringify(data));
            loadOrderCart(data);
            break;
        case "ordercart-final-screen":
            loadOrderFinalCart(data);
            break;
        case "choosebrands-screen-from-cart":
            loadBrandSelectionUI(data);
            break;
        case "show-brand-selection":
            GlobalVarInit(data);
            StoreDataIn(data);
            ToApp("choosebrands-screen", data);
            break;
        case "show-brand-detailing":
            GlobalVarInit();
            StoreDataIn(data);
            loadBrandSelectionUIByBrandName(data);
            break;
        case "get-data-on-refresh":
            let toScreen = data["currentScreen"];
            delete data["currentScreen"];
            GlobalVarInit();
            StoreDataIn(data);
            ToApp(toScreen, data);
            break;
        case "confirmorderon-bot":
            confirmOrder();
            break;
        case "show-order-history-screen":
            switchTab("tab22");
            break;
        case "confirm-order-from-cart":
            confirmOrder();
            break;
        case "legal-copyright":
            // addLegalCopyright(data);
            break;
        default:
            break;
    }
}