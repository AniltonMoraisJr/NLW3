import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import mapMarketImg from '../../assets/images/map-marker.svg';
import 'leaflet/dist/leaflet.css';
import '../../styles/pages/orphanage-map.css';

const OrphanageMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarketImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
        <strong>São Paulo</strong>
        <span>Franca</span>
        </footer>
      </aside>
      <Map center={[-20.5242937, -47.4196327]} 
            zoom={15}
            style={{
              width: '100%',
              height: '100%',
            }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
      
    </div>
  )
}

export default OrphanageMap;