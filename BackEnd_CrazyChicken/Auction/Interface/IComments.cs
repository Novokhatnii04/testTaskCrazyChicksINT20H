using Auction_TestTaskCrazyChicken.Models;

namespace Auction_TestTaskCrazyChicken.Interface
{
    public interface IComments
    {
        IEnumerable<Comment> AllComments { get; }
        Comment GetObjectComment(int commentId);
    }
}
