import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
import { fetchLocalMapBox } from '../components/utils/restClient';
import { OrderLocationData } from '../types';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const initialPosition = {
    lat: -24.9525346,
    lng: -53.4651744
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
        <div className="flex justify-center h-104">
            <div className="w-3/4 mx-52 bg-secondary-light-color rounded-2xl shadow-2xl">
                <h3 className="text-base m-4 text-center font-semibold text-secondary-color">
                    Selecione o local da entrega:
                </h3>
                <div className="flex justify-center">
                    <AsyncSelect placeholder='Digite um endereço para entrega'
                        className="w-3/5"
                        loadOptions={loadOptions}
                        onChange={value => handleChangeSelect(value as Place)}
                    />
                </div>
                <MapContainer
                    center={address.position}
                    zoom={13}
                    key={address.position.lat}
                    className="h-98 rounded-xl mt-6"
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
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
