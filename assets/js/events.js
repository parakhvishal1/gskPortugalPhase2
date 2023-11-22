function CallScreen(caseNum) {
    switch (String(caseNum)) {
        case "0": 
            ToApp("legal-copyright", {
                "tncHeading": "Legal Terms & Conditions",
                "tnc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.`,
            });
            break;
        case "1":
            ToApp("user-login", {
                isLoggedIn: true,
                name: "Valentin Buteler",
                email: "valentinbuteler@gmail.com",
                phone: "4455668899",
                rep: true
            });
            break;
        case "2":
            ToApp("welcome-screen", {
                "title": "Welcome to gsk",
                "sub-title": "Find more benefits for your pharmacy inside",
                "tncHeading": "Legal Terms & Conditions",
                "tnc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.`,
                "bg-img": "/assets/images/png/welcome-banner.png"
            });
            break;
        case "3":
            ToApp("termsui-screen", {
                "heading": "TERMS OF USE",
                "termsofuse": [
                    {
                        "title": "Privacy Policy",
                        "desc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in culpa qui offiserunt mollitia animi.`
                    },
                    {
                        "title": "Authorization",
                        "desc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in culpa qui. Nemo enim ipsam voluptatem
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
                        laboret.`
                    },
                    {
                        "title": "Collection And Use Of Information",
                        "desc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in culpa qui.`
                    },
                    {
                        "title": "Privacy Policy",
                        "desc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in culpa qui offiserunt mollitia animi.`
                    },
                    {
                        "title": "Use Of Your Personal Data",
                        "desc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum.`
                    },
                    {
                        "title": "Privacy Policy",
                        "desc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in culpa qui offiserunt mollitia animi.`
                    },
                    {
                        "title": "Authorization",
                        "desc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in culpa qui. Nemo enim ipsam voluptatem
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
                        laboret.`
                    },
                    {
                        "title": "Collection And Use Of Information",
                        "desc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in culpa qui.`
                    },
                    {
                        "title": "Privacy Policy",
                        "desc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in culpa qui offiserunt mollitia animi.`
                    },
                    {
                        "title": "Use Of Your Personal Data",
                        "desc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum.`
                    }
                ],
                "accept": "Accept the terms",
                "decline": "Decline"
            });
            break;
        case "4":
            ToApp("userwelcome-screen", {
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
                        "decline": "Decline",
                    },
                    "snackbars": {
                        "exceedMaxLimit": "Value exceeding the max limit.",
                        "selectDate": "Please select date!!!",
                        "maxReached": "Maximum reached!!!",
                        "accountSelected": "All Acc Selected!!!",
                    }
                },
                "download_url": `LOC,Period,Order Date,Order Type,Internal Order Status,Internal Order Number,External Order Number,External Order Status,External Order Date,Wholesaler Code,Account Code,Legal Id Code,Brand #,Brand,EAN,SKU#,SKU,Requested Volume,Invoiced Volume,On Invoice Discount,On Invoice Free Goods,On Invoice Payment Terms,Off Invoice Discount,Off Invoice Free Goods,Offer Type,User Identifier,Order Id,Delete Record(YES/NO)
                Master,alpha,2022-12-09,ORDER,OPEN,,,NOT_CONFIRMED,,ABC001,LBS004,BLSL004,S_BRD_010,SKU Brand New 10,10042,S_BRD_010_SKU_001,Medicine SKU 10,104,104,,,,,,SEGMENT,51,2212000003,
                Master,alpha,2022-12-09,ORDER,OPEN,,,IN_PROCESS,,ABC001,LBS004,BLSL004,BRD_001,Brand New 1,10003,BRD_001_SKU_001,Brand New 250Mg,200,200,4.0,0,0,,,PREDEFINED,51,2212000001,
                Master,alpha,2022-12-09,ORDER,OPEN,,,NOT_CONFIRMED,,ABC001,LBS004,BLSL004,BRD_002,Brand New 2,10006,BRD_002_SKU_001,Brand New 250Mg,75,75,,,,,,PREDEFINED,51,2212000003,
                Master,alpha,2022-12-09,ORDER,OPEN,,,NOT_CONFIRMED,,ABC001,LBS004,BLSL004,BRD_002,Brand New 2,10007,BRD_002_SKU_002,Brand New 650Mg,75,75,,,,,,PREDEFINED,51,2212000003,
                Master,alpha,2022-12-09,ORDER,OPEN,,,NOT_CONFIRMED,,ABC001,LBS004,BLSL004,S_BRD_010,SKU Brand New 10,10043,S_BRD_010_SKU_002,TABLET SKU 10,201,201,,,,,,SEGMENT,51,2212000003,
                `,
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
                            "selected": "0",
                            "max_limit": "500",
                            "sku": "GSK-BRAND-AUGMENTIN",
                            "on_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
                            ],
                            "off_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
                            ],
                            "total_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
                            ]
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
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
                            ],
                            "off_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
                            ],
                            "total_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
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
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
                            ],
                            "off_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
                            ],
                            "total_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
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
                                        "isSku": !true,
                                        "additional_discount": true,
                                        "purchased": "125",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-AUGMENTIN",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
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
                                        "isSku": !true,
                                        "additional_discount": true,
                                        "purchased": "125",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-AUGMENTIN",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
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
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
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
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
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
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
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
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
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
                                        "isSku": !true,
                                        "additional_discount": true,
                                        "purchased": "125",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-AUGMENTIN",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
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
                                        "isSku": !true,
                                        "additional_discount": true,
                                        "purchased": "125",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-AUGMENTIN",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
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
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
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
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
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
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
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
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
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
                        },
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
                "notifications": "yes"
            });
            break;
        case "5":
            ToApp("clientlist-screen", {
                "title": "Client List",
                "clients": [
                    {
                        "name": "Valentin Buteler1",
                        "_id": '1'
                    },
                    {
                        "name": "Valentin Buteler2",
                        "_id": '2'
                    },
                    {
                        "name": "Valentin Buteler3",
                        "_id": '3'
                    },
                    {
                        "name": "Valentin Buteler4",
                        "_id": '4'
                    }
                ],
            });
            break;
        case "6": 
            ToApp("userwelcome-screen", {
                "start_date": "2023-10-02",
                "last_date": "2023-10-31",
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
                "download_url": "PK\u0003\u0004\u0014\u0000\b\b\b\u0000ڎCW\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0013\u0000\u0000\u0000[Content_Types].xml�S�n�0\u0010����*6�PU\u0015�C\u001f�\u0016��\u0003\\{�X�%����]\u00078�R�\nq�cfgfW�d�q�ZCB\u0013|��|�*�*h㻆},^�{Va�^K\u001b<4l\u000b�f��b\u001b\u0001+��ذ>�� \u0004�\u001e�D\u001e\"xBڐ��tL��R-e\u0007�v4�\u0013*�\f>׹h���\tZ���z��\u0017��\u0018�Q2S,���H��\u000b�\u0004v�`o\"�\u0010�U�\u001bRٵC(2q��qa9S�\u001b\r&\u0019\r��\u0016��(�A�\u001c�p(�\u001at\u001d\u0013\u0011S6��9�)�JG���sBQ�4���0\u0016\u0015\u0012�eX�\u00179\u001eu�1���\u0003dg9�2�~ω^��\u0010\u001b+~\u0010��#o�)�\u0000\u0003r�\t�ʝ4���WH��\u0010���/\u000e��/�\u0001D1,�C\u000e1|��7PK\u0007\b�,(�;\u0001\u0000\u0000\u001d\u0004\u0000\u0000PK\u0003\u0004\u0014\u0000\b\b\b\u0000ڎCW\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u000b\u0000\u0000\u0000_rels/.rels���J\u00031\u0010�_%̽�m\u0005\u0011iڋ\b���\u0007\u0018��ݰ�LHFݾ����lA��03��1�v?�I�S.���uӂ�h���\u001bx9>��@\u0015��p�H\u0006NT`��>ӄRW��SQ�\u0011��A$�k]�@\u0001KÉb�t�\u0003J-s�\u0013�\u0011{қ����'\u0003Ι��\f�[�:b�I\f̓��<�2�M���)�oB�뼥\u0007�o��,d_L�^v�|�8�O��&���24\u000bEGn�j\u0002e���W�n\u0016�,g����Gс\u0004\u001d\n~Q/���\u001f�}\u0002PK\u0007\bn2\bK�\u0000\u0000\u0000J\u0002\u0000\u0000PK\u0003\u0004\u0014\u0000\b\b\b\u0000ڎCW\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0010\u0000\u0000\u0000docProps/app.xmlM��\n�0\u0010D�~EȽ��ADҔ�\b��A? ��6�lB�J?ߜ���0���ͯ�)�@��׍\u0014H6���V>\u001f��$;�SC\n\u0011\u0013;̢\u001c(�ra�g�l\u0017�&�e��L!y�%�\u0019�49��`_\u001e���4G���F\u001c��\u0005J��\u0018Wg\r\u0017\u0007�GS�b��\u0014��\n~\u000e�\u0003PK\u0007\b�|wؑ\u0000\u0000\u0000�\u0000\u0000\u0000PK\u0003\u0004\u0014\u0000\b\b\b\u0000ڎCW\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0011\u0000\u0000\u0000docProps/core.xmlm��J�0\u0014E%�M��Hh;�2 (\u000eXq�-$Ƕ�\\H���{�:VPߒ�u\u0016'��\u001c�>����\u001a\u00179�\b��j0]���mv�Q��(1Z\u00035>B�����K�a�\u0003\u001f\u0007\b(yL��ո��qB��A��'¤��z-b���8!�D\u0007�QzA4D�D\u0014d\u0016fn5�R�U����\b�$0�\u0006\u0013\u0003)���\u0011�\u000e�\u000e,�J\u001e°R�4�S�pi�����\u001e���������҃��P\u0012�xt���乼�i��a��YA3Z�\u0005�쌟�������_g뛫TH\u000fh�p;s�sE���|\u0002PK\u0007\b �\u00104\u0006\u0001\u0000\u0000�\u0001\u0000\u0000PK\u0003\u0004\u0014\u0000\b\b\b\u0000ڎCW\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0014\u0000\u0000\u0000xl/sharedStrings.xml�Uˎ�0\u0014��+,�i\u0017\t��p��Q\u001a2#4)DyU]R�IP\u0001Sی2��o�ՓtکM2*\u000b$�s�s_��ͱ*�\u00030^�zlX}l �3�\u0017�~llַ=b�\u0004oF�\u000b�Ѷ\u0016c��\u0006j��{\u000b�3�:\u0006���|l\u001c�h>�&�\u000eP��O\u001b�%���J�\\���\u001b\u0006i�\u000f\u0000�*M\u001bcϬҢ6�\u0011/��\b��td�`d>-��\u0002XAs\u0015MX\u000e\f���nf��hLT\u000b`uZ��d%R��WDq[}\u0005��f��\u0017u�)���>\u001fh\t<-%=��FO�Sg:�9���Q�I~di�����\u0016�$V���F�+1\u0015Z�\u001c\u0015. G[Z�UGS\u001eh��\u00056�ѳ ,�)�+�[\u0006��(͵2�\u0010-��\nd���*]�۽n�Bs�q��0�\u001b.�(�1\u0014�B\u001f�� DZ\u000bV�Z�`�T%��D۴l/׷�\f�\u0004\u0001h\t\u0019e��/��\u0019'�5�F~�\u001a\b�\n��\u001e�𰇉��2�-Up:OV�PA�%I\u001cF�(�'s���������#��\u0012\u0012\u001d\u00122�\u0002�l�>��u�\r��\u000f�c�\u0006��X��b���i(�$�q}T�M\u0017�\u001b���0;�U��\u001c=\u001a�\"D�޵<�9x�Z�#��\u001a�M��R�v}Ǳ�Pk,\u0019`O���3P��G��2�z��\u0010��\u001e\u001d����0�\u000f$�\u0005PK\u0007\bz\u001b��,\u0002\u0000\u0000m\u0006\u0000\u0000PK\u0003\u0004\u0014\u0000\b\b\b\u0000ڎCW\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\r\u0000\u0000\u0000xl/styles.xml��=o� \u0010���\n��`�U\u0015U�3DJ�9�ԕ���ʗ�Dv}�8�;TM;��r��\u0019�ź�\u0002��:�U��E�\u0011�Z3��\u0012����+���\n�\u0007\u0001�\u000e��`P�ĝ��\u0010Ww �[h\u0003*�4�J��Ҷ�\u0019\u000b��h��,��H�\u0015�\nu�[�\u001d��Q�\u0012g�TE��U�q\u0012��}�\u0013\u0015A����Z\u000bm\u0011W\fz`%^EMQ\t�jC\u0005?X>��bH�2\nc�S��J�(�t�\u0018\\0q!.M<�$T��ރU۰@S�\u001f\f�Xi\u0005\t3��Rͨ�x�t��1�CU����y>2f�[�N\u000b���\u001cC����,L����T\u0015\u0002\u001a\u001f얷]�^\u001b\u00127��2$��V+*�\u0001gǔ\u0004l\rB��|�7��}�Ҡ��8#(��9\r\rMi¤E��i�=�.��E}s���~����1b�7[bo�piw�\\��\u000bPK\u0007\b��,�p\u0001\u0000\u0000�\u0003\u0000\u0000PK\u0003\u0004\u0014\u0000\b\b\b\u0000ڎCW\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u000f\u0000\u0000\u0000xl/workbook.xml��AO�0\f�����w�tC\b���Є�\u001b��=K�5Z�Tv�����\n\u001c9YO����W\u0018�\u0005�}�\u001a��\u0002��&��I�����\t��]sMt>�t\u0016\u0005����y��d�c0�J#��t���E�I�Hh\u001c��9\fr�ԣ\f�G�%�����u��.�π1�B\b\u0007�KY�����4{#�L��Y=h���\b�m&����I\nc����\u001c5������2E4\u00015�\u0014���AP�\u0006ڻ\r���\u0017Y�\u0019ˢ\\N��PK\u0007\b�4��\u0000\u0000\u0000_\u0001\u0000\u0000PK\u0003\u0004\u0014\u0000\b\b\b\u0000ڎCW\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u001a\u0000\u0000\u0000xl/_rels/workbook.xml.rels��Mk�0\f@���}q��\u0018�n/c�k?~���84����˿����@\u0007;�$��{\u000f�\\��:Q�>\u0006\u0003MU��`��Cg��xz\u0005ł��\u0010\u0003\u0019��a�Zni@)_���Ua\u00046�Eқ�l=��UL\u0014ʦ�yD)�����\u001d�E]��|ˀ9Sm���q\r�=��\u0000{��v�K\u001aW\u0005\\VS��hc���ޣ�\u001c)�\u001d���AߏY���4��+����瘏��Z^F��\u001f�5FϮ��\u0000PK\u0007\bg뢨�\u0000\u0000\u00004\u0002\u0000\u0000PK\u0003\u0004\u0014\u0000\b\b\b\u0000ڎCW\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0018\u0000\u0000\u0000xl/worksheets/sheet1.xml��[S�:\u0014��ϯ���Ⱥ��I�1\u0005J/�/=��\u0010A2Mb�6�?���\u0017i[�4�\u0001⬥miyr\u001c&\u001f�Wޛ,�e���\u0004aߓ��|��<O�ۛ�c����6/~�\u000b)+��oʩ����\u000fAP>.�:+Q�\"7��\u0017묪\u000f��|)d6�\rZ�\u0002�q\u0018���ƟM�˵�4'�\n�4�S�!=�~0���wK�-��^s�<��\u001c|�O�z�U�p-W��qU��ft0\u001a~���E���S������\\>/�z��^j=�1_����z�\u0004�{�����v9�\u0016S��(NpH��=��U������ރ,��e5L��D�J��\u0014���d�B�-��B�����\nW��0\"q�o)і\u0012})�\u0011s�(l+�C%�\u0012�\u001dJEm�h(E\u0011\u0017\u0011f�'\u001e��bu�\tc\"a{�����!�\u0004�b�5\u0012�u'\u001e��HP���\u0018�[}�u�P$��$�ڝP��\u0010<ܿ�H��d��\u00189L�kz�\u0015\b\u0005v[a��D({�\u0013Ѥ�{\u0012*�N�\f�\u001a�D��x\u0015��'C�\u0018q��K�v�O��\u0017�\toڵ>�\u001aH$J\u001c\u001a�v�O����\u0018G\u000e���[���T��\\z�v�O��P'�h���k\u001b,uʬ�:�?�(bN\b�\u000e\u0001: @8�a��\u001d\u001d\u00044R6\f\u0011q�p{�\u001d\u0004t���\u0000$\u0011\u000e�\u0012�1@\u0013u��p\u0001�u\u00100�n�N�%�!��v����L��OO��Z�Y��&E�����S}��EZW�\u0007��W���6Ó�\u0019�:\u000e�\u000e�;>�\u001dTw\u001c�\u001dLw\u001c�\u001d\\w\u001c�\u001dBw|\u001e;B�q2vD����\u0011뎯cG�;�\u0019\u0012\u0003�~7X@��\u0006\u000b���`\u0001��\u001b, �\u000b�\u0005${i��h�\f\u0016����\u0002½1X@���n\u0003��\u0019, �\u001f\u0006\u000bH�?�\u0005�{o��t\u001a, ��\u0000!\u0005�\u0006\f)�75�\b\u0002N\r(R�pj��\r\u0011\u0007�\u001e�o$��Hh;f�\u0006i\u001fh\"���&��\u000f5\u0011d{�� �cM\u0004q~��'�\bB��� �o�\bb���\u001c��&���l�&�l/4\u0011d{�� ۫wq�2��|�U\u0019C�FU�H��\u000e�צ\u0005��OM����y\u0011�\tn~�\u0011��\u0003��PH I��9�bz��B�?��z:��\u000ef����`6:��\u000ef��&�0\u001b\u001d�F\u0007���lt0\u001b\u001d6�\\\u0013�l/4\u0011��R\u0013�l��z�Gp0+\u001c�\u000e�u�=����p���\u0003,n\u0004�u���\u001fק��{6��\rnc����66��\rnc�&�p\u001b\u001b��\u0006���ml��\u0000�M<�D\u0010��&��/5\u0011\u0004ŕ�?�:���\rU���έu�U��6r��\u001c���hF�b\u000e��\f\u0006vT=�#v\u0002�Q�%{��Y�ܔ�C^�\u000f�S�~ޯ\u001f\r��EsT���ټ?Xɧj����{���*i�6\u000f���\u0012f�\u0003PK\u0007\b���\u001f�\u0004\u0000\u0000~\u0018\u0000\u0000PK\u0001\u0002\u0014\u0000\u0014\u0000\b\b\b\u0000ڎCW�,(�;\u0001\u0000\u0000\u001d\u0004\u0000\u0000\u0013\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000[Content_Types].xmlPK\u0001\u0002\u0014\u0000\u0014\u0000\b\b\b\u0000ڎCWn2\bK�\u0000\u0000\u0000J\u0002\u0000\u0000\u000b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000|\u0001\u0000\u0000_rels/.relsPK\u0001\u0002\u0014\u0000\u0014\u0000\b\b\b\u0000ڎCW�|wؑ\u0000\u0000\u0000�\u0000\u0000\u0000\u0010\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000�\u0002\u0000\u0000docProps/app.xmlPK\u0001\u0002\u0014\u0000\u0014\u0000\b\b\b\u0000ڎCW �\u00104\u0006\u0001\u0000\u0000�\u0001\u0000\u0000\u0011\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000i\u0003\u0000\u0000docProps/core.xmlPK\u0001\u0002\u0014\u0000\u0014\u0000\b\b\b\u0000ڎCWz\u001b��,\u0002\u0000\u0000m\u0006\u0000\u0000\u0014\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000�\u0004\u0000\u0000xl/sharedStrings.xmlPK\u0001\u0002\u0014\u0000\u0014\u0000\b\b\b\u0000ڎCW��,�p\u0001\u0000\u0000�\u0003\u0000\u0000\r\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u001c\u0007\u0000\u0000xl/styles.xmlPK\u0001\u0002\u0014\u0000\u0014\u0000\b\b\b\u0000ڎCW�4��\u0000\u0000\u0000_\u0001\u0000\u0000\u000f\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000�\b\u0000\u0000xl/workbook.xmlPK\u0001\u0002\u0014\u0000\u0014\u0000\b\b\b\u0000ڎCWg뢨�\u0000\u0000\u00004\u0002\u0000\u0000\u001a\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000�\t\u0000\u0000xl/_rels/workbook.xml.relsPK\u0001\u0002\u0014\u0000\u0014\u0000\b\b\b\u0000ڎCW���\u001f�\u0004\u0000\u0000~\u0018\u0000\u0000\u0018\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000�\n\u0000\u0000xl/worksheets/sheet1.xmlPK\u0005\u0006\u0000\u0000\u0000\u0000\t\u0000\t\u0000?\u0002\u0000\u0000�\u000f\u0000\u0000\u0000\u0000",
                "totalcheckout": "",
                "plan_progress": {
                    "title": "Plan Progress",
                    "last_date": "2023-10-31",
                    "brands": [
                        {
                            "name": "AUGMENTIN",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "max_limit": "260",
                            "sku": "AUGMENTIN",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 17
                                },
                                {
                                    "discount": "20.0",
                                    "label": 25
                                },
                                {
                                    "discount": "27.0",
                                    "label": 33
                                },
                                {
                                    "discount": "35.0",
                                    "label": 41
                                },
                                {
                                    "discount": "36.0",
                                    "label": 49
                                },
                                {
                                    "discount": "37.0",
                                    "label": 260
                                }
                            ],
                            "onInvoice_discount_execution": "FINANCIAL"
                        },
                        {
                            "name": "Boostrix",
                            "isSku": true,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_004",
                            "max_limit": "250",
                            "on_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 41.666666666666664
                                },
                                {
                                    "discount": "2",
                                    "label": 83.33333333333333
                                },
                                {
                                    "discount": "3",
                                    "label": 125
                                },
                                {
                                    "discount": "4",
                                    "label": 166.66666666666666
                                },
                                {
                                    "discount": "5",
                                    "label": 208.33333333333331
                                },
                                {
                                    "discount": "6",
                                    "label": 250
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 41.666666666666664
                                },
                                {
                                    "discount": "2",
                                    "label": 83.33333333333333
                                },
                                {
                                    "discount": "3",
                                    "label": 125
                                },
                                {
                                    "discount": "4",
                                    "label": 166.66666666666666
                                },
                                {
                                    "discount": "5",
                                    "label": 208.33333333333331
                                },
                                {
                                    "discount": "6",
                                    "label": 250
                                }
                            ]
                        },
                        {
                            "name": "Duac",
                            "isSku": true,
                            "onInvoice_discount_execution": null,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_005",
                            "max_limit": "700",
                            "on_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 116.66666666666667
                                },
                                {
                                    "discount": "2",
                                    "label": 233.33333333333334
                                },
                                {
                                    "discount": "3",
                                    "label": 350
                                },
                                {
                                    "discount": "4",
                                    "label": 466.6666666666667
                                },
                                {
                                    "discount": "5",
                                    "label": 583.3333333333334
                                },
                                {
                                    "discount": "6",
                                    "label": 700
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 116.66666666666667
                                },
                                {
                                    "discount": "2",
                                    "label": 233.33333333333334
                                },
                                {
                                    "discount": "3",
                                    "label": 350
                                },
                                {
                                    "discount": "4",
                                    "label": 466.6666666666667
                                },
                                {
                                    "discount": "5",
                                    "label": 583.3333333333334
                                },
                                {
                                    "discount": "6",
                                    "label": 700
                                }
                            ]
                        },
                        {
                            "name": "Blenrep",
                            "isSku": true,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_006",
                            "max_limit": "2000",
                            "on_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 333.3333333333333
                                },
                                {
                                    "discount": "2",
                                    "label": 666.6666666666666
                                },
                                {
                                    "discount": "3",
                                    "label": 1000
                                },
                                {
                                    "discount": "4",
                                    "label": 1333.3333333333333
                                },
                                {
                                    "discount": "5",
                                    "label": 1666.6666666666665
                                },
                                {
                                    "discount": "6",
                                    "label": 2000
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 333.3333333333333
                                },
                                {
                                    "discount": "2",
                                    "label": 666.6666666666666
                                },
                                {
                                    "discount": "3",
                                    "label": 1000
                                },
                                {
                                    "discount": "4",
                                    "label": 1333.3333333333333
                                },
                                {
                                    "discount": "5",
                                    "label": 1666.6666666666665
                                },
                                {
                                    "discount": "6",
                                    "label": 2000
                                }
                            ]
                        },
                        {
                            "name": "Cabenuva",
                            "isSku": true,
                            "onInvoice_discount_execution": "FREE_GOODS",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_007",
                            "max_limit": "250",
                            "on_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 41.666666666666664
                                },
                                {
                                    "discount": "2",
                                    "label": 83.33333333333333
                                },
                                {
                                    "discount": "3",
                                    "label": 125
                                },
                                {
                                    "discount": "4",
                                    "label": 166.66666666666666
                                },
                                {
                                    "discount": "5",
                                    "label": 208.33333333333331
                                },
                                {
                                    "discount": "6",
                                    "label": 250
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 41.666666666666664
                                },
                                {
                                    "discount": "2",
                                    "label": 83.33333333333333
                                },
                                {
                                    "discount": "3",
                                    "label": 125
                                },
                                {
                                    "discount": "4",
                                    "label": 166.66666666666666
                                },
                                {
                                    "discount": "5",
                                    "label": 208.33333333333331
                                },
                                {
                                    "discount": "6",
                                    "label": 250
                                }
                            ]
                        },
                        {
                            "name": "AVODART",
                            "isSku": true,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "AVODART",
                            "max_limit": "25",
                            "on_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 4.166666666666667
                                },
                                {
                                    "discount": "2",
                                    "label": 8.333333333333334
                                },
                                {
                                    "discount": "3",
                                    "label": 12.5
                                },
                                {
                                    "discount": "4",
                                    "label": 16.666666666666668
                                },
                                {
                                    "discount": "5",
                                    "label": 20.833333333333336
                                },
                                {
                                    "discount": "6",
                                    "label": 25
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 4.166666666666667
                                },
                                {
                                    "discount": "2",
                                    "label": 8.333333333333334
                                },
                                {
                                    "discount": "3",
                                    "label": 12.5
                                },
                                {
                                    "discount": "4",
                                    "label": 16.666666666666668
                                },
                                {
                                    "discount": "5",
                                    "label": 20.833333333333336
                                },
                                {
                                    "discount": "6",
                                    "label": 25
                                }
                            ]
                        }
                    ]
                },
                "available_orders": {
                    "orders": [
                        {
                            "account_no": "Spain Pharmacy   -  675786877",
                            "order_no": null,
                            "sku": "675786877",
                            "product_details": [
                                {
                                    "name": "AUGMENTIN DUO 457 mg/5 ml 70 ml",
                                    "price": "13.61",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "60000000116507",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "60",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 1g",
                                    "price": "15.01",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640351",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN ES",
                                    "price": "110.59",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640341",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "Boostrix capsule 500mg",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_001",
                                    "brand": "P_BRD_004",
                                    "brandName": "Boostrix",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Boostrix",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 30
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Boostrix capsule 600mg",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_002",
                                    "brand": "P_BRD_004",
                                    "brandName": "Boostrix",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Boostrix",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 60
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 80
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Duac capsule 100",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_001",
                                    "brand": "P_BRD_005",
                                    "brandName": "Duac",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Duac",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Duac syrup 200",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_002",
                                    "brand": "P_BRD_005",
                                    "brandName": "Duac",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Duac",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Blenrep capsule",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_006_SKU_001",
                                    "brand": "P_BRD_006",
                                    "brandName": "Blenrep",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Blenrep",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "12.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "15.0",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Cabenuva tablet",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_001",
                                    "brand": "P_BRD_007",
                                    "brandName": "Cabenuva",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Cabenuva",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "1",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 30
                                            },
                                            {
                                                "discount": "2",
                                                "label": 40
                                            },
                                            {
                                                "discount": "3",
                                                "label": 50
                                            },
                                            {
                                                "discount": "5",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Cabenuva cream",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_002",
                                    "brand": "P_BRD_007",
                                    "brandName": "Cabenuva",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Cabenuva",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 40
                                            },
                                            {
                                                "discount": "2",
                                                "label": 60
                                            },
                                            {
                                                "discount": "4",
                                                "label": 80
                                            },
                                            {
                                                "discount": "6",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "AVODART capsule 0.5mg x 60",
                                    "price": "21.84",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "283062",
                                    "brand": "AVODART",
                                    "brandName": "AVODART",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AVODART",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "25",
                                        "sku": "AVODART",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 2
                                            },
                                            {
                                                "discount": "14.0",
                                                "label": 3
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 4
                                            },
                                            {
                                                "discount": "29.0",
                                                "label": 5
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 6
                                            },
                                            {
                                                "discount": "31.0",
                                                "label": 25
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "account_no": "Med Plus   -  675876867",
                            "order_no": null,
                            "sku": "675876867",
                            "product_details": [
                                {
                                    "name": "AUGMENTIN DUO 457 mg/5 ml 70 ml",
                                    "price": "13.61",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "60000000116507",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "60",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 1g",
                                    "price": "15.01",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640351",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN ES",
                                    "price": "110.59",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640341",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "Boostrix capsule 500mg",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_001",
                                    "brand": "P_BRD_004",
                                    "brandName": "Boostrix",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Boostrix",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 30
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Boostrix capsule 600mg",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_002",
                                    "brand": "P_BRD_004",
                                    "brandName": "Boostrix",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Boostrix",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 60
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 80
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Duac capsule 100",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_001",
                                    "brand": "P_BRD_005",
                                    "brandName": "Duac",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Duac",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Duac syrup 200",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_002",
                                    "brand": "P_BRD_005",
                                    "brandName": "Duac",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Duac",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Blenrep capsule",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_006_SKU_001",
                                    "brand": "P_BRD_006",
                                    "brandName": "Blenrep",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Blenrep",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "12.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "15.0",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Cabenuva tablet",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_001",
                                    "brand": "P_BRD_007",
                                    "brandName": "Cabenuva",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Cabenuva",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "1",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 30
                                            },
                                            {
                                                "discount": "2",
                                                "label": 40
                                            },
                                            {
                                                "discount": "3",
                                                "label": 50
                                            },
                                            {
                                                "discount": "5",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Cabenuva cream",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_002",
                                    "brand": "P_BRD_007",
                                    "brandName": "Cabenuva",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Cabenuva",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 40
                                            },
                                            {
                                                "discount": "2",
                                                "label": 60
                                            },
                                            {
                                                "discount": "4",
                                                "label": 80
                                            },
                                            {
                                                "discount": "6",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "AVODART capsule 0.5mg x 60",
                                    "price": "21.84",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "283062",
                                    "brand": "AVODART",
                                    "brandName": "AVODART",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AVODART",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "25",
                                        "sku": "AVODART",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 2
                                            },
                                            {
                                                "discount": "14.0",
                                                "label": 3
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 4
                                            },
                                            {
                                                "discount": "29.0",
                                                "label": 5
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 6
                                            },
                                            {
                                                "discount": "31.0",
                                                "label": 25
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
                            "account_no": "SP002 - Account: 675786877",
                            "order_no": "2309000001",
                            "status": "CONDICIONAL",
                            "currentPeriod": false,
                            "delivery_date": "",
                            "ordered_date": "2023-09-08",
                            "sku": "675786877",
                            "on_invoice": true,
                            "internalOrderStatus": "CLOSED",
                            "wholesalerCode": "SP002",
                            "wholesalerName": "Spain Pharmacy",
                            "legalIdCode": "78698898",
                            "product_details": [
                                {
                                    "brandName": "AUGMENTIN",
                                    "name": "AUGMENTIN DUO 457 mg/5 ml 70 ml",
                                    "price": "3.61",
                                    "units": "19",
                                    "free_goods": "0",
                                    "discount": "20",
                                    "payterm": null,
                                    "sku": "60000000116507",
                                    "brand": "AUGMENTIN",
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "onInvoiceDiscount": 20,
                                    "maxLimit": null,
                                    "onInvoiceFreeGoods": 0,
                                    "onInvoicePaymentTerms": null,
                                    "offInvoiceDiscount": null,
                                    "offInvoiceFreeGoods": null
                                },
                                {
                                    "brandName": "AUGMENTIN",
                                    "name": "AUGMENTIN DUO 1g",
                                    "price": "5.01",
                                    "units": "5",
                                    "free_goods": "0",
                                    "discount": "20",
                                    "payterm": null,
                                    "sku": "5168640351",
                                    "brand": "AUGMENTIN",
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "onInvoiceDiscount": 20,
                                    "maxLimit": null,
                                    "onInvoiceFreeGoods": 0,
                                    "onInvoicePaymentTerms": null,
                                    "offInvoiceDiscount": null,
                                    "offInvoiceFreeGoods": null
                                },
                                {
                                    "brandName": "AVODART",
                                    "name": "AVODART cápsulas moles 0.5mg x 60",
                                    "price": "21.84",
                                    "units": "4",
                                    "free_goods": "0",
                                    "discount": "29",
                                    "payterm": "0",
                                    "sku": "283062",
                                    "brand": "AVODART",
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "onInvoiceDiscount": 29,
                                    "maxLimit": null,
                                    "onInvoiceFreeGoods": 0,
                                    "onInvoicePaymentTerms": 0,
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
                "newCheck": "false",
                "source": "Desktop",
                "profileDetails": {
                    "firstName": "Saravanan",
                    "lastName": "Ravi",
                    "phoneNumber": "+918000180001",
                    "email": "rsaravanangym@gmail.com"
                },
                "notifications": "yes",
                "associatedAccounts": [
                    {
                        "wholeSalerCode": "SP001",
                        "wholeSalerName": "Med Plus",
                        "wholeSalerStatus": "ACTIVE",
                        "accounts": [
                            {
                                "accountNumber": "675876867",
                                "legalIdCode": "8687868768",
                                "invoice": "https://r5.app.yellow.ai/api/blob-proxy/render/r5-ym-uploads/eDE2OTI2NzE1ODU5OTYvYWU2ZWM1ZmItZTM5Mi00NmQ5LTkyYmQtZDc4Mzc0YmYyZjg1LnBuZw==",
                                "accountStatus": "PENDING_VERIFICATION"
                            }
                        ]
                    },
                    {
                        "wholeSalerCode": "SP002",
                        "wholeSalerName": "Spain Pharmacy",
                        "wholeSalerStatus": "ACTIVE",
                        "accounts": [
                            {
                                "accountNumber": "675786877",
                                "legalIdCode": "78698898",
                                "invoice": "https://r5.app.yellow.ai/api/blob-proxy/render/r5-ym-uploads/eDE2OTI2NzE1ODU5OTYvYWMwMDhhMGUtZjYxOC00YzEzLWIzM2ItODI1NjQ2YjhiOTg3LnBuZw==",
                                "accountStatus": "PENDING_VERIFICATION"
                            }
                        ]
                    }
                ]
            });
            break;
        case "7":
            ToApp("welcome-screen-unfilled-steps", {
                "title": "Welcome to gsk",
                "sub-title": "Find more benefits for your pharmacy inside",
                "tncHeading": "Legal Terms & Conditions",
                "tnc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.`,
                "bg-img": "/assets/images/svg/Registration-1-800x600.svg"
            });
            break;
        case "8":
            ToApp("welcome-screen-filled-step1", {
                "title": "Welcome to gsk",
                "sub-title": "Find more benefits for your pharmacy inside",
                "tncHeading": "Legal Terms & Conditions",
                "tnc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.`,
                "bg-img": "/assets/images/svg/Registration-2-800x600.svg"
            });
            break;
        case "9":
            ToApp("welcome-screen-filled-step2", {
                "title": "Welcome to gsk",
                "sub-title": "Find more benefits for your pharmacy inside",
                "tncHeading": "Legal Terms & Conditions",
                "tnc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.`,
                "bg-img": "/assets/images/svg/Registration-3-800x600.svg"
            });
            break;
        case "10":
            ToApp("welcome-screen-filled-step3", {
                "title": "Welcome to gsk",
                "sub-title": "Find more benefits for your pharmacy inside",
                "tncHeading": "Legal Terms & Conditions",
                "tnc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.`,
                "bg-img": "/assets/images/svg/Registration-4-800x600.svg"
            });
            break;
        case "14":
            ToApp("userwelcome-screen", {
                "start_date": "2022-09-09",
                "last_date": "2023-12-31",
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
                    "last_date": "Wed Mar 15 2023",
                    "brands": [
                        {
                            "name": "AUGMENTIN",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "8",
                            "selected": 20,
                            "max_limit": "260",
                            "sku": "AUGMENTIN",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 17
                                },
                                {
                                    "discount": "20.0",
                                    "label": 25
                                },
                                {
                                    "discount": "27.0",
                                    "label": 33
                                },
                                {
                                    "discount": "35.0",
                                    "label": 41
                                },
                                {
                                    "discount": "36.0",
                                    "label": 49
                                },
                                {
                                    "discount": "37.0",
                                    "label": 260
                                }
                            ],
                            "onInvoice_discount_execution": "FINANCIAL",
                            "eligible_discount": "27.0"
                        },
                        {
                            "name": "Novo 1",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": 2,
                            "max_limit": "1500",
                            "sku": "P_BRD_001",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 150
                                },
                                {
                                    "discount": "3.0",
                                    "label": 300
                                },
                                {
                                    "discount": "4.0",
                                    "label": 450
                                },
                                {
                                    "discount": "5.0",
                                    "label": 600
                                },
                                {
                                    "discount": "6.0",
                                    "label": 900
                                },
                                {
                                    "discount": "7.0",
                                    "label": 1500
                                }
                            ],
                            "onInvoice_discount_execution": "FINANCIAL"
                        },
                        {
                            "name": "Marca 2 fora da fatura",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "max_limit": "400",
                            "sku": "P_BRD_002",
                            "off_invoice_range": [
                                {
                                    "discount": "2.0",
                                    "label": 200
                                },
                                {
                                    "discount": "3.0",
                                    "label": 220
                                },
                                {
                                    "discount": "4.0",
                                    "label": 240
                                },
                                {
                                    "discount": "5.0",
                                    "label": 260
                                },
                                {
                                    "discount": "6.0",
                                    "label": 280
                                },
                                {
                                    "discount": "7.0",
                                    "label": 400
                                }
                            ],
                            "offInvoice_discount_execution": "FINANCIAL"
                        },
                        {
                            "name": "Marca 3 ambos",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "max_limit": "1050",
                            "sku": "P_BRD_003",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 450
                                },
                                {
                                    "discount": "7.0",
                                    "label": 600
                                },
                                {
                                    "discount": "8.0",
                                    "label": 750
                                },
                                {
                                    "discount": "9.0",
                                    "label": 900
                                },
                                {
                                    "discount": "10.0",
                                    "label": 1050
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 450
                                },
                                {
                                    "discount": "10.0",
                                    "label": 600
                                },
                                {
                                    "discount": "15.0",
                                    "label": 750
                                },
                                {
                                    "discount": "20.0",
                                    "label": 900
                                },
                                {
                                    "discount": "30.0",
                                    "label": 1050
                                }
                            ],
                            "offInvoice_discount_execution": "FINANCIAL",
                            "onInvoice_discount_execution": "FINANCIAL"
                        },
                        {
                            "name": "AVODART",
                            "isSku": true,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "AVODART",
                            "max_limit": "25",
                            "on_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 4.166666666666667
                                },
                                {
                                    "discount": "2",
                                    "label": 8.333333333333334
                                },
                                {
                                    "discount": "3",
                                    "label": 12.5
                                },
                                {
                                    "discount": "4",
                                    "label": 16.666666666666668
                                },
                                {
                                    "discount": "5",
                                    "label": 20.833333333333336
                                },
                                {
                                    "discount": "6",
                                    "label": 25
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 4.166666666666667
                                },
                                {
                                    "discount": "2",
                                    "label": 8.333333333333334
                                },
                                {
                                    "discount": "3",
                                    "label": 12.5
                                },
                                {
                                    "discount": "4",
                                    "label": 16.666666666666668
                                },
                                {
                                    "discount": "5",
                                    "label": 20.833333333333336
                                },
                                {
                                    "discount": "6",
                                    "label": 25
                                }
                            ]
                        },
                        {
                            "name": "SKU MARCA 1",
                            "isSku": true,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_004",
                            "max_limit": "250",
                            "on_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 41.666666666666664
                                },
                                {
                                    "discount": "2",
                                    "label": 83.33333333333333
                                },
                                {
                                    "discount": "3",
                                    "label": 125
                                },
                                {
                                    "discount": "4",
                                    "label": 166.66666666666666
                                },
                                {
                                    "discount": "5",
                                    "label": 208.33333333333331
                                },
                                {
                                    "discount": "6",
                                    "label": 250
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 41.666666666666664
                                },
                                {
                                    "discount": "2",
                                    "label": 83.33333333333333
                                },
                                {
                                    "discount": "3",
                                    "label": 125
                                },
                                {
                                    "discount": "4",
                                    "label": 166.66666666666666
                                },
                                {
                                    "discount": "5",
                                    "label": 208.33333333333331
                                },
                                {
                                    "discount": "6",
                                    "label": 250
                                }
                            ]
                        },
                        {
                            "name": "SKU MARCA 2",
                            "isSku": true,
                            "onInvoice_discount_execution": null,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_005",
                            "max_limit": "700",
                            "on_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 116.66666666666667
                                },
                                {
                                    "discount": "2",
                                    "label": 233.33333333333334
                                },
                                {
                                    "discount": "3",
                                    "label": 350
                                },
                                {
                                    "discount": "4",
                                    "label": 466.6666666666667
                                },
                                {
                                    "discount": "5",
                                    "label": 583.3333333333334
                                },
                                {
                                    "discount": "6",
                                    "label": 700
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 116.66666666666667
                                },
                                {
                                    "discount": "2",
                                    "label": 233.33333333333334
                                },
                                {
                                    "discount": "3",
                                    "label": 350
                                },
                                {
                                    "discount": "4",
                                    "label": 466.6666666666667
                                },
                                {
                                    "discount": "5",
                                    "label": 583.3333333333334
                                },
                                {
                                    "discount": "6",
                                    "label": 700
                                }
                            ]
                        },
                        {
                            "name": "SKU MARCA 3",
                            "isSku": true,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_006",
                            "max_limit": "2000",
                            "on_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 333.3333333333333
                                },
                                {
                                    "discount": "2",
                                    "label": 666.6666666666666
                                },
                                {
                                    "discount": "3",
                                    "label": 1000
                                },
                                {
                                    "discount": "4",
                                    "label": 1333.3333333333333
                                },
                                {
                                    "discount": "5",
                                    "label": 1666.6666666666665
                                },
                                {
                                    "discount": "6",
                                    "label": 2000
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 333.3333333333333
                                },
                                {
                                    "discount": "2",
                                    "label": 666.6666666666666
                                },
                                {
                                    "discount": "3",
                                    "label": 1000
                                },
                                {
                                    "discount": "4",
                                    "label": 1333.3333333333333
                                },
                                {
                                    "discount": "5",
                                    "label": 1666.6666666666665
                                },
                                {
                                    "discount": "6",
                                    "label": 2000
                                }
                            ]
                        },
                        {
                            "name": "SKU MARCA 4",
                            "isSku": true,
                            "onInvoice_discount_execution": "FREE_GOODS",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_007",
                            "max_limit": "250",
                            "on_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 41.666666666666664
                                },
                                {
                                    "discount": "2",
                                    "label": 83.33333333333333
                                },
                                {
                                    "discount": "3",
                                    "label": 125
                                },
                                {
                                    "discount": "4",
                                    "label": 166.66666666666666
                                },
                                {
                                    "discount": "5",
                                    "label": 208.33333333333331
                                },
                                {
                                    "discount": "6",
                                    "label": 250
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 41.666666666666664
                                },
                                {
                                    "discount": "2",
                                    "label": 83.33333333333333
                                },
                                {
                                    "discount": "3",
                                    "label": 125
                                },
                                {
                                    "discount": "4",
                                    "label": 166.66666666666666
                                },
                                {
                                    "discount": "5",
                                    "label": 208.33333333333331
                                },
                                {
                                    "discount": "6",
                                    "label": 250
                                }
                            ]
                        },
                        {
                            "name": "SKU MARCA 5",
                            "isSku": true,
                            "onInvoice_discount_execution": null,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_008",
                            "max_limit": "700",
                            "on_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 116.66666666666667
                                },
                                {
                                    "discount": "2",
                                    "label": 233.33333333333334
                                },
                                {
                                    "discount": "3",
                                    "label": 350
                                },
                                {
                                    "discount": "4",
                                    "label": 466.6666666666667
                                },
                                {
                                    "discount": "5",
                                    "label": 583.3333333333334
                                },
                                {
                                    "discount": "6",
                                    "label": 700
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 116.66666666666667
                                },
                                {
                                    "discount": "2",
                                    "label": 233.33333333333334
                                },
                                {
                                    "discount": "3",
                                    "label": 350
                                },
                                {
                                    "discount": "4",
                                    "label": 466.6666666666667
                                },
                                {
                                    "discount": "5",
                                    "label": 583.3333333333334
                                },
                                {
                                    "discount": "6",
                                    "label": 700
                                }
                            ]
                        },
                        {
                            "name": "SKU MARCA 6",
                            "isSku": true,
                            "onInvoice_discount_execution": "FREE_GOODS",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_009",
                            "max_limit": "2000",
                            "on_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 333.3333333333333
                                },
                                {
                                    "discount": "2",
                                    "label": 666.6666666666666
                                },
                                {
                                    "discount": "3",
                                    "label": 1000
                                },
                                {
                                    "discount": "4",
                                    "label": 1333.3333333333333
                                },
                                {
                                    "discount": "5",
                                    "label": 1666.6666666666665
                                },
                                {
                                    "discount": "6",
                                    "label": 2000
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 333.3333333333333
                                },
                                {
                                    "discount": "2",
                                    "label": 666.6666666666666
                                },
                                {
                                    "discount": "3",
                                    "label": 1000
                                },
                                {
                                    "discount": "4",
                                    "label": 1333.3333333333333
                                },
                                {
                                    "discount": "5",
                                    "label": 1666.6666666666665
                                },
                                {
                                    "discount": "6",
                                    "label": 2000
                                }
                            ]
                        },
                        {
                            "name": "SKU MARCA 7",
                            "isSku": true,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_010",
                            "max_limit": "4000",
                            "on_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 666.6666666666666
                                },
                                {
                                    "discount": "2",
                                    "label": 1333.3333333333333
                                },
                                {
                                    "discount": "3",
                                    "label": 2000
                                },
                                {
                                    "discount": "4",
                                    "label": 2666.6666666666665
                                },
                                {
                                    "discount": "5",
                                    "label": 3333.333333333333
                                },
                                {
                                    "discount": "6",
                                    "label": 4000
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "1",
                                    "label": 666.6666666666666
                                },
                                {
                                    "discount": "2",
                                    "label": 1333.3333333333333
                                },
                                {
                                    "discount": "3",
                                    "label": 2000
                                },
                                {
                                    "discount": "4",
                                    "label": 2666.6666666666665
                                },
                                {
                                    "discount": "5",
                                    "label": 3333.333333333333
                                },
                                {
                                    "discount": "6",
                                    "label": 4000
                                }
                            ]
                        }
                    ]
                },
                "available_orders": {
                    "orders": [
                        {
                            "account_no": "Proforma   -  12345",
                            "order_no": null,
                            "sku": "12345",
                            "product_details": [
                                {
                                    "name": "Novassimo 250mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_001",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 457 mg/5 ml 70 ml",
                                    "price": "13.61",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "60000000116507",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "60",
                                        "sku": "AUGMENTIN",
                                        "purchased": "8"
                                    }
                                },
                                {
                                    "name": "Novassimo 450mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_002",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 1g",
                                    "price": "15.01",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640351",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "Novassimo 5000mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_003",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN ES",
                                    "price": "110.59",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640341",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_001",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 2 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_002",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_001",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "AVODART c?psulas moles 0.5mg x 60",
                                    "price": "21.84",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "283062",
                                    "brand": "AVODART",
                                    "brandName": "AVODART",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AVODART",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "25",
                                        "sku": "AVODART",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 2
                                            },
                                            {
                                                "discount": "14.0",
                                                "label": 3
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 4
                                            },
                                            {
                                                "discount": "29.0",
                                                "label": 5
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 6
                                            },
                                            {
                                                "discount": "31.0",
                                                "label": 25
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "sku 2 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_002",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "sku 3 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_003",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "marca 1 sku 1 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_001",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 30
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 1 sku 2 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_002",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 60
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 80
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 1 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_001",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 2 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_002",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 3 sku 1 ambos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_006_SKU_001",
                                    "brand": "P_BRD_006",
                                    "brandName": "SKU MARCA 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "12.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "15.0",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 1 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_001",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "1",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 30
                                            },
                                            {
                                                "discount": "2",
                                                "label": 40
                                            },
                                            {
                                                "discount": "3",
                                                "label": 50
                                            },
                                            {
                                                "discount": "5",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 2 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_002",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 40
                                            },
                                            {
                                                "discount": "2",
                                                "label": 60
                                            },
                                            {
                                                "discount": "4",
                                                "label": 80
                                            },
                                            {
                                                "discount": "6",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 1 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_001",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 2 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_002",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 6 sku 1 ambos produtos gratuitos",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_009_SKU_001",
                                    "brand": "P_BRD_009",
                                    "brandName": "SKU MARCA 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 1 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_001",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 2 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_002",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "account_no": "Proforma   -  543543454",
                            "order_no": null,
                            "sku": "543543454",
                            "product_details": [
                                {
                                    "name": "Novassimo 250mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_001",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 457 mg/5 ml 70 ml",
                                    "price": "13.61",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "60000000116507",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "60",
                                        "sku": "AUGMENTIN",
                                        "purchased": "8"
                                    }
                                },
                                {
                                    "name": "Novassimo 450mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_002",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 1g",
                                    "price": "15.01",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640351",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "Novassimo 5000mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_003",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN ES",
                                    "price": "110.59",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640341",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_001",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 2 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_002",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_001",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "AVODART c?psulas moles 0.5mg x 60",
                                    "price": "21.84",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "283062",
                                    "brand": "AVODART",
                                    "brandName": "AVODART",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AVODART",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "25",
                                        "sku": "AVODART",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 2
                                            },
                                            {
                                                "discount": "14.0",
                                                "label": 3
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 4
                                            },
                                            {
                                                "discount": "29.0",
                                                "label": 5
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 6
                                            },
                                            {
                                                "discount": "31.0",
                                                "label": 25
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "sku 2 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_002",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "sku 3 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_003",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "marca 1 sku 1 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_001",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 30
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 1 sku 2 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_002",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 60
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 80
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 1 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_001",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 2 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_002",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 3 sku 1 ambos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_006_SKU_001",
                                    "brand": "P_BRD_006",
                                    "brandName": "SKU MARCA 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "12.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "15.0",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 1 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_001",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "1",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 30
                                            },
                                            {
                                                "discount": "2",
                                                "label": 40
                                            },
                                            {
                                                "discount": "3",
                                                "label": 50
                                            },
                                            {
                                                "discount": "5",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 2 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_002",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 40
                                            },
                                            {
                                                "discount": "2",
                                                "label": 60
                                            },
                                            {
                                                "discount": "4",
                                                "label": 80
                                            },
                                            {
                                                "discount": "6",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 1 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_001",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 2 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_002",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 6 sku 1 ambos produtos gratuitos",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_009_SKU_001",
                                    "brand": "P_BRD_009",
                                    "brandName": "SKU MARCA 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 1 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_001",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 2 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_002",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "account_no": "ABC Pharmacy   -  765465465",
                            "order_no": null,
                            "sku": "765465465",
                            "product_details": [
                                {
                                    "name": "Novassimo 250mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_001",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 457 mg/5 ml 70 ml",
                                    "price": "13.61",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "60000000116507",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "60",
                                        "sku": "AUGMENTIN",
                                        "purchased": "8"
                                    }
                                },
                                {
                                    "name": "Novassimo 450mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_002",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 1g",
                                    "price": "15.01",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640351",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "Novassimo 5000mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_003",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN ES",
                                    "price": "110.59",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640341",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_001",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 2 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_002",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_001",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "AVODART c?psulas moles 0.5mg x 60",
                                    "price": "21.84",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "283062",
                                    "brand": "AVODART",
                                    "brandName": "AVODART",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AVODART",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "25",
                                        "sku": "AVODART",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 2
                                            },
                                            {
                                                "discount": "14.0",
                                                "label": 3
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 4
                                            },
                                            {
                                                "discount": "29.0",
                                                "label": 5
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 6
                                            },
                                            {
                                                "discount": "31.0",
                                                "label": 25
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "sku 2 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_002",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "sku 3 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_003",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "marca 1 sku 1 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_001",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 30
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 1 sku 2 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_002",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 60
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 80
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 1 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_001",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 2 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_002",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 3 sku 1 ambos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_006_SKU_001",
                                    "brand": "P_BRD_006",
                                    "brandName": "SKU MARCA 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "12.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "15.0",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 1 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_001",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "1",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 30
                                            },
                                            {
                                                "discount": "2",
                                                "label": 40
                                            },
                                            {
                                                "discount": "3",
                                                "label": 50
                                            },
                                            {
                                                "discount": "5",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 2 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_002",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 40
                                            },
                                            {
                                                "discount": "2",
                                                "label": 60
                                            },
                                            {
                                                "discount": "4",
                                                "label": 80
                                            },
                                            {
                                                "discount": "6",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 1 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_001",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 2 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_002",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 6 sku 1 ambos produtos gratuitos",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_009_SKU_001",
                                    "brand": "P_BRD_009",
                                    "brandName": "SKU MARCA 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 1 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_001",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 2 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_002",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "account_no": "Proforma   -  12356",
                            "order_no": null,
                            "sku": "12356",
                            "product_details": [
                                {
                                    "name": "Novassimo 250mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_001",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 457 mg/5 ml 70 ml",
                                    "price": "13.61",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "60000000116507",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "60",
                                        "sku": "AUGMENTIN",
                                        "purchased": "8"
                                    }
                                },
                                {
                                    "name": "Novassimo 450mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_002",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 1g",
                                    "price": "15.01",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640351",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "Novassimo 5000mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_003",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN ES",
                                    "price": "110.59",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640341",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_001",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 2 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_002",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_001",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "AVODART c?psulas moles 0.5mg x 60",
                                    "price": "21.84",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "283062",
                                    "brand": "AVODART",
                                    "brandName": "AVODART",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AVODART",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "25",
                                        "sku": "AVODART",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 2
                                            },
                                            {
                                                "discount": "14.0",
                                                "label": 3
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 4
                                            },
                                            {
                                                "discount": "29.0",
                                                "label": 5
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 6
                                            },
                                            {
                                                "discount": "31.0",
                                                "label": 25
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "sku 2 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_002",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "sku 3 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_003",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "marca 1 sku 1 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_001",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 30
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 1 sku 2 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_002",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 60
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 80
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 1 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_001",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 2 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_002",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 3 sku 1 ambos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_006_SKU_001",
                                    "brand": "P_BRD_006",
                                    "brandName": "SKU MARCA 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "12.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "15.0",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 1 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_001",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "1",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 30
                                            },
                                            {
                                                "discount": "2",
                                                "label": 40
                                            },
                                            {
                                                "discount": "3",
                                                "label": 50
                                            },
                                            {
                                                "discount": "5",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 2 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_002",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 40
                                            },
                                            {
                                                "discount": "2",
                                                "label": 60
                                            },
                                            {
                                                "discount": "4",
                                                "label": 80
                                            },
                                            {
                                                "discount": "6",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 1 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_001",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 2 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_002",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 6 sku 1 ambos produtos gratuitos",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_009_SKU_001",
                                    "brand": "P_BRD_009",
                                    "brandName": "SKU MARCA 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 1 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_001",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 2 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_002",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
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
                            "account_no": "PRO123 - Account: 12345",
                            "order_no": "2303000006",
                            "status": "CONDITIONAL",
                            "currentPeriod": true,
                            "delivery_date": "",
                            "ordered_date": "2023-03-17",
                            "sku": "12345",
                            "on_invoice": true,
                            "internalOrderStatus": "OPEN",
                            "wholesalerCode": "PRO123",
                            "wholesalerName": "Proforma",
                            "legalIdCode": "12356",
                            "product_details": [
                                {
                                    "brandName": "AUGMENTIN",
                                    "name": "AUGMENTIN DUO 457 mg/5 ml 70 ml",
                                    "price": "13.61",
                                    "units": "8",
                                    "free_goods": "0",
                                    "discount": "0",
                                    "payterm": null,
                                    "sku": "60000000116507",
                                    "brand": "AUGMENTIN",
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
                "appstate": {
                    "orderCartData": [
                        "AUGMENTIN",
                        "P_BRD_001"
                    ],
                    "updateCartData": {},
                    "cartData": {
                        "12345_18d96491-8901-4605-b474-f023827a26f7": {
                            "P_BRD_001_SKU_001": "2"
                        }
                    },
                    "wholesalerAccountData": [
                        {
                            "account_no": "Proforma   -  12345",
                            "order_no": null,
                            "sku": "12345",
                            "product_details": [
                                {
                                    "name": "Novassimo 250mg",
                                    "price": "20",
                                    "units": "2",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_001",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "2",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    },
                                    "quantity": "2"
                                },
                                {
                                    "name": "AUGMENTIN DUO 457 mg/5 ml 70 ml",
                                    "price": "13.61",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "60000000116507",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "60",
                                        "sku": "AUGMENTIN",
                                        "purchased": "8"
                                    }
                                },
                                {
                                    "name": "Novassimo 450mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_002",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 1g",
                                    "price": "15.01",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640351",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "Novassimo 5000mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_003",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN ES",
                                    "price": "110.59",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640341",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_001",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 2 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_002",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_001",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "AVODART c?psulas moles 0.5mg x 60",
                                    "price": "21.84",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "283062",
                                    "brand": "AVODART",
                                    "brandName": "AVODART",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AVODART",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "25",
                                        "sku": "AVODART",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 2
                                            },
                                            {
                                                "discount": "14.0",
                                                "label": 3
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 4
                                            },
                                            {
                                                "discount": "29.0",
                                                "label": 5
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 6
                                            },
                                            {
                                                "discount": "31.0",
                                                "label": 25
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "sku 2 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_002",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "sku 3 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_003",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "marca 1 sku 1 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_001",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 30
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 1 sku 2 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_002",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 60
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 80
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 1 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_001",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 2 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_002",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 3 sku 1 ambos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_006_SKU_001",
                                    "brand": "P_BRD_006",
                                    "brandName": "SKU MARCA 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "12.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "15.0",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 1 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_001",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "1",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 30
                                            },
                                            {
                                                "discount": "2",
                                                "label": 40
                                            },
                                            {
                                                "discount": "3",
                                                "label": 50
                                            },
                                            {
                                                "discount": "5",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 2 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_002",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 40
                                            },
                                            {
                                                "discount": "2",
                                                "label": 60
                                            },
                                            {
                                                "discount": "4",
                                                "label": 80
                                            },
                                            {
                                                "discount": "6",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 1 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_001",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 2 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_002",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 6 sku 1 ambos produtos gratuitos",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_009_SKU_001",
                                    "brand": "P_BRD_009",
                                    "brandName": "SKU MARCA 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 1 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_001",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 2 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_002",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                }
                            ],
                            "_id": "18d96491-8901-4605-b474-f023827a26f7",
                            "brandsku": "12345-P_BRD_001",
                            "ordered_date": "Mar 17, 23"
                        }
                    ],
                    "discountData": {},
                    "brandArr": {
                        "AUGMENTIN": [
                            "12345",
                            "12345"
                        ],
                        "P_BRD_001": [
                            "12345"
                        ]
                    }
                },
                "new_orders": {
                    "orders": [
                        {
                            "account_no": "Proforma   -  12345",
                            "order_no": null,
                            "sku": "12345",
                            "product_details": [
                                {
                                    "name": "Novassimo 250mg",
                                    "price": "20",
                                    "units": "2",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_001",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "2",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    },
                                    "quantity": "2"
                                },
                                {
                                    "name": "AUGMENTIN DUO 457 mg/5 ml 70 ml",
                                    "price": "13.61",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "60000000116507",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "60",
                                        "sku": "AUGMENTIN",
                                        "purchased": "8"
                                    }
                                },
                                {
                                    "name": "Novassimo 450mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_002",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 1g",
                                    "price": "15.01",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640351",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "Novassimo 5000mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_003",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN ES",
                                    "price": "110.59",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640341",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_001",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 2 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_002",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_001",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "AVODART c?psulas moles 0.5mg x 60",
                                    "price": "21.84",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "283062",
                                    "brand": "AVODART",
                                    "brandName": "AVODART",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AVODART",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "25",
                                        "sku": "AVODART",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 2
                                            },
                                            {
                                                "discount": "14.0",
                                                "label": 3
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 4
                                            },
                                            {
                                                "discount": "29.0",
                                                "label": 5
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 6
                                            },
                                            {
                                                "discount": "31.0",
                                                "label": 25
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "sku 2 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_002",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "sku 3 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_003",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "marca 1 sku 1 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_001",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 30
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 1 sku 2 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_002",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 60
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 80
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 1 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_001",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 2 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_002",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 3 sku 1 ambos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_006_SKU_001",
                                    "brand": "P_BRD_006",
                                    "brandName": "SKU MARCA 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "12.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "15.0",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 1 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_001",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "1",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 30
                                            },
                                            {
                                                "discount": "2",
                                                "label": 40
                                            },
                                            {
                                                "discount": "3",
                                                "label": 50
                                            },
                                            {
                                                "discount": "5",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 2 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_002",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 40
                                            },
                                            {
                                                "discount": "2",
                                                "label": 60
                                            },
                                            {
                                                "discount": "4",
                                                "label": 80
                                            },
                                            {
                                                "discount": "6",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 1 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_001",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 2 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_002",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 6 sku 1 ambos produtos gratuitos",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_009_SKU_001",
                                    "brand": "P_BRD_009",
                                    "brandName": "SKU MARCA 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 1 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_001",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 2 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_002",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                }
                            ],
                            "_id": "18d96491-8901-4605-b474-f023827a26f7",
                            "brandsku": "12345-P_BRD_001",
                            "ordered_date": "Mar 17, 23"
                        }
                    ]
                },
                "selected_brand": "P_BRD_001",
                "profileDetails": {
                    "firstName": "Saravanan",
                    "lastName": "Ravi",
                    "phoneNumber": "+919345336978",
                    "email": "rsaravanangym@gmail.com"
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
                            },
                            {
                                "accountNumber": "543543454",
                                "legalIdCode": "654645645",
                                "invoice": "https://cdn.yellowmessenger.com/ugYueuLRKVjI1678701993186.png",
                                "accountStatus": "PENDING_VERIFICATION"
                            },
                            {
                                "accountNumber": "12356",
                                "legalIdCode": "12365",
                                "invoice": "https://cdn.yellowmessenger.com/TT234JgQglSK1678783363918.png",
                                "accountStatus": "PENDING_VERIFICATION"
                            }
                        ]
                    }
                ]
            });
            break;
        case "18":
            ToApp("userwelcome-screen", {
                "start_date": "2022-09-09",
                "last_date": "2023-12-31",
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
                "download_url": "LOC,Period,Order Date,Order Type,Internal Order Status,Internal Order Number,External Order Number,External Order Status,External Order Date,Wholesaler Code,Account Code,Legal Id Code,Brand #,Brand,EAN,SKU#,SKU,Requested Volume,Invoiced Volume,On Invoice Discount,On Invoice Free Goods,On Invoice Payment Terms,Off Invoice Discount,Off Invoice Free Goods,Offer Type,User Identifier,Order Id,Delete Record(YES/NO)\n",
                "totalcheckout": "",
                "plan_progress": {
                    "title": "Plan Progress",
                    "last_date": "Fri Feb 24 2023",
                    "brands": [
                        {
                            "name": "AUGMENTIN",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": 100,
                            "max_limit": "260",
                            "sku": "AUGMENTIN",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 17
                                },
                                {
                                    "discount": "20.0",
                                    "label": 25
                                },
                                {
                                    "discount": "27.0",
                                    "label": 33
                                },
                                {
                                    "discount": "35.0",
                                    "label": 41
                                },
                                {
                                    "discount": "36.0",
                                    "label": 49
                                },
                                {
                                    "discount": "37.0",
                                    "label": 260
                                }
                            ],
                            "onInvoice_discount_execution": "FINANCIAL",
                            "eligible_discount": "37.0"
                        },
                        {
                            "name": "Novo 1",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "max_limit": "1500",
                            "sku": "P_BRD_001",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 150
                                },
                                {
                                    "discount": "3.0",
                                    "label": 300
                                },
                                {
                                    "discount": "4.0",
                                    "label": 450
                                },
                                {
                                    "discount": "5.0",
                                    "label": 600
                                },
                                {
                                    "discount": "6.0",
                                    "label": 900
                                },
                                {
                                    "discount": "7.0",
                                    "label": 1500
                                }
                            ],
                            "onInvoice_discount_execution": "FINANCIAL"
                        },
                        {
                            "name": "Marca 2 fora da fatura",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "max_limit": "400",
                            "sku": "P_BRD_002",
                            "off_invoice_range": [
                                {
                                    "discount": "2.0",
                                    "label": 200
                                },
                                {
                                    "discount": "3.0",
                                    "label": 220
                                },
                                {
                                    "discount": "4.0",
                                    "label": 240
                                },
                                {
                                    "discount": "5.0",
                                    "label": 260
                                },
                                {
                                    "discount": "6.0",
                                    "label": 280
                                },
                                {
                                    "discount": "7.0",
                                    "label": 400
                                }
                            ],
                            "offInvoice_discount_execution": "FINANCIAL"
                        },
                        {
                            "name": "Marca 3 ambos",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "max_limit": "1050",
                            "sku": "P_BRD_003",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 450
                                },
                                {
                                    "discount": "7.0",
                                    "label": 600
                                },
                                {
                                    "discount": "8.0",
                                    "label": 750
                                },
                                {
                                    "discount": "9.0",
                                    "label": 900
                                },
                                {
                                    "discount": "10.0",
                                    "label": 1050
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 450
                                },
                                {
                                    "discount": "10.0",
                                    "label": 600
                                },
                                {
                                    "discount": "15.0",
                                    "label": 750
                                },
                                {
                                    "discount": "20.0",
                                    "label": 900
                                },
                                {
                                    "discount": "30.0",
                                    "label": 1050
                                }
                            ],
                            "offInvoice_discount_execution": "FINANCIAL",
                            "onInvoice_discount_execution": "FINANCIAL"
                        },
                        {
                            "name": "AVODART",
                            "isSku": true,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "AVODART",
                            "max_limit": "25",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 4.166666666666667
                                },
                                {
                                    "discount": "3.0",
                                    "label": 8.333333333333334
                                },
                                {
                                    "discount": "4.0",
                                    "label": 12.5
                                },
                                {
                                    "discount": "5.0",
                                    "label": 16.666666666666668
                                },
                                {
                                    "discount": "6.0",
                                    "label": 20.833333333333336
                                },
                                {
                                    "discount": "7.0",
                                    "label": 25
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 4.166666666666667
                                },
                                {
                                    "discount": "3.0",
                                    "label": 8.333333333333334
                                },
                                {
                                    "discount": "4.0",
                                    "label": 12.5
                                },
                                {
                                    "discount": "5.0",
                                    "label": 16.666666666666668
                                },
                                {
                                    "discount": "6.0",
                                    "label": 20.833333333333336
                                },
                                {
                                    "discount": "7.0",
                                    "label": 25
                                }
                            ]
                        },
                        {
                            "name": "SKU MARCA 1",
                            "isSku": true,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_004",
                            "max_limit": "250",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 41.666666666666664
                                },
                                {
                                    "discount": "3.0",
                                    "label": 83.33333333333333
                                },
                                {
                                    "discount": "4.0",
                                    "label": 125
                                },
                                {
                                    "discount": "5.0",
                                    "label": 166.66666666666666
                                },
                                {
                                    "discount": "6.0",
                                    "label": 208.33333333333331
                                },
                                {
                                    "discount": "7.0",
                                    "label": 250
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 41.666666666666664
                                },
                                {
                                    "discount": "3.0",
                                    "label": 83.33333333333333
                                },
                                {
                                    "discount": "4.0",
                                    "label": 125
                                },
                                {
                                    "discount": "5.0",
                                    "label": 166.66666666666666
                                },
                                {
                                    "discount": "6.0",
                                    "label": 208.33333333333331
                                },
                                {
                                    "discount": "7.0",
                                    "label": 250
                                }
                            ]
                        },
                        {
                            "name": "SKU MARCA 2",
                            "isSku": true,
                            "onInvoice_discount_execution": null,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_005",
                            "max_limit": "700",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 116.66666666666667
                                },
                                {
                                    "discount": "3.0",
                                    "label": 233.33333333333334
                                },
                                {
                                    "discount": "4.0",
                                    "label": 350
                                },
                                {
                                    "discount": "5.0",
                                    "label": 466.6666666666667
                                },
                                {
                                    "discount": "6.0",
                                    "label": 583.3333333333334
                                },
                                {
                                    "discount": "7.0",
                                    "label": 700
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 116.66666666666667
                                },
                                {
                                    "discount": "3.0",
                                    "label": 233.33333333333334
                                },
                                {
                                    "discount": "4.0",
                                    "label": 350
                                },
                                {
                                    "discount": "5.0",
                                    "label": 466.6666666666667
                                },
                                {
                                    "discount": "6.0",
                                    "label": 583.3333333333334
                                },
                                {
                                    "discount": "7.0",
                                    "label": 700
                                }
                            ]
                        },
                        {
                            "name": "SKU MARCA 3",
                            "isSku": true,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_006",
                            "max_limit": "2000",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 333.3333333333333
                                },
                                {
                                    "discount": "3.0",
                                    "label": 666.6666666666666
                                },
                                {
                                    "discount": "4.0",
                                    "label": 1000
                                },
                                {
                                    "discount": "5.0",
                                    "label": 1333.3333333333333
                                },
                                {
                                    "discount": "6.0",
                                    "label": 1666.6666666666665
                                },
                                {
                                    "discount": "7.0",
                                    "label": 2000
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 333.3333333333333
                                },
                                {
                                    "discount": "3.0",
                                    "label": 666.6666666666666
                                },
                                {
                                    "discount": "4.0",
                                    "label": 1000
                                },
                                {
                                    "discount": "5.0",
                                    "label": 1333.3333333333333
                                },
                                {
                                    "discount": "6.0",
                                    "label": 1666.6666666666665
                                },
                                {
                                    "discount": "7.0",
                                    "label": 2000
                                }
                            ]
                        },
                        {
                            "name": "SKU MARCA 4",
                            "isSku": true,
                            "onInvoice_discount_execution": "FREE_GOODS",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_007",
                            "max_limit": "250",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 41.666666666666664
                                },
                                {
                                    "discount": "3.0",
                                    "label": 83.33333333333333
                                },
                                {
                                    "discount": "4.0",
                                    "label": 125
                                },
                                {
                                    "discount": "5.0",
                                    "label": 166.66666666666666
                                },
                                {
                                    "discount": "6.0",
                                    "label": 208.33333333333331
                                },
                                {
                                    "discount": "7.0",
                                    "label": 250
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 41.666666666666664
                                },
                                {
                                    "discount": "3.0",
                                    "label": 83.33333333333333
                                },
                                {
                                    "discount": "4.0",
                                    "label": 125
                                },
                                {
                                    "discount": "5.0",
                                    "label": 166.66666666666666
                                },
                                {
                                    "discount": "6.0",
                                    "label": 208.33333333333331
                                },
                                {
                                    "discount": "7.0",
                                    "label": 250
                                }
                            ]
                        },
                        {
                            "name": "SKU MARCA 5",
                            "isSku": true,
                            "onInvoice_discount_execution": null,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_008",
                            "max_limit": "700",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 116.66666666666667
                                },
                                {
                                    "discount": "3.0",
                                    "label": 233.33333333333334
                                },
                                {
                                    "discount": "4.0",
                                    "label": 350
                                },
                                {
                                    "discount": "5.0",
                                    "label": 466.6666666666667
                                },
                                {
                                    "discount": "6.0",
                                    "label": 583.3333333333334
                                },
                                {
                                    "discount": "7.0",
                                    "label": 700
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 116.66666666666667
                                },
                                {
                                    "discount": "3.0",
                                    "label": 233.33333333333334
                                },
                                {
                                    "discount": "4.0",
                                    "label": 350
                                },
                                {
                                    "discount": "5.0",
                                    "label": 466.6666666666667
                                },
                                {
                                    "discount": "6.0",
                                    "label": 583.3333333333334
                                },
                                {
                                    "discount": "7.0",
                                    "label": 700
                                }
                            ]
                        },
                        {
                            "name": "SKU MARCA 6",
                            "isSku": true,
                            "onInvoice_discount_execution": "FREE_GOODS",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_009",
                            "max_limit": "2000",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 333.3333333333333
                                },
                                {
                                    "discount": "3.0",
                                    "label": 666.6666666666666
                                },
                                {
                                    "discount": "4.0",
                                    "label": 1000
                                },
                                {
                                    "discount": "5.0",
                                    "label": 1333.3333333333333
                                },
                                {
                                    "discount": "6.0",
                                    "label": 1666.6666666666665
                                },
                                {
                                    "discount": "7.0",
                                    "label": 2000
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 333.3333333333333
                                },
                                {
                                    "discount": "3.0",
                                    "label": 666.6666666666666
                                },
                                {
                                    "discount": "4.0",
                                    "label": 1000
                                },
                                {
                                    "discount": "5.0",
                                    "label": 1333.3333333333333
                                },
                                {
                                    "discount": "6.0",
                                    "label": 1666.6666666666665
                                },
                                {
                                    "discount": "7.0",
                                    "label": 2000
                                }
                            ]
                        },
                        {
                            "name": "SKU MARCA 7",
                            "isSku": true,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "P_BRD_010",
                            "max_limit": "4000",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 666.6666666666666
                                },
                                {
                                    "discount": "3.0",
                                    "label": 1333.3333333333333
                                },
                                {
                                    "discount": "4.0",
                                    "label": 2000
                                },
                                {
                                    "discount": "5.0",
                                    "label": 2666.6666666666665
                                },
                                {
                                    "discount": "6.0",
                                    "label": 3333.333333333333
                                },
                                {
                                    "discount": "7.0",
                                    "label": 4000
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 666.6666666666666
                                },
                                {
                                    "discount": "3.0",
                                    "label": 1333.3333333333333
                                },
                                {
                                    "discount": "4.0",
                                    "label": 2000
                                },
                                {
                                    "discount": "5.0",
                                    "label": 2666.6666666666665
                                },
                                {
                                    "discount": "6.0",
                                    "label": 3333.333333333333
                                },
                                {
                                    "discount": "7.0",
                                    "label": 4000
                                }
                            ]
                        }
                    ]
                },
                "available_orders": {
                    "orders": [
                        {
                            "account_no": "Proforma   -  F4444",
                            "order_no": null,
                            "sku": "F4444",
                            "product_details": [
                                {
                                    "name": "Novassimo 250mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_001",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 457 mg/5 ml 70 ml",
                                    "price": "3.61",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "60000000116507",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "60",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "Novassimo 450mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_002",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 1g",
                                    "price": "5.01",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640351",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "Novassimo 5000mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_003",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN ES",
                                    "price": "10.59",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640341",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_001",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 2 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_002",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_001",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "AVODART c?psulas moles 0.5mg x 60",
                                    "price": "21.84",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "283062",
                                    "brand": "AVODART",
                                    "brandName": "AVODART",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AVODART",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "25",
                                        "sku": "AVODART",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 2
                                            },
                                            {
                                                "discount": "14.0",
                                                "label": 3
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 4
                                            },
                                            {
                                                "discount": "29.0",
                                                "label": 5
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 6
                                            },
                                            {
                                                "discount": "31.0",
                                                "label": 25
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "sku 2 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_002",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "sku 3 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_003",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "marca 1 sku 1 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_001",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 30
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 1 sku 2 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_002",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 60
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 80
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 1 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_001",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 2 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_002",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 3 sku 1 ambos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_006_SKU_001",
                                    "brand": "P_BRD_006",
                                    "brandName": "SKU MARCA 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "12.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "15.0",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 1 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_001",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "1",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 30
                                            },
                                            {
                                                "discount": "2",
                                                "label": 40
                                            },
                                            {
                                                "discount": "3",
                                                "label": 50
                                            },
                                            {
                                                "discount": "5",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 2 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_002",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 40
                                            },
                                            {
                                                "discount": "2",
                                                "label": 60
                                            },
                                            {
                                                "discount": "4",
                                                "label": 80
                                            },
                                            {
                                                "discount": "6",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 1 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_001",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 2 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_002",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 6 sku 1 ambos produtos gratuitos",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_009_SKU_001",
                                    "brand": "P_BRD_009",
                                    "brandName": "SKU MARCA 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 1 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_001",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 2 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_002",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "account_no": "ABC Pharmacy   -  TR5566",
                            "order_no": null,
                            "sku": "TR5566",
                            "product_details": [
                                {
                                    "name": "Novassimo 250mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_001",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 457 mg/5 ml 70 ml",
                                    "price": "3.61",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "60000000116507",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "60",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "Novassimo 450mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_002",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 1g",
                                    "price": "5.01",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640351",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "Novassimo 5000mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_003",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN ES",
                                    "price": "10.59",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640341",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_001",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 2 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_002",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_001",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "AVODART c?psulas moles 0.5mg x 60",
                                    "price": "21.84",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "283062",
                                    "brand": "AVODART",
                                    "brandName": "AVODART",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AVODART",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "25",
                                        "sku": "AVODART",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 2
                                            },
                                            {
                                                "discount": "14.0",
                                                "label": 3
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 4
                                            },
                                            {
                                                "discount": "29.0",
                                                "label": 5
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 6
                                            },
                                            {
                                                "discount": "31.0",
                                                "label": 25
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "sku 2 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_002",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "sku 3 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_003",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "marca 1 sku 1 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_001",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 30
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 1 sku 2 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_002",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 60
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 80
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 1 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_001",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 2 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_002",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 3 sku 1 ambos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_006_SKU_001",
                                    "brand": "P_BRD_006",
                                    "brandName": "SKU MARCA 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "12.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "15.0",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 1 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_001",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "1",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 30
                                            },
                                            {
                                                "discount": "2",
                                                "label": 40
                                            },
                                            {
                                                "discount": "3",
                                                "label": 50
                                            },
                                            {
                                                "discount": "5",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 2 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_002",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 40
                                            },
                                            {
                                                "discount": "2",
                                                "label": 60
                                            },
                                            {
                                                "discount": "4",
                                                "label": 80
                                            },
                                            {
                                                "discount": "6",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 1 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_001",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 2 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_002",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 6 sku 1 ambos produtos gratuitos",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_009_SKU_001",
                                    "brand": "P_BRD_009",
                                    "brandName": "SKU MARCA 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 1 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_001",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 2 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_002",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                "previous_orders": {
                    "orders": []
                },
                "rebates_orders": {
                    "orders": []
                },
                "source": "Desktop",
                "profileDetails": {
                    "firstName": "Saravanan",
                    "lastName": "Ravi",
                    "phoneNumber": "+918122977781",
                    "email": "nuvento-saravanan.r@yellow.ai"
                },
                "notifications": "yes",
                "associatedAccounts": [
                    {
                        "wholeSalerCode": "ABC001",
                        "wholeSalerName": "ABC Pharmacy",
                        "wholeSalerStatus": "ACTIVE",
                        "accounts": [
                            {
                                "accountNumber": "TR5566",
                                "legalIdCode": "YU6655",
                                "invoice": "https://cdn.yellowmessenger.com/b9af395c7bfabbff5fa070e659b914df/575597720949586.jpg",
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
                                "accountNumber": "F4444",
                                "legalIdCode": "L4444",
                                "invoice": "https://cdn.yellowmessenger.com/08c2076c7c447b68cb64e9e90093e3e3/958295118410844.jpg",
                                "accountStatus": "PENDING_VERIFICATION"
                            }
                        ]
                    }
                ],
                "selected_brand": "AUGMENTIN",
                "new_orders": {
                    "orders": [
                        {
                            "account_no": "Proforma   -  F4444",
                            "order_no": null,
                            "sku": "F4444",
                            "product_details": [
                                {
                                    "name": "Novassimo 250mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_001",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 457 mg/5 ml 70 ml",
                                    "price": "3.61",
                                    "units": "100",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "60000000116507",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "100",
                                        "max_limit": "60",
                                        "sku": "AUGMENTIN"
                                    },
                                    "quantity": "100"
                                },
                                {
                                    "name": "Novassimo 450mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_002",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 1g",
                                    "price": "5.01",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640351",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "Novassimo 5000mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_003",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN ES",
                                    "price": "10.59",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640341",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_001",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 2 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_002",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_001",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "AVODART c?psulas moles 0.5mg x 60",
                                    "price": "21.84",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "283062",
                                    "brand": "AVODART",
                                    "brandName": "AVODART",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AVODART",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "25",
                                        "sku": "AVODART",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 2
                                            },
                                            {
                                                "discount": "14.0",
                                                "label": 3
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 4
                                            },
                                            {
                                                "discount": "29.0",
                                                "label": 5
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 6
                                            },
                                            {
                                                "discount": "31.0",
                                                "label": 25
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "sku 2 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_002",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "sku 3 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_003",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "marca 1 sku 1 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_001",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 30
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 1 sku 2 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_002",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 60
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 80
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 1 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_001",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 2 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_002",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 3 sku 1 ambos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_006_SKU_001",
                                    "brand": "P_BRD_006",
                                    "brandName": "SKU MARCA 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "12.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "15.0",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 1 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_001",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "1",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 30
                                            },
                                            {
                                                "discount": "2",
                                                "label": 40
                                            },
                                            {
                                                "discount": "3",
                                                "label": 50
                                            },
                                            {
                                                "discount": "5",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 2 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_002",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 40
                                            },
                                            {
                                                "discount": "2",
                                                "label": 60
                                            },
                                            {
                                                "discount": "4",
                                                "label": 80
                                            },
                                            {
                                                "discount": "6",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 1 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_001",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 2 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_002",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 6 sku 1 ambos produtos gratuitos",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_009_SKU_001",
                                    "brand": "P_BRD_009",
                                    "brandName": "SKU MARCA 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 1 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_001",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 2 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_002",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                }
                            ],
                            "_id": "034eb239-1925-4a49-8be0-41924e75562d",
                            "brandsku": "F4444-AUGMENTIN",
                            "ordered_date": "Feb 26, 23"
                        }
                    ]
                },
                "appstate": {
                    "orderCartData": [
                        "AUGMENTIN"
                    ],
                    "updateCartData": {},
                    "cartData": {
                        "F4444_034eb239-1925-4a49-8be0-41924e75562d": {
                            "60000000116507": "100"
                        }
                    },
                    "wholesalerAccountData": [
                        {
                            "account_no": "Proforma   -  F4444",
                            "order_no": null,
                            "sku": "F4444",
                            "product_details": [
                                {
                                    "name": "Novassimo 250mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_001",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 457 mg/5 ml 70 ml",
                                    "price": "3.61",
                                    "units": "100",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "60000000116507",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "100",
                                        "max_limit": "60",
                                        "sku": "AUGMENTIN"
                                    },
                                    "quantity": "100"
                                },
                                {
                                    "name": "Novassimo 450mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_002",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN DUO 1g",
                                    "price": "5.01",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640351",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "Novassimo 5000mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_001_SKU_003",
                                    "brand": "P_BRD_001",
                                    "brandName": "Novo 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Novo 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "P_BRD_001"
                                    }
                                },
                                {
                                    "name": "AUGMENTIN ES",
                                    "price": "10.59",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "5168640341",
                                    "brand": "AUGMENTIN",
                                    "brandName": "AUGMENTIN",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AUGMENTIN",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "AUGMENTIN"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_001",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 2 marca 2 fora da fatura",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_002_SKU_002",
                                    "brand": "P_BRD_002",
                                    "brandName": "Marca 2 fora da fatura",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 2 fora da fatura",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "200",
                                        "sku": "P_BRD_002"
                                    }
                                },
                                {
                                    "name": "sku 1 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_001",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "AVODART c?psulas moles 0.5mg x 60",
                                    "price": "21.84",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "283062",
                                    "brand": "AVODART",
                                    "brandName": "AVODART",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "AVODART",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "25",
                                        "sku": "AVODART",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 2
                                            },
                                            {
                                                "discount": "14.0",
                                                "label": 3
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 4
                                            },
                                            {
                                                "discount": "29.0",
                                                "label": 5
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 6
                                            },
                                            {
                                                "discount": "31.0",
                                                "label": 25
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "sku 2 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_002",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "sku 3 marca 3 ambos",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_003_SKU_003",
                                    "brand": "P_BRD_003",
                                    "brandName": "Marca 3 ambos",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Marca 3 ambos",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_003"
                                    }
                                },
                                {
                                    "name": "marca 1 sku 1 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_001",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 30
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 1 sku 2 na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_004_SKU_002",
                                    "brand": "P_BRD_004",
                                    "brandName": "SKU MARCA 1",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_004",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 40
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 60
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 80
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 1 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_001",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 2 sku 2 desconto na fatura financeira",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_005_SKU_002",
                                    "brand": "P_BRD_005",
                                    "brandName": "SKU MARCA 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_005",
                                        "off_invoice_range": [
                                            {
                                                "discount": "5.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 3 sku 1 ambos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_006_SKU_001",
                                    "brand": "P_BRD_006",
                                    "brandName": "SKU MARCA 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "10.0",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 750
                                            },
                                            {
                                                "discount": "9.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "12.0",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "15.0",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 1 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_001",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 10
                                            },
                                            {
                                                "discount": "1",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 30
                                            },
                                            {
                                                "discount": "2",
                                                "label": 40
                                            },
                                            {
                                                "discount": "3",
                                                "label": 50
                                            },
                                            {
                                                "discount": "5",
                                                "label": 100
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 4 sku 2 na fatura mercadorias gratuitas",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_007_SKU_002",
                                    "brand": "P_BRD_007",
                                    "brandName": "SKU MARCA 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "150",
                                        "sku": "P_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 20
                                            },
                                            {
                                                "discount": "1",
                                                "label": 40
                                            },
                                            {
                                                "discount": "2",
                                                "label": 60
                                            },
                                            {
                                                "discount": "4",
                                                "label": 80
                                            },
                                            {
                                                "discount": "6",
                                                "label": 100
                                            },
                                            {
                                                "discount": "9",
                                                "label": 150
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 1 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_001",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 5 sku 2 desconto na fatura mercadorias gra?tis",
                                    "price": "40",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_008_SKU_002",
                                    "brand": "P_BRD_008",
                                    "brandName": "SKU MARCA 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "P_BRD_008",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "6",
                                                "label": 150
                                            },
                                            {
                                                "discount": "11",
                                                "label": 200
                                            },
                                            {
                                                "discount": "16",
                                                "label": 250
                                            },
                                            {
                                                "discount": "23",
                                                "label": 300
                                            },
                                            {
                                                "discount": "30",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 6 sku 1 ambos produtos gratuitos",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_009_SKU_001",
                                    "brand": "P_BRD_009",
                                    "brandName": "SKU MARCA 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 1 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_001",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "marca 7 sku 2 ambos produtos gratuitos financeiros",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "P_BRD_010_SKU_002",
                                    "brand": "P_BRD_010",
                                    "brandName": "SKU MARCA 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU MARCA 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "offInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "2000",
                                        "sku": "P_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "5",
                                                "label": 500
                                            },
                                            {
                                                "discount": "20",
                                                "label": 750
                                            },
                                            {
                                                "discount": "45",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "80",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "125",
                                                "label": 2000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 250
                                            },
                                            {
                                                "discount": "8",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 750
                                            },
                                            {
                                                "discount": "68",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 1250
                                            },
                                            {
                                                "discount": "188",
                                                "label": 2000
                                            }
                                        ]
                                    }
                                }
                            ],
                            "_id": "034eb239-1925-4a49-8be0-41924e75562d",
                            "brandsku": "F4444-AUGMENTIN",
                            "ordered_date": "Feb 26, 23"
                        }
                    ],
                    "discountData": {},
                    "brandArr": {
                        "AUGMENTIN": [
                            "F4444"
                        ]
                    }
                }
            });
            break;
        case "20": 
            ToApp("load-pharmacy-question", {
                "data": ""
            });
            break;
        case "22":
            ToApp("userwelcome-screen", base1pharmacy);
            break;
        case "23":
            ToApp("userwelcome-screen", base1pharmacyQ);
            break;
        case "24":
            ToApp("userwelcome-screen", base4pharmacy);
            break;
        case "25":
            ToApp("userwelcome-screen", base4pharmacyQ);
            break;
        default:
            break;
    }
}