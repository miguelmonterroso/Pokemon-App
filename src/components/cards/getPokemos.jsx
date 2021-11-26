// Los estilos de este componente se puden modificar en el archivos _home.scss
// Hacemos los imports necesarios para este componente
import React from 'react'
import axios from 'axios'
import { CustomCard } from './card'

//Esta es la funcion que se exporta para renderizar en la app
export const GetPokemons = () => {

  // Creamos el estado para las cartas que contienen los pokemons y el counter para
  // poder ver mas pokemons

    const [card, setCard] = React.useState([])
    const [count, setCount] = React.useState(20)

    // Con esta funcion conseguimos renderizar nuestros pokemons
    const getAllPokemons = () =>{
      // Configuracion para hacer el get con axios
        var config = {
            method: 'get',
            url: 'https://pokeapi.co/api/v2/pokemon',
            headers: { }
          };
          // se ejecuta la peticion a la PokeApi
          axios(config)
          // Recibimos la respuesta de la Api
          .then(function (response) {
            // Guardamos los resultados(pokemons) en la constante data
            // esto unicamente nos retorna el nombre y el url del pokemon
            const data = response.data.results
            // entonces hacemos un map de data para acceder al url de cada pokemon
            data.map(function(element){
              // Configuramos el axios para hacer la peticion a cada url que tenemos en data
                var config = {
                    method: 'get',
                    url: element.url,
                    headers: { }
                  };
                  // hacemos la peticion por cada elemento que tenemos guardado
                  axios(config)
                  // recibimos los datos de cada pokemon
                  .then(function (response) {
                    // log guardamos en las constante pokemon y creamos un objeto
                    // llamado info para poder guardarlo en nuestro estado card
                    const pokemon = response.data
                    const info = {
                      // accedemos a los elementos especificos que queremos renderizar
                        name: pokemon.name,
                        image: pokemon.sprites.front_default,
                        weight: pokemon.weight
                    }
                    // Los guardamos en nuestro estado con setCard, hacemos un array 
                    // con todos los objetos que nos regresa el api
                    setCard(list => [...list, info])
                  })
                  // En caso de un error lo imprimos en consola
                  .catch(function (error) {
                    console.log(error);
                  });
                return true
            })
          })
           // En caso de un error lo imprimos en consola
          .catch(function (error) {
            console.log(error);
          });
    }

    // Con esta funcion podemos hacer una suma cada vez que presionamos el boton 'ver mas'
    const plus = () => {
      // cada click renderizaremos 20 pokemons mas
      setCount(count + 20)

      //ejecutamos la funcion para cargar mas pokemons
      morePokemons()
    }

    // Con esta funcion vamos a renderizar mas pokemons en nuestra pantalla
    // en principio unicamente tendremos 20 pero con esto podremos llegar a visualizar los 
    // mas de 1,000 pokemons que hay en el api
    const morePokemons = () => {
      // hacemos la configuracion para hacer la peticion con axios
      var config = {
        method: 'get',
        // en este url por parametro debemos pasarle la cantidad de pokemons que queremos
        // renderizar, en este caso lo hacemos de 20 en 20 por eso agregamos nuestra constante
        // count para que cada vez que se de click al boton vaya sumando 20 mas al listado
        // este count se define en nuestra funcion plus en la linea 69
        url: `https://pokeapi.co/api/v2/pokemon?offset=${count}&limit=20`,
        headers: { }
      };
      // hacemos la peticion
      axios(config)
      // Recibimos la respuesta 
      .then(function (response) {
        // la guardamos en la constante data 
        const data = response.data.results
        // Hacemos un map para poder renderizar a los 20 nuevos pokemon que solictamos
        data.map(function(element){
          // Configuramos el axios para hacer la peticion a la url de cada pokemon
          var config = {
              method: 'get',
              url: element.url,
              headers: { }
            };
            // Hacemos la peticion
            axios(config)
            // Recibimos toda la informacion de cada pokemon
            .then(function (response) {
              // log guardamos en las constante pokemon y creamos un objeto
              // llamado info para poder guardarlo en nuestro estado card
              const pokemon = response.data
              const info = {
                // accedemos a los elementos especificos que queremos renderizar
                  name: pokemon.name,
                  image: pokemon.sprites.front_default,
                  weight: pokemon.weight
              }
              // Los guardamos en nuestro estado con setCard, hacemos un array 
              // con todos los objetos que nos regresa el api
              setCard(list => [...list, info])
            })
            // En caso de un error lo imprimos en consola
            .catch(function (error) {
              console.log(error);
            });
          return true
      })
      })
      // En caso de un error lo imprimos en consola
      .catch(function (error) {
        console.log(error);
      });
      return
    }
    
    // Usamos el Hook useEffect para hacer la peticion en cuanto entramos a la pagina
    React.useEffect(() => {
      // Ejecutamos nuestra funcion para renderizar los primeros 20 pokemons
        getAllPokemons()
    }, [])

    // createCard se encarga de crear una tarjeta por cada pokemon que tenemos guardado
    // en nuestro array card, este recibe un elemento (e) y un index (i)
    // retornamos el componente CustomCard con las respectivas props que esta esperando
    const createCard = card.map((e,i)=>{
        return <CustomCard key={i} name={e.name} image={e.image}/>
    })

    // Retornamos lo que deseamos renderizar y le damos nuestros estilos a traves de las 
    // clases
    return (
        <div className='container-pokemons'>
            <div className='grid'>
              {/* inyectamos jsx para poder renderizar nuestras cartas, sera una carta por cada pokemon */}
                {createCard}
            </div>
            {/* El boton va dirigido a nuestra funcion plus, para poder renderizar mas pokemons */}
            <button onClick={plus} className='btn'>Ver más</button>
        </div>
        
    )
}
