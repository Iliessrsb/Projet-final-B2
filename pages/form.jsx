import { useState } from 'react';

const PlaceForm = () => {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const formData = {
      type,
      name,
      address,
      city,
      postalCode,
      country,
      additionalInfo
    };
    console.log(formData); // For demonstration, you can replace this with your form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 border rounded-lg">
      <div className="mb-4">
        <label htmlFor="type" className="block mb-2">Type de lieu (obligatoire): </label>
        <input 
          type="text" 
          id="type" 
          value={type} 
          onChange={(e) => setType(e.target.value)} 
          required 
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Nom du lieu (obligatoire): </label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block mb-2">Adresse (obligatoire): </label>
        <input 
          type="text" 
          id="address" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          required 
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block mb-2">Ville (obligatoire): </label>
        <input 
          type="text" 
          id="city" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          required 
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="postalCode" className="block mb-2">Code postal (obligatoire): </label>
        <input 
          type="text" 
          id="postalCode" 
          value={postalCode} 
          onChange={(e) => setPostalCode(e.target.value)} 
          required 
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block mb-2">Pays (obligatoire): </label>
        <input 
          type="text" 
          id="country" 
          value={country} 
          onChange={(e) => setCountry(e.target.value)} 
          required 
          className="w-full p-2 border rounded-md"
        />
      </div>
      {type === 'restaurant' && (
        <div className="mb-4">
          <label htmlFor="cuisine" className="block mb-2">Type de cuisine: </label>
          <input 
            type="text" 
            id="cuisine" 
            value={additionalInfo} 
            onChange={(e) => setAdditionalInfo(e.target.value)} 
            className="w-full p-2 border rounded-md"
          />
        </div>
      )}
      {type === 'bar' && (
        <div className="mb-4">
          <label htmlFor="barType" className="block mb-2">Type de bar: </label>
          <input 
            type="text" 
            id="barType" 
            value={additionalInfo} 
            onChange={(e) => setAdditionalInfo(e.target.value)} 
            className="w-full p-2 border rounded-md"
          />
        </div>
      )}
      {type === 'musée' && (
        <div className="mb-4">
          <label htmlFor="entrance" className="block mb-2">Type dentrée (gratuit/payant): </label>
          <input 
            type="text" 
            id="entrance" 
            value={additionalInfo} 
            onChange={(e) => setAdditionalInfo(e.target.value)} 
            className="w-full p-2 border rounded-md"
          />
        </div>
      )}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Soumettre</button>
    </form>
  );
};

export default PlaceForm;
