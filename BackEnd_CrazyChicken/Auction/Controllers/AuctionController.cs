using Auction_TestTaskCrazyChicken.Interface;
using Auction_TestTaskCrazyChicken.Models;
using Auction_TestTaskCrazyChicken.ViewModel;
using Auction_TestTaskCrazyChicken_TestTaskCrazyChicken;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using Newtonsoft.Json;
using System.Diagnostics;

namespace Auction_TestTaskCrazyChicken.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuctionController : ControllerBase
    {
        private readonly IAuction _auctionRepository;

        public AuctionController(IAuction auctionRepository)
        {
            _auctionRepository = auctionRepository;
        }

       

        // GET: /Auction
        [HttpGet]
        public IActionResult GetAllAuctions()
        {
            var auctionsContexts = _auctionRepository.AllAuctions;

            var auctions = new List<Auction>();

            foreach(var auction in auctionsContexts)
            {
                var additionalData = JsonConvert.DeserializeObject<AuctionAdditionalData>(auction.name);
                if (additionalData == null) return BadRequest();

                var auctionForFront = new Auction(auction.id, additionalData.name, auction.description, auction.price, additionalData.createdDate, additionalData.timerCount,auction.img,auction.Comments);

                auctions.Add(auctionForFront);
            }

            return Ok(auctions);
        }

        // GET: /Auction/{id}
        [HttpGet("{id}")]
        public IActionResult GetAuctionById(int id)
        {
            try
            {
                var auction = _auctionRepository.GetObjectAuction(id);

                if (auction == null)
                {
                    return NotFound();
                }
                var additionalData = JsonConvert.DeserializeObject<AuctionAdditionalData>(auction.name);
                if (additionalData == null) return BadRequest();

                var auctionForFront = new Auction(auction.id, additionalData.name, auction.description, auction.price, additionalData.createdDate, additionalData.timerCount, auction.img, auction.Comments);

                return Ok(auctionForFront);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpPost("GetId/{id}")]
        public IActionResult GetId (int id)
        {
            return Ok(id);
        }

        // POST: /Auction
        [HttpPost("Add")]
        public IActionResult AddAuction([FromBody] newAuctionPostModel auction)
        {
            var additionalData = JsonConvert.SerializeObject(new AuctionAdditionalData(auction.name,auction.timerCount, DateTime.Now));
            var auctionContext = new AuctionContext(additionalData, auction.price, auction.description, auction.img);

            _auctionRepository.AddAuction(auctionContext);

             return Ok();
        }

        [HttpGet("getcomments/{id}")]
        public async Task<IActionResult> GetCommentById([FromRoute] int id)
        {
            var auction = _auctionRepository.GetObjectAuction(id);

            return Ok(JsonConvert.SerializeObject(auction.Comments));
        }

        [HttpPost("newComment/{id}")]
        public async Task<IActionResult> AddComment([FromBody] NewCommentPostModel newComment, [FromRoute] int id)
        {
            var auction = _auctionRepository.GetObjectAuction(id);
            if (auction == null)
            {
                return NotFound();
            }
            Comment comment = new Comment();
            comment.AuctionId = id;
            comment.text = newComment.desc;
            comment.time = DateTime.Now;
            comment.nameOfCommentator = newComment.name + " " + newComment.surname;


            await _auctionRepository.AddComment(comment);

            return Ok();
        }

        [HttpPost("UpdatePrice/{id}")]
        public IActionResult UpDatePrice([FromRoute] int id, [FromBody] updatePricePostModel newPrice)
        {
            var auction = _auctionRepository.GetObjectAuction(id);
            if (auction == null)
            {
                return NotFound();
            }
            auction.price = newPrice.newPrice;
            _auctionRepository.UpdateAuction(auction);
            return Ok(auction);
        }
    }
}
