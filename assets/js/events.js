function CallScreen(caseNum) {
    switch (String(caseNum)) {
        case "1":
            ToApp("user-login", {
                isLoggedIn: true,
                name: "Valentin Buteler",
                email: "valentinbuteler@gmail.com",
                phone: "4455668899"
            });
            break;
        case "2":
            ToApp("welcome-screen", {
                "title": "Welcome to gsk",
                "sub-title": "Find more benefits for your pharmacy inside",
                "tnc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.`,
                "bg-img": "/assets/images/png/brand.png"
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
                    }
                ],
                "accept": "Accept the terms",
                "decline": "Decline"
            });
            break;
        case "4":
            ToApp("userwelcome-screen", {
                "last_orders": "TERMS OF USE",
                "title": "Choose Brand",
                "start_date": "Jan 01, 22",
                "last_date": "Jan 31, 22",
                "isSku": true,
                "products": [
                    {
                        "account_no": "Wholesaler A - Accoount: A0001",
                        "order_no": "6921030003",
                        "status": "Invoiced",
                        "delivery_date": "May 30 22",
                        "additional_details": {
                            "product_details" : [
                                {
                                    "name" : "Augmentin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30"
                                },
                                {
                                    "name" : "Augmentin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30"
                                },
                                {
                                    "name" : "Augmentin 75mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30"
                                },
                                
                                {
                                    "name" : "Augmentin 100mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30"
                                },
                                {
                                    "name" : "Augmentin 125mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30"
                                }
                            ]
                        }
                    },
                    {
                        "account_no": "Wholesaler A - Accoount: A0002",
                        "order_no": "6921030003",
                        "status": "Invoiced",
                        "delivery_date": "May 30 22",
                        "additional_details": {
                            "product_details" : [
                                {
                                    "name" : "Augmentin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30"
                                },
                                {
                                    "name" : "Augmentin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30"
                                },
                                {
                                    "name" : "Augmentin 75mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30"
                                },
                                {
                                    "name" : "Augmentin 100mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30"
                                },
                                {
                                    "name" : "Augmentin 125mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30"
                                }
                            ]
                        }
                    },
                    {
                        "account_no": "Wholesaler A - Accoount: A0003",
                        "order_no": "6921030003",
                        "status": "Invoiced",
                        "delivery_date": "May 30 22",
                        "additional_details": {
                            "product_details" : [
                                {
                                    "name" : "Augmentin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30"
                                },
                                {
                                    "name" : "Augmentin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30"
                                },
                                {
                                    "name" : "Augmentin 75mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30"
                                },
                                {
                                    "name" : "Augmentin 100mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30"
                                },
                                {
                                    "name" : "Augmentin 125mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30"
                                }
                            ]
                        }
                    }
                ],
                "order_history": {
                    "orders": [
                        {
                            "account_no": "Wholesaler A - Accoount: A0001",
                            "order_no": "Order No: 6921030003",
                            "status": "Invoiced",
                            "delivery_date": "May 30 22",
                            "additional_details": {
                                "product_details" : [
                                    {
                                        "name" : "Augmentin 25mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 50mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 75mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 100mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 125mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                ]
                            }
                        },
                        {
                            "account_no": "Wholesaler A - Accoount: A0002",
                            "order_no": "Order No: 6921030003",
                            "status": "Sent",
                            "delivery_date": "May 30 22",
                            "additional_details": {
                                "product_details" : [
                                    {
                                        "name" : "Augmentin 25mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 50mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 75mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 100mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 125mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    }
                                ]
                            }
                        },
                        {
                            "account_no": "Wholesaler A - Accoount: A0003",
                            "order_no": "Order No: 6921030003",
                            "status": "Cancelled",
                            "delivery_date": "",
                            "additional_details": {
                                "product_details" : [
                                    {
                                        "name" : "Augmentin 25mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 50mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 100mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 125mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 150mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 175mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 200mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 225mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    },
                                    {
                                        "name" : "Augmentin 250mcg Tabs",
                                        "price": "4.01",
                                        "units": "25",
                                        "free_goods": "2",
                                        "discount": "40",
                                        "payterm": "30"
                                    }
                                ]
                            }
                        }
                    ],
                    "download_url": "https://stats.govt.nz/assets/Uploads/Annual-enterprise-survey/Annual-enterprise-survey-2021-financial-year-provisional/Download-data/annual-enterprise-survey-2021-financial-year-provisional-csv.csv"
                },
                "brands": {
                    "title": "Plan Progress",
                    "last_date": "Jan 31, 22",
                    "products": [
                        {
                            "name": "Augmentin",
                            "purchased" : "125",
                            "selected": "0",
                            "max_limit": "300"
                        },
                        {
                            "name": "Ventolin",
                            "purchased" : "45",
                            "selected": "0",
                            "max_limit": "200"
                        },
                        {
                            "name": "Seretide",
                            "purchased" : "75",
                            "selected": "0",
                            "max_limit": "400"
                        }
                    ]
                }
            });
            break;
        case "5":
            ToApp("clientlist-screen", {
                "title": "Client List",
                "clients": [
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                ],
            });
            break;
        case "6":

            break;
        case "7":

            break;
        case "8":

            break;
        case "9":

            break;
        case "10":

            break;
        case "11":

            break;
        case "12":

            break;
        default:
            break;
    }
}