using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers;

[ApiController]
[Route("")]
public class WeatherForecastController : ControllerBase
{

  [HttpGet()]
  public List<KeyValuePair<int, string>> Get()
  {
    BrothersList brothers = new BrothersList();
    return brothers.GetList();
  }

  [HttpGet("{key}")]
  public KeyValuePair<int, string> GetByKey([FromRoute] int key)
  {
    BrothersList brothers = new BrothersList();
    return brothers.GetList()[key - 1];
  }

  [HttpPost()]
  public double CalculateValue([FromBody] CalculationForm calculationForm)

  {
    int installments = calculationForm.installments;
    double value = calculationForm.value;
    double result = (installments * value) * 1.05;
    return result;
  }
}
