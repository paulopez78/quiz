using System;
using System.Collections.Generic;

namespace Quiz.Api.Model
{
    public class Quiz
    {
        public Quiz()
        {
            Questions = new List<Question>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Active { get; set; }
        public List<Question> Questions { get; set; }

        public void Activate()
        {
            this.Active = true;
        }

        public void Deactivate()
        {
            this.Active = false;
        }
    }
}
