using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;
using Microsoft.AspNet.Mvc;
using Quiz.Api.Model;

namespace Quiz.Api.Controllers
{
    [Route("[controller]")]
    public class QuizController
    {
        private readonly QuizContext _quizContext;

        public QuizController(QuizContext quizContext)
        {
            _quizContext = quizContext;

        }

        [HttpGet]
        public async Task<IEnumerable<Model.Quiz>> Get()
        {
            return await _quizContext.Quizzes
            .Include(x => x.Questions)
            .ThenInclude(y => y.Options)
            .ToListAsync();
        }

        [HttpGet("Active")]
        public async Task<Model.Quiz> GetActive()
        {
            return await GetActiveQuiz();
        }

        [HttpPost("Answer")]
        public async Task Answer([FromBody]Model.QuestionAnswer answer)
        {
            var answeredOption = await _quizContext.Set<QuestionOption>()
            .FirstOrDefaultAsync(x => x.Id ==answer.Option);

            if (answeredOption != null){
              answeredOption.Result = answer.Result;
              await _quizContext.SaveChangesAsync();
            }
        }

        [HttpGet("{id}")]
        public async Task<Model.Quiz> Get(int id)
        {
            return await _quizContext.Quizzes
                        .Include(x => x.Questions)
                        .ThenInclude(y => y.Options)
                        .FirstOrDefaultAsync(x => x.Id == id);
        }

        [HttpPost]
        public async Task Post([FromBody]Model.Quiz quiz)
        {
            _quizContext.Add(quiz);
            await _quizContext.SaveChangesAsync();
        }

        [HttpPut("{id}")]
        public async Task Put(int id, [FromBody]Model.Quiz quiz)
        {
            var existingQuiz = await _quizContext.Quizzes.FirstOrDefaultAsync(x => x.Id == id);
            _quizContext.Remove(existingQuiz);
            _quizContext.Add(quiz);
            await _quizContext.SaveChangesAsync();
        }

        [HttpPut("{id}/Activate")]
        public async Task Activate(int id)
        {
            var existingQuiz = await _quizContext.Quizzes.FirstOrDefaultAsync(x => x.Id == id);
            await _quizContext.Quizzes.ForEachAsync(x => x.Deactivate());
            existingQuiz.Activate();
            await _quizContext.SaveChangesAsync();
        }

        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            var quiz = await _quizContext.Quizzes.FirstOrDefaultAsync(x => x.Id == id);
            _quizContext.Remove(quiz);
            await _quizContext.SaveChangesAsync();
        }

        private async Task<Model.Quiz> GetActiveQuiz(){
          return await _quizContext.Quizzes
                      .Include(x => x.Questions)
                      .ThenInclude(y => y.Options)
                      .FirstOrDefaultAsync(x => x.Active);
        }
    }
}
