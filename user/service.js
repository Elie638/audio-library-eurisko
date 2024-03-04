const User = require('./model');

exports.signUp = async req => {
    const email = req.email;
    if(User.find({email: email})) {
        const error = new Error("Email is already registered");
        error.statusCode = 400;
        throw error;
    }
    const name = req.name;
    const password = req.password;
    const dateOfBirth = req.dateOfBirth;
    const location = req.location;
    const registrationDate = new Date().toISOString();
    const user = new User({
        name: name,
        email: email,
        password: password,
        dateOfBirth: dateOfBirth,
        location: location,
        registrationDate: registrationDate,
    });
    await user.save()
    console.log('Sign up successful');
    return user;
};