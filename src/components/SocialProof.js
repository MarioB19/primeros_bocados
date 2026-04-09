import styles from './SocialProof.module.css';

export default function SocialProof() {
  return (
    <section className={`container ${styles.socialProof}`}>
      <h2 className="title-section text-center">
        Cada vez más mamás están buscando una forma más clara de empezar.
      </h2>
      
      <p className={`paragraph ${styles.waitlistCount}`}>
        <strong>Más de 350+ mamás</strong> ya se unieron a la lista de espera esta semana.
      </p>

      <div className={styles.testimonials}>
        {/* Placeholder para los testimonios reales */}
        <div className={styles.testimonialCard}>
          <p className={styles.quote}>
            "Me sentía súper abrumada leyendo grupos de Facebook, todos decían cosas distintas. Esta guía es exactamente lo que necesitaba."
          </p>
          <div className={styles.author}>
            <strong>Mariana D.</strong> · CDMX · Bebé de 6 meses
          </div>
        </div>
        
        <div className={styles.testimonialCard}>
          <p className={styles.quote}>
            "Poder saber en un par de páginas cómo empezar sin tener que chutarme un curso de 8 horas fue un alivio inmenso."
          </p>
          <div className={styles.author}>
            <strong>Laura S.</strong> · Monterrey · Bebé de 5 meses
          </div>
        </div>
      </div>
    </section>
  );
}
