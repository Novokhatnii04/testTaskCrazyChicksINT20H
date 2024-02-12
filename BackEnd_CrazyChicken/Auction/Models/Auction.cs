namespace Auction_TestTaskCrazyChicken.Models
{
    public class Auction
    {
        public Auction(int idLot, string name, string description, int lastBid, DateTime startDate, int timerCount, string img, List<Comment> comments)
        {
            this.id = idLot;
            this.name = name;
            this.description = description;
            this.price = lastBid;
            this.startDate = startDate;
            this.timerCount = timerCount;
            this.img = img;
            this.comments = comments;
        }

        /*
let lastBid = items?.price;
 let timerCount = items?.timerCount;
 let idLot = id;
 let startDate = items?.date;
 let lotName = items?.name;
 let description = items?.description;
*/

        public int id { get; set; }
        public string name { get; set; }
        public string description {  get; set; }
        public int price { get; set; }
        public DateTime startDate { get; set; }
        public int timerCount { get; set; }
        public string img { get; set; }
        public List<Comment> comments { get; set; }

    }
}
