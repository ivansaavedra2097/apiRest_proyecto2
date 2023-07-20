const getPong = () => {
    const myInit = {
        method: "GET",
        mode: "no-cors",
        cache: "default",
      };
      
    const url = 'http://localhost:3000/api/empleados';
    fetch(url, myInit)
      .then(data => {
        console.log(data);
        return data;
      })
      .then(empleados => {
        for(const empleado in empleados) {
            console.log(empleados[empleado]);
        }
      })
}
