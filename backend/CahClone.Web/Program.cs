var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseRouting();

app.MapControllers();

app.Run();
