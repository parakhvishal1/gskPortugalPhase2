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
        default:
            break;
    }
}