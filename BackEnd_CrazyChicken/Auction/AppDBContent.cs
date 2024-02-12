using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;
using Auction_TestTaskCrazyChicken.Models;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;

namespace Auction_TestTaskCrazyChicken_TestTaskCrazyChicken
{
    public class AppDBContent : DbContext
    {
        public AppDBContent(DbContextOptions<AppDBContent> options) : base(options)
        {
        }

        public DbSet<AuctionContext> Auctions { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}
