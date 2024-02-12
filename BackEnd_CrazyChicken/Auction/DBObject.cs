using Auction_TestTaskCrazyChicken.Models;
using Auction_TestTaskCrazyChicken_TestTaskCrazyChicken;
using Microsoft.EntityFrameworkCore;

namespace Auction_TestTaskCrazyChicken
{
    public static class DBObject
    {
        public static void Initial(AppDBContent context)
        {
            if (!context.Auctions.Any())
            {
                var auctions = new List<AuctionContext>
                {
                    new AuctionContext
                    {
                        name = "Test",
                        description = "Bayraktar chinazes",
                        price = 10,
                        img = "/img/Bayraktar.jpg"
                    },
                    new AuctionContext
                    {
                        name = "Test2",
                        description = "Samsa vkesnaia",
                        price = 10,
                        img = "/img/samsa.jpg"
                    }
                };
                context.Auctions.AddRange(auctions);
                context.SaveChanges(); 
            }

            if (!context.Comments.Any())
            {
                var testAuctionId = context.Auctions.FirstOrDefault(a => a.name == "Test")?.id;
                var test2AuctionId = context.Auctions.FirstOrDefault(a => a.name == "Test2")?.id;

                var comments = new List<Comment>
                {
                    new Comment
                    {
                        nameOfCommentator = "Oleg",
                        time = DateTime.Now,
                        text = "Good samsa",
                        AuctionId = 2
                    },
                    new Comment
                    {
                        nameOfCommentator = "Mahmet",
                        time = DateTime.Now,
                        text = "Otrawilsa, samsa ne och",
                        AuctionId = 2
                    },
                    new Comment
                    {
                        nameOfCommentator = "Jack",
                        time = DateTime.Now,
                        text = "Bom Bom",
                        AuctionId = 1
                    },
                    new Comment
                    {
                        nameOfCommentator = "Mitia",
                        time = DateTime.Now,
                        text = "Kasha",
                        AuctionId = 1
                    }
                };
                context.Comments.AddRange(comments);
            }

            context.SaveChanges();
        }
    }
}
