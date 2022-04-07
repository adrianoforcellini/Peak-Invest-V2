namespace back_end.Controllers
{
  public class CalculationForm
  {
    public int installments { get; set; }
    public double value { get; set; }
    public CalculationForm(int installments, double value)
    {
      this.installments = installments;
      this.value = value;
    }
  }
}