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
        CallScreen(1);
        CallScreen(6);
    }, 500);
})();

function GlobalVarInit() {
    window.orderCartData = [];
    window.updateCartData = {};
    window.cartData = {};
    window.wholesalerAccountData = [];
    window.dataStore = {};
    window.discountData = {};
    window.currentScreen = "";
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
                                "active_status": "active",
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
                                "active_status": "",
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
                                "active_status": "active",
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
        case "terms-conditions":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "update-order-data":
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
        default:
            break;
    }
}

function ToApp(eventName, data, orgData) {
    window.currentScreen = eventName;
    switch (eventName) {
        case "user-login":
            userData = data;
            showHeader(userData);
            break;
        case "welcome-screen":
            loadGeneralWelcome(data);
            break;
        case "termsui-screen":
            // showHeader();
            loadTermsUI(data);
            break;
        case "userwelcome-screen":
            StoreDataIn(data);
            GlobalVarInit();
            loadUserWelcomeUI(data);
            data["plan_progress"] && loadPlanProgress(data["plan_progress"], true);
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
            GlobalVarInit();
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
        case "value":

            break;

        default:
            break;
    }
}