import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IUser {
  id: string,
  name: string,
  email: string,
  active: boolean,
  role: { id: string, name: string }
}

interface IPaginate {
  limit: number,
  page: number,
  total: number
}

const initialSelectedUser = JSON.parse(JSON.stringify({ id: "", name: "", email: "", active: false, role: { id: "", name: "" } }));

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  users: IUser[] = [];
  isSelected: boolean = false;
  selectedUser: IUser = initialSelectedUser;
  paginate: IPaginate = { limit: 10, page: 1, total: 0 }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchUsers();
  }

  async fetchUsers() {
    const skip = this.paginate.page * this.paginate.limit - this.paginate.limit;
    const response = await this.http.get<any>(`https://dummyjson.com/users?limit=${this.paginate.limit}&skip=${skip}`).toPromise();

    this.users = response.users.map((user: any, index: number) => {
      return {
        id: user.id,
        name: user.firstName + " " + user.lastName,
        email: user.email,
        active: true,
        role: { id: 2, name: "customer" }
      }
    });

    this.paginate.total = response.total;
  }

  nextPage() {
    const total_pages = this.paginate.total / this.paginate.limit;
    if (this.paginate.page < total_pages) {
      this.paginate.page += 1;
      this.fetchUsers();
    }
  }

  previouslyPage() {
    if (this.paginate.page > 1) {
      this.paginate.page -= 1;
      this.fetchUsers();
    }
  }

  selectUser(user: IUser) {
    this.selectedUser = user;
    this.isSelected = true;
  }

  onCloseEditModal() {
    this.isSelected = false;
    this.selectedUser = initialSelectedUser;
  }

  // Other

  existsUsers() {
    return this.users.length > 0;
  }

}
