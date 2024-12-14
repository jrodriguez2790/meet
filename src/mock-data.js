const mockData = [
  {
    id: 1,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-05-19T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 2,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-05-20T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 3,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-05-21T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 4,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-05-22T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 5,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-05-23T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 6,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-05-25T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 7,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-05-26T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 8,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-05-27T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 9,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-05-28T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 10,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-05-29T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 11,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-05-30T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 12,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-06-01T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 13,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-06-02T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 14,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-06-03T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 15,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-06-04T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 16,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-06-05T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 17,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-06-06T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 18,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-06-08T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 19,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-06-09T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 20,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-06-10T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 21,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-06-11T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 22,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-06-12T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 23,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-06-13T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 24,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-06-15T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 25,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-06-16T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 26,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-06-17T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 27,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-06-18T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 28,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-06-19T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 29,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-06-20T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 30,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-06-22T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 31,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-06-23T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
  {
    id: 32,
    summary: "React is Fun",
    location: "Berlin, Germany",
    start: { dateTime: "2020-06-24T14:00:00+02:00" },
    description:
      "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",
  },
  {
    id: 33,
    summary: "Learn JavaScript",
    location: "London, UK",
    start: { dateTime: "2020-06-25T16:00:00+02:00" },
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  },
];

export default mockData;