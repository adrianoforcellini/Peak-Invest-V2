using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
  public double Post([FromBody] string str)
  {
    string input = str;
    string installments = input.Substring(0, 3);
    string value = input.Substring(3);

    int n1 = Int32.Parse(installments);
    double n2 = Convert.ToDouble(value);

    double multiplyValues = n1 * n2;
    double addFifteenPercent = (multiplyValues * 0.15) + multiplyValues;

    System.Console.WriteLine(addFifteenPercent);

    return addFifteenPercent;
  }
}
