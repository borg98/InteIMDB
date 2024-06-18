import "../styles/components/Contact.scss";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const options = {
  styles: [
    {
      featureType: "administrative",
      elementType: "all",
      stylers: [
        {
          saturation: "-100",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 65,
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: "50",
        },
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: "-100",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "all",
      stylers: [
        {
          lightness: "30",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "all",
      stylers: [
        {
          lightness: "40",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          hue: "#ffff00",
        },
        {
          lightness: -25,
        },
        {
          saturation: -97,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels",
      stylers: [
        {
          lightness: -25,
        },
        {
          saturation: -100,
        },
      ],
    },
  ],
};

export const Contact = () => {
  let key = import.meta.env.VITE_MAP_API;

  const markerPosition = {
    lat: 34.134117,
    lng: -118.321495,
  };

  const markerPosition2 = {
    lat: 34.134117,
    lng: -118.321495,
  };

  const center = {
    lat: 34.134117,
    lng: -118.321495,
  };

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <section id="main-contact-wrapper">
      <div className="contact-info-wrapper">
        <div className="contact-info">
          <p>
            <b className="logo-title">Inte IMDB</b>
          </p>
          <p>Filmvägen 143</p>
          <p>123 45, Hollywood</p>
          <p>Tel: +46 123 465 789</p>
          <p>Email: info@inteimdb.com</p>
        </div>

        <div className="contact-icons">
          <img
            src="/icons8-instagram.svg"
            alt="bild på instagrams logga"
            className="insta-icon"
          />
          <img
            src="/icons8-facebook.svg"
            alt="bild på facebooks logga"
            className="facebook-icon"
          />
        </div>
      </div>
      <div className="contact-maps-wrapper">
        <LoadScript googleMapsApiKey={key}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
            options={options}
          >
            <MarkerF position={markerPosition} />
            <MarkerF position={markerPosition2} />
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};
