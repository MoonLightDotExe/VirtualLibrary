import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-se-books',
  templateUrl: './se-books.component.html',
  styleUrls: ['./se-books.component.css']
})
export class SeBooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data_SE = [
    {
      name: "Engg. Mathematics III",
      author:"Kumbhojkar",
      link: "https://drive.google.com/file/d/1j2-ws4ktDp1PxYXYg-FYDeGvz4eL_5pr/view?usp=share_link"
    },
    {
      name: "Computer Graphics",
      author: "Donald Hearn",
      link: "https://drive.google.com/file/d/1QThVDdc6lF6wRpzXpqeysMUSxiIrgd_x/view?usp=share_link"
    },
    {
      name: "Data Structures",
      author: "Reema Thareja",
      link: "https://drive.google.com/file/d/1cbrBR-vo-I3t4uJnjXDUoUDzs2sokICW/view?usp=share_link"
    },
    {
      name: "DLCA",
      author: "Easy Solutions",
      link: "https://drive.google.com/file/d/1s8wf1QFTwAStz5MWhaaezmS8uuaJL_Qg/view?usp=share_link"
    },
    {
      name: "Discrete Structures and Graph Theory",
      author: "Schaum's",
      link: "https://drive.google.com/file/d/1oe3mNB504SugdiN21zHyfK5JkoEwLK2f/view?usp=share_link"
    }
  ];
  
}
