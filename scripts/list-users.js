const mongoose = require("mongoose");
require("dotenv").config();

// User Schema (same as your UserModel)
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

async function getUsersFromDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✓ Connected to MongoDB");
    console.log("Database:", process.env.MONGO_URL.split("/")[3].split("?")[0]);

    // Get total count of users
    const userCount = await User.countDocuments();
    console.log(`\n📊 Total users in database: ${userCount}`);

    if (userCount === 0) {
      console.log("\n❌ No users found in the database");
      return;
    }

    // Get all users
    const users = await User.find({}).select("-password"); // Exclude password for security

    console.log("\n👥 All Users in Database:");
    console.log("=".repeat(80));

    users.forEach((user, index) => {
      console.log(`\n${index + 1}. User Details:`);
      console.log(`   📧 Email: ${user.email}`);
      console.log(`   👤 Username: ${user.username}`);
      console.log(`   🔐 Admin: ${user.isAdmin ? "YES" : "NO"}`);
      console.log(
        `   📅 Created: ${user.createdAt?.toLocaleDateString() || "N/A"}`
      );
      console.log(`   🆔 ID: ${user._id}`);
      console.log("   " + "-".repeat(50));
    });

    // Show admin users specifically
    const adminUsers = users.filter((user) => user.isAdmin);
    console.log(`\n👑 Admin Users: ${adminUsers.length}`);
    adminUsers.forEach((admin) => {
      console.log(`   • ${admin.username} (${admin.email})`);
    });

    // Check for the specific admin user from .env
    const specificAdmin = users.find(
      (user) => user.email === "tanny@gmail.com"
    );
    console.log(
      `\n🔍 Admin user 'tanny@gmail.com': ${
        specificAdmin ? "EXISTS" : "NOT FOUND"
      }`
    );
    if (specificAdmin) {
      console.log(`   - Username: ${specificAdmin.username}`);
      console.log(`   - Is Admin: ${specificAdmin.isAdmin}`);
    }
  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("\n✓ Disconnected from MongoDB");
  }
}

getUsersFromDatabase();
