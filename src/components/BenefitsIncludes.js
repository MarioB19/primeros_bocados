import styles from './BenefitsIncludes.module.css';

export default function BenefitsIncludes() {
  const benefits = [
    "Saber con claridad qué alimentos ya puedes ofrecerle a tu bebé, sin perder tiempo buscando en 5 lugares distintos.",
    "Entender cómo preparar y ofrecer cada alimento según su etapa, sin sentir que puedes equivocarte en cualquier momento.",
    "Tomar decisiones con más seguridad y menos angustia, con información explicada de forma simple y aterrizada.",
    "Tener un plan claro para empezar, en lugar de improvisar cada mañana.",
    "Distinguir qué es normal y qué sí requiere atención, para actuar con calma y criterio."
  ];

  const modules = [
    {
      title: "Tema 1 — Qué es la alimentación complementaria y cuándo empezar",
      desc: "Aprende a reconocer las señales reales de que tu bebé está listo. Entiende por qué no se recomienda empezar antes de tiempo, pero tampoco retrasarlo más de lo necesario."
    },
    {
      title: "Tema 2 — Cómo empezar sin sentirte perdida",
      desc: "Purés, BLW o enfoque mixto: conoce las diferencias y elige lo que mejor se adapte a ti y a tu bebé, sin presión y sin complicarte de más."
    },
    {
      title: "Tema 3 — Los primeros alimentos para empezar con confianza",
      desc: "Descubre opciones prácticas y accesibles como zanahoria, camote, aguacate, pollo y lentejas, con sugerencias claras de preparación, textura y porción."
    },
    {
      title: "Tema 4 — Los alimentos que más miedo dan",
      desc: "Huevo, nueces, mariscos, miel y leche de vaca: qué sí, qué no, cuándo introducirlos y qué precauciones tomar."
    },
    {
      title: "Tema 5 — Tu primera semana paso a paso",
      desc: "Un plan simple para tus primeros 7 días, con señales normales, alertas reales y respuestas a las preguntas más comunes."
    }
  ];

  return (
    <>
      <section className={`container ${styles.benefitsSection}`}>
        <h2 className="title-section">
          Lo que vas a lograr con esta guía:
        </h2>
        
        <ul className={styles.benefitsList}>
          {benefits.map((text, idx) => (
            <li key={idx}>
              <span className={styles.checkIcon}>✓</span>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.includesSection}`}>
        <h2 className="title-section text-center">
          Todo lo que necesitas saber antes de la primera cucharada, en una guía clara y práctica.
        </h2>
        
        <div className={styles.modulesContainer}>
          {modules.map((mod, idx) => (
            <div className={styles.moduleCard} key={idx}>
              <h3 className={styles.moduleTitle}>{mod.title}</h3>
              <p className={styles.moduleDesc}>{mod.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
