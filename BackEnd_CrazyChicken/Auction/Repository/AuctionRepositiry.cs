using Auction_TestTaskCrazyChicken.Interface;
using Auction_TestTaskCrazyChicken.Models;
using Auction_TestTaskCrazyChicken_TestTaskCrazyChicken;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;

namespace Auction_TestTaskCrazyChicken.Repository
{
    public class AuctionRepositiry : IAuction
    {
        private AppDBContent appDBContent;
        public AuctionRepositiry(AppDBContent appDBContent)
        {
            this.appDBContent = appDBContent;
        }
        public IEnumerable<AuctionContext> AllAuctions => appDBContent.Auctions;
        public AuctionContext GetObjectAuction(int auctionId)
        {
            return appDBContent.Auctions
                .Include(a => a.Comments)
                .FirstOrDefault(p => p.id == auctionId);
        }
        public void AddAuction(AuctionContext auction)
        {
            appDBContent.Auctions.Add(auction);
            appDBContent.SaveChanges();
        }
        public async Task AddComment(Comment comment)
        {
            await appDBContent.Comments.AddAsync(comment);
            await appDBContent.SaveChangesAsync();
        }

        public void UpdateAuction(AuctionContext auction)
        {
            appDBContent.Entry(auction).State = EntityState.Modified;
            appDBContent.SaveChanges();
        }


    }
}
