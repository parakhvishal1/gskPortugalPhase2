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
        CallScreen(4);
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
        case "confirmorderon-bot":
            confirmOrder();
            break;
        case "show-order-history-screen":
            switchTab("tab22");
            break;
        case "confirm-order-from-cart":
            confirmOrder();
            break;
        default:
            break;
    }
}