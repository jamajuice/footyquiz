(function(){
	angular
		.module("footyFacts")
		.factory("DataService", DataFactory);

	function DataFactory(){
		var dataObj ={
			footyData: footyData,
			quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
		};

		return dataObj;
	}

    var correctAnswers = [3, 1, 0, 2, 0, 3, 2, 0, 1, 1];// [1, 2, 3, 0, 2, 0, 3, 2, 0, 2];

	var quizQuestions  = [
        {
            type: "text",
            text: "Who won the Premier League title in 2016 against the odds?",
            possibilities: [
                {
                    answer: "Chelsea F.C."
                },
                {
                    answer: "Manchester United F.C."
                },
                {
                    answer: "Liverpool F.C."
                },
                {
                    answer: "Leicester City F.C."
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which club is the biggest enemie to Arsenal F.C. in the Prmier League?",
            possibilities: [
                {
                    answer: "Manchester United F.C."
                },
                {
                    answer: "Tottenham Hotspur F.C."
                },
                {
                    answer: "Chelsea F.C."
                },
                {
                    answer: "Liverpool F.C."
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which stadium is known as Anfield",
            possibilities: [
                {
                    answer: "http://assets1.lfcimages.com/uploads/3236__3775__1_53580822b058e314221428.jpg"
                },
                {
                    answer: "http://traveldigg.com/wp-content/uploads/2016/08/Emirates-Stadium-Arsenal.jpg"
                },
                {
                    answer: "http://i2.mirror.co.uk/incoming/article7981687.ece/ALTERNATES/s615/The-Etihad-stadium-Manchester.jpg"
                },
                {
                    answer: "http://hospitality.chelseafc.com/content/wp-content/uploads/2015/01/Fish_eye.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which stadium belongs to Manchester City?",
            possibilities: [
                {
                    answer: "https://i.ytimg.com/vi/MM9LJdGSVXg/maxresdefault.jpg"
                },
                {
                    answer: "http://hospitality.chelseafc.com/content/wp-content/uploads/2015/01/Fish_eye.jpg"
                },
                {
                    answer: "http://i2.mirror.co.uk/incoming/article7981687.ece/ALTERNATES/s615/The-Etihad-stadium-Manchester.jpg"
                },
                {
                    answer: "http://i2.mirror.co.uk/incoming/article6026003.ece/ALTERNATES/s615b/New-Tottenham-Stadium.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which club had a team known as The Invincibles?",
            possibilities: [
                {
                    answer: "Arsenal F.C."
                },
                {
                    answer: "Manchester United F.C."
                },
                {
                    answer: "Manchester City F.C."
                },
                {
                    answer: "Liverpool F.C"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which club is the biggest enemie to Liverpool F.C. in the Prmier League? ",
            possibilities: [
                {
                    answer: "Tottenham Hotspur F.C."
                },
                {
                    answer: "Manchester United F.C"
                },
                {
                    answer: "Leicester City F.C"
                },
                {
                    answer: "Everton F.C"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which manager won the most EPL titles to date?",
            possibilities: [
                {
                    answer: "Rafa Benitez"
                },
                {
                    answer: "Arsene Wenger"
                },
                {
                    answer: "Sir Alex Ferguson"
                },
                {
                    answer: "Claudio Ranieri"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which stadium belongs to Arsenal FC?",
            possibilities: [
                {
                    answer: "http://traveldigg.com/wp-content/uploads/2016/08/Emirates-Stadium-Arsenal.jpg"
                },
                {
                    answer: "http://www.chelseafc.com/content/cfc/en/homepage/matches/away-travel-guides/shared/everton---goodison-park.img.png"
                },
                {
                    answer: "http://assets1.lfcimages.com/uploads/3236__3775__1_53580822b058e314221428.jpg"
                },
                {
                    answer: "https://i.ytimg.com/vi/MM9LJdGSVXg/maxresdefault.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which Premier League club has most recently won the UEFA Champions League?",
            possibilities: [
                {
                    answer: "Manchester United F.C."
                },
                {
                    answer: "Chelsea F.C."
                },
                {
                    answer: "Liverpool F.C."
                },
                {
                    answer: "Leicester City F.C."
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who won the UEFA Champions League in 2005?",
            possibilities: [
                {
                    answer: "Arsenal F.C."
                },
                {
                    answer: "Liverpool F.C."
                },
                {
                    answer: "Chelsea F.C."
                },
                {
                    answer: "Manchester City F.C."
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var footyData = [
        {
            type: "Liverpool F.C.",
            image_url: "http://assets1.lfcimages.com/uploads/3236__3775__1_53580822b058e314221428.jpg",
            home_field: "Anfield",
            important_fact: "Won the Champions League in 2005",
            description: "With an unbelievable comeback against AC Milan, Liverpool came back to beat them in penalty shootouts after a 3-3 draw. This was done under Rafa Benitez's management."
        },
        {
            type: "Arsenal F.C.",
            image_url: "http://traveldigg.com/wp-content/uploads/2016/08/Emirates-Stadium-Arsenal.jpg",
            home_field: "Emirates Stadium",
            important_fact: "Had a squad known as The Invincibles who went undefeated in the 2003/04",
            description: "Under Arsene Wenger, Arsenal went through the season without a single defeat – the first team ever to do so in a 38-game league season and were crowned champions once more, at the expense of Chelsea, who had spent heavily throughout the season. To date, this remains Arsenal's last league title."
        },
        {
            type: "Chelsea F.C.",
            image_url: "http://hospitality.chelseafc.com/content/wp-content/uploads/2015/01/Fish_eye.jpg",
            home_field: "Stamford Bridge",
            important_fact: "Most recent Champions League winners (2012)",
            description: "Chelsea F.C are the most recent Premier League team to win the UEFA Champions league after defeating Bayern Munich under management of Roberto Di Matteo."
        },
        {
            type: "Manchester United F.C.",
            image_url: "https://i.ytimg.com/vi/MM9LJdGSVXg/maxresdefault.jpg",
            home_field: "Old Tradfford",
            important_fact: "Most titles in Premier League history (13)",
            description: "Manchester United has won record 13 titles under Sir Alex Ferguson since 1992."
        },
        {
            type: "Manchester City F.C.",
            image_url: "http://i2.mirror.co.uk/incoming/article7981687.ece/ALTERNATES/s615/The-Etihad-stadium-Manchester.jpg",
            home_field: "Etihad Stadium",
            important_fact: "Most Premier League titles recently (2)",
            description: "With not much history, it wasn't until August 2008 that the team had grown attention as the club was purchased by the Abu Dhabi United Group. Ever since, a large influx of money has brought in many good players and managers and allowed th club to not only renovate their stadium but also renovate their team into a title competing team. In the last five years: 2017-2012, they have won two Premier League Titles in 2012 and 2014 which is more then others."
        },
        {
            type: "Leicester City F.C.",
            image_url: "http://www.lcfc.com/cms_images/kps-pitch-480280-2601715.jpg",
            home_field: "King Power Stadium",
            important_fact: "Won the EPL Title in 2016",
            description: "Under Claudio Ranieri, Leicester City did the seemingly impossible in the 2005/06 season, overcoming 5,000-to-1 odds to win the Premier League."
        },
        {
            type: "Tottenham Hotspur F.C.",
            image_url: "http://i2.mirror.co.uk/incoming/article6026003.ece/ALTERNATES/s615b/New-Tottenham-Stadium.jpg",
            home_field: "White Hart Lane",
            important_fact: "Enemies to Arsenal F.C.",
            description: "Participate in the North-London Derby against Arsenal. Arsenal Football Club made themselves permanent enemies of the Tottenham faithful when they moved their South London home at Woolwich to North London and into Spurs territory. They only fueled the hatred when, just one year later, Spurs were relegated and joined Arsenal in the Second Division. The Football Association decided to extend the First Division by another 2 teams and historically this meant that the teams scheduled for the drop would stay up instead. Somehow Arsenal’s chairman managed to persuade the FA that they should take Tottenham’s place despite only finishing in fifth place in the second division, 4 points behind third place Barnsley who stayed down"
        },
        {
            type: "Everton F.C.",
            image_url: "http://www.chelseafc.com/content/cfc/en/homepage/matches/away-travel-guides/shared/everton---goodison-park.img.png",
            home_field: "Goodison Park",
            important_fact: "Enemies to Liverpool F.C",
            description: "Participate in the Merseyside Derby against Liverpool. Given what had happened tragically at Hillsborough just weeks before, the 1989 FA Cup final should almost have been an irrelevance. The very fact both of the Merseyside clubs reached it, however, only made it all the more important. It became about the city. Liverpool striker John Aldridge opened the scoring after just four minutes, only for Everton substitute Stuart McCall to equalise as the game entered stoppage time. McCall then struck again in extra time, but it was in between strikes from Reds legend Ian Rush. Liverpool lifted the FA Cup, and temporarily lifted spirits."
        }
];


})();