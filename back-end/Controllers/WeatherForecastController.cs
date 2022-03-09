using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{

  [HttpGet()]
  public List<KeyValuePair<int, string>> Get()
  {
    BrothersList brothers = new BrothersList();
    return brothers.GetList();
  }

  [HttpGet("{key}")]
  public KeyValuePair<int, string> Get1([FromRoute] int key)
  {
    BrothersList brothers = new BrothersList();
    return brothers.GetList()[key - 1];
  }

  [HttpPost()]
  public double CalculateValue([FromBody] string str)
  {
    string input = str;
    string installments = input.Substring(0, 3);
    string value = input.Substring(3);

    int n1 = Int32.Parse(installments);
    double n2 = Convert.ToDouble(value);

    double multiplyValues = n1 * n2;
    double addFivePercent = (multiplyValues * 1.05);

    return addFivePercent;
  }
}
