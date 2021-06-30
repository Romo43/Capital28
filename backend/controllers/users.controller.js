import User from "../models/User";
import passport from "passport";

export const renderSignUpForm = (req, res) => res.render("users/signup");

export const singup = async (req, res) => {
    const { name, email, password } = req.body;
    // Saving a New User
    const newUser = new User({ name, email, password });
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    res.redirect("/users/signin");
};

export const renderSigninForm = (req, res) => res.render("users/signin");

export const signin = passport.authenticate("local", {
    successRedirect: "/notes",
    failureRedirect: "/users/signin",
    failureFlash: true,
});

export const logout = (req, res) => {
    req.logout();
    req.flash("success_msg", "You are logged out now.");
    res.redirect("/users/signin");
};