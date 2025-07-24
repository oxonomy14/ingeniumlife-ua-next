import { FaWhatsapp } from "react-icons/fa";
import css from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/66804704182?text=Здравствуйте,%20я%20хочу%20задать%20вопрос"
      className={css.whatsapp_btn}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
    >
      <FaWhatsapp className={css.whatsapp_icon} />
      Написать в WhatsApp
    </a>
  );
}
