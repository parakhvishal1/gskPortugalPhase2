let base1pharmacy = {
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
            "estPrice": "Est. Price",
            "units": "Units",
            "freeGoods": "Free Goods",
            "payTerm": "Pay Term",
            "pickDate": "Pick Date",
            "offInvoice": "Off Invoice",
            "onInvoice": "On Invoice",
            "offInvoiceDiscount": "Off Invoice Discount",
            "onInvoiceDiscount": "On Invoice Discount",
            "discAbbr": "Disc",
            "discount": "Discount",
            "value": "Value",
            "additionalDiscount": "Additional Discount",
            "orderDetails": "Order Details",
            "products": "PRODUCTS",
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
            "chooseBrands": "Choose Brands",
            "profileDetails": "Profile Details",
            "associatedAccounts": "Associated Accounts",
            "notification": "Preferences",
            "addAccount": "Add Account",
            "firstName": "First Name",
            "lastName": "Last Name",
            "mobileNumber": "Mobile Number",
            "email": "Email",
            "profileSettings": "Profile Settings",
            "emptyOrder": "No Orders History Available."
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
    "download_url": "LOC,Period,Order Date,Order Type,Internal Order Status,Internal Order Number,External Order Number,External Order Status,External Order Date,Wholesaler Code,Account Code,Legal Id Code,Brand #,Brand,EAN,SKU#,SKU,Requested Volume,Invoiced Volume,On Invoice Discount,On Invoice Free Goods,On Invoice Payment Terms,Off Invoice Discount,Off Invoice Free Goods,Offer Type,User Identifier,Order Id,Delete Record(YES/NO)\nMaster,alpha,2023-03-16,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,26,26,,,,,,SEGMENT,132,2303000008,\nMaster,alpha,2023-03-16,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,16,16,,,,,,SEGMENT,132,2303000009,\nMaster,alpha,2023-03-17,ORDER,OPEN,,,CONDITIONAL,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,8,8,0.0,0,,,,SEGMENT,132,2303000006,\nMaster,alpha,2023-03-16,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,20,20,,,,,,SEGMENT,132,2303000007,\nMaster,alpha,2023-03-17,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,P_BRD_001,Novo 1,10003,P_BRD_001_SKU_001,Novassimo 250mg,2,2,,,,,,SEGMENT,132,2303000010,\n",
    "totalcheckout": "",
    "plan_progress": {
        "title": "Plan Progress",
        "last_date": "Jan 31, 22",
        "brands": [
            {
                "name": "Augmentin",
                "isSku": false,
                "additional_discount": false,
                "purchased": "0",
                "selected": "0",
                "max_limit": "500",
                "sku": "GSK-BRAND-AUGMENTIN",
                "isDailyOffer": true,
                "on_invoice_range": [
                    {
                        "discount": "0",
                        "label": "2"
                    },
                    {
                        "discount": "10",
                        "label": "4"
                    },
                    {
                        "discount": "15",
                        "label": "6"
                    },
                    {
                        "discount": "20",
                        "label": "10"
                    },
                    {
                        "discount": "25",
                        "label": "20"
                    }
                ],
                "off_invoice_range": [
                    {
                        "discount": "0",
                        "label": "2"
                    },
                    {
                        "discount": "10",
                        "label": "4"
                    },
                    {
                        "discount": "15",
                        "label": "6"
                    },
                    {
                        "discount": "20",
                        "label": "10"
                    },
                    {
                        "discount": "25",
                        "label": "20"
                    }
                ],
                "total_invoice_range": [
                    {
                        "discount": "0",
                        "label": "2"
                    },
                    {
                        "discount": "10",
                        "label": "4"
                    },
                    {
                        "discount": "15",
                        "label": "6"
                    },
                    {
                        "discount": "20",
                        "label": "10"
                    },
                    {
                        "discount": "25",
                        "label": "20"
                    }
                ],
                "onInvoice_discount_execution": "FINANCIAL"
            }
        ]
    },
    "available_orders": {
        "orders": [
            {
                "account_no": "Wholesaler A - Accoount: A0001",
                "order_no": null,
                "sku": "GSK-ACCOUNT_NO-A0001",
                "product_details": [
                    {
                        "name": "Augmentin 25mcg Tabs",
                        "price": "20",
                        "units": "0",
                        "free_goods": "",
                        "discount": "",
                        "payterm": "30",
                        "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                        "brand": "GSK-BRAND-AUGMENTIN",
                        "brandName": "Novo 1",
                        "offerType": "SEGMENT",
                        "additional_discount": false,
                        "free_goods_range": {
                            "limit": null,
                            "eligible_goods": null
                        },
                        "discounts": {
                            "name": "Augmentin",
                            "isSku": false,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "offInvoice_discount_execution": null,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "max_limit": "500",
                            "sku": "GSK-BRAND-AUGMENTIN"
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
                "order_no": null,
                "status": "CONDITIONAL",
                "currentPeriod": true,
                "delivery_date": "",
                "ordered_date": "Jan 01, 22",
                "sku": "GSK-ACCOUNT_NO-A0001",
                "on_invoice": true,
                "internalOrderStatus": "OPEN",
                "wholesalerCode": "PRO123",
                "wholesalerName": "Proforma",
                "legalIdCode": "12356",
                "product_details": [
                    {
                        "name": "Augmentin 25mcg Tabs",
                        "brandName": "AUGMENTIN",
                        "price": "13.61",
                        "units": "0",
                        "free_goods": "0",
                        "discount": "0",
                        "payterm": null,
                        "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                        "brand": "GSK-BRAND-AUGMENTIN",
                        "additional_discount": false,
                        "free_goods_range": {
                            "limit": null,
                            "eligible_goods": null
                        },
                        "onInvoiceDiscount": 0,
                        "maxLimit": 260,
                        "onInvoiceFreeGoods": 0,
                        "onInvoicePaymentTerms": null,
                        "offInvoiceDiscount": null,
                        "offInvoiceFreeGoods": null
                    }
                ]
            }
        ]
    },
    "rebates_orders": {
        "orders": []
    },
    "source": "Desktop",
    "profileDetails": {
        "firstName": "Ashish",
        "lastName": "Bhardwaj",
        "phoneNumber": "+919639417178",
        "email": "ashishbhardwaj727@gmail.com"
    },
    "notifications": "yes",
    "associatedAccounts": [
        {
            "wholeSalerCode": "ABC001",
            "wholeSalerName": "ABC Pharmacy",
            "wholeSalerStatus": "ACTIVE",
            "accounts": [
                {
                    "accountNumber": "765465465",
                    "legalIdCode": "87675645",
                    "invoice": "https://cdn.yellowmessenger.com/BppdDeTxcwwG1678702189782.png",
                    "accountStatus": "PENDING_VERIFICATION"
                }
            ]
        },
        {
            "wholeSalerCode": "PRO123",
            "wholeSalerName": "Proforma",
            "wholeSalerStatus": "ACTIVE",
            "accounts": [
                {
                    "accountNumber": "12345",
                    "legalIdCode": "12356",
                    "invoice": "https://cdn.yellowmessenger.com/YThDAFfNrIv21678784364431.png",
                    "accountStatus": "PENDING_VERIFICATION"
                }
            ]
        }
    ]
}

let base1pharmacyQ = {
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
            "estPrice": "Est. Price",
            "units": "Units",
            "freeGoods": "Free Goods",
            "payTerm": "Pay Term",
            "pickDate": "Pick Date",
            "offInvoice": "Off Invoice",
            "onInvoice": "On Invoice",
            "offInvoiceDiscount": "Off Invoice Discount",
            "onInvoiceDiscount": "On Invoice Discount",
            "discAbbr": "Disc",
            "discount": "Discount",
            "value": "Value",
            "additionalDiscount": "Additional Discount",
            "orderDetails": "Order Details",
            "products": "PRODUCTS",
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
            "chooseBrands": "Choose Brands",
            "profileDetails": "Profile Details",
            "associatedAccounts": "Associated Accounts",
            "notification": "Preferences",
            "addAccount": "Add Account",
            "firstName": "First Name",
            "lastName": "Last Name",
            "mobileNumber": "Mobile Number",
            "email": "Email",
            "profileSettings": "Profile Settings",
            "emptyOrder": "No Orders History Available."
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
    "download_url": "LOC,Period,Order Date,Order Type,Internal Order Status,Internal Order Number,External Order Number,External Order Status,External Order Date,Wholesaler Code,Account Code,Legal Id Code,Brand #,Brand,EAN,SKU#,SKU,Requested Volume,Invoiced Volume,On Invoice Discount,On Invoice Free Goods,On Invoice Payment Terms,Off Invoice Discount,Off Invoice Free Goods,Offer Type,User Identifier,Order Id,Delete Record(YES/NO)\nMaster,alpha,2023-03-16,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,26,26,,,,,,SEGMENT,132,2303000008,\nMaster,alpha,2023-03-16,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,16,16,,,,,,SEGMENT,132,2303000009,\nMaster,alpha,2023-03-17,ORDER,OPEN,,,CONDITIONAL,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,8,8,0.0,0,,,,SEGMENT,132,2303000006,\nMaster,alpha,2023-03-16,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,20,20,,,,,,SEGMENT,132,2303000007,\nMaster,alpha,2023-03-17,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,P_BRD_001,Novo 1,10003,P_BRD_001_SKU_001,Novassimo 250mg,2,2,,,,,,SEGMENT,132,2303000010,\n",
    "totalcheckout": "",
    "plan_progress": {
        "title": "Plan Progress",
        "last_date": "Jan 31, 22",
        "brands": [
            {
                "name": "Augmentin",
                "isSku": false,
                "additional_discount": false,
                "purchased": "0",
                "selected": 5,
                "max_limit": "500",
                "sku": "GSK-BRAND-AUGMENTIN",
                "on_invoice_range": [
                    {
                        "discount": "0",
                        "label": "2"
                    },
                    {
                        "discount": "10",
                        "label": "4"
                    },
                    {
                        "discount": "15",
                        "label": "6"
                    },
                    {
                        "discount": "20",
                        "label": "10"
                    },
                    {
                        "discount": "25",
                        "label": "20"
                    }
                ],
                "off_invoice_range": [
                    {
                        "discount": "0",
                        "label": "2"
                    },
                    {
                        "discount": "10",
                        "label": "4"
                    },
                    {
                        "discount": "15",
                        "label": "6"
                    },
                    {
                        "discount": "20",
                        "label": "10"
                    },
                    {
                        "discount": "25",
                        "label": "20"
                    }
                ],
                "total_invoice_range": [
                    {
                        "discount": "0",
                        "label": "2"
                    },
                    {
                        "discount": "10",
                        "label": "4"
                    },
                    {
                        "discount": "15",
                        "label": "6"
                    },
                    {
                        "discount": "20",
                        "label": "10"
                    },
                    {
                        "discount": "25",
                        "label": "20"
                    }
                ],
                "onInvoice_discount_execution": "FINANCIAL",
                "eligible_discount": "15"
            }
        ]
    },
    "available_orders": {
        "orders": [
            {
                "account_no": "Wholesaler A - Accoount: A0001",
                "order_no": null,
                "sku": "GSK-ACCOUNT_NO-A0001",
                "product_details": [
                    {
                        "name": "Augmentin 25mcg Tabs",
                        "price": "20",
                        "units": "0",
                        "free_goods": "",
                        "discount": "",
                        "payterm": "30",
                        "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                        "brand": "GSK-BRAND-AUGMENTIN",
                        "brandName": "Novo 1",
                        "offerType": "SEGMENT",
                        "additional_discount": false,
                        "free_goods_range": {
                            "limit": null,
                            "eligible_goods": null
                        },
                        "discounts": {
                            "name": "Augmentin",
                            "isSku": false,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "offInvoice_discount_execution": null,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "max_limit": "500",
                            "sku": "GSK-BRAND-AUGMENTIN"
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
                "order_no": null,
                "status": "CONDITIONAL",
                "currentPeriod": true,
                "delivery_date": "",
                "ordered_date": "Jan 01, 22",
                "sku": "GSK-ACCOUNT_NO-A0001",
                "on_invoice": true,
                "internalOrderStatus": "OPEN",
                "wholesalerCode": "PRO123",
                "wholesalerName": "Proforma",
                "legalIdCode": "12356",
                "product_details": [
                    {
                        "name": "Augmentin 25mcg Tabs",
                        "brandName": "AUGMENTIN",
                        "price": "13.61",
                        "units": "0",
                        "free_goods": "0",
                        "discount": "0",
                        "payterm": null,
                        "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                        "brand": "GSK-BRAND-AUGMENTIN",
                        "additional_discount": false,
                        "free_goods_range": {
                            "limit": null,
                            "eligible_goods": null
                        },
                        "onInvoiceDiscount": 0,
                        "maxLimit": 260,
                        "onInvoiceFreeGoods": 0,
                        "onInvoicePaymentTerms": null,
                        "offInvoiceDiscount": null,
                        "offInvoiceFreeGoods": null
                    }
                ]
            }
        ]
    },
    "rebates_orders": {
        "orders": []
    },
    "source": "Desktop",
    "profileDetails": {
        "firstName": "Ashish",
        "lastName": "Bhardwaj",
        "phoneNumber": "+919639417178",
        "email": "ashishbhardwaj727@gmail.com"
    },
    "notifications": "yes",
    "associatedAccounts": [
        {
            "wholeSalerCode": "ABC001",
            "wholeSalerName": "ABC Pharmacy",
            "wholeSalerStatus": "ACTIVE",
            "accounts": [
                {
                    "accountNumber": "765465465",
                    "legalIdCode": "87675645",
                    "invoice": "https://cdn.yellowmessenger.com/BppdDeTxcwwG1678702189782.png",
                    "accountStatus": "PENDING_VERIFICATION"
                }
            ]
        },
        {
            "wholeSalerCode": "PRO123",
            "wholeSalerName": "Proforma",
            "wholeSalerStatus": "ACTIVE",
            "accounts": [
                {
                    "accountNumber": "12345",
                    "legalIdCode": "12356",
                    "invoice": "https://cdn.yellowmessenger.com/YThDAFfNrIv21678784364431.png",
                    "accountStatus": "PENDING_VERIFICATION"
                }
            ]
        }
    ],
    "selected_brand": "GSK-BRAND-AUGMENTIN",
    "new_orders": {
        "orders": [
            {
                "account_no": "Wholesaler A - Accoount: A0001",
                "order_no": null,
                "sku": "GSK-ACCOUNT_NO-A0001",
                "product_details": [
                    {
                        "name": "Augmentin 25mcg Tabs",
                        "price": "20",
                        "units": "5",
                        "free_goods": "",
                        "discount": "",
                        "payterm": "30",
                        "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                        "brand": "GSK-BRAND-AUGMENTIN",
                        "brandName": "Novo 1",
                        "offerType": "SEGMENT",
                        "additional_discount": false,
                        "free_goods_range": {
                            "limit": null,
                            "eligible_goods": null
                        },
                        "discounts": {
                            "name": "Augmentin",
                            "isSku": false,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "offInvoice_discount_execution": null,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "5",
                            "max_limit": "500",
                            "sku": "GSK-BRAND-AUGMENTIN"
                        },
                        "quantity": "5"
                    }
                ],
                "_id": "275f381e-cd18-420d-a2fe-050fadcc6adf",
                "brandsku": "GSK-ACCOUNT_NO-A0001-GSK-BRAND-AUGMENTIN",
                "ordered_date": "Nov 18, 23"
            }
        ]
    },
    "appstate": {
        "orderCartData": [
            "GSK-BRAND-AUGMENTIN"
        ],
        "updateCartData": {},
        "cartData": {
            "GSK-ACCOUNT_NO-A0001_275f381e-cd18-420d-a2fe-050fadcc6adf": {
                "GSK-PRODUCT-AUGMENTIN-A0001-1": "5"
            }
        },
        "wholesalerAccountData": [
            {
                "account_no": "Wholesaler A - Accoount: A0001",
                "order_no": null,
                "sku": "GSK-ACCOUNT_NO-A0001",
                "product_details": [
                    {
                        "name": "Augmentin 25mcg Tabs",
                        "price": "20",
                        "units": "5",
                        "free_goods": "",
                        "discount": "",
                        "payterm": "30",
                        "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                        "brand": "GSK-BRAND-AUGMENTIN",
                        "brandName": "Novo 1",
                        "offerType": "SEGMENT",
                        "additional_discount": false,
                        "free_goods_range": {
                            "limit": null,
                            "eligible_goods": null
                        },
                        "discounts": {
                            "name": "Augmentin",
                            "isSku": false,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "offInvoice_discount_execution": null,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "5",
                            "max_limit": "500",
                            "sku": "GSK-BRAND-AUGMENTIN"
                        },
                        "quantity": "5"
                    }
                ],
                "_id": "275f381e-cd18-420d-a2fe-050fadcc6adf",
                "brandsku": "GSK-ACCOUNT_NO-A0001-GSK-BRAND-AUGMENTIN",
                "ordered_date": "Nov 18, 23"
            }
        ],
        "discountData": {},
        "brandArr": {
            "GSK-BRAND-AUGMENTIN": [
                "GSK-ACCOUNT_NO-A0001"
            ]
        }
    }
}

let base4pharmacy = {
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
            "estPrice": "Est. Price",
            "units": "Units",
            "freeGoods": "Free Goods",
            "payTerm": "Pay Term",
            "pickDate": "Pick Date",
            "offInvoice": "Off Invoice",
            "onInvoice": "On Invoice",
            "offInvoiceDiscount": "Off Invoice Discount",
            "onInvoiceDiscount": "On Invoice Discount",
            "discAbbr": "Disc",
            "discount": "Discount",
            "value": "Value",
            "additionalDiscount": "Additional Discount",
            "orderDetails": "Order Details",
            "products": "PRODUCTS",
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
            "chooseBrands": "Choose Brands",
            "profileDetails": "Profile Details",
            "associatedAccounts": "Associated Accounts",
            "notification": "Preferences",
            "addAccount": "Add Account",
            "firstName": "First Name",
            "lastName": "Last Name",
            "mobileNumber": "Mobile Number",
            "email": "Email",
            "profileSettings": "Profile Settings",
            "emptyOrder": "No Orders History Available."
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
    "download_url": "LOC,Period,Order Date,Order Type,Internal Order Status,Internal Order Number,External Order Number,External Order Status,External Order Date,Wholesaler Code,Account Code,Legal Id Code,Brand #,Brand,EAN,SKU#,SKU,Requested Volume,Invoiced Volume,On Invoice Discount,On Invoice Free Goods,On Invoice Payment Terms,Off Invoice Discount,Off Invoice Free Goods,Offer Type,User Identifier,Order Id,Delete Record(YES/NO)\nMaster,alpha,2023-03-16,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,26,26,,,,,,SEGMENT,132,2303000008,\nMaster,alpha,2023-03-16,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,16,16,,,,,,SEGMENT,132,2303000009,\nMaster,alpha,2023-03-17,ORDER,OPEN,,,CONDITIONAL,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,8,8,0.0,0,,,,SEGMENT,132,2303000006,\nMaster,alpha,2023-03-16,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,20,20,,,,,,SEGMENT,132,2303000007,\nMaster,alpha,2023-03-17,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,P_BRD_001,Novo 1,10003,P_BRD_001_SKU_001,Novassimo 250mg,2,2,,,,,,SEGMENT,132,2303000010,\n",
    "totalcheckout": "",
    "plan_progress": {
        "title": "Plan Progress",
        "last_date": "Jan 31, 22",
        "brands": [
            {
                "name": "Augmentin",
                "isSku": false,
                "additional_discount": false,
                "purchased": "0",
                "selected": "0",
                "max_limit": "500",
                "sku": "GSK-BRAND-AUGMENTIN",
                "on_invoice_range": [
                    {
                        "discount": "0",
                        "label": "8"
                    },
                    {
                        "discount": "10",
                        "label": "16"
                    },
                    {
                        "discount": "15",
                        "label": "24"
                    },
                    {
                        "discount": "20",
                        "label": "40"
                    },
                    {
                        "discount": "25",
                        "label": "80"
                    }
                ],
                "off_invoice_range": [
                    {
                        "discount": "0",
                        "label": "8"
                    },
                    {
                        "discount": "10",
                        "label": "16"
                    },
                    {
                        "discount": "15",
                        "label": "24"
                    },
                    {
                        "discount": "20",
                        "label": "40"
                    },
                    {
                        "discount": "25",
                        "label": "80"
                    }
                ],
                "total_invoice_range": [
                    {
                        "discount": "0",
                        "label": "8"
                    },
                    {
                        "discount": "10",
                        "label": "16"
                    },
                    {
                        "discount": "15",
                        "label": "24"
                    },
                    {
                        "discount": "20",
                        "label": "40"
                    },
                    {
                        "discount": "25",
                        "label": "80"
                    }
                ],
                "onInvoice_discount_execution": "FINANCIAL"
            }
        ]
    },
    "available_orders": {
        "orders": [
            {
                "account_no": "Wholesaler A - Accoount: A0001",
                "order_no": null,
                "sku": "GSK-ACCOUNT_NO-A0001",
                "product_details": [
                    {
                        "name": "Augmentin 25mcg Tabs",
                        "price": "20",
                        "units": "0",
                        "free_goods": "",
                        "discount": "",
                        "payterm": "30",
                        "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                        "brand": "GSK-BRAND-AUGMENTIN",
                        "brandName": "Novo 1",
                        "offerType": "SEGMENT",
                        "additional_discount": false,
                        "free_goods_range": {
                            "limit": null,
                            "eligible_goods": null
                        },
                        "discounts": {
                            "name": "Augmentin",
                            "isSku": false,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "offInvoice_discount_execution": null,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "max_limit": "500",
                            "sku": "GSK-BRAND-AUGMENTIN"
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
                "order_no": null,
                "status": "CONDITIONAL",
                "currentPeriod": true,
                "delivery_date": "",
                "ordered_date": "Jan 01, 22",
                "sku": "GSK-ACCOUNT_NO-A0001",
                "on_invoice": true,
                "internalOrderStatus": "OPEN",
                "wholesalerCode": "PRO123",
                "wholesalerName": "Proforma",
                "legalIdCode": "12356",
                "product_details": [
                    {
                        "name": "Augmentin 25mcg Tabs",
                        "brandName": "AUGMENTIN",
                        "price": "13.61",
                        "units": "0",
                        "free_goods": "0",
                        "discount": "0",
                        "payterm": null,
                        "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                        "brand": "GSK-BRAND-AUGMENTIN",
                        "additional_discount": false,
                        "free_goods_range": {
                            "limit": null,
                            "eligible_goods": null
                        },
                        "onInvoiceDiscount": 0,
                        "maxLimit": 260,
                        "onInvoiceFreeGoods": 0,
                        "onInvoicePaymentTerms": null,
                        "offInvoiceDiscount": null,
                        "offInvoiceFreeGoods": null
                    }
                ]
            }
        ]
    },
    "rebates_orders": {
        "orders": []
    },
    "source": "Desktop",
    "profileDetails": {
        "firstName": "Ashish",
        "lastName": "Bhardwaj",
        "phoneNumber": "+919639417178",
        "email": "ashishbhardwaj727@gmail.com"
    },
    "notifications": "yes",
    "associatedAccounts": [
        {
            "wholeSalerCode": "ABC001",
            "wholeSalerName": "ABC Pharmacy",
            "wholeSalerStatus": "ACTIVE",
            "accounts": [
                {
                    "accountNumber": "765465465",
                    "legalIdCode": "87675645",
                    "invoice": "https://cdn.yellowmessenger.com/BppdDeTxcwwG1678702189782.png",
                    "accountStatus": "PENDING_VERIFICATION"
                }
            ]
        },
        {
            "wholeSalerCode": "PRO123",
            "wholeSalerName": "Proforma",
            "wholeSalerStatus": "ACTIVE",
            "accounts": [
                {
                    "accountNumber": "12345",
                    "legalIdCode": "12356",
                    "invoice": "https://cdn.yellowmessenger.com/YThDAFfNrIv21678784364431.png",
                    "accountStatus": "PENDING_VERIFICATION"
                }
            ]
        }
    ]
}

let base4pharmacyQ = {
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
            "estPrice": "Est. Price",
            "units": "Units",
            "freeGoods": "Free Goods",
            "payTerm": "Pay Term",
            "pickDate": "Pick Date",
            "offInvoice": "Off Invoice",
            "onInvoice": "On Invoice",
            "offInvoiceDiscount": "Off Invoice Discount",
            "onInvoiceDiscount": "On Invoice Discount",
            "discAbbr": "Disc",
            "discount": "Discount",
            "value": "Value",
            "additionalDiscount": "Additional Discount",
            "orderDetails": "Order Details",
            "products": "PRODUCTS",
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
            "chooseBrands": "Choose Brands",
            "profileDetails": "Profile Details",
            "associatedAccounts": "Associated Accounts",
            "notification": "Preferences",
            "addAccount": "Add Account",
            "firstName": "First Name",
            "lastName": "Last Name",
            "mobileNumber": "Mobile Number",
            "email": "Email",
            "profileSettings": "Profile Settings",
            "emptyOrder": "No Orders History Available."
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
    "download_url": "LOC,Period,Order Date,Order Type,Internal Order Status,Internal Order Number,External Order Number,External Order Status,External Order Date,Wholesaler Code,Account Code,Legal Id Code,Brand #,Brand,EAN,SKU#,SKU,Requested Volume,Invoiced Volume,On Invoice Discount,On Invoice Free Goods,On Invoice Payment Terms,Off Invoice Discount,Off Invoice Free Goods,Offer Type,User Identifier,Order Id,Delete Record(YES/NO)\nMaster,alpha,2023-03-16,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,26,26,,,,,,SEGMENT,132,2303000008,\nMaster,alpha,2023-03-16,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,16,16,,,,,,SEGMENT,132,2303000009,\nMaster,alpha,2023-03-17,ORDER,OPEN,,,CONDITIONAL,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,8,8,0.0,0,,,,SEGMENT,132,2303000006,\nMaster,alpha,2023-03-16,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,AUGMENTIN,AUGMENTIN,5738422,60000000116507,AUGMENTIN DUO 457 mg/5 ml 70 ml,20,20,,,,,,SEGMENT,132,2303000007,\nMaster,alpha,2023-03-17,ORDER,OPEN,,,NOT_CONFIRMED,,PRO123,12345,12356,P_BRD_001,Novo 1,10003,P_BRD_001_SKU_001,Novassimo 250mg,2,2,,,,,,SEGMENT,132,2303000010,\n",
    "totalcheckout": "",
    "plan_progress": {
        "title": "Plan Progress",
        "last_date": "Jan 31, 22",
        "brands": [
            {
                "name": "Augmentin",
                "isSku": false,
                "additional_discount": false,
                "purchased": "0",
                "selected": 5,
                "max_limit": "500",
                "sku": "GSK-BRAND-AUGMENTIN",
                "on_invoice_range": [
                    {
                        "discount": "0",
                        "label": "8"
                    },
                    {
                        "discount": "10",
                        "label": "16"
                    },
                    {
                        "discount": "15",
                        "label": "24"
                    },
                    {
                        "discount": "20",
                        "label": "40"
                    },
                    {
                        "discount": "25",
                        "label": "80"
                    }
                ],
                "off_invoice_range": [
                    {
                        "discount": "0",
                        "label": "8"
                    },
                    {
                        "discount": "10",
                        "label": "16"
                    },
                    {
                        "discount": "15",
                        "label": "24"
                    },
                    {
                        "discount": "20",
                        "label": "40"
                    },
                    {
                        "discount": "25",
                        "label": "80"
                    }
                ],
                "total_invoice_range": [
                    {
                        "discount": "0",
                        "label": "8"
                    },
                    {
                        "discount": "10",
                        "label": "16"
                    },
                    {
                        "discount": "15",
                        "label": "24"
                    },
                    {
                        "discount": "20",
                        "label": "40"
                    },
                    {
                        "discount": "25",
                        "label": "80"
                    }
                ],
                "onInvoice_discount_execution": "FINANCIAL"
            }
        ]
    },
    "available_orders": {
        "orders": [
            {
                "account_no": "Wholesaler A - Accoount: A0001",
                "order_no": null,
                "sku": "GSK-ACCOUNT_NO-A0001",
                "product_details": [
                    {
                        "name": "Augmentin 25mcg Tabs",
                        "price": "20",
                        "units": "0",
                        "free_goods": "",
                        "discount": "",
                        "payterm": "30",
                        "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                        "brand": "GSK-BRAND-AUGMENTIN",
                        "brandName": "Novo 1",
                        "offerType": "SEGMENT",
                        "additional_discount": false,
                        "free_goods_range": {
                            "limit": null,
                            "eligible_goods": null
                        },
                        "discounts": {
                            "name": "Augmentin",
                            "isSku": false,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "offInvoice_discount_execution": null,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "max_limit": "500",
                            "sku": "GSK-BRAND-AUGMENTIN"
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
                "order_no": null,
                "status": "CONDITIONAL",
                "currentPeriod": true,
                "delivery_date": "",
                "ordered_date": "Jan 01, 22",
                "sku": "GSK-ACCOUNT_NO-A0001",
                "on_invoice": true,
                "internalOrderStatus": "OPEN",
                "wholesalerCode": "PRO123",
                "wholesalerName": "Proforma",
                "legalIdCode": "12356",
                "product_details": [
                    {
                        "name": "Augmentin 25mcg Tabs",
                        "brandName": "AUGMENTIN",
                        "price": "13.61",
                        "units": "0",
                        "free_goods": "0",
                        "discount": "0",
                        "payterm": null,
                        "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                        "brand": "GSK-BRAND-AUGMENTIN",
                        "additional_discount": false,
                        "free_goods_range": {
                            "limit": null,
                            "eligible_goods": null
                        },
                        "onInvoiceDiscount": 0,
                        "maxLimit": 260,
                        "onInvoiceFreeGoods": 0,
                        "onInvoicePaymentTerms": null,
                        "offInvoiceDiscount": null,
                        "offInvoiceFreeGoods": null
                    }
                ]
            }
        ]
    },
    "rebates_orders": {
        "orders": []
    },
    "source": "Desktop",
    "profileDetails": {
        "firstName": "Ashish",
        "lastName": "Bhardwaj",
        "phoneNumber": "+919639417178",
        "email": "ashishbhardwaj727@gmail.com"
    },
    "notifications": "yes",
    "associatedAccounts": [
        {
            "wholeSalerCode": "ABC001",
            "wholeSalerName": "ABC Pharmacy",
            "wholeSalerStatus": "ACTIVE",
            "accounts": [
                {
                    "accountNumber": "765465465",
                    "legalIdCode": "87675645",
                    "invoice": "https://cdn.yellowmessenger.com/BppdDeTxcwwG1678702189782.png",
                    "accountStatus": "PENDING_VERIFICATION"
                }
            ]
        },
        {
            "wholeSalerCode": "PRO123",
            "wholeSalerName": "Proforma",
            "wholeSalerStatus": "ACTIVE",
            "accounts": [
                {
                    "accountNumber": "12345",
                    "legalIdCode": "12356",
                    "invoice": "https://cdn.yellowmessenger.com/YThDAFfNrIv21678784364431.png",
                    "accountStatus": "PENDING_VERIFICATION"
                }
            ]
        }
    ],
    "selected_brand": "GSK-BRAND-AUGMENTIN",
    "new_orders": {
        "orders": [
            {
                "account_no": "Wholesaler A - Accoount: A0001",
                "order_no": null,
                "sku": "GSK-ACCOUNT_NO-A0001",
                "product_details": [
                    {
                        "name": "Augmentin 25mcg Tabs",
                        "price": "20",
                        "units": "5",
                        "free_goods": "",
                        "discount": "",
                        "payterm": "30",
                        "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                        "brand": "GSK-BRAND-AUGMENTIN",
                        "brandName": "Novo 1",
                        "offerType": "SEGMENT",
                        "additional_discount": false,
                        "free_goods_range": {
                            "limit": null,
                            "eligible_goods": null
                        },
                        "discounts": {
                            "name": "Augmentin",
                            "isSku": false,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "offInvoice_discount_execution": null,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "5",
                            "max_limit": "500",
                            "sku": "GSK-BRAND-AUGMENTIN"
                        },
                        "quantity": "5"
                    }
                ],
                "_id": "f37c975c-2e92-4f34-a5dd-e36e6b7cef25",
                "brandsku": "GSK-ACCOUNT_NO-A0001-GSK-BRAND-AUGMENTIN",
                "ordered_date": "Nov 18, 23"
            }
        ]
    },
    "appstate": {
        "orderCartData": [
            "GSK-BRAND-AUGMENTIN"
        ],
        "updateCartData": {},
        "cartData": {
            "GSK-ACCOUNT_NO-A0001_f37c975c-2e92-4f34-a5dd-e36e6b7cef25": {
                "GSK-PRODUCT-AUGMENTIN-A0001-1": "5"
            }
        },
        "wholesalerAccountData": [
            {
                "account_no": "Wholesaler A - Accoount: A0001",
                "order_no": null,
                "sku": "GSK-ACCOUNT_NO-A0001",
                "product_details": [
                    {
                        "name": "Augmentin 25mcg Tabs",
                        "price": "20",
                        "units": "5",
                        "free_goods": "",
                        "discount": "",
                        "payterm": "30",
                        "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                        "brand": "GSK-BRAND-AUGMENTIN",
                        "brandName": "Novo 1",
                        "offerType": "SEGMENT",
                        "additional_discount": false,
                        "free_goods_range": {
                            "limit": null,
                            "eligible_goods": null
                        },
                        "discounts": {
                            "name": "Augmentin",
                            "isSku": false,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "offInvoice_discount_execution": null,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "5",
                            "max_limit": "500",
                            "sku": "GSK-BRAND-AUGMENTIN"
                        },
                        "quantity": "5"
                    }
                ],
                "_id": "f37c975c-2e92-4f34-a5dd-e36e6b7cef25",
                "brandsku": "GSK-ACCOUNT_NO-A0001-GSK-BRAND-AUGMENTIN",
                "ordered_date": "Nov 18, 23"
            }
        ],
        "discountData": {},
        "brandArr": {
            "GSK-BRAND-AUGMENTIN": [
                "GSK-ACCOUNT_NO-A0001"
            ]
        }
    }
}