(function () {
    var userData = {};
    setTimeout(() => {
        // loadGeneralWelcome();
        // loadTermsUI();
        // loadUserWelcomeUI();
        // loadBrandSelectionUI();
        // loadEditProfile();

        /* Function to login user */
        ToApp("user-login", { 
            isLoggedIn: true, 
            name: "Valentin Buteler",
            email: "valentinbuteler@gmail.com",
            phone: "4455668899"
        });

        /* Function to call for Screen 1 */
        /* ToApp("welcome-screen", {
            "title": "Welcome to gsk",
            "sub-title": "Find more benefits for your pharmacy inside",
            "tnc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.`,
            "bg-img": "/assets/images/png/brand.png"
        }); */

        /* Function to call for Screen 2 */
        /* ToApp("termsui-screen", {
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
        }); */

        /* Function to call for Screen 3 */
        /* ToApp("userwelcome-screen", {
            "last_orders": "TERMS OF USE",
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
                                    "name" : "Augmentin 125mcg Tabs",
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
                                    "name" : "Augmentin 125mcg Tabs",
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
                                    "name" : "Augmentin 125mcg Tabs",
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
                                    "name" : "Augmentin 125mcg Tabs",
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
                        "account_no": "Wholesaler A - Accoount: A0001",
                        "order_no": "Order No: 6921030003",
                        "status": "Sent",
                        "delivery_date": "May 30 22",
                        "additional_details": {
                            "product_details" : [
                                {
                                    "name" : "Augmentin 125mcg Tabs",
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
                                    "name" : "Augmentin 125mcg Tabs",
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
                                    "name" : "Augmentin 125mcg Tabs",
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
                                    "name" : "Augmentin 125mcg Tabs",
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
                        "account_no": "Wholesaler A - Accoount: A0001",
                        "order_no": "Order No: 6921030003",
                        "status": "Cancelled",
                        "delivery_date": "",
                        "additional_details": {
                            "product_details" : [
                                {
                                    "name" : "Augmentin 125mcg Tabs",
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
                                    "name" : "Augmentin 125mcg Tabs",
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
                                    "name" : "Augmentin 125mcg Tabs",
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
                                    "name" : "Augmentin 125mcg Tabs",
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
                "download_url": "https://stats.govt.nz/assets/Uploads/Annual-enterprise-survey/Annual-enterprise-survey-2021-financial-year-provisional/Download-data/annual-enterprise-survey-2021-financial-year-provisional-csv.csv"
            },
            "progress": {
                "title": "Plan Progress",
                "last_date": "Jan 31, 22",
                "products": [
                    {
                        "name": "Augmentin",
                        "purchased" : "125",
                        "selected": "",
                        "max_limit": "300"
                    },
                    {
                        "name": "Ventolin",
                        "purchased" : "45",
                        "selected": "",
                        "max_limit": "200"
                    },
                    {
                        "name": "Seretide",
                        "purchased" : "75",
                        "selected": "",
                        "max_limit": "600"
                    }
                ]
            }
        }); */

        /* Function to call for showing progress plan */
        /* ToApp("planprogress", {
            "title": "Plan Progress",
            "last_date": "Jan 31, 22",
            "products": [
                {
                    "name": "Augmentin",
                    "purchased" : "125",
                    "selected": "",
                    "max_limit": "300"
                },
                {
                    "name": "Ventolin",
                    "purchased" : "45",
                    "selected": "",
                    "max_limit": "200"
                },
                {
                    "name": "Seretide",
                    "purchased" : "75",
                    "selected": "",
                    "max_limit": "600"
                }
            ]
        }); */

        /* Function to call for brands screen */
        ToApp("choosebrands-screen", {
            "title": "Choose Brand",
            "start_date": "Jan 01, 22",
            "last_date": "Jan 31, 22",
            "isSku": true,
            "products": [
                {
                    "name": "Augmentin",
                    "purchased" : "125",
                    "selected": "",
                    "max_limit": "300"
                },
                {
                    "name": "Ventolin",
                    "purchased" : "45",
                    "selected": "",
                    "max_limit": "200"
                },
                {
                    "name": "Seretide",
                    "purchased" : "75",
                    "selected": "",
                    "max_limit": "600"
                }
            ],
            "cta": "Add Another Account or Deferral Date",
            "orders": [
                {
                    "account_no": "Wholesaler A - Accoount: A0001",
                    "order_no": "Order No: 6921030003",
                    "status": "Invoiced",
                    "delivery_date": "May 30 22",
                    "additional_details": {
                        "product_details" : [
                            {
                                "name" : "Augmentin 125mcg Tabs",
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
                                "name" : "Augmentin 125mcg Tabs",
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
                                "name" : "Augmentin 125mcg Tabs",
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
                                "name" : "Augmentin 125mcg Tabs",
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
            ]
        });


        /* Function to call for Order Screen */
        /* Function to call for brands screen */
        /* showOrderDetails({
            "title": "Augumentin",
            "start_date": "Jan 01, 22",
            "last_date": "Jan 31, 22",
            "products": [
                {
                    "name": "Augmentin",
                    "purchased" : "125",
                    "selected": "",
                    "max_limit": "300"
                }
            ],
            "cta": "Add Another Account or Deferral Date",
            "orders": [
                {
                    "account_no": "Wholesaler A - Accoount: A0001",
                    "order_no": "Order No: 6921030003",
                    "status": "Invoiced",
                    "delivery_date": "May 30 22",
                    "additional_details": {
                        "product_details" : [
                            {
                                "name" : "Augmentin 125mcg Tabs",
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
                                "name" : "Augmentin 125mcg Tabs",
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
                                "name" : "Augmentin 125mcg Tabs",
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
                                "name" : "Augmentin 125mcg Tabs",
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
        }); */

        /* Function to call for Screen 6 */
        /* ToApp("clientlist-screen", {
            "title": "Welcome to gsk",
            "sub-title": "Find more benefits for your pharmacy inside",
            "tnc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.`,
            "bg-img": "/assets/images/png/brand.png"
        }); */

        /* Function to call for Screen 6 */
        /* ToApp("ordercart-screen", {
            "title": "ORDER DETAILS",
            "products": [
                {
                    "name": "Augmentin",
                    "purchased" : "125",
                    "selected": "",
                    "max_limit": "300"
                }
            ],
            "orders": [
                {
                    "account_no": "Wholesaler A - Accoount: A0001",
                    "order_no": "Order No: 6921030003",
                    "status": "Invoiced",
                    "delivery_date": "May 30 22",
                    "additional_details": {
                        "product_details" : [
                            {
                                "name" : "Augmentin 125mcg Tabs",
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
                                "name" : "Augmentin 125mcg Tabs",
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
                                "name" : "Augmentin 125mcg Tabs",
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
                                "name" : "Augmentin 125mcg Tabs",
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
                    "account_no": "Wholesaler A - Accoount: A0001",
                    "order_no": "Order No: 6921030003",
                    "status": "Sent",
                    "delivery_date": "May 30 22",
                    "additional_details": {
                        "product_details" : [
                            {
                                "name" : "Augmentin 125mcg Tabs",
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
                                "name" : "Augmentin 125mcg Tabs",
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
                                "name" : "Augmentin 125mcg Tabs",
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
                                "name" : "Augmentin 125mcg Tabs",
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
                    "account_no": "Wholesaler A - Accoount: A0001",
                    "order_no": "Order No: 6921030003",
                    "status": "Cancelled",
                    "delivery_date": "",
                    "additional_details": {
                        "product_details" : [
                            {
                                "name" : "Augmentin 125mcg Tabs",
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
                                "name" : "Augmentin 125mcg Tabs",
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
                                "name" : "Augmentin 125mcg Tabs",
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
                                "name" : "Augmentin 125mcg Tabs",
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
        }); */

    }, 500);
})();



function ToBot(eventName, data) {
    switch (eventName) {
        case "fetch-user-details":
            delete data["isLoggedIn"];
            setTimeout(() => {
                ToApp("user-details", {
                    "profile_details": {
                        "firstName": "Valentin",
                        "lastName": "Buteler",
                        "countryDialCode": "91",
                        "phone": "9898011111",
                        "email": "valentinbuteler@gmail.com"
                    },
                    "associated_accounts": {
                        "accounts": [
                            {
                                "name": "Wholesaler A",
                                "account_data": [
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "Active",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    },
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "Active",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    },
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "Active",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    }
                                ]
                            },
                            {
                                "name": "Wholesaler B",
                                "account_data": [
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "In-Active",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    },
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "In-Active",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    },
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "In-Active",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    }
                                ]
                            },
                            {
                                "name": "Wholesaler C",
                                "account_data": [
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "Pending Verification",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    },
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "Pending Verification",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    }
                                ]
                            }
                        ]
                    },
                    "notification": {
                        "status": "online"
                    },
                })
            }, 0);
            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;

        default:
            break;
    }
}

function ToApp(eventName, data) {
    switch (eventName) {
        case "user-login":
            userData = data;
            showHeader(userData);
            break;
        case "welcome-screen":
            loadGeneralWelcome(data);
            break;
        case "termsui-screen":
            showHeader();
            loadTermsUI(data);
            break;
        case "userwelcome-screen":
            loadUserWelcomeUI(data);
            data["progress"] && loadPlanProgress(data["progress"], true);
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
            loadOrderCart(data);
            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;

        default:
            break;
    }
}