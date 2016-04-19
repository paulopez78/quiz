using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;

namespace Quiz.Api.Model
{
    public static class SampleData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetService<QuizContext>();

            context.AddRange(
              new Quiz
              {
                  Name = "React Quiz",
                  Description = "React Quiz Questions",
                  Active = true,
                  Questions = new List<Question>
                  {
                        new Question
                        {
                          Name = "Who is the creator of React",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "Facebook",
                              Correct = true
                            },
                            new QuestionOption {
                              Name = "Microsoft",
                              Correct = false                              
                            },
                            new QuestionOption {
                              Name = "Twitter",
                              Correct = false                              
                            }
                          }
                        },
                        new Question
                        {
                          Name = "Who is the competitor of React",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "WPF",
                              Correct = false                              
                            },
                            new QuestionOption {
                              Name = "Angular2",
                              Correct = true
                            },
                            new QuestionOption {
                              Name = "JQuery",
                              Correct = false
                            }
                          }
                        },
                          new Question
                        {
                          Name = "Who is the creator of Redux",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "Dan Abramov",
                              Correct = true
                            },
                            new QuestionOption {
                              Name = "Me",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "You",
                              Correct = false
                            }
                          }
                        },
                        new Question
                        {
                          Name = "Who is the competitor of Redux",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "Flux",
                              Correct = true
                            },
                            new QuestionOption {
                              Name = "MVC",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "MVVM",
                              Correct = true
                            }
                          }
                        }
                  }
              },
              new Quiz
              {
                  Name = "Redux Quiz",
                  Description = "Redux Quiz Questions",
                  Active = false,
                  Questions = new List<Question>
                  {
                        new Question
                        {
                          Name = "Who is the creator of Redux",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "Dan Abramov",
                              Correct = true
                            },
                            new QuestionOption {
                              Name = "Me",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "You",
                              Correct = false
                            }
                          }
                        },
                        new Question
                        {
                          Name = "Who is the competitor of Redux",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "Flux",
                              Correct = true
                            },
                            new QuestionOption {
                              Name = "MVC",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "MVVM",
                              Correct = true
                            }
                          }
                        }
                  }
              }
            );

            context.SaveChanges();
        }
    }
}
