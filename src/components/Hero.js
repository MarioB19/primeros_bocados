import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.headlineWrapper}>
        <h1 className="title-large">
          ¿No sabes qué darle de comer a tu bebé?<br/>
          <span className="highlight">Deja de buscar y empieza con claridad.</span>
        </h1>
      </div>
      
      <p className={`paragraph ${styles.subheadline}`}>
        Una guía práctica para mamás que están empezando la alimentación complementaria, 
        con instrucciones claras, en español y adaptadas a la edad exacta de tu bebé. Además, 
        acceso fundador a la app para consultar cualquier alimento en segundos.
      </p>
      
      <div className={styles.ctaWrapper}>
        <a href="#" className="btn-primary">Descargar la guía — $99 MXN</a>
        <div className={styles.microCopy}>
          <span className={styles.checkIcon}>✓</span> Descarga inmediata<br/>
          <span className={styles.checkIcon}>✓</span> PDF en español<br/>
          <span className={styles.checkIcon}>✓</span> Basada en recomendaciones de la OMS y la AAP
        </div>
      </div>
    </section>
  );
}
