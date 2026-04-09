import styles from './FAQ.module.css';

export default function FAQ() {
  const faqs = [
    {
      q: "¿Para qué edad de bebé es esta guía?",
      a: "Está pensada para bebés de 5 a 12 meses, desde antes de comenzar la alimentación complementaria hasta las primeras etapas de consolidación."
    },
    {
      q: "¿Cómo recibo la guía?",
      a: "Después del pago recibes un correo con el enlace de descarga. Puedes verla fácilmente desde tu celular o computadora."
    },
    {
      q: "¿Necesito saber de nutrición para entenderla?",
      a: "No. Está escrita en lenguaje claro, sin tecnicismos innecesarios y con ejemplos fáciles de seguir."
    },
    {
      q: "¿Qué significa acceso fundador al app?",
      a: "Que entras antes que el público general y recibes el primer mes incluido cuando la app esté disponible."
    },
    {
      q: "¿Cuándo sale la app?",
      a: "Está en construcción. Si compras la guía hoy, serás de las primeras en enterarte y tendrás acceso preferencial."
    }
  ];

  return (
    <section className={`container ${styles.faqSection}`}>
      <h2 className="title-section text-center" style={{marginBottom: '2.5rem'}}>
        Preguntas frecuentes
      </h2>
      
      <div className={styles.faqContainer}>
        {faqs.map((faq, idx) => (
          <details className={styles.faqItem} key={idx}>
            <summary className={styles.faqQuestion}>
              {faq.q}
              <span className={styles.arrow}>▼</span>
            </summary>
            <div className={styles.faqAnswer}>
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
