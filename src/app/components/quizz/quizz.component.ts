import { Component, OnInit } from '@angular/core';
import { question } from 'src/app/models/question';
import quizz_questions from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  title:string = '';
  questions:question[] = [];
  questionSelected:question = {
    id: 0,
    question: '',
    options: []
  };
  answers:string[] = [];
  answerSelected:string = '';
  questionIndex:number = 0;
  questionMax:number = 0;
  finished:boolean = true;
  countA:number = 0;
  countB:number = 0;
  resultado:string = '';

  constructor() { }

  ngOnInit(): void {
    if (quizz_questions) {
      this.finished = false;
      this.title = quizz_questions.title;
      this.questions = quizz_questions.questions;
      this.questionSelected = this.questions[this.questionIndex];
      this.questionMax = this.questions.length
    }
  }

  playerChoose(opt:string) {
    this.answers.push(opt);
    this.nextStep();
  }

  nextStep() {
    if (this.questionIndex < this.questionMax - 1) {
      this.questionIndex++;
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      this.finished = true;
      this.showResults();
    }
  }

  showResults() {
    for (let value of this.answers){
      value === 'A'? this.countA++ : this.countB++;
    };

    this.countA > this.countB ? this.resultado = quizz_questions.results.A : this.resultado = quizz_questions.results.B
    
  }

}
