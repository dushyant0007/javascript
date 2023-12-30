"use strict";


const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");


class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10)
    constructor(coords, distance, duration) {
        this.coords = coords;
        this.distance = distance; // Km
        this.duration = duration; // min
    }

    _setDescription() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
    }
}

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
        this._setDescription();
    }
    calcSpeed() {
        // km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

class App {
    #map;
    #mapEvent;
    workouts = [];
    constructor() {
        this._getPosition();

        //ger data from localStorage
        this._getLocalStorage()

        // in eventHandler this->dom obj
        form.addEventListener('submit', this._newWorkout.bind(this))
        inputType.addEventListener('change', this._toggleElevationFields)
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this))
    }

    _getPosition() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(
                //call on success
                this._loadMap.bind(this),
                () => { alert('Location Permission Denied') }
            )
    }

    _loadMap(pos) {
        //_loadMap - is a call back function for navigator.geolocation.getCurrentPosition()
        // const latitude = pos.coords.latitude;
        // const longitude = pos.coords.longitude;
        const { latitude, longitude } = pos.coords;
        console.log(latitude, longitude)
        const url = `https://www.google.com/maps/@${latitude},${longitude}`;

        //map('must be the id name of an element in our HTML - and it is that element where the map will be displayed')
        this.#map = L.map('map').setView([latitude, longitude], 15);

        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> <p>Welcome to open source</p>'
        }).addTo(this.#map);


        L.marker([latitude, longitude]).addTo(this.#map)
            .bindPopup('Current Position', L.popup({
                closeOnClick: false,
                autoClose: false,
                className: 'home',
            })).openPopup();


        this.#map.on('click', this._showFormToggle.bind(this),
            //call on fail
            function (error) {
                console.log('could not get your location', error)
            }
        );

        this.workouts.forEach(w => this._renderWorkoutMarker(w))
    }

    _showFormToggle(mapE) {
        inputDistance.focus();
        this.#mapEvent = mapE;
        form.classList.toggle('hidden')
    }

    _toggleElevationFields() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    }

    _newWorkout(e) {
        e.preventDefault();
        //running/cycling
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        let workout;


        const validInputs = function (inputs) {
            return inputs.every(inp => (Number.isFinite(inp) && inp > 0))
        }


        if (type === 'running') {
            const cadence = +inputCadence.value;
            if (!validInputs([distance, duration, cadence]))
                return alert('Input fields has to be positive and number')
            workout = new Running(Object.values(this.#mapEvent.latlng), distance, duration, cadence);

        }
        else if (type === 'cycling') {
            const elevation = +inputElevation.value;
            if (!validInputs([distance, duration, elevation]))
                return alert('Input fields has to be positive and number')
            workout = new Cycling(Object.values(this.#mapEvent.latlng), distance, duration, elevation);
        }

        this.workouts.push(workout);

        this._renderWorkoutMarker(workout);

        this._renderWorkout(workout);

        this._setLocalStorage();


        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        this._showFormToggle();
    }
    _renderWorkoutMarker(workout) {
        L.marker(workout.coords).addTo(this.#map)
            .bindPopup(L.popup({
                //https://leafletjs.com/reference.html#marker
                closeOnClick: false,
                autoClose: false,
                className: `${workout.type}-popup`,
            }))
            .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
            .openPopup();
    }
    _renderWorkout(workout) {
        let html = ` <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">Running on April 14</h2>
        <div class="workout__details">
          <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">24</span>
          <span class="workout__unit">${workout.duration}</span>
        </div>`;

        if (workout.type === 'running') {
            html += `
            <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`
        }
        else if (workout.type === 'cycling') {
            html += `
            <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`
        }
        form.insertAdjacentHTML('afterend', html);
    }

    _moveToPopup(e) {
        const workoutEl = e.target.closest('.workout');
        if (!this.workouts || !workoutEl) return; // something clicked outside of a workout item, do nothing
        const coords = this.workouts.find((w) => w.id === workoutEl.dataset.id).coords
        this.#map.setView(coords,15,{
            animate: true,
            pan:{
                duration: 1
            }
        })
    }

    _setLocalStorage(){
        //setItem(key, value)
        localStorage.setItem('workouts', JSON.stringify(this.workouts))
    }

    _getLocalStorage(){
        // json - obj // the prototype chain of obj  is lost
        const data = JSON.parse(localStorage.getItem('workouts'))
        if(!data) return;
        this.workouts = data;
        this.workouts.forEach(w => this._renderWorkout(w))
    }
}

const app = new App();




