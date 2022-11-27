import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fe-books',
  templateUrl: './fe-books.component.html',
  styleUrls: ['./fe-books.component.css']
})
export class FeBooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data_FE = [
    {
      name: "Engg. Mathematics ",
      author:"BS GREWAL",
      link: "https://drive.google.com/file/d/1jajO_8EOokyRXc8ZR7sUHIrucaWWwwcy/view?usp=sharing"
    },
    {
      name: "Engg. Mechanics",
      author: "M.D. Dayal",
      link: "https://drive.google.com/file/d/12YLCoDcsM8BYK3RgwuP19526G6ZdPvYT/view?usp=sharing"
    },
    {
      name: "Applied Chemistry I",
      author: "TechMax",
      link: "https://drive.google.com/file/d/1h_98SG5vhMaHSp_AN2jjyuvGf0u8K_pq/view?usp=sharing"
    },
    {
      name: "Engg. Physics I",
      author: "TechKnowledge",
      link: "https://drive.google.com/file/d/1qcVJV_PMefjgAOUoa2C_HfOZdqZG0uJg/view?usp=sharing"
    },
    {
      name: "Basic Electrical Engg.",
      author: "Ravish Singh",
      link: "https://drive.google.com/file/d/1p4BWCHn6DGrJ2R4mqyYIsLCjuuST8yxz/view?usp=sharing"
    }
  ];
}
