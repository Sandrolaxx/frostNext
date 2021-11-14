import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
import { fetchLocalMapBox } from '../components/utils/restClient';
import { OrderLocationData } from '../types';

const initialPosition = {
  lat: -24.957632,
  lng: -53.510906
};

interface Place {
  label?: string;
  value?: string;
  position: {
    lat: number;
    lng: number;
  }
}

interface Props {
  onChangeLocation: (location: OrderLocationData) => void;
}

function OrderLocation({ onChangeLocation }: Props) {
  const [address, setAddress] = useState<Place>({
    position: initialPosition
  })

  const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {

    const response = await fetchLocalMapBox(inputValue);

    const places = response.data.features.map((item: any) => {
      return ({
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0]
        }
      });
    });

    callback(places);
  };

  const handleChangeSelect = (place: Place) => {
    setAddress(place);
    onChangeLocation({
      latitude: place.position.lat,
      longitude: place.position.lng,
      address: place.label!
    });
  };

  return (
    <div className='flex justify-center'>
      <div className='w-3/4 mt-8 ml-28 mr-28 p-5 h-96 rounded-lg'>
        <h3 className='text-sm text-center'>
          Selecione o local da entrega:
        </h3>
        <div className='flex justify-center mt-5'>
          <AsyncSelect placeholder='Digite um endereço para entrega'
            className='filter'
            loadOptions={loadOptions}
            onChange={value => handleChangeSelect(value as Place)}
          />
        </div>
        <MapContainer
          center={address.position}
          zoom={13}
          key={address.position.lat}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={address.position}>
            <Popup>
              Seu Apê
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default OrderLocation;
