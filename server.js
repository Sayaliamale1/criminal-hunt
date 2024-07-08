import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const cops = [{ cop: "cop 1" }, {cop: "cop 2"},{cop: "cop 3" }];

const cities = [
  { name: "Yapkashnagar", distance: 60 },
  { name: "Lihaspur", distance: 50 },
  { name: "Narmis City", distance: 40 },
  { name: "Shekharvati", distance: 30 },
  { name: "Nuravgram", distance: 20 },
];

const vehicles = [
  { vehicleModel: "EV Bike", range: 60, count: 2 },
  { vehicleModel: "EV Car", range: 100, count: 1 },
  { vehicleModel: "EV SUV", range: 120, count: 1 },
];

let fugitiveLocation = cities[Math.floor(Math.random() * cities.length)].name;

app.get("/cops", (req, res) => {
  res.json(cops);
});

app.get("/cities", (req, res) => {
  res.json(cities);
});

app.get("/vehicles", (req, res) => {
  res.json(vehicles);
});

app.post("/capture", (req, res) => {
  console.log(fugitiveLocation);
  // console.log(req.body);
  const { copChoices } = req.body;
  for (const cop of copChoices) {
    const selectedCity = cities.find((city) => city.name === cop.city);
    const selectedVehicle = vehicles.find(
      (vehicle) => vehicle.vehicleModel === cop.vehicle
    );

    if (!selectedCity || !selectedVehicle) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid city or vehicle selection" });
    }

    const roundTripDistance = selectedCity.distance * 2;
    if (roundTripDistance > selectedVehicle.range) {
      return res.status(400).json({
        success: false,
        message: `Vehicle selected by "${cop.name}" does not have enough range for a round trip`,
      });
    }
  }

  const successfulCop = copChoices.find((cop) => cop.city === fugitiveLocation);

  if (successfulCop) {
    res.json({ success: true, capturingCop: successfulCop.name });
  } else {
    res.json({ success: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
