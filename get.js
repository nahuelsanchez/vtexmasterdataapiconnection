function getFromMasterData(name, where, fields) {
    var store = 'storeName';
    var urlProtocol = window.location.protocol;
    var apiUrl = urlProtocol + '//api.vtex.com/' + store + '/dataentities/' + name + '/search?_where=' + where + '&_fields='+ fields;
    var response;

    $.ajax({
        "headers": {
            "Accept": "application/vnd.vtex.masterdata.v10.profileSchema+json"
        },
        "url": apiUrl,
        "async" : false,
        "crossDomain": true,
        "type": "GET"
    }).success(function(data) {
        response = data[0];
    }).fail(function(data) {
        response = data;
    });

    return response;
}