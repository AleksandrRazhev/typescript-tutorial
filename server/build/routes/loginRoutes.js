"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const requireAuth = (req, res, next) => {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Access is denied");
};
const router = (0, express_1.Router)();
exports.router = router;
router.get("/login", (req, res) => {
    res.send(`
    <form method="POST">
        <div>
            <label>
            email
            <input name="email" />
            </label>
        </div>
        <div>
            <label>
            password
            <input name="password" type="password"/>
            </label>
        </div>
        <button>submit</button>
    </form>
  `);
});
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email &&
        password &&
        email === "myemail@gmail.com" &&
        password === "password") {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.send("Invalid email or password");
    }
});
router.get("/", (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
      <div>
        <p>You are logged in</p>
        <a href="/logout">Logout</a>
      </div>
    `);
    }
    else {
        res.send(`
      <div>
        <p>You are not logged in</p>
        <a href="/login">Login</a>
      </div>
    `);
    }
});
router.get("/logout", (req, res) => {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, (req, res) => {
    res.send("Welcome to protected route, logged in user");
});
