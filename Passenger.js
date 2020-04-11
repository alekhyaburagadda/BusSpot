class Passenger {
    constructor(){
      this.index = null;
    }
  
    getCount(){
      var PassengerCountRef = database.ref('PassengerCount');
      PassengerCountRef.on("value",(data)=>{
        PassengerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        PassengerCount: count
      });
    }
}