// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes

const propertySchema = {
    name: String,
    description: String,
    numberOfRooms: Number,
    washroom: Number,
    kitchen: Boolean,
    hall: Boolean,
    amenities: [String]
};

// Middleware for parsing JSON



// Temporary storage for properties
let properties = [
    {
        id: 1,
        name: "Luxury Beachfront Villa",
        location: "Malibu, California",
        room: 7,
        price: 1500000,
        amenities: ["Private Beach Access", "Infinity Pool", "Home Theater"]
    },
    {
        id: 2,
        name: "Charming Cottage",
        location: "Cotswolds, England",
        room: 3,
        price: 400000,
        amenities: ["Fireplace", "Garden", "Country Views"]
    },
    {
        id: 3,
        name: "Modern Downtown Loft",
        location: "New York City, New York",
        room: 2,
        price: 800000,
        amenities: ["City Views", "Gym", "Concierge Service"]
    },
    {
        id: 4,
        name: "Rustic Mountain Cabin",
        location: "Aspen, Colorado",
        room: 4,
        price: 600000,
        amenities: ["Hot Tub", "Ski-In/Ski-Out Access", "Wood-Burning Fireplace"]
    },
    {
        id: 5,
        name: "Paris Apartment",
        location: "Paris, France",
        room: 6,
        price: 2500000,
        amenities: ["Terrace", "Panoramic City Views", "24/7 Security"]
    },
    {
        id: 6,
        name: "Secluded Lakeside Retreat",
        location: "Lake District, England",
        room: 5,
        price: 1000000,
        amenities: ["Private Dock", "Boathouse", "Tranquil Surroundings"]
    }
];

// // Route to list properties
app.get('/properties', (req, res) => {
    res.json(properties);
});

// Route to create a new property
app.post('/properties', (req, res) => {
    const newProperty = req.body;
    properties.push(newProperty);
    res.status(201).json({ message: 'Property created successfully', property: newProperty });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
