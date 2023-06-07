import React from "react";

const Footer = () => {
  const phoneNumber = "+375292296151";
  const googleMapsUrl =
    "https://www.google.com/maps/place/Agrousadba+Lesnaya+Skazka/@52.5792643,23.7377595,15z/data=!4m21!1m11!3m10!1s0x47205ae7c7f062d9:0x974eddf2ee9ddc4d!2sAgrousadba+Lesnaya+Skazka!5m2!4m1!1i2!8m2!3d52.5818635!4d23.7467304!10e7!16s%2Fg%2F11c5btyhc_!3m8!1s0x47205ae7c7f062d9:0x974eddf2ee9ddc4d!5m2!4m1!1i2!8m2!3d52.5818635!4d23.7467304!16s%2Fg%2F11c5btyhc_?entry=ttu";
  const instagramUrl = "https://www.instagram.com/usadba_lesnaja_skazka/";
  const whatsappUrl = "https://wa.me/375292296151";
  const viberUrl = "viber://chat?number=+375292296151";
  const telegramUrl = "https://telegram.me/yourtelegramusername";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsappClick = () => {
    window.location.href = whatsappUrl;
  };

  const handleViberClick = () => {
    window.location.href = viberUrl;
  };

  return (
    <div>
      <h2>Контакты</h2>
      <ul>
        <li>
          Адрес: <a href={googleMapsUrl}>Agrousadba Lesnaya Skazka</a>
        </li>
        <li>
          Телефон:{" "}
          <a href={`tel:${phoneNumber}`} onClick={handlePhoneClick}>
            {phoneNumber}
          </a>
        </li>
        <li>
          Email:{" "}
          <a href="mailto:your-email@example.com">your-email@example.com</a>
        </li>
      </ul>
      <div>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <img src="instagram-icon.png" alt="Instagram" />
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsappClick}
        >
          <img src="whatsapp-icon.png" alt="WhatsApp" />
        </a>
        <a
          href={viberUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleViberClick}
        >
          <img src="viber-icon.png" alt="Viber" />
        </a>
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
          <img src="telegram-icon.png" alt="Telegram" />
        </a>
      </div>
      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
        <img src="map-image.png" alt="Map" />
      </a>
    </div>
  );
};

export default Footer;
