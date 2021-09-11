const url = "/public/online.php";
const key = "hdS8ufy";

function online() {
    fetch(url, {
        method: "POST",
        body: "key=" + key + "&act=add",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(res => {
        fetch(url, {
            method: "POST",
            body: "key=" + key,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(response => response.json()).then(resp => {
            $('#onlinecnt').html("当前在线：" + resp.count + "人");
        });
    });
}

setInterval(function () {
    online();
}, 10000);