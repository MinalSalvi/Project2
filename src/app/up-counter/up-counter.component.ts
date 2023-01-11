import { Component } from '@angular/core';

@Component({
  selector: 'app-up-counter',
  templateUrl: './up-counter.component.html',
  styleUrls: ['./up-counter.component.css']
})
export class UpCounterComponent {

  ExperienceCount:number=0;

  ExperienceCountstop:any= setInterval(()=>{
    this.ExperienceCount++;
    if(this.ExperienceCount==20){
      clearInterval(this.ExperienceCountstop)
    }
  },900)

  ArticlesCount:number=0;

  ArticlesCountstop:any= setInterval(()=>{
    this.ArticlesCount++;
    if(this.ArticlesCount==15){
      clearInterval(this.ArticlesCountstop)
    }
  },9265)
  ResearchCount:number=0;

  ResearchCountstop:any= setInterval(()=>{
    this.ResearchCount++;
    if(this.ResearchCount==9){
      clearInterval(this.ResearchCountstop)
    }
  },2793)
  ChaptersCount:number=0;

  ChaptersCountstop:any= setInterval(()=>{
    this.ChaptersCount++;
    if(this.ChaptersCount==6){
      clearInterval(this.ChaptersCountstop)
    }
  },7689)
}

