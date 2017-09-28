import { RouterUtils } from './../util/router.utils';
import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

declare var $:any;

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  private urls: Array<string>;
  private currentDate: Date;

  constructor() { }

  ngOnInit(){
    this.currentDate = new Date();

    this.urls =  new Array<string>();

    this.urls.push("1.  GET    :" + RouterUtils.candidatesUrl());
    this.urls.push("2.  GET    :" + RouterUtils.candidateUrl(1));
    this.urls.push("3.  GET    :" + RouterUtils.candidateSkillsUrl(1));
    this.urls.push("4.  GET    :" + RouterUtils.candidateInterestsUrl(1));
    this.urls.push("5.  GET    :" + RouterUtils.candidateExperienceUrl(1));
    this.urls.push("6.  GET    :" + RouterUtils.candidateEducationUrl(1));
    this.urls.push("7.  GET    :" + RouterUtils.candidateLanguagesUrl(1));
    this.urls.push("8.  GET    :" + RouterUtils.candidateCommentsUrl(1));
    this.urls.push("9.  POST   :" + RouterUtils.createCommentUrl(1));
    this.urls.push("10. GET    :" + RouterUtils.candidateLikesUrl(1));
    this.urls.push("11. POST   :" + RouterUtils.likeCandidateUrl(1));
    this.urls.push("12. GET    :" + RouterUtils.candidateRatingUrl(1));
    this.urls.push("13. POST   :" + RouterUtils.rateCandidateUrl(1));
    this.urls.push("14. GET    :" + RouterUtils.candidateChatUrl(1));
    this.urls.push("15. GET    :" + RouterUtils.positionsUrl());
    this.urls.push("16. POST   :" + RouterUtils.createPositionUrl());
    this.urls.push("17. GET    :" + RouterUtils.positionUrl(1));
    this.urls.push("18. DELETE :" + RouterUtils.deletePositionUrl(1));
    this.urls.push("19. GET    :" + RouterUtils.positionRequirementsUrl(1));
    this.urls.push("20. POST   :" + RouterUtils.createPositionRequirementUrl(1));
    this.urls.push("21. DELETE :" + RouterUtils.deletePositionRequirementUrl(1, 2));
    this.urls.push("22. GET    :" + RouterUtils.positionCandidatesUrl(1));
    this.urls.push("23. GET    :" + RouterUtils.questionsUrl());
    this.urls.push("24. GET    :" + RouterUtils.questionUrl(1));
    this.urls.push("25. POST   :" + RouterUtils.createQuestionUrl());
    this.urls.push("26. DELETE :" + RouterUtils.deleteQuestionUrl(1));
    this.urls.push("27. GET    :" + RouterUtils.repliesUrl(1));
    this.urls.push("28. POST   :" + RouterUtils.createReplyUrl(1));
    this.urls.push("29. DELETE :" + RouterUtils.deleteReplyUrl(1, 2));


    var data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
        [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795],
        [832, 101, 105, 200, 230, 532, 470, 480, 450, 300, 200, 700]
      ]
    };

    var options = {
        seriesBarDistance: 10,
        axisX: {
            showGrid: false
        },
        height: "245px"
    };

    var responsiveOptions = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    Chartist.Line('#chartActivity', data, options, responsiveOptions);
  }
}