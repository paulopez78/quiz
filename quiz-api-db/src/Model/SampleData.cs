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
                  Name = "React+Redux+JS Quiz",
                  Description = "React Quiz Questions",
                  Active = true,
                  Questions = new List<Question>
                  {
                        new Question
                        {
                          Name = "Who is the creator of React?",
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
                          Name = "Who is the main competitor of React?",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "XAML",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "Angular 2",
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
                          Name = "Who is the creator of Redux?",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "Dan Abramov",
                              Correct = true
                            },
                            new QuestionOption {
                              Name = "My Mom",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "Darth Vader",
                              Correct = false
                            }
                          }
                        },
                        new Question
                        {
                          Name = "Who is the competitor of Redux?",
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
                        },
                        new Question
                        {
                          Name = "What's the most popular JS compiler?",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "Babel",
                              Correct = true
                            },
                            new QuestionOption {
                              Name = "Webpack",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "Gulp",
                              Correct = false
                            }
                          }
                        },
                        new Question
                        {
                          Name = "The state of a redux app should be always...",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "Mutable",
                              Correct = true
                            },
                            new QuestionOption {
                              Name = "Inmutable",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "Hybrid",
                              Correct = false
                            }
                          }
                        },
                        new Question
                        {
                          Name = "What's the most popular bundler?",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "Optimizations",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "Webpack",
                              Correct = true
                            },
                            new QuestionOption {
                              Name = "Gulp",
                              Correct = false
                            }
                          }
                        },
                        new Question
                        {
                          Name = "What's the signature of a reducer?",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "(state, store)",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "(state, next)",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "(state, action)",
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
