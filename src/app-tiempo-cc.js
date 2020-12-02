const appRoot = document.querySelector('#appRoot')

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
const actualizar = async (e) => {
    let cocod = 'No encontrado';
    let countryCode = document.getElementById('cc');
    const result = await axios.get('https://restcountries.eu/rest/v2/all');
    const countries = result.data;
    if(countryCode != null){
    const country = countries.find((country)=> country.alpha2Code.toLowerCase() === countryCode.value.toLowerCase())
    if(country) cocod = country.name;
    }
    render(cocod); 
}
// --------------------------------------------------
// -> FUNCION QUE OBTIENE COUNTRY POR IP (nombre)
// -> http://ipinfo.io/ : http://ipinfo.io/json
// --------------------------------------------------
const getCountryByIP = async (e) => {
    const resultado1 = await axios.get('http://ipinfo.io/json?token=34a6ff414fa6d4')
    const cCode = resultado1.data.country;

    console.log('ipinfo:', cCode)

    const resultado2 = await axios.get('https://restcountries.eu/rest/v2/all')
    const countries = resultado2.data;
    const country = countries.find((country)=> {
        return country.alpha2Code.toLowerCase() === cCode.toLowerCase()
    })

    console.log(country.name)
    //render(country.name)
}

// --------------------------------------------------
// -> FUNCION RENDERIZAR (nombre)
// --------------------------------------------------
const render = (nombre) =>{

    // Template renderizado en appRoot.
    const template = (
        <div>
        <p id="tiempo">Nombre Pais: {nombre}</p>
        <p><input type="text" id="cc" /><button onClick={actualizar}>Actualizar</button></p>
    </div>
    )

    // Renderiza.
    ReactDOM.render(template, appRoot)
}

// --------------------------------------------------
// -> INICIALIZADOR - ACTUALIZAR() - GETCOUNTRYBYIP()
// --------------------------------------------------
actualizar()
getCountryByIP()