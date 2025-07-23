import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Database, ref, set ,update,onValue,remove} from '@angular/fire/database';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngForm & ngModel

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, RouterLink, FormsModule] // ✅ Add FormsModule here
})
export class App {
  protected readonly title = signal('firebase-crud');

  constructor(public database: Database) {}

  registerUser(value: any) {
    //create data
    // set(ref(this.database, 'users/' + value.username), {
    //   username: value.username,
    //   first_name: value.first_name,
    //   last_name: value.last_name
    // });
    //   alert('User created successfully');
     
  //read data
//     const starCountRef = ref(this.database, 'users/' + value.username);
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   alert(data.username);
// });

  //Update data
  //   update(ref(this.database, 'users/' + value.username), {
  //     // username: value.username,
  //     first_name: value.first_name,
  //     last_name: value.last_name
  //   });
  //     alert('User updated successfully');
     // }

     //remove data
     remove(ref(this.database, 'users/' + value.username));
     alert('remove data successfully');
}
}
