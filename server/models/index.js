const User = require('./User');

const Book = require('./Book'); // Import the Book model if needed

const resolvers = {
  Query: {
    // Get a user by ID
    getUser: async (_, { id }) => {
      try {
        const user = await User.findById(id).populate('savedBooks');
        if (!user) {
          throw new Error('User not found');
        }
        return user;
      } catch (err) {
        console.error(err);
        throw new Error('Error fetching user');
      }
    },

    // Get all users
    getUsers: async () => {
      try {
        return await User.find().populate('savedBooks');
      } catch (err) {
        console.error(err);
        throw new Error('Error fetching users');
      }
    },
  },

  Mutation: {
    // Create a new user
    createUser: async (_, { username, email, password }) => {
      try {
        const newUser = new User({ username, email, password });
        return await newUser.save();
      } catch (err) {
        console.error(err);
        throw new Error('Error creating user');
      }
    },

    // Update a user's details
    updateUser: async (_, { id, username, email, password }) => {
      try {
        const updates = { username, email };
        if (password) {
          updates.password = password;
        }
        const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true }).populate('savedBooks');
        if (!updatedUser) {
          throw new Error('User not found');
        }
        return updatedUser;
      } catch (err) {
        console.error(err);
        throw new Error('Error updating user');
      }
    },

    // Delete a user
    deleteUser: async (_, { id }) => {
      try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
          throw new Error('User not found');
        }
        return deletedUser;
      } catch (err) {
        console.error(err);
        throw new Error('Error deleting user');
      }
    },

    // Add a saved book to a user
    addSavedBook: async (_, { userId, book }) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          userId,
          { $push: { savedBooks: book } },
          { new: true }
        ).populate('savedBooks');
        if (!updatedUser) {
          throw new Error('User not found');
        }
        return updatedUser;
      } catch (err) {
        console.error(err);
        throw new Error('Error adding saved book');
      }
    },

    // Remove a saved book from a user
    removeSavedBook: async (_, { userId, bookId }) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          userId,
          { $pull: { savedBooks: { _id: bookId } } },
          { new: true }
        ).populate('savedBooks');
        if (!updatedUser) {
          throw new Error('User not found');
        }
        return updatedUser;
      } catch (err) {
        console.error(err);
        throw new Error('Error removing saved book');
      }
    },
  },
};

module.exports = resolvers;


module.exports = { User };

