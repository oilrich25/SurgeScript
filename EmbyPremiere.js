if ($request.url.indexOf('mb3admin.com/admin/service/registration/validateDevice') != -1) {
    if($response.status!=200){
        $notification.post("Emby Premiere 已激活", "", "");
        $done({status: 200, headers: $response.headers, body: '{"cacheExpirationDays":999,"resultCode":"GOOD","message":"Device Valid"}' })
    }else{
        $done({})
    }
} else if ($request.url.indexOf('mb3admin.com/admin/service/registration/validate') != -1) {
    $done({
        status: 200,
        body: JSON.stringify({
            "featId":"",
            "registered":true,
            "expDate":"2099-01-01",
            "key":""
        })
    });
} else {
    $done({})
}
