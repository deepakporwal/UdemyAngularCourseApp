import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  
  recipes : Recipe[] = [
    new Recipe('A test Recipe','Some desciption','https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.boomlive.in%2Fh-upload%2F2021%2F07%2F23%2F953470-zomato.webp&tbnid=9XejpdIR9tlzGM&vet=12ahUKEwjXoYjQuNT-AhVxT3wKHR8oCwcQMygDegUIARDlAQ..i&imgrefurl=https%3A%2F%2Fwww.boomlive.in%2Fnews%2Fzomato-lists-at-116-5-things-you-need-to-know-13988&docid=OF1qIHYOy5Lu4M&w=1280&h=768&q=zomato&ved=2ahUKEwjXoYjQuNT-AhVxT3wKHR8oCwcQMygDegUIARDlAQ'),
    new Recipe('A test Recipe','Some desciption','https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.boomlive.in%2Fh-upload%2F2021%2F07%2F23%2F953470-zomato.webp&tbnid=9XejpdIR9tlzGM&vet=12ahUKEwjXoYjQuNT-AhVxT3wKHR8oCwcQMygDegUIARDlAQ..i&imgrefurl=https%3A%2F%2Fwww.boomlive.in%2Fnews%2Fzomato-lists-at-116-5-things-you-need-to-know-13988&docid=OF1qIHYOy5Lu4M&w=1280&h=768&q=zomato&ved=2ahUKEwjXoYjQuNT-AhVxT3wKHR8oCwcQMygDegUIARDlAQ'),
    new Recipe('A test Recipe','Some desciption','https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.boomlive.in%2Fh-upload%2F2021%2F07%2F23%2F953470-zomato.webp&tbnid=9XejpdIR9tlzGM&vet=12ahUKEwjXoYjQuNT-AhVxT3wKHR8oCwcQMygDegUIARDlAQ..i&imgrefurl=https%3A%2F%2Fwww.boomlive.in%2Fnews%2Fzomato-lists-at-116-5-things-you-need-to-know-13988&docid=OF1qIHYOy5Lu4M&w=1280&h=768&q=zomato&ved=2ahUKEwjXoYjQuNT-AhVxT3wKHR8oCwcQMygDegUIARDlAQ'),
    new Recipe('A test Recipe','Some desciption','https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.boomlive.in%2Fh-upload%2F2021%2F07%2F23%2F953470-zomato.webp&tbnid=9XejpdIR9tlzGM&vet=12ahUKEwjXoYjQuNT-AhVxT3wKHR8oCwcQMygDegUIARDlAQ..i&imgrefurl=https%3A%2F%2Fwww.boomlive.in%2Fnews%2Fzomato-lists-at-116-5-things-you-need-to-know-13988&docid=OF1qIHYOy5Lu4M&w=1280&h=768&q=zomato&ved=2ahUKEwjXoYjQuNT-AhVxT3wKHR8oCwcQMygDegUIARDlAQ')
  ];

  constructor() {

  }

  ngOnInit(): void {
    
  }

}
