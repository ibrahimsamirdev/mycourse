const userService = require('../services/userService');

const login = async (req, res) => {
    const user = await userService.getByEmail(req.body.email)

    if (user != null && user.password == req.body.password) {
        res.status(200).send(user);
    } else {
        res.status(401).send("Invalid username or password!");
    }
}

const signup = async (req, res) => {
    const user = await userService.getByEmail(req.body.email)

    if (user == null) {
        const result = await userService.add(req.body)
        res.status(200).send(result.ops[0]);
    } else {
        res.status(401).send('User already exists!');
    }
}

const update = async (req, res, next) => {
    const user = await userService.getByEmail(req.body.email)

    if (user != null) {
        const result = await userService.update(req.body._id, req.body)
        res.status(200).json(result);
    } else {
        res.status(401).send("Unauthorized!");
    }
}

const validateInput = (req, res, next) => {
    if (!req.body.email) {
        next({ msg: 'User is required!' });
    }
    else {
        next();
    }
}

module.exports = { login, signup, update, validateInput };