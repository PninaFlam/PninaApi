using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace basicApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private static List<Event> listEvents=new List<Event> ();
        

        public EventsController()
        {

        }
        

        // GET: api/<EventsController>
        [HttpGet]
        public IEnumerable<Event> Get()
        {
            return listEvents;
        }

        // POST api/<EventsController>
        [HttpPost]
        public void Post([FromBody] Event eve)
        { int id;
            if (listEvents.Count() == 0)
            {
                id = 1;
            }
            else
                id = listEvents.Last<Event>().id+1;
            listEvents.Add(new Event {title= eve.title,start= eve.start });
            listEvents.Last<Event>().id = id;
        }

        // PUT api/<EventsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Event eve)
        {
            var eveToUpdate = listEvents.Find(e => e.id == id);
            eveToUpdate.title = eve.title;
            eveToUpdate.start = eve.start;

        }

        // DELETE api/<EventsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var eve=listEvents.Find(e=>e.id==id);
            listEvents.Remove(eve);
        }
    }
}
