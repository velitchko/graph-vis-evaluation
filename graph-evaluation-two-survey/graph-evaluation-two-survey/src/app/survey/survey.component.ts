import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import * as Survey from 'survey-angular';
import { v4 as uuidv4 } from 'uuid';
import { SURVEY_JSON } from '../../assets/full_survey';
import * as widgets from 'surveyjs-widgets';

const PAUSE_PAGE = {
  "name": "pause",
  "elements": [
    {
      "type": "html",
      "name": "break",
      "html": `<h1>Break!</h1>
              <p>Please take a 5-10 minute break before continuing.</p>
              <p>Do not close this session!</p>
          `
    }
  ]
};

const CONTROL_PAGES = [
  {
    "name": "control1",
    "elements": [
      {
          "type": "radiogroup",
          "name": "control1",
          "title": "Consider the set of nodes 'AD37', 'NY62', 'LT02', 'VZ38', 'DO54'. What color do you see below?",
          "isRequired": true,
          "colCount": 5,
          "choices": ['red', 'blue', 'green', 'yellow', 'black']
      },
      {
        "type": "radiogroup",
        "name": "control1_confidence",
        "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
        "isRequired": true,
        "colCount": 5,
        "choices": [1, 2, 3, 4, 5]
      },
      {
        "type": "html",
        "html": "What is this <span style=\"color:red; font-weight: bold\">color</span>? <br> <iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-si\" frameborder=\"0\"></iframe>"
      }
    ]
  },
  {
    "name": "control2",
    "elements": [
      {
        "type": "text",
        "name": "control2",
        "inputType": "number",
        "isRequired": true,
        "title": "Consider the set of nodes 'AD37', 'NY62', 'LT02', 'VZ38', 'DO54'. What is 2 + 2?",
      },
      {
        "type": "radiogroup",
        "name": "control2_confidence",
        "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
        "isRequired": true,
        "colCount": 5,
        "choices": [1, 2, 3, 4, 5]
      },
      {
        "type": "html",
        "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-jp\" frameborder=\"0\"></iframe>"
      }
    ]
  },
  {
    "name": "control3",
    "elements": [
      {
        "type": "radiogroup",
        "name": "control3",
        "isRequired": true,
        "title": "Consider the set of nodes 'AD37', 'NY62', 'LT02', 'VZ38', 'DO54'. Which is the third node in the sequence?",
        "colCount": 5,
        "choices": ['DO54', 'VZ38', 'NY62', 'AD37', 'LT02']
      },
      {
        "type": "radiogroup",
        "name": "control3_confidence",
        "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
        "isRequired": true,
        "colCount": 5,
        "choices": [1, 2, 3, 4, 5]
      },
      {
        "type": "html",
        "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-si\" frameborder=\"0\"></iframe>"
      }
    ]
  }
];

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})

export class SurveyComponent implements AfterViewInit {
  // Survey Holder object
  private survey;
  private surveyJSON;
  private startTime: any;

  private results: Array<any>;
  private readonly uuid: string = uuidv4();

  public isSurveyComplete: boolean = false;
  public fileName: string;

  private interactions: any;
  private timers: Array<any>;

  studyGroup: string;
  private groupProbabilities: Array<{ group: string, probability: number }>;

  private header: any;

  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef) {

    this.results = new Array<any>();
    this.surveyJSON = SURVEY_JSON;

    this.groupProbabilities = new Array<{ group: string, probability: number }>();
    this.groupProbabilities.push(
      {
        group: 'A', // No interactions
        probability: 0.25
      }, {
      group: 'B', // Interactions
      probability: 0.75
    }
    );

    this.studyGroup = this.getRandomStudyGroup();
    this.congifureSurvey();

    this.fileName = `results_${this.uuid}_${this.studyGroup}.json`;
    // Info coming from child iframe
    window.addEventListener('message', ($event) => {
      this.interactions = $event.data.interactions;
      this.timers = $event.data.timers;
    });
  }

  getQuestionCategory(questionName: string): string {
    let cat = '';

    let parts = questionName.split('_');
    cat = cat.concat(parts[1], parts[2], parts[3]);
    return cat;
  }

  shufflePages(pages: Array<any>): Array<any> {
    let currentIndex = pages.length;
    let temporaryValue: number;
    let randomIndex: number;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = pages[currentIndex];
      pages[currentIndex] = pages[randomIndex];
      pages[randomIndex] = temporaryValue;
    }

    // check for back to back pages that have the same task category and encoding
    let backToBacks = [];
    for (let i = 0; i < pages.length; i++) {
      let currentPage = pages[i];
      let nextPage = pages[i + 1];

      if (nextPage) {
        let currentCat = this.getQuestionCategory(currentPage.elements[0].name);
        let nextCat = this.getQuestionCategory(nextPage.elements[0].name);
        if (currentCat === nextCat) { // back to back found
          backToBacks.push(i);
        }
      }
    }

    // unshift back to back pages return array
    let tmpPages = [];

    let swappedPages = 0; // keep track of swapped elements and update index
    backToBacks.forEach((i: any) => {
      let removed = pages.splice(i + swappedPages, 1);
      tmpPages.push(removed);
      swappedPages++;
    });

    tmpPages.forEach((p: any) => {
      pages.unshift(p);
    });

    return pages;
  }

  congifureSurvey(): void {
    SURVEY_JSON['pages'].forEach((p: any) => {
      if (p.name === 'intro') return;

      p.elements.forEach((e: any) => {
        if (e.type === 'html') {
          // Based on group add or remove interactions using iframe query param
          if (this.studyGroup === 'A') {
            e.html = e.html.split('src="')[0] + 'src="' + e.html.split('src="')[1].split('" frameborder')[0] + '&interactions=false' + '" frameborder' + e.html.split('src="')[1].split('" frameborder')[1];
          } else {
            e.html = e.html.split('src="')[0] + 'src="' + e.html.split('src="')[1].split('" frameborder')[0] + '&interactions=true' + '" frameborder' + e.html.split('src="')[1].split('" frameborder')[1];
          }
        }
      });
    });

    // shift first page
    let firstPage = SURVEY_JSON['pages'].shift();
    firstPage.name = 'intro';
    firstPage.title = 'Introduction';

    // pop last page
    let lastPage = SURVEY_JSON['pages'].pop();
    lastPage.name = 'page50';
    lastPage.title = 'Question 50';

    let pages = SURVEY_JSON['pages'];

    // shuffle questions
    let randomizedPages = this.shufflePages(pages);
    let finalPages = new Array<any>();

    // reindex question + title + add pause breaks
    let controlPageIdx = 0;
    randomizedPages.forEach((p: any, i: number) => {
      if (i % 12 === 0 && i !== 0) { 
        finalPages.push(PAUSE_PAGE);
        finalPages.push(CONTROL_PAGES[controlPageIdx]);
        controlPageIdx++;
      }
        p.name = `page${i + 1}`;
      p.title = `Question ${i + 1}`;
      finalPages.push(p);
    });


    // prepend first page
    finalPages.unshift(firstPage);

    // append last page
    finalPages.push(lastPage);

    // overwrite survey pages
    SURVEY_JSON['pages'] = finalPages;
  }

  getRandomStudyGroup(): string {
    let sum = 0;
    const rand = Math.random();

    for (let i in this.groupProbabilities) {
      sum += this.groupProbabilities[i].probability;
      if (rand <= sum) return this.groupProbabilities[i].group;
    }
  }

  validateNumericAnswer(params: Array<any>): boolean {
    return params[0] && (params[0] >= 0 && params[0] <= 30);
  }

  ngAfterViewInit(): void {
    widgets.jquerybarrating(Survey);

    this.survey = new Survey.Model(this.surveyJSON);


    this.survey
      .onStarted
      .add((_: any) => {
        this.startTime = performance.now();
        // Hide header div 
        this.header = document.getElementsByClassName('sv_header');
        this.header[0].style.display = 'none';
      });

    this.survey
      .onCurrentPageChanged
      .add((survey: any) => {
        // calculate time elapsed
        let endTime: any = performance.now();
        let timeElapsed = endTime - this.startTime;
        timeElapsed = Math.round(timeElapsed / 1000); // convert to seconds
        // Parse result
        let result = [];
        for (let i in survey.data) {
          result.push([i, survey.data[i]]);
        }


        // save results
        // question answer
        this.results.push({
          question: result[result.length - 2],
          time: timeElapsed,
          interactions: this.interactions,
          timers: this.timers
        });
        // confidence
        this.results.push({
          question: result[result.length - 1],
        });
        // restart timer for next page
        this.startTime = performance.now();
      });

    this.survey
      .onComplete
      .add((survey: any) => {
        // calculate time elapsed
        let endTime: any = performance.now();
        this.header[0].style.display = 'block';
        let timeElapsed = endTime - this.startTime;
        timeElapsed = Math.round(timeElapsed / 1000); // convert to seconds

        this.results.push({
          question: {
            preferences: survey.data.preferences
          }
        });
        this.results.push({
          question: {
            comments: survey.data.comments
          }
        });
        // // Parse result
        // let result = [];
        // for(let i in survey.data) {
        //   result.push([i, survey.data[i]]);
        // }

        // // save results
        // this.results.push({
        //   question: result[result.length - 1],
        //   time: timeElapsed,
        //   interactions: this.interactions,
        //   timers: this.timers
        // });
        this.isSurveyComplete = true;
      });

    (Survey.matrixDropdownColumnTypes as any).barrating = {
      properties: ["choices"],
      onCellQuestionUpdate: (cellQuestion, column, question, data) => {
        //on changing properties call function default for dropdown celltype
        Survey
          .matrixDropdownColumnTypes
          .dropdown
          .onCellQuestionUpdate(cellQuestion, column, question, data);
      }
    };

    Survey
      .FunctionFactory
      .Instance
      .register("validateNumericAnswer", this.validateNumericAnswer);

    Survey
      .SurveyNG
      .render("surveyElement", { model: this.survey, isExpanded: true });

    // const lastPage = this.survey.pages[this.survey.pages.length - 1];
    // this.survey.currentPage = lastPage;
  }

  get dataUri(): SafeUrl {
    const jsonData = JSON.stringify(this.results);
    const uri = 'data:application/json;charset=UTF-8,' + encodeURIComponent(jsonData);
    return this.sanitizer.bypassSecurityTrustUrl(uri);
  }

}