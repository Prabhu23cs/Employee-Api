using Employee_Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Employee_Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = new()
        {
            new Employee { Id = 1, Name = "Prabhu", Role = "Developer" },
            new Employee { Id = 2, Name = "John", Role = "Tester" }
        };

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(employees);
        }

        [HttpPost]
        public IActionResult Post(Employee employee)
        {
            employee.Id = employees.Count + 1;

            employees.Add(employee);

            return Ok(employee);
        }
    }
}
