class Form{
    constructor(){
        this.title= createElement('h2');
        this.passengerOption=createButton('Passenger');
        this.busDriverOption= createButton('Bus Driver');
        //passenger's options
        this.emailButton= createButton('Email');
        this.messageButton= createButton('Message');
        this.notificationQuestion= createElement('h2');
        this.emailInput= createInput("Email")
        this.messageInput= createInput("Phone Number")

        //driver's options
        this.driverName= createInput("Name");
        this.driverPhone= createInput("Phone");
        this.driverEmail= createInput("Email");
        this.busNumber= createInput("Bus Number");
    }
    


    display(){
        this.title.html("Bus Spot");
        this.title.position(400,100);
        this.passengerOption.position(400,200);
        this.busDriverOption.position(400,300);
        this.passengerOption.mousePressed(()=>{
        this.busDriverOption.hide();
        this.passengerOption.hide();
        passenger.update();
        passenger.updateCount(PassengerCount);
        PassengerCount+=1;
        passenger.index = PassengerCount;
          //first 2 options for passenger
  
        this.emailButton.position(400,300);
        this.messageButton.position(400,400);
        this.notificationQuestion.position(200,200);
        this.notificationQuestion.html("Which way do you want to be notified?");

    })
        //passenger wants to be notified by mail
        this.emailButton.mousePressed(()=>{
        this.messageButton.hide();
        this.emailInput.position(400,340);
        })
        
        //passenger wants to be notifies by phone
        this.messageButton.mousePressed(()=>{
            this.emailButton.hide();
            this.messageInput.position(400,440);

        })

//if picked bus driver
    this.busDriverOption.mousePressed(()=>{
        this.busDriverOption.hide();
        this.passengerOption.hide();

        //bus driver's information
        this.driverName.position(200,200);
        this.driverPhone.position(400,200);
        this.driverEmail.position(200,400);
        this.busNumber.position(400,400);
    })
}
}

  
  