using Auction_TestTaskCrazyChicken.Models;
using System.Runtime.InteropServices;

namespace Auction_TestTaskCrazyChicken.Interface
{
    public interface IAuction
    {
        IEnumerable<AuctionContext> AllAuctions {  get; }
        AuctionContext GetObjectAuction(int auctionId);
        void AddAuction(AuctionContext auction);
        Task AddComment(Comment comment);
        public void UpdateAuction(AuctionContext auction);
    }
}
