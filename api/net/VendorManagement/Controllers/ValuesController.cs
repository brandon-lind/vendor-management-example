using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using VendorManagement.Data.Models;
using VendorManagement.Data.Repos;

namespace VendorManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly ILogger<Vendor> logger;
        private readonly VendorRepo vendorRepo;

        public ValuesController(IConfiguration configuration, ILogger<Vendor> logger)
        {
            this.logger = logger;
            vendorRepo = new VendorRepo(configuration);
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Vendor>> Get()
        {
            try
            {
                return Ok(vendorRepo.FindAll());
            }
            catch(Exception ex)
            {
                logger.LogError(ex.Message);
                return NotFound();
            }
        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetByIdVendor")]
        public ActionResult<Vendor> Get(Guid id)
        {
            try
            {
                return Ok(vendorRepo.FindById(id));
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return NotFound();
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] Vendor value)
        {
            try
            {
                if (ModelState.IsValid) 
                {
                    var result = vendorRepo.Add(value);
                    var url = Url.Link("GetByIdVendor", new { id = result.Id });
                    return Created(new Uri(url), result);
                }

                return BadRequest();
            }
            catch(Exception ex)
            {
                logger.LogError(ex.Message);
                return BadRequest();
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(Guid id, [FromBody] Vendor value)
        {
            try
            {
                vendorRepo.Update(value);
                return NoContent();
            }
            catch(Exception ex)
            {
                logger.LogError(ex.Message);
                return BadRequest();
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                vendorRepo.Remove(id);
                return NoContent();
            }
            catch(Exception ex)
            {
                logger.LogError(ex.Message);
                return BadRequest();
            }
        }
    }
}
