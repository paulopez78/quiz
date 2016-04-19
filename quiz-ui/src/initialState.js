const initialState =[
    {
      id: 0,
      name: "Who created react",
      options:[
        {id:0, name:"Facebook"},
        {id:1, name:"Twitter"},
        {id:2, name:"Microsoft"}
      ],
      correctAnswer: 0,
      answerVisible: false,
      selectedOption: -1
    },
    {
      id: 1,
      name: "Who is the main competitor",
      options:[
        {id:0, name:"C++"},
        {id:1, name:".NET"},
        {id:2, name:"Angular2"}
      ],
      correctAnswer: 2,
      answerVisible: false,
      selectedOption: -1
    },
    {
      id: 2,
      name: "What's the coolest language",
      options:[
        {id:0, name:"C#"},
        {id:1, name:"ES6"},
        {id:2, name:"Erlang"}
      ],
      correctAnswer: 2,
      answerVisible: false,
      selectedOption: -1
    }
  ];

export default initialState;
