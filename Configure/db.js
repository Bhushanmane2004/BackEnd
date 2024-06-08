import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const mongoURI = 'mongodb+srv://Gen-Health-Hub:Viit%401223334444@cluster0.xx1um6u.mongodb.net/test?retryWrites=true&w=majority';
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Db connected');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit process with failure
    }
};
