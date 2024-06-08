import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const mongoURI = process.env.moogoapi;
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
