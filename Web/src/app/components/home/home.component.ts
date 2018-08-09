import { Component, OnInit } from '@angular/core';
import { ModelApiService } from '../../services/model-api.service';
import { MatListModule } from "@angular/material";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobDescription:string;
  knnTags:any;
  nnTags:any;
  tagsDic:any;
  isKNN:boolean;
  isNN:boolean;

  constructor(private modelService: ModelApiService) {
    this.jobDescription = "";
    this.nnTags = [];
    this.knnTags = [];
    this.isKNN = false;
    this.isNN = false;
    this.tagsDic = {
      1:"Software Developer",
      2:"Web Development",
      3:"MEAN Stack",
      4:"C Stack"
    };
   }

  ngOnInit() {
    this.jobDescription = "";
  }

  knn() {
    this.knnTags = [];
    this.nnTags = [];
    this.isNN = false;
    this.modelService.knn(this.jobDescription).subscribe((tags) => {
      this.manageTags(tags.tags, 1);
      this.isKNN = true;
    });
  }

  nn() {
    this.knnTags = [];
    this.nnTags = [];
    this.isKNN = false;
    this.modelService.nn(this.jobDescription).subscribe((tags) => {
      this.manageTags(tags.tags, 2);
      this.isNN = true;
    });
  }

  compare() {
    this.isKNN = false;
    this.isNN = false;
    this.nnTags = [];
    this.knnTags = [];
    this.modelService.knn(this.jobDescription).subscribe((tags) => {
      this.manageTags(tags.tags, 1);
      this.modelService.nn(this.jobDescription).subscribe((tags) => {
        this.manageTags(tags.tags, 2);
        this.isKNN = true;
        this.isNN = true;
      });
    });

  }

  manageTags(predictedTags, option) {
    for(var i=0;i<predictedTags.length;i++)
    {
      if(predictedTags[i] == 1)
        if(option == 1)
          this.knnTags.push(this.tagsDic[i+1]);
        else
          this.nnTags.push(this.tagsDic[i+1]);
    }
  }

  clear() {
    this.jobDescription = "";
    this.nnTags = [];
    this.knnTags = [];
    this.isKNN = false;
    this.isNN = false;
  }
}
