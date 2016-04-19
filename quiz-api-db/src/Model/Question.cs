using System;
using System.Collections.Generic;

namespace Quiz.Api.Model
{
    public class Question
    {
      public int Id { get; set; }
      public string Name { get; set; }
      public List<QuestionOption> Options { get; set; }
    }
}