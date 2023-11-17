const isLogEnabled = true;
const isEnvLocal = true; 
const isConfetiEnabled = false;

if (!(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    window.onbeforeunload = function () {
        const data = localStorage.getItem("data");
        ToBot("update-data-on-refresh", data);
        return "Are you sure you want to exit?";
    };
}

const log = (data) => {
    if(!isLogEnabled) return;
    console.log(data);
    // console.info(data);
    // console.trace(data);
    return;
}