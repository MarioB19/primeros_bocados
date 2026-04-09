import styles from './AppUpsell.module.css';

export default function AppUpsell() {
  return (
    <section className={`container ${styles.appUpsell}`}>
      <div className={styles.card}>
        <div className={styles.tag}>Próximamente</div>
        <h2 className="title-section" style={{marginBottom: '0.5rem'}}>
          La guía te ayuda a empezar.
        </h2>
        <h3 className="title-section" style={{color: 'var(--color-primary)'}}>
          La app te ayuda a decidir todos los días.
        </h3>
        
        <p className="paragraph" style={{marginTop: '1.5rem'}}>
          Estamos construyendo <strong>Primeros Bocados App</strong>, una herramienta para que puedas buscar cualquier alimento y ver en segundos:
        </p>

        <ul className={styles.appList}>
          <li>⚡️ si ya es seguro para tu bebé,</li>
          <li>⚡️ cómo ofrecerlo,</li>
          <li>⚡️ qué textura corresponde,</li>
          <li>⚡️ y qué precauciones debes considerar.</li>
        </ul>

        <div className={styles.founderBox}>
          <p>
            Las mamás que compren la guía hoy entran con <strong>acceso fundador</strong>, lo que incluye el <strong>primer mes del app sin costo adicional</strong> cuando lancemos.
          </p>
        </div>

        <div className="text-center" style={{marginTop: '2rem'}}>
          <a href="#precio" className={`btn-primary ${styles.btnSecondary}`}>Quiero acceso fundador</a>
          <p className="paragraph-small">
            Gratis hoy · Sin tarjeta · Aviso prioritario de lanzamiento
          </p>
        </div>
      </div>
    </section>
  );
}
