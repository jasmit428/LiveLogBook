"use client"
import React, { useState } from 'react';
import { addLog } from '../_services/services';
import Header from './header';
const initialLogEntry = {
  time: '',
  activity: '',
  location: '',
  remarks: '',
};

// handles all the driverLogBook logic, since the components to the logic to save and add into database
export const DriverLogBook = () => {
  const [driverInfo, setDriverInfo] = useState({
    name: '',
    date: '',
    truckNumber: '',
    trailerNumber: '',
    odometerStart: '',
    odometerEnd: '',
  });

  const [logEntries, setLogEntries] = useState([initialLogEntry]);

  // handles the driverInfo change
  const handleDriverInfoChange = (e) => {
    const { name, value } = e.target;
    setDriverInfo({ ...driverInfo, [name]: value });
  };

  // handle log changes
  const handleLogChange = (index, e) => {
    const updatedLogs = [...logEntries];
    updatedLogs[index][e.target.name] = e.target.value;
    setLogEntries(updatedLogs);
  };

  // set new information into logEntry
  const addLogEntry = () => {
    setLogEntries([...logEntries, initialLogEntry]);
  };

return (

  <div>
      <Header />
      <h2 className='text-blue-700 text-center font-bold text-4xl sm:text-5xl mt-10'>
          Driver’s Daily Log Book
      </h2>

      <div className='flex flex-col bg-blue-700 mt-10 mx-auto w-full max-w-4xl rounded-xl p-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {/* Left Column */}
          <div className='flex flex-col'>
              <label className='m-2 py-2 px-3 flex flex-col sm:flex-row sm:items-center'>
              <span className='sm:w-40 font-semibold text-white'>Driver Name:</span>
              <input className='bg-white p-2 m-1 rounded-lg w-full text-black' type="text" name="name" value={driverInfo.name} onChange={handleDriverInfoChange} />
              </label>

              <label className='m-2 py-2 px-3 flex flex-col sm:flex-row sm:items-center'>
              <span className='sm:w-40 font-semibold text-white'>Date:</span>
              <input className='bg-white text-black p-2 m-1 rounded-lg w-full' type="date" name="date" value={driverInfo.date} onChange={handleDriverInfoChange} />
              </label>

              <label className='m-2 py-2 px-3 flex flex-col sm:flex-row sm:items-center'>
              <span className='sm:w-40 font-semibold text-white'>Truck Number:</span>
              <input className='bg-white text-black p-2 m-1 rounded-lg w-full' type="text" name="truckNumber" value={driverInfo.truckNumber} onChange={handleDriverInfoChange} />
              </label>
          </div>

          {/* Right Column */}
          <div className='flex flex-col'>
              <label className='m-2 py-2 px-3 flex flex-col sm:flex-row sm:items-center'>
              <span className='sm:w-40 font-semibold text-white'>Trailer Number:</span>
              <input className='bg-white p-2 m-1 rounded-lg w-full text-black' type="text" name="trailerNumber" value={driverInfo.trailerNumber} onChange={handleDriverInfoChange} />
              </label>

              <label className='m-2 py-2 px-3 flex flex-col sm:flex-row sm:items-center'>
              <span className='sm:w-40 font-semibold text-white'>Odometer Start:</span>
              <input className='bg-white p-2 m-1 rounded-lg w-full text-black' type="number" name="odometerStart" value={driverInfo.odometerStart} onChange={handleDriverInfoChange} />
              </label>

              <label className='m-2 py-2 px-3 flex flex-col sm:flex-row sm:items-center'>
              <span className='sm:w-40 font-semibold text-white'>Odometer End:</span>
              <input className='bg-white p-2 m-1 rounded-lg w-full text-black' type="number" name="odometerEnd" value={driverInfo.odometerEnd} onChange={handleDriverInfoChange} />
              </label>
          </div>
          </div>
      </div>

      {/* Log Entries */}
      <div className='flex flex-col bg-blue-700 mt-10 mx-auto w-full max-w-4xl rounded-xl p-8'>
          <h3 className='text-white text-2xl sm:text-3xl font-bold mb-4'>Hours of Service</h3>

          {logEntries.map((entry, index) => (
          <div key={index} className='flex flex-col bg-white p-4 m-2 rounded-lg'>
              {['time', 'activity', 'location', 'remarks'].map((field) => (
              <label key={field} className='mb-2'>
                  <span className='block text-blue-700 font-semibold capitalize'>{field}:</span>
                  <input
                  className='bg-gray-200 text-blue-700 p-2 rounded-lg w-full'
                  type="text"
                  name={field}
                  value={entry[field]}
                  onChange={(e) => handleLogChange(index, e)}
                  />
              </label>
              ))}
          </div>
          ))}

          <button
          className='bg-white text-blue-700 font-bold py-2 px-4 rounded-lg mt-4 self-start'
          onClick={addLogEntry}
          >
          + Add Log Entry
          </button>
      </div>

      {/* Total Miles */}
      <div className='flex flex-col bg-blue-700 mt-10 mb-5 mx-auto w-full max-w-4xl rounded-xl p-8'>
          <h4 className='text-white text-2xl sm:text-3xl font-bold'>
          Total Miles: {driverInfo.odometerEnd - driverInfo.odometerStart || 0}
          </h4>
          <button
                className='bg-white text-blue-700 font-bold py-2 px-4 rounded-lg mt-4 self-start'
                onClick={async () => {
                  try {
                    await Promise.all(
                      logEntries.map(entry => addLog(entry, driverInfo))
                    );
                    console.log("All logs added!");
                  } catch (err) {
                    console.error("Failed to add logs:", err);
                  }
                }}
              >
                ADD LOG
              </button>

      </div>          
      </div>

  );
};
