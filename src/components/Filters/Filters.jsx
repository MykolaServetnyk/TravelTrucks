import VehicleEquipment from '../VehicleEquipment/VehicleEquipment';
import VehicleType from '../VehicleType/VehicleType';
import Location from '../Location/Location';
import { useState } from 'react';
import css from './Filters.module.css';


export default function Filters() {
const [location, setLocation] = useState('');

  const [selectedEquipment, setSelectedEquipment] = useState(['AC']);

  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Applied filters:', {
      location,
      selectedEquipment,
      selectedVehicleTypes
    });
  };

  return (
    <form className={css.filterForm} onSubmit={handleSubmit}>
      <Location location={location} setLocation={setLocation} />
      <h4 className={css.filTitle}>Filters</h4>
      <VehicleEquipment 
        selectedEquipment={selectedEquipment} 
        setSelectedEquipment={setSelectedEquipment} 
      />
      <VehicleType 
        selectedVehicleTypes={selectedVehicleTypes} 
        setSelectedVehicleTypes={setSelectedVehicleTypes} 
      />
      <div >
        <button className={css.searchBtn} type="submit">Search</button>
      </div>
    </form>
  );
}