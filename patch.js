function patchInMasterData(name, email, fields) {
    var store = 'storeName';
    var urlProtocol = window.location.protocol;
    var apiUrl = urlProtocol + '//api.vtexcrm.com.br/' + store + '/dataentities/' + name + '/documents';

    var who = {
        "email": email
    };

    var data = $.extend(who, fields);

    $.ajax({
        "headers": {
            "Accept": "application/vnd.vtex.masterdata.v10+json",
            "Content-Type": "application/json"
        },
        "url": apiUrl,
        "async" : false,
        "crossDomain": true,
        "type": "PATCH",
        "data": JSON.stringify(data)
    }).success(function(data) {
        return data;
    }).fail(function(data) {
        return data;
    });
}