# MongoDB Shell Commands to Check Admin User

## 1. Connect to your MongoDB Atlas cluster

```bash
mongosh "mongodb+srv://tanishkaratlam_db_user:Mzfcg6Ieed1VtLzW@mern-chat.ka5ks5m.mongodb.net/devspace-chat"
```

## 2. Check if admin user exists

```javascript
db.users.findOne({ email: "tanny@gmail.com" });
```

## 3. Check all admin users

```javascript
db.users.find({ isAdmin: true });
```

## 4. Count total users

```javascript
db.users.countDocuments();
```

## 5. List all users (first 5)

```javascript
db.users.find().limit(5);
```
