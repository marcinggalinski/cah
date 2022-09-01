using Microsoft.AspNetCore.Mvc;

namespace CahClone.Web.Controllers;

[ApiController]
[Route("users")]
public class UsersController : Controller
{
    [HttpGet("is-username-taken/{username}")]
    public ActionResult<bool> IsUsernameTaken(string username)
    {
        throw new NotImplementedException();
    }
}
