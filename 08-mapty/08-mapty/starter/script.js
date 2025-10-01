'use strict';

console.log('Mapty OOP Foundation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

   _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}


const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log('Test workout:', testWorkout);
console.log('Workout ID:', testWorkout.id);
console.log('Workout date:', testWorkout.date);

testWorkout.click();
testWorkout.click();
console.log('Click count:', testWorkout.clicks);

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// Create a running workout
const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('Running workout:', run1);
console.log('Running pace:', run1.pace.toFixed(1), 'min/km');
console.log('Running description:', run1.description);

const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('Cycling workout:', cycling1);
console.log('Cycling speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Cycling description:', cycling1.description);

run1.click();
cycling1.click();
console.log('Run clicks:', run1.clicks);
console.log('Cycling clicks:', cycling1.clicks);


'use strict';

// ==============================
// Section 1: Geolocation API Test
// ==============================
console.log('=== TESTING GEOLOCATION API ===');

function getPosition() {
  if (navigator.geolocation) {
    console.log('🔍 Requesting user location...');
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        console.log(`Your current location: ${latitude}, ${longitude}`);

        // Google Maps link for verification
        const googleMapsUrl = `https://www.google.pt/maps/@${latitude},${longitude}`;
        console.log(`View on Google Maps: ${googleMapsUrl}`);
      },
      function (error) {
        console.error('Geolocation error:', error);

        let message = 'Could not get your position. ';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message +=
              'Location access was denied. Please enable location services and refresh the page.';
            break;
          case error.POSITION_UNAVAILABLE:
            message += 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            message += 'Location request timed out.';
            break;
          default:
            message += 'An unknown error occurred.';
            break;
        }
        alert(`📍 ${message}`);
      },
      {
        timeout: 10000,
        enableHighAccuracy: true,
        maximumAge: 600000,
      }
    );
  } else {
    alert('❌ Geolocation is not supported by this browser');
  }
}

// Test the geolocation
getPosition();

// ==============================
// Section 2: Leaflet.js Integration
// ==============================
console.log('=== TESTING LEAFLET MAPS ===');

function createTestMap() {
  // Default coords (Denver, Colorado)
  const coords = [39.7392, -104.9903];
  const zoomLevel = 13;

  // Create the map
  const map = L.map('map').setView(coords, zoomLevel);

  // Add tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add a marker
  L.marker(coords).addTo(map).bindPopup('Test location!').openPopup();

  console.log('Map created successfully!');
}

// Test static map
createTestMap();

function createMapAtUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        const coords = [latitude, longitude];

        console.log(`Creating map at user location: ${coords}`);

        // Create map centered on user
        const map = L.map('map').setView(coords, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Marker at user location
        L.marker(coords).addTo(map).bindPopup('You are here!').openPopup();
      },
      function () {
        alert('Could not get your position');
      }
    );
  }
}

// Test user-centered map
createMapAtUserLocation();

// ==============================
// Section 3: App Class Controller
// ==============================
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    // Get user position on app start
    this._getPosition();
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    console.log(`Loading map at: ${latitude}, ${longitude}`);

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Listen for clicks
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    const { lat, lng } = mapE.latlng;

    console.log(`Map clicked at: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);

    // Show marker where clicked
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(`Clicked here: ${lat.toFixed(4)}, ${lng.toFixed(4)}`)
      .openPopup();
  }
}

// Start the app
const app = new App();
