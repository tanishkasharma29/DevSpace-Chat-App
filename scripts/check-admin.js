const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password method
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

async function checkAndCreateAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");

    // Check if admin user exists
    const adminUser = await User.findOne({ email: "tanny@gmail.com" });

    if (adminUser) {
      console.log("Admin user found:");
      console.log("- ID:", adminUser._id);
      console.log("- Username:", adminUser.username);
      console.log("- Email:", adminUser.email);
      console.log("- IsAdmin:", adminUser.isAdmin);

      // Test the password
      const passwordMatch = await adminUser.matchPassword("12345");
      console.log('- Password "12345" matches:', passwordMatch);

      // Update to admin if not already
      if (!adminUser.isAdmin) {
        adminUser.isAdmin = true;
        await adminUser.save();
        console.log("✓ Updated user to admin");
      }
    } else {
      console.log("Admin user not found. Creating new admin user...");

      const newAdmin = new User({
        username: "Tanny",
        email: "tanny@gmail.com",
        password: "12345",
        isAdmin: true,
      });

      await newAdmin.save();
      console.log("✓ Admin user created successfully");
      console.log("- Username: Tanny");
      console.log("- Email: tanny@gmail.com");
      console.log("- Password: 12345");
      console.log("- IsAdmin: true");
    }

    // List all admin users
    console.log("\n--- All Admin Users ---");
    const allAdmins = await User.find({ isAdmin: true });
    allAdmins.forEach((admin) => {
      console.log(`- ${admin.username} (${admin.email})`);
    });
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("\nDisconnected from MongoDB");
  }
}

checkAndCreateAdmin();
