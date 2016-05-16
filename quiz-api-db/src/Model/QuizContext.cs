using Microsoft.EntityFrameworkCore;

namespace Quiz.Api.Model
{
    public class QuizContext : DbContext
    {
       public QuizContext(DbContextOptions<QuizContext> options)
            : base(options)
        {
        }
        
        public DbSet<Quiz> Quizzes { get; set; }

        public DbSet<Question> Questions { get; set; }
    }
}
