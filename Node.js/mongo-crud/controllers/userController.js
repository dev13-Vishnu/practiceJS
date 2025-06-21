const User = require('../models/User');

exports.getUsers = async(req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch(err) {
        console.log("getUsers")
        res.status(500).json({msg: "Server Error"});
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({msg: 'User not found'});
        res.json(user);
    } catch (error) {
        console.log("getUser")
        res.status(500).json({msg: 'Server errror'})
    }
};

exports.createUser = async (req,res) => {
    try {
        const newUser = new User ({name: req.body.name});
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({msg: 'Bad request'});
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updated = await User.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        if(!updated) {
            return res.status(404).json({msg:"User not found"});
        }
        res.json(updated);
    } catch (error) {
        console.log("update user")
        res.status(500).json({msg: 'Server error'});
    }
};

exports.deleteUser = async (req, res) => {
    try {
      const deleted = await User.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ msg: 'User not found' });
      res.json(deleted);
    } catch (err) {
        console.log("delete user")
      res.status(500).json({ msg: 'Server error' });
    }
  };
  exports.login =  (req, res) => {
    res.json({message: `Welcomd , user ${req.user.username}!`, user: req.user})
}