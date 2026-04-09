import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section className={`container ${styles.finalSection}`}>
      <h2 className="title-large" style={{color: 'white', marginBottom: '1.5rem'}}>
        Tu bebé está por empezar una etapa nueva.<br/>
        Tú también puedes empezar con más calma.
      </h2>
      
      <div className={styles.finalBody}>
        <p>No necesitas seguir adivinando.</p>
        <p>No necesitas perder tiempo buscando respuestas contradictorias.</p>
        <p>No necesitas sentirte sola frente a cada decisión.</p>
      </div>
      
      <p className="paragraph" style={{color: '#F4EFEA', marginBottom: '2.5rem'}}>
        Con <strong>Primeros Bocados</strong> tienes una guía hecha para acompañarte con claridad, calma y confianza en uno de los momentos más importantes del primer año de tu bebé.
      </p>

      <a href="#precio" className={`btn-primary ${styles.btnFinal}`}>Descargar ahora — $99 MXN</a>
      
      <div className={styles.microCopy}>
        <p className="highlight" style={{color: 'var(--color-bg-main)', fontWeight: 'bold'}}>
          Más de 350+ mamás ya quieren empezar con más claridad.
        </p>
        <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginTop: '0.5rem'}}>
          Pago seguro · Descarga inmediata
        </p>
      </div>
    </section>
  );
}
