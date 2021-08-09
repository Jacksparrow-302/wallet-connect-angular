import { Component, OnInit } from '@angular/core';
import { ContractService } from './contract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wallet-connect';
  wallet;
  constructor(private contractService:ContractService){}
  ngOnInit(): void {
    console.log('sss')
  }
  openMetaMask(){
    this.contractService.openMetamask().then(resp =>{
      this.wallet = resp;
      console.log('Wallet ', resp);
    })
  }
}
