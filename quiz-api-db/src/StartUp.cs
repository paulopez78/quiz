using Microsoft.AspNet.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Data.Entity;
using Quiz.Api.Model;
using Newtonsoft.Json.Serialization;

namespace Quiz.Api
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddMvcCore()
                    .AddApiExplorer()
                    .AddJsonFormatters(
                        a => a.ContractResolver = new CamelCasePropertyNamesContractResolver()
                     );
            
            services.AddEntityFramework()
                    .AddInMemoryDatabase()
                    .AddDbContext<QuizContext>(options =>
                            options.UseInMemoryDatabase());

            services.AddSwaggerGen();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseCors(builder =>
                builder.WithOrigins("*")
                .AllowAnyHeader()
            );            
            
            app.UseMvc();
            app.UseSwaggerGen();
            app.UseSwaggerUi();

            SampleData.Initialize(app.ApplicationServices);
        }

        public static void Main(string[] args) => Microsoft.AspNet.Hosting.WebApplication.Run<Startup>(args);
    }
}
