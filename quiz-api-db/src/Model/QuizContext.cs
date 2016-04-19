using Microsoft.Data.Entity;

namespace Quiz.Api.Model
{
    public class QuizContext : DbContext
    {
        public DbSet<Quiz> Quizzes { get; set; }

        public DbSet<Question> Questions { get; set; }
    }
}
