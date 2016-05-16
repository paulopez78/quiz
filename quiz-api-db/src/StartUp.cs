using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Serialization;
using Quiz.Api.Model;

namespace Quiz.Api
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddMvcCore()
                    .AddJsonFormatters(
                        a => a.ContractResolver = new CamelCasePropertyNamesContractResolver()
                     );
            
            services.AddDbContext<QuizContext>(options =>
                    options.UseInMemoryDatabase());
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseCors(builder =>
                builder.WithOrigins("*")
                .AllowAnyHeader()
            );            
            
            app.UseMvc();
            SampleData.Initialize(app.ApplicationServices);
        }
    }
}
