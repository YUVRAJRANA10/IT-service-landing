const Contact = require("../models/Contact");

const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);

const createContact = async (req, res) => {
  try {
    const { fullName, email, description } = req.body;

    if (!fullName || !email || !description) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email address." });
    }

    const contact = await Contact.create({ fullName, email, description });
    return res.status(201).json({ message: "Contact saved.", data: contact });
  } catch (error) {
    return res.status(500).json({ message: "Server error." });
  }
};

const getContacts = async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json(contacts);
  } catch (error) {
    return res.status(500).json({ message: "Server error." });
  }
};

module.exports = {
  createContact,
  getContacts,
};
