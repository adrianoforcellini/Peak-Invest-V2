using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
  public double Post([FromBody] string value)
  {
    string input = value;
    int num = Int32.Parse(input);
    double add = num + (num * 0.15);
    // System.Console.WriteLine(add);

    return add;
  }
}
