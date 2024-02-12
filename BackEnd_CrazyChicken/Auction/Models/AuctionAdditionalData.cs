namespace Auction_TestTaskCrazyChicken.Models
{
    public class AuctionAdditionalData
    {
        public AuctionAdditionalData(string name, int timerCount, DateTime time)
        {
            this.name = name;
            this.timerCount = timerCount;
            this.createdDate = time;
        }

        public string name { get; set; }
        public int timerCount { get; set; }
        public DateTime createdDate { get; set; }
    }
}
