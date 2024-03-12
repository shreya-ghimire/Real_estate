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

// app.use(bodyParser.json());

// Temporary storage for properties
let properties = [
    {
        id: 1,
        name: "Luxury Beachfront Villa",
        location: "Malibu, California",
        room: 7,
        img: "https://img.freepik.com/free-photo/view-resort-blue-table-home_1203-5551.jpg?t=st=1709126958~exp=1709130558~hmac=8e316b2cbba082e964d65ad9df6b383eb71c7bbec2c18563813c4fcda28b3f31&w=826",
        price: 1500000,
        amenities: ["Private Beach Access", "Infinity Pool", "Home Theater"]
    },
    {
        id: 2,
        name: "Charming Cottage",
        location: "Cotswolds, England",
        room: 3,
        img: "https://img.freepik.com/free-photo/wooden-arbors-trees-mountains_140725-3026.jpg?t=st=1709127011~exp=1709130611~hmac=f3840db996b37755cffe5fdae84ebb8db0e4323d7d4bc91792f91a04b9ac7bda&w=826",
        price: 400000,
        amenities: ["Fireplace", "Garden", "Country Views"]
    },
    {
        id: 3,
        name: "Modern Downtown Loft",
        location: "New York City, New York",
        room: 2,
        img: "https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178352.jpg?t=st=1709127748~exp=1709131348~hmac=e7704cb49e783b09284d35eb30160e647d67250b5432f6e2ee226f755cdde2b0&w=996",
        price: 800000,
        amenities: ["City Views", "Gym", "Concierge Service"]
    },
    {
        id: 4,
        name: "Rustic Mountain Cabin",
        location: "Aspen, Colorado",
        room: 4,
        img: "https://img.freepik.com/free-photo/lonely-cabin-stands-before-mountains-covered-with-snow_1304-5338.jpg?t=st=1709127382~exp=1709130982~hmac=f982e59ff4c53477f65eb3f9e5b663a8fb0058034450c4fe0ceb16cd4708c95b&w=826",
        price: 600000,
        amenities: ["Hot Tub", "Ski-In/Ski-Out Access", "Wood-Burning Fireplace"]
    },
    {
        id: 5,
        name: "Paris Apartment",
        location: "Paris, France",
        room: 6,
        img: "https://img.freepik.com/free-photo/view-from-balcony-apartment_188544-12685.jpg?t=st=1709127429~exp=1709131029~hmac=4ec69138240670c8874f745b4eec3be92eded7744b5f238c3fcd4a597242aefb&w=826",
        price: 2500000,
        amenities: ["Terrace", "Panoramic City Views", "24/7 Security"]
    },
    {
        id: 6,
        name: "Secluded Lakeside Retreat",
        location: "Lake District, England",
        room: 5,
        img: "https://img.freepik.com/free-photo/house-water-with-grassy-shore-trees_181624-4623.jpg?t=st=1709127465~exp=1709131065~hmac=d002e4cc4d5bef82650655f53c486ba861055b0a562aadf085d6db377308ab7e&w=826",
        price: 1000000,
        amenities: ["Private Dock", "Boathouse", "Tranquil Surroundings"]
    }
];

// Route to list properties
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
