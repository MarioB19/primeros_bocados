import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <section id="precio" className={`container ${styles.pricingSection}`}>
      <h2 className="title-section text-center">
        Empieza hoy con una guía que te da paz, claridad y dirección.
      </h2>
      
      <div className={styles.pricingCard}>
        <div className={styles.price}>
          $99 MXN
        </div>
        <p className={styles.priceSub}>Pago único · Descarga inmediata</p>
        
        <div className={styles.includesBox}>
          <strong>Incluye:</strong>
          <ul>
            <li><span className={styles.check}>✓</span> Guía PDF en español</li>
            <li><span className={styles.check}>✓</span> Contenido práctico y aterrizado al contexto mexicano</li>
            <li><span className={styles.check}>✓</span> Acceso fundador al app cuando lance</li>
            <li><span className={styles.check}>✓</span> Primer mes del app incluido sin costo</li>
          </ul>
        </div>

        <a href="#" className="btn-primary">Descargar la guía ahora — $99 MXN</a>
        
        <p className={`paragraph-small text-center ${styles.guarantee}`}>
          Pago seguro · Descarga en segundos · Soporte: hola@primerosbocados.com
        </p>

        <div className={styles.guaranteeBox}>
          <strong>Garantía:</strong> Si en los primeros 7 días sientes que la guía no te fue útil, te devolvemos tu dinero.
        </div>
      </div>
    </section>
  );
}
