import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { Corsa } from 'src/app/models/corsa';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  corse: Corsa[] | undefined
  form!: FormGroup;
  inserimento: google.maps.places.Autocomplete | undefined;
  stripe: boolean = false;
  drivers: boolean = false;
  payment: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl(null, [Validators.required]),
     
    })
    this.initMap()
  }

  options: Options = new Options({
    componentRestrictions: { country: 'IT' }
  })

  // Initialize and add the map
 initMap(): void {
  // The location of Uluru
  const partenzaDefault = { lat: 41.90667, lng: 12.48297 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 15,
      center: partenzaDefault,
    }
  );


  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: partenzaDefault,
    map: map,
  });

  
 



}

formattedAddress1 = ""
  handleAddressChange(address: any) {
    this.formattedAddress1 = address.formatted_address
  }

  formattedAddress2 = ""
  handleAddressChange2(address: any) {
    this.formattedAddress2 = address.formatted_address
  }

distanceMatrix(){

  this.corse = []

  // initialize service
  const service = new google.maps.DistanceMatrixService();

  // build request
  const request = {
    origins: [this.formattedAddress1],
    destinations: [this.formattedAddress2],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false,
  };

  // get distance matrix response
  service.getDistanceMatrix(request, (response, status) => {
    if (status != google.maps.DistanceMatrixStatus.OK) {
      alert('Error was: ' + status);
    }
    else {
      console.log(response)
    }

  })


 
}
 stripeSee(){
  this.payment=!this.payment
    
}

driverSee(){
  this.drivers=!this.drivers
    
}



}


