using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using VendorManagement.Data.Models;
using VendorManagement.Data.Repos;

namespace VendorManagement.Controllers
{
    [ApiController]
    [Route("/")]
    public class ValuesController : ControllerBase
    {
        private readonly ILogger<Vendor> logger;
        private readonly VendorRepo vendorRepo;

        public ValuesController(IConfiguration configuration, ILogger<Vendor> logger)
        {
            this.logger = logger;
            vendorRepo = new VendorRepo(configuration);
        }

        // GET /
        [HttpGet]
        public ActionResult<IEnumerable<Vendor>> Get()
        {
            try
            {
                return Ok(vendorRepo.FindAll());
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return NotFound();
            }
        }

        // GET /ABC123
        [HttpGet("{code}", Name = "GetByCodeVendor")]
        public ActionResult<Vendor> Get(string code)
        {
            try
            {
                var result = vendorRepo.FindByCode(code);

                if (result != null)
                {
                    return Ok(result);
                }

                return NotFound();
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return NotFound();
            }
        }

        // POST /
        [HttpPost]
        public IActionResult Post([FromBody] Vendor value)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var result = vendorRepo.Add(value);
                    var url = Url.Link("GetByCodeVendor", new { code = result.Code });
                    return Created(new Uri(url), result);
                }

                return BadRequest();
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return BadRequest();
            }
        }

        // PUT /
        [HttpPut("{code}")]
        public IActionResult Put(string code, [FromBody] Vendor value)
        {
            try
            {
                vendorRepo.Update(value);
                return NoContent();
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return BadRequest();
            }
        }

        // DELETE /ABC123
        [HttpDelete("{code}")]
        public IActionResult Delete(string code)
        {
            try
            {
                vendorRepo.Remove(code);
                return NoContent();
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return BadRequest();
            }
        }
    }
}
