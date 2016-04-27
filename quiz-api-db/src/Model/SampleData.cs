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
                          Name = "Which kind of binding use React?",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "2Way-Binding",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "3Way-Binding",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "No Bindings",
                              Correct = true
                            }
                          }
                        },
                        new Question
                        {
                          Name = "How React updates the UI?",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "Dirty-Checkings",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "Bindings",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "VirtualDOM",
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
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "Inmutable",
                              Correct = true
                            },
                            new QuestionOption {
                              Name = "Hybrid",
                              Correct = false
                            }
                          }
                        },
                        new Question
                        {
                          Name = "What's the React strategy?",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "Put the HTML in JS",
                              Correct = true
                            },
                            new QuestionOption {
                              Name = "Put the JS in HTML",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "Put the CSS in HTML",
                              Correct = false
                            }
                          }
                        },
                        new Question
                        {
                          Name = "What's the signature of a reducer?",
                          Options = new List<QuestionOption>{
                            new QuestionOption {
                              Name = "reducer (state, store)",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "reducer (state, next)",
                              Correct = false
                            },
                            new QuestionOption {
                              Name = "reducer (state, action)",
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
