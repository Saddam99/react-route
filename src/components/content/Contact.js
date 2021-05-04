import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const center = [43.32458878802676,45.692473788360594];

const images = [...Array(1)].map((n, i) => {
    return `https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1200px-PlayStation_logo.svg.png`;
});

const Contact = () => (
    <YMaps>
        <Map
            state={{
                center: [43.324669, 45.692367],
                zoom: 14,
                controls: []
            }}
            width="100%"
            height="500px"
        >
            {images.map((n) => (
                <Placemark
                    geometry={center}
                    options={{
                        iconLayout: "default#image",
                        iconImageSize: [50, 50],
                        iconImageHref: n
                    }}
                />
            ))}
        </Map>
    </YMaps>
);

export default Contact;
