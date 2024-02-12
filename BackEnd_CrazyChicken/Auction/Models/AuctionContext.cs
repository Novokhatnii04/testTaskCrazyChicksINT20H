using Newtonsoft.Json;
using System.Runtime.InteropServices;

namespace Auction_TestTaskCrazyChicken.Models
{
    public class AuctionContext
    {
        public AuctionContext()
        {
        }

        public AuctionContext(string name, int price, string description, string img)
        {
            this.name = name;
            this.price = price;
            this.description = description;
            this.img = img;
        }

        public int id { get; set; }
        public string name { get; set; }
        public int price { get; set; }
        public string description { get; set; }
        public string img { get; set; }
        [JsonIgnore]
        public List<Comment> Comments { get; set; }

    }
}
