using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Oracle.ManagedDataAccess;
using PhoenixNet.Models;

namespace PhoenixNet
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var oraConn = "Data Source=localhost:1521/XEPDB1; User Id=ProyectoWeb; Password=1065850026";
            services.AddDbContext<AutorContext>(opt =>opt.UseOracle(oraConn));
            services.AddDbContext<CopiasContext>(opt =>opt.UseOracle(oraConn));
            services.AddDbContext<EditorialContext>(opt =>opt.UseOracle(oraConn));
            services.AddDbContext<DevolucionContext>(opt =>opt.UseOracle(oraConn));
            services.AddDbContext<LibroContext>(opt =>opt.UseOracle(oraConn));
            services.AddDbContext<LoginContext>(opt =>opt.UseOracle(oraConn));
            services.AddDbContext<PrestamoContext>(opt =>opt.UseOracle(oraConn));
            services.AddDbContext<UsuarioContext>(opt =>opt.UseOracle(oraConn));
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
