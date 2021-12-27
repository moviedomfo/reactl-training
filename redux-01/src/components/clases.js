
export class PuntoA {
    constructor ( x , y ){
      this.x = x;
      this.y = y;
    }
  
    static distancia ( a , b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt ( dx * dx + dy * dy );
    }

    getCoordenadas = function() {
    
      return `X:${this.x} Y:${this.y}`;
      
    };
   
  }

  export class PuntoB {
    constructor ( x , y ){
      this.x = x;
      this.y = y;
    }
  
    static distancia ( a , b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt ( dx * dx + dy * dy );
    }
    getCoordenadas = function() {
    
      return `X:${this.x} Y:${this.y}`;
      
    };
    static color ( a , b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
    
        return Math.sqrt ( dx * dx + dy * dy );
      }
  }

  