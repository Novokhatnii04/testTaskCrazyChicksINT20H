using Auction_TestTaskCrazyChicken.Models;
using System.Runtime.InteropServices;

namespace Auction_TestTaskCrazyChicken.ViewModel
{
    public class AuctionListModel
    {
        public IEnumerable<AuctionContext> Auctions { get; set; }
        public IEnumerable<Comment> Comments { get; set; }

        
    }
}
