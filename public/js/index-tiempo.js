'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var actualizar = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var resultado;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return axios.get('http://api.openweathermap.org/data/2.5/weather?id=3111933&appid=e927f468beb5e30dc31289b3be04ad74');

                    case 2:
                        resultado = _context.sent;


                        console.log(JSON.stringify(resultado.data));
                        render(resultado.data.weather[0], resultado.data);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function actualizar(_x) {
        return _ref.apply(this, arguments);
    };
}();

var appRoot = document.querySelector('#appRoot');

var render = function render(tiempo, data) {
    /*
        TIEMPO - resultado.data.weather[0] 
        DATA   - resultado.data
    */

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            { id: 'tiempo' },
            'Reus: ',
            tiempo.main
        ),
        React.createElement(
            'p',
            null,
            React.createElement(
                'button',
                { onClick: actualizar },
                'Actualizar'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

actualizar();
