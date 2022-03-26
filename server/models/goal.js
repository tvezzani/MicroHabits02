module.exports = mongoose => {
  const Goal = mongoose.model(
    "goal",
    mongoose.Schema(
      {
        title: String,
        description: String,
        prompt: String,
        correctAnswer: Boolean,
        daysSuccessful: Number,
        daysTotal: Number,
      },
      { timestamps: true }
    )
  );
  return Goal;
};