const actualizar = async (e) => {
    let resultado = await axios.get('http://api.openweathermap.org/data/2.5/weather?id=3111933&appid=e927f468beb5e30dc31289b3be04ad74')

    console.log(JSON.stringify(resultado.data))
    render(resultado.data.weather[0], resultado.data)
}

const appRoot = document.querySelector('#appRoot')

const render = (tiempo, data) =>{
    /*
        TIEMPO - resultado.data.weather[0] 
        DATA   - resultado.data
    */

    const template = (
        <div>
        <p id="tiempo">Reus: {tiempo.main}</p>
        <p><button onClick={actualizar}>Actualizar</button></p>
    </div>
    )

    ReactDOM.render(template, appRoot)
}

actualizar()