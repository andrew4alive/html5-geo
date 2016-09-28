   var geo = function(goption) {
  var self = this;
  self.coords = null;
  self.support=false;
  self.error= false;
 
  function g() {
    if (navigator.geolocation) {
        
        self.support=true;
        
      navigator.geolocation.watchPosition(
          showPosition,
      function(e){
          
          selft.error=e;
      }
      
      ,
      goption
      
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  
  }
 
  function showPosition(position) {
    self.coords = position.coords;
  }
  g();
};
