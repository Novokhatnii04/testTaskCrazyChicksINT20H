using Auction_TestTaskCrazyChicken.Interface;
using Auction_TestTaskCrazyChicken.Models;
using Auction_TestTaskCrazyChicken.ViewModel;
using Auction_TestTaskCrazyChicken_TestTaskCrazyChicken;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Auction_TestTaskCrazyChicken.Controllers
{
    public class NewAuctionController : Controller
    {
        private readonly AppDBContent _content;

        public NewAuctionController(AppDBContent content)
        {
            _content = content;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAuctions()
        {
            var auctions = await _content.Auctions.ToListAsync();
            return Ok(auctions);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAuctionById(int id)
        {
            var auction = await _content.Auctions.FindAsync(id);
            if (auction == null)
            {
                return NotFound();
            }
            return Ok(auction);
        }

        [HttpPost("Add")]
        public async Task<IActionResult> AddAuction([FromBody] AuctionContext auction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _content.Auctions.Add(auction);
            await _content.SaveChangesAsync();

            return Ok(auction);
        }

        [HttpPost("{id}/Comment")]
        public async Task<IActionResult> AddComment(int id, [FromBody] Comment comment)
        {
            var auction = await _content.Auctions.FindAsync(id);
            if (auction == null)
            {
                return NotFound();
            }

            comment.time = DateTime.Now;
            auction.Comments.Add(comment);
            await _content.SaveChangesAsync();

            return Ok(auction);
        }

        [HttpPost("UpdatePrice/{id}")]
        public async Task<IActionResult> UpdatePrice(int id, [FromBody] int newPrice)
        {
            var auction = await _content.Auctions.FindAsync(id);
            if (auction == null)
            {
                return NotFound();
            }

            auction.price = newPrice;
            await _content.SaveChangesAsync();

            return Ok(auction);
        }
    }
}
