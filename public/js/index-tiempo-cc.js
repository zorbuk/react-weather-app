'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var appRoot = document.querySelector('#appRoot');

// --------------------------------------------------
// -> FUNCION ACTUALIZAR, ASYNC (E)
// --------------------------------------------------
/*const actualizar = async (e) => {
    // Por defecto el mensaje es 'no encontrado'
    let cocod = 'No encontrado';

    // axios api call
    let resultado = await axios.get('https://restcountries.eu/rest/v2/all')
    
    let countryCode = document.getElementById('cc');

    console.log(resultado)

    // Si countryCode no es null, entonces procedemos a buscar el pais
    // con el código dado por el cc.
    if(countryCode != null){
        
        // Recorremos resultado.data
        for(var i of resultado.data) {
            
            // Si algun resultado coincide, devolvemos el nombre del pais.
            if(resultado.data[i].alpha2Code.toLowerCase() === countryCode.value.toLowerCase())
            cocod = resultado.data[i].name;

         }

         //const country = resultado.data.find((cCode)=>{cCode.alpha2Code.toLowerCase() === countryCode.value.toLowerCase()})
    }

    // Mostrar valor de cocod por consola y renderizar dandole el valor (nombre de pais o mensaje de error).
    console.log(cocod);
    render(cocod);
}*/
// --------------------------------------------------
// -> FUNCION ACTUALIZAR REFRACTOR, ASYNC (E)
// --------------------------------------------------
var actualizar = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var cocod, countryCode, result, countries, country;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        cocod = 'No encontrado';
                        countryCode = document.getElementById('cc');
                        _context.next = 4;
                        return axios.get('https://restcountries.eu/rest/v2/all');

                    case 4:
                        result = _context.sent;
                        countries = result.data;

                        if (countryCode != null) {
                            country = countries.find(function (country) {
                                return country.alpha2Code.toLowerCase() === countryCode.value.toLowerCase();
                            });

                            if (country) cocod = country.name;
                        }
                        render(cocod);

                    case 8:
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
// --------------------------------------------------
// -> FUNCION QUE OBTIENE COUNTRY POR IP (nombre)
// -> http://ipinfo.io/ : http://ipinfo.io/json
// --------------------------------------------------
var getCountryByIP = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        var resultado1, cCode, resultado2, countries, country;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return axios.get('http://ipinfo.io/json?token=34a6ff414fa6d4');

                    case 2:
                        resultado1 = _context2.sent;
                        cCode = resultado1.data.country;


                        console.log('ipinfo:', cCode);

                        _context2.next = 7;
                        return axios.get('https://restcountries.eu/rest/v2/all');

                    case 7:
                        resultado2 = _context2.sent;
                        countries = resultado2.data;
                        country = countries.find(function (country) {
                            return country.alpha2Code.toLowerCase() === cCode.toLowerCase();
                        });


                        console.log(country.name);
                        //render(country.name)

                    case 11:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function getCountryByIP(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

// --------------------------------------------------
// -> FUNCION RENDERIZAR (nombre)
// --------------------------------------------------
var render = function render(nombre) {

    // Template renderizado en appRoot.
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            { id: 'tiempo' },
            'Nombre Pais: ',
            nombre
        ),
        React.createElement(
            'p',
            null,
            React.createElement('input', { type: 'text', id: 'cc' }),
            React.createElement(
                'button',
                { onClick: actualizar },
                'Actualizar'
            )
        )
    );

    // Renderiza.
    ReactDOM.render(template, appRoot);
};

// --------------------------------------------------
// -> INICIALIZADOR - ACTUALIZAR()
// --------------------------------------------------
actualizar();
getCountryByIP();
