using Auction_TestTaskCrazyChicken.Interface;
using Auction_TestTaskCrazyChicken.Models;
using Auction_TestTaskCrazyChicken_TestTaskCrazyChicken;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;

namespace Auction_TestTaskCrazyChicken.Repository
{
    public class CommentRepository : IComments
    {
        private AppDBContent _appDBContent;

        public CommentRepository(AppDBContent appDBContent)
        {
            _appDBContent = appDBContent;
        }

        public IEnumerable<Comment> AllComments => _appDBContent.Comments;

        public Comment GetObjectComment(int commentId) => _appDBContent.Comments.FirstOrDefault(c => c.id == commentId);

    }
}
