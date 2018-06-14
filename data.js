//llamando al arreglo en el archivo data.js
/*//creo una variable para alojar la ruta que vamos a solicitar
const myObject = new Request("./data/cohorts/lim-2018-03-pre-core-pw/users.json");//Hay que escribir un punto para que la ruta sea relativa

fetch(myObject)
.then((resp) => resp.json()) // Transforma los datos de json
.then(function(users) {
    /*ejercicio de objetos
    console.log("Users > "+JSON.stringify(users[0].name));
    users[0] = {
        ...users[0], //Sumar todo lo que contiene user[0]
        progress : {
            percent : 100
        }
    };
  })
  console.log(myObject)*/

  /*users: Arreglo de objetos.
  progress: Objeto de progreso en bruto. Contiene una 
  llave para cada usuario (uid) con un objeto que contiene el progreso del usuario para cada curso.
  courses: Arreglo de strings con los ids de los cursos del cohort en cuestión. 
  Esta data se puede extraer de la propiedad coursesIndex de los objetos que representan los cohorts.*/

//queremos obtener todos los datos, users, progress y courses
//queremos recorrer el arreglo o array de users calculando los indicadores de progreso de cada una.
//la función debe retornar un nuevo arreglo de usuarios, los objetos de usuario deben llevar la propiedad stats(estadísticas calculadas).
computeUsersStats(users, progress, courses) => {
    return //un nuevo arreglo de usuarios, cada usuario tendrá la propiedad stats(estadísticas calculadas)
}

//El return es otro arreglo de objetos con la propiedad stats
//stats debe ser un objeto
/*stats tiene que tener otras propiedades asociadas:
percent: Número entero entre 0 y 100 que indica el porcentaje de completitud general del usuario con respecto a todos los cursos asignados a su cohort.
exercises: Objeto con tres propiedades:
    total: Número total de ejercicios autocorregidos presentes en cursos del cohort.
    completed: Número de ejercicios autocorregidos completados por el usuario.
    percent: Porcentaje de ejercicios autocorregidos completados.
reads: Objeto con tres propiedades:
    total: Número total de lecturas presentes en cursos del cohort.
    completed: Número de lecturas completadas por el usuario.
    percent: Porcentaje de lecturas completadas.
quizzes: Objeto con cinco propiedades:
    total: Número total de quizzes presentes en cursos del cohort.
    completed: Número de quizzes completadas por el usuario.
    percent: Porcentaje de quizzes completadas.
    scoreSum: Suma de todas las puntuaciones (score) de los quizzes completados.
    scoreAvg: Promedio de puntuaciones en quizzes completados.*/
  

    //ordenar la lista de usuarios de la función anterior
        /*1. orderBy (ordernar por) 
            -nombre 
            -porcentaje completitud
            -porcentaje de ejercicios autocorregidos completados
            - porcentaje de quizzes completados
            - puntuación promedio en quizzes completados
            - porcentaje de lecturas completadas */
        /*2. orderDirection ascendente o descendente*/ 

    sortUsers(users, orderBy, orderDirection) => {
        return //arreglo de usuarios ordenado
}
    //función para filtrar estudiantes con un botón o input de search
    //obtener users de computeUsersStats()
    //crear un string de búsqueda, para escoger por estudiante
    filterUsers(users, search) =>{
        return //nuevo arreglo con los que cumplan la condición de filtrado(string search nombre(name) del usuario)
}
    //función para seleccionar al cohort
    //debe también dejar cambiar al usuario los criterios de ordenado y filtrado en la interfaz
    //invoca internamente a las demás funciones
    processCohortData(options) =>{
        return  //Nuevo arreglo de usuarios ordenado y filtrado con la propiedad stats añadida (ver computeUsersStats)
    }

  
    /*options: objeto con las siguientes llaves:
        cohort: Objeto cohort (de la lista de cohorts)
        cohortData: Objeto con dos propiedades:
            users: Arreglo de usuarios miembros del cohort.
            progress: Objeto con data de progreso de cada usuario en el contexto de un cohort en particular.
        orderBy: String con criterio de ordenado (ver sortUsers).
        orderDirection: String con dirección de ordenado (ver sortUsers).
        search: String de búsqueda (ver filterUsers)*/
  

