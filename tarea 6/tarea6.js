class Libro {
    constructor(ISBN, Titulo, Autor, Numerodepaginas) {
      
      this.ISBN= ISBN;
      this.Titulo = Titulo;
      this.Autor = Autor 
      this.Numerodepaginas = Numerodepaginas;}



      mostrarLibro(){
        console.log("-----El Libro-----");
          console.log(` ${this.Titulo}`);
          console.log(`con ${this.ISBN}`);
          
          console.log(`por el autor: ${this.Autor}`);
          console.log(`tiene paginas: ${this.Numerodepaginas}`);
      }
    }
    let principito = new Libro(200000,"Principito","Antoine de Saint-Exupéry", 100);
    let ocasoDeIdolos = new Libro(300001,"OcasodelosIdolos","Friedrich Nietzsche", 250);
    
    