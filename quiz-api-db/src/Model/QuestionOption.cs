namespace Quiz.Api.Model
{
    public class QuestionOption
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public bool Correct { get; set; }
        public int Result { get; set;}
    }
}
