import React from 'react';

export default function () {
  return (
    <section className="dashboard section">
      <div className="container is-mobile">
        <h1 className="title is-4">
          {'Borrowed Cars'}
        </h1>
        {
          this.state.sonCars.length > 0 ?
            myCarList(this.state.sonCars)
            : <span>{'None'}</span>
        }
        {
          this.state.sonCars.length > 0 ?
            <div className="provide-access">
              <button
                className="button is-success"
                onClick={this.onClickUnlock}
              >
                {'Unlock'}
              </button>
              <button
                className="button is-info provide-select"
                onClick={this.onClicLock}
              >
                {'Lock'}
              </button>
            </div>
            : null
        }
      </div>
    </section>
  );
}

const myCarList = (myCars) => {
  const carCards = myCars.map((car, index) =>
    <div key={index} className="column is-6-tablet">
      <div className="card">
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column is-4-mobile is-2-tablet">
              <img
                alt="car-logo"
                className="car-logo"
                src="https://webiconspng.com/wp-content/uploads/2017/09/Nissan-PNG-Image-35476.png"
              />
            </div>
            <div className="column">
              <div className="title is-5 car-name">{'Name: '}{car.name}</div>
              <div className="car-model">{'Model: '}{car.model}</div>
            </div>
          </div>
        </div>
      </div >
    </div>
  );

  return (
    <div className="columns is-multiline">
      {carCards}
    </div>
  );
}
