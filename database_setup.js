// Install MongoDB library: npm install mongoose
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/educationPlatform', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database connected')).catch(err => console.error(err));

// Define a Schema for student data
const studentSchema = new mongoose.Schema({
    name: String,
    progress: Number, // Percentage of course completed
    achievements: [String], // List of badges or milestones
});

const Student = mongoose.model('Student', studentSchema);

// Example: Add a new student
app.post('/add-student', async (req, res) => {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.json({ message: 'Student added successfully' });
});
