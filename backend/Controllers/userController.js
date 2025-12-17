
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
const User = require ('../Models/user') 

console.log ("User model loaded:", User)


exports.createUser = async (req, res) => {
     try {
    const { name, email, password, role } = req.body;

     const existingUser = await User.findOne({ email });
    if (existingUser){
       res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User ({
      name,
      email,
      password: hashedPassword,
      role
    });
    await user.save();

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(201).json({
      message: 'succesful',
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      token,
    });
} 
  catch (err) {
    res.status(500).json({ message: ' error', error: err.message });
  }
}

exports.loginUser = async (req, res)  => {
    try {
    const { email, password } = req.body;

    const user = await User.findOne ({ email });
    if (!user)
       res.status(404).json({ message: 'User does not exist' });
    

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid match' });
    

    const token = jwt.sign(
      { id: user._id, email: user.email },
      // process.env.JWT_SECRET,
      "mysecret",
      { expiresIn: '1d' }
    );

    res.json({
      message: 'Logged in successful',
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

