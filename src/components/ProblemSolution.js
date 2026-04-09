import styles from './ProblemSolution.module.css';

export default function ProblemSolution() {
  return (
    <>
      <section className={`container ${styles.problemSection}`}>
        <h2 className={`title-section ${styles.problemTitle}`}>
          El momento de empezar a darle de comer a tu bebé debería sentirse emocionante, no abrumador.
        </h2>
        
        <div className={styles.problemBody}>
          <p className="paragraph">
            Tu bebé está por cumplir 6 meses y de pronto aparece una nueva pregunta todos los días: <strong>¿Ya le puedo dar esto?</strong>
          </p>
          
          <ul className={styles.frustrationList}>
            <li>Buscas en Facebook y cada mamá te dice algo distinto.</li>
            <li>Lees artículos en Google y no coinciden entre sí.</li>
            <li>Ves videos en TikTok con recomendaciones contradictorias.</li>
            <li>Descargas un PDF institucional y descubres que es demasiado general para ayudarte de verdad.</li>
          </ul>
          
          <p className={`paragraph ${styles.pEmphasis}`}>
            Y al final sigues con la misma duda:<br/>
            <strong>si ese alimento ya es seguro para tu bebé, hoy, en esta etapa exacta.</strong>
          </p>
          
          <div className={styles.notYourFault}>
            <p>No te falta interés.</p>
            <p>No te falta cuidado.</p>
            <p>No te falta información.</p>
            <p className="highlight" style={{fontWeight: 'bold', marginTop: '1rem'}}>
              Lo que falta es una respuesta clara, confiable y fácil de entender.
            </p>
          </div>
        </div>
      </section>

      <section className={`container ${styles.solutionSection}`}>
        <div className={styles.solutionCard}>
          <h2 className="title-section" style={{color: 'var(--color-bg-main)'}}>
            Primeros Bocados es la guía que te acompaña cuando más lo necesitas.
          </h2>
          
          <p className="paragraph" style={{color: '#F4EFEA'}}>
            Creamos Primeros Bocados para que no tengas que improvisar, adivinar ni depender de respuestas sueltas en internet.
          </p>
          <p className="paragraph" style={{color: '#F4EFEA'}}>
            Es una guía pensada para mamás mexicanas que quieren empezar la alimentación complementaria con más calma, más claridad y menos miedo.
          </p>
          
          <div className={styles.solutionList}>
            <p>Aquí encuentras lo que realmente necesitas saber:</p>
            <ul>
              <li><span className={styles.icon}>👉</span> qué alimentos introducir,</li>
              <li><span className={styles.icon}>👉</span> cuándo ofrecerlos,</li>
              <li><span className={styles.icon}>👉</span> cómo prepararlos,</li>
              <li><span className={styles.icon}>👉</span> qué observar,</li>
              <li><span className={styles.icon}>👉</span> y qué hacer durante esa primera semana que suele sentirse como un salto al vacío.</li>
            </ul>
          </div>

          <p className="paragraph" style={{color: '#F4EFEA', marginBottom: 0, marginTop: '2rem'}}>
            Y esto es solo el inicio.<br/>
            Porque después de la guía, viene la app: una herramienta para buscar cualquier alimento y saber en segundos si ya es adecuado para tu bebé, cómo ofrecerlo y qué precauciones tomar.
          </p>
        </div>
      </section>
    </>
  );
}
