using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Auction_TestTaskCrazyChicken.Migrations
{
    /// <inheritdoc />
    public partial class a : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Auctions_AuctionIdid",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Comments_AuctionIdid",
                table: "Comments");

            migrationBuilder.RenameColumn(
                name: "AuctionIdid",
                table: "Comments",
                newName: "number");

            migrationBuilder.AddColumn<int>(
                name: "AuctionId",
                table: "Comments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "EndTime",
                table: "Auctions",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "StartTime",
                table: "Auctions",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "number",
                table: "Auctions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Comments_AuctionId",
                table: "Comments",
                column: "AuctionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Auctions_AuctionId",
                table: "Comments",
                column: "AuctionId",
                principalTable: "Auctions",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Auctions_AuctionId",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Comments_AuctionId",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "AuctionId",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "EndTime",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "StartTime",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "number",
                table: "Auctions");

            migrationBuilder.RenameColumn(
                name: "number",
                table: "Comments",
                newName: "AuctionIdid");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_AuctionIdid",
                table: "Comments",
                column: "AuctionIdid");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Auctions_AuctionIdid",
                table: "Comments",
                column: "AuctionIdid",
                principalTable: "Auctions",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
