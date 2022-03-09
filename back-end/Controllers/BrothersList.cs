namespace back_end.Controllers
{
  public class BrothersList
  {
    public List<KeyValuePair<int, string>> GetList()
    {
      List<KeyValuePair<int, string>> list = new List<KeyValuePair<int, string>>();
      list.Add(new KeyValuePair<int, string>(1, "AdrianWarrior"));
      list.Add(new KeyValuePair<int, string>(2, "AnaShine"));
      list.Add(new KeyValuePair<int, string>(3, "ArnaMaster"));

      return list; ;
    }
  }
}