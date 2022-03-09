using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{


  [HttpGet(Name = "GetWeatherForecast")]
  public List<KeyValuePair<int, string>> Get()
  {
    BrothersList brothers = new BrothersList();

    return brothers.GetList();
  }


  public double Post([FromBody] string str)
  {
    string input = str;
    string installments = input.Substring(0, 3);
    string value = input.Substring(3);

    int n1 = Int32.Parse(installments);
    double n2 = Convert.ToDouble(value);

    double multiplyValues = n1 * n2;
    double addFivePercent = (multiplyValues * 1.05);

    // System.Console.WriteLine(createList());

    return addFivePercent;
  }
}
