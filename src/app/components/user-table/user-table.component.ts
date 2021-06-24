import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

export interface User {
  name: string;
  id: string;
  age: number;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  state: string;
}

const ELEMENT_DATA: User[] = [
  {
    "id": "5a6b008747ee8d7357263198",
    "age": 40,
    "name": "Casandra Leblanc",
    "gender": "female",
    "company": "PHOTOBIN",
    "email": "casandraleblanc@photobin.com",
    "phone": "+1 (995) 458-2730",
    "address": "636 Prince Street, Needmore, Tennessee, 5197",
    "state": ""
  },
  {
    "id": "5a6b0087cb6506cef3378424",
    "age": 30,
    "name": "Lucia Reed",
    "gender": "female",
    "company": "UNIA",
    "email": "luciareed@unia.com",
    "phone": "+1 (902) 507-2069",
    "address": "782 Ridgewood Avenue, Homeworth, Missouri, 948",
    "state": ""
  },
  {
    "id": "5a6b0087eb6b2f630d741551",
    "age": 23,
    "name": "Rachael Finley",
    "gender": "female",
    "company": "INSOURCE",
    "email": "rachaelfinley@insource.com",
    "phone": "+1 (956) 425-3831",
    "address": "118 Ridge Court, Bedias, Mississippi, 1332",
    "state": ""
  },
  {
    "id": "5a6b00875354977607dc7813",
    "age": 22,
    "name": "Reilly Patrick",
    "gender": "male",
    "company": "SENMEI",
    "email": "reillypatrick@senmei.com",
    "phone": "+1 (931) 582-2799",
    "address": "235 Thatford Avenue, Vaughn, Louisiana, 8555",
    "state": ""
  },
  {
    "id": "5a6b00878e1696903536ff3a",
    "age": 31,
    "name": "Consuelo Hardin",
    "gender": "female",
    "company": "EXTREMO",
    "email": "consuelohardin@extremo.com",
    "phone": "+1 (890) 431-3134",
    "address": "402 Mermaid Avenue, Norris, New Mexico, 4919",
    "state": ""
  }
];

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'id', 'age', 'gender', 'company', 'email', 'phone', 'address', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  value = '';
  isAdding = false;
  isEditing = false;
  search = '';
  backupUser: User;

  inputUser: User;
  constructor() {
    this.inputUser = this.inputClient();
    this.backupUser = this.inputClient();
  }
inputClient() {
  let inputUser = {
    name: '',
    id: '',
    age: 0,
    gender: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    state: '',
  };
  return inputUser;
}

  @ViewChild(MatSort) sort!: MatSort;



  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    console.log(this.sort);
  }

  clickedDelete(user: User) {
    console.log(user.name);
    let searchId = user.id;
    let index = ELEMENT_DATA.findIndex(el => el.id === searchId);
    //console.log(index);
    if (index === -1) {
      console.log(undefined);
    } else {
      let del = ELEMENT_DATA.splice(index, 1);
      this.dataSource.data = ELEMENT_DATA;
      //console.log(del);
    }
    console.log(ELEMENT_DATA);
  }

  clickAdd() {
    console.log('Клавишу нажали');
    if (this.isAdding === false) {
      this.inputUser.state = 'add';
      ELEMENT_DATA.push(this.inputUser);
      this.dataSource.data = ELEMENT_DATA;
      this.isAdding = true;
    }

  }

  clickedDone(user: User) {
    if (this.isAdding) {
      this.isAdding = false;
      this.inputUser.state = '';
      //this.clickedDelete(this.addingIndication);
      console.log(this.inputUser);
      //ELEMENT_DATA.push(this.inputUser);
      this.inputUser = this.inputClient();
      this.dataSource.data = ELEMENT_DATA;
    } else if (this.isEditing) {
      user.state = '';
      this.inputUser = this.inputClient();
      this.isEditing = false;
    }


  }

  clickEdit(user: User) {
    if(!this.isEditing) {
      user.state='add';
      this.inputUser = user;
      this.isEditing = true;
      this.backupUser.id = user.id;
      this.backupUser.name = user.name;
      this.backupUser.gender = user.gender;
      this.backupUser.phone = user.phone;
      this.backupUser.age = user.age;
      this.backupUser.company = user.company;
      this.backupUser.email = user.email;
      this.backupUser.address = user.address;
    }
    console.log(user);
  }

  clickedCancel(user: User) {
    user.state = '';
    if(this.isAdding) {
      this.clickedDelete(this.inputUser);
      this.inputUser = this.inputClient();
      this.isAdding = false;
    } else if(this.isEditing) {
      this.isEditing = false;
      user.id = this.backupUser.id;
      user.name = this.backupUser.name;
      user.company = this.backupUser.company;
      user.age = this.backupUser.age;
      user.phone = this.backupUser.phone;
      user.email = this.backupUser.email;
      user.address = this.backupUser.address;
      user.gender = this.backupUser.gender;
    }
    console.log(user);

  }
}

