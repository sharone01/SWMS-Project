const jwt = require("jsonwebtoken");
const User = require("../Models/user");
const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

exports.protect = async (req, res, next) => {
  try {
    let token = null;

    // token can be in Authorization header "Bearer <token>" or cookie if added later
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) return res.status(401).json({ error: "Not authorized, token missing" });

    const decoded = jwt.verify(token, JWT_SECRET);
    // attach user info to req.user (not the password)
    req.user = { id: decoded.id, email: decoded.email, role: decoded.role };
    next();
  } catch (err) {
    console.error("protect error:", err);
    return res.status(401).json({ error: "Not authorized, token invalid or expired" });
  }
};

// role guard
exports.requireAdmin = (req, res, next) => {
  if (!req.user) return res.status(401).json({ error: "Not authenticated" });
  if (req.user.role !== "admin") return res.status(403).json({ error: "Admin access required" });
  next();
};
