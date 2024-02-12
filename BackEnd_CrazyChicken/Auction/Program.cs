using Auction_TestTaskCrazyChicken;
using Auction_TestTaskCrazyChicken.Interface;
using Auction_TestTaskCrazyChicken.Repository;
using Auction_TestTaskCrazyChicken_TestTaskCrazyChicken;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Configuration.AddJsonFile("appsettings.json");

var dbHost = Environment.GetEnvironmentVariable("DB_HOST");
var dbName = Environment.GetEnvironmentVariable("DB_NAME");
var dbPassword = Environment.GetEnvironmentVariable("MSSQL_SA_PASSWORD");

builder.Services.AddDbContext<AppDBContent>(options =>
#if DEBUG
    options.UseSqlServer($"Server=(localdb)\\MSSQLLocalDB;Database=Auction_TestTaskCrazyChicken;Trusted_Connection=True;MultipleActiveResultSets=true"));
#else           
    options.UseSqlServer($"Data Source={dbHost}; Initial Catalog={dbName}; User ID = SA; Password = pass12345#;TrustServerCertificate=true"));
#endif
builder.Services.AddCors(options =>
{
    options.AddPolicy("myAppCors", policy =>
    {
        policy.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
    });
});

builder.Services.AddTransient<IAuction, AuctionRepositiry>();
builder.Services.AddTransient<IComments, CommentRepository>();

var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseStaticFiles();

app.UseRouting();

app.UseCors(options =>
{
    options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
});
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Auction}/{id}");

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<AppDBContent>();
    //context.Database.Migrate();
    DBObject.Initial(context);
    context.SaveChanges();
}
app.Run();
