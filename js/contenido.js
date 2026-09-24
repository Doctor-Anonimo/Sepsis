/* Traducción completa al español de los textos aportados para las ayudas. */
const SALUDO_SEPTRIS = `<aside class="saludo-septris"><strong>Hola, chicuelos...</strong></aside>`;
globalThis.CONTENIDOS = {
acerca: `<h2>Acerca de Septris y la sepsis</h2>
<p>La sepsis afecta aproximadamente a 750.000 personas en Estados Unidos y causa más de 215.000 muertes. La mortalidad sigue siendo elevada, entre el 25 y el 50 %, con un costo anual de 17.000 millones de dólares. Es una de las afecciones más costosas y complejas de tratar, con tasas de mortalidad y duraciones de hospitalización inaceptablemente altas. Esta actividad ofrece un enfoque práctico para identificar y aplicar las mejores prácticas de manejo y las guías basadas en la evidencia. Se utilizarán casos clínicos para poner estos principios en práctica.</p>
<h3>Objetivos de aprendizaje</h3><ul>
<li>Describir la epidemiología y las definiciones de la sepsis.</li>
<li>Integrar las mejores prácticas basadas en la evidencia, la experiencia clínica y los resultados de las pruebas diagnósticas para identificar de forma temprana y tratar de manera óptima los estados sépticos, mediante guías basadas en la evidencia y herramientas de apoyo a las decisiones clínicas, como conjuntos de órdenes y alertas de buenas prácticas.</li>
<li>Demostrar estrategias específicas de buenas prácticas, como la reanimación con líquidos, la identificación temprana mediante marcadores de laboratorio, el tamizaje y el traslado del paciente con sepsis a un nivel de atención superior.</li>
<li>Describir las acciones prioritarias para establecer e implementar el tratamiento de los pacientes con sepsis a lo largo de todo el proceso de atención.</li>
<li>Desarrollar y aplicar habilidades de comunicación relacionadas con la identificación y el manejo de la sepsis al trabajar en equipos de salud; por ejemplo, pedir ayuda de forma temprana.</li></ul>
<h3>Cómo jugar</h3>
<p>En Septris, intentarás recuperar a los diez pacientes que se te asignen. Cuando un paciente llegue a la parte superior de la pantalla, recibirá el alta y aparecerá otro para tratar, hasta que hayas atendido a los diez.</p>
<p>Sin un tratamiento adecuado, la salud de los pacientes disminuirá constantemente. El paciente fallece si llega a la parte inferior de la pantalla.</p>
<p>Para seleccionar a un paciente, haz clic en su retrato. El paciente seleccionado tendrá un borde blanco. Al seleccionarlo podrás consultar sus signos vitales, historia clínica y resultados de laboratorio, además de aplicarle tratamientos.</p>
<p>Los detalles del paciente seleccionado aparecerán en el panel clínico. Allí encontrarás los resultados de laboratorio, los estudios pendientes, los tratamientos aplicados y sus duraciones.</p>
<p>Selecciona al paciente, navega por el menú de acciones hasta encontrar el estudio o tratamiento que deseas y haz clic en él. Aparecerá una notificación que confirma tu acción.</p>
<p>La partida termina cuando todos los pacientes se hayan recuperado o hayan fallecido. El tratamiento correcto otorga puntos adicionales y el incorrecto resta puntos. Responde correctamente las preguntas que aparezcan para obtener bonificaciones.</p>`,
consejos: `<h2>Consejos para el manejo de la sepsis</h2>
<p>El reconocimiento temprano mediante el tamizaje sistemático de sepsis reduce la mortalidad al facilitar la aplicación temprana de intervenciones adecuadas. La implementación de una herramienta de tamizaje y un protocolo de sepsis basado en decisiones lógicas redujo la mortalidad relacionada con la sepsis del 35,1 al 23,3 %.</p>
<p>Durante la reanimación inicial de la sepsis grave y el choque séptico, el lactato elevado debe normalizarse lo antes posible en los centros que no puedan utilizar la saturación venosa central de oxígeno como objetivo. Ante lactato elevado o hipotensión, deben iniciarse pronto una reanimación intensiva y la participación de la UCI.</p>
<p>La carga inicial de líquidos en pacientes con hipoperfusión tisular inducida por sepsis es de 1000 mL o más de cristaloides, hasta alcanzar un mínimo de 30 mL/kg durante las primeras cuatro a seis horas.</p>
<p>Inicie los antibióticos durante la primera hora desde el reconocimiento de sepsis grave o choque séptico. El momento de su administración influye significativamente en la supervivencia. En pacientes con choque séptico, cada hora de retraso en la administración de antibióticos reduce la supervivencia en un 7,6 %.</p>
<p>Identifique lo antes posible el sitio anatómico específico del foco infeccioso. Retire todos los dispositivos intravasculares potencialmente infectados. Obtenga los cultivos apropiados antes de los antibióticos, pero no retrase la administración de antimicrobianos.</p>
<p>Respecto al uso de vasopresores en pacientes con sepsis:</p><ul>
<li>La noradrenalina debe ser el vasopresor de primera elección. Puede añadirse o sustituirse por adrenalina cuando se necesite otro fármaco para mantener una presión arterial adecuada.</li>
<li>Optimice la reanimación con líquidos antes de iniciar vasopresores.</li>
<li>Puede añadirse vasopresina a 0,03 unidades por minuto o utilizarla en sustitución de la noradrenalina.</li></ul>
<p>El tamizaje regular de todos los pacientes al ingreso y cada ocho horas, junto con guías basadas en la evidencia y niveles progresivos de toma de decisiones, facilita las intervenciones apropiadas y mejora la supervivencia en sepsis grave y choque séptico.</p>
<p>El estado de salud del paciente, reflejado en la disfunción orgánica y las enfermedades concomitantes, es el factor de riesgo más importante de mortalidad por sepsis grave.</p>`,
sirs: `<h2>Criterios diagnósticos de sepsis</h2>
<h3>Infección documentada o sospechada y algunas de las siguientes variables:</h3>
<p>SRIS significa síndrome de respuesta inflamatoria sistémica; corresponde a la sigla inglesa SIRS del material original.</p><ul>
<li><strong>Variables generales</strong><ul>
<li>Fiebre: temperatura &gt; 38,3 °C.</li><li>Hipotermia: temperatura central &lt; 36 °C.</li>
<li>Frecuencia cardíaca &gt; 90/min o superior a dos desviaciones estándar sobre el valor normal para la edad.</li>
<li>Taquipnea.</li><li>Alteración del estado mental.</li>
<li>Edema significativo o balance hídrico positivo &gt; 20 mL/kg durante 24 horas.</li>
<li>Hiperglucemia: glucosa plasmática &gt; 140 mg/dL o 7,7 mmol/L, en ausencia de diabetes.</li></ul></li>
<li><strong>Variables inflamatorias</strong><ul>
<li>Leucocitosis: recuento de leucocitos &gt; 12.000/μL.</li>
<li>Leucopenia: recuento de leucocitos &lt; 4000/μL.</li>
<li>Recuento normal de leucocitos con más del 10 % de formas inmaduras.</li>
<li>Proteína C reactiva plasmática superior a dos desviaciones estándar sobre el valor normal.</li>
<li>Procalcitonina plasmática superior a dos desviaciones estándar sobre el valor normal.</li></ul></li>
<li><strong>Variables hemodinámicas</strong><ul><li>Hipotensión arterial: presión arterial sistólica (PAS) &lt; 90 mmHg, presión arterial media (PAM) &lt; 70 mmHg, o disminución de la PAS &gt; 40 mmHg en adultos, o un valor inferior a dos desviaciones estándar por debajo del normal para la edad.</li></ul></li>
<li><strong>Variables de disfunción orgánica:</strong> consulte la definición de sepsis grave.</li>
<li><strong>Variables de perfusión tisular</strong><ul>
<li>Hiperlactatemia: lactato &gt; 1 mmol/L.</li>
<li>Llenado capilar enlentecido o piel moteada.</li></ul></li></ul>`,
choque: `<h2>Sepsis grave</h2><p>La <strong>sepsis grave</strong> es la sepsis acompañada por la aparición reciente de al menos una de las siguientes disfunciones orgánicas:</p><ul>
<li>Hipotensión inducida por sepsis.</li>
<li>Lactato superior al límite normal del laboratorio.</li>
<li>Diuresis &lt; 0,5 mL/kg/h durante más de dos horas a pesar de una reanimación adecuada con líquidos.</li>
<li>Lesión pulmonar aguda con PaO₂/FiO₂ &lt; 250 cuando la neumonía no es el foco infeccioso.</li>
<li>Lesión pulmonar aguda con PaO₂/FiO₂ &lt; 200 cuando la neumonía sí es el foco infeccioso.</li>
<li>Creatinina &gt; 2,0 mg/dL (176,8 μmol/L).</li>
<li>Bilirrubina &gt; 2 mg/dL (34,2 μmol/L).</li>
<li>Recuento de plaquetas &lt; 100.000/μL.</li>
<li>Coagulopatía: razón internacional normalizada (INR) &gt; 1,5.</li></ul>
<h2>Choque séptico</h2><p>El <strong>choque séptico</strong> es la sepsis grave acompañada de hipotensión refractaria.</p><ul>
<li>PAS &lt; 90 mmHg, PAM &lt; 65 mmHg o disminución de la PAS &gt; 40 mmHg respecto al valor basal, que no se resuelve o reaparece después de un bolo de líquidos de 30 mL/kg.</li></ul>`,
news: `<h2>Escala nacional de alerta temprana (NEWS)</h2>
<p>NEWS es una puntuación agregada compuesta por siete parámetros fisiológicos: frecuencia respiratoria, saturación de oxígeno, necesidad de oxígeno suplementario, presión arterial sistólica, frecuencia cardíaca, estado mental y temperatura. Su objetivo es mejorar la detección del deterioro clínico independientemente de la enfermedad subyacente, por lo que resulta pertinente para identificar pacientes con sospecha de sepsis.</p>
<p>Su utilidad para detectar pacientes con sepsis o en riesgo de desarrollarla en el ámbito hospitalario está bien documentada. Se propuso como herramienta de tamizaje en el borrador de 2021 de la Campaña Sobreviviendo a la Sepsis.</p>
<p>La puntuación del juego se actualiza con los signos vitales del paciente seleccionado. Arriba puedes consultar cuánto aporta cada parámetro. Se utiliza la escala de saturación 1 de NEWS2, con el estado de conciencia aproximado a partir de Glasgow cuando el caso no especifica una observación de conciencia.</p>
<p class="referencia-escala">Referencia: <a href="https://www.rcp.ac.uk/media/alxev00t/news2-chart-1_the-news-scoring-system_0_0.pdf" target="_blank" rel="noopener noreferrer">tabla del Royal College of Physicians</a>.</p>`,
sofa: `<h2>Evaluación secuencial de la disfunción orgánica relacionada con la sepsis (SOFA)</h2>
<p>La sepsis se define como una respuesta desregulada del organismo ante una infección. La escala SOFA busca objetivar esa respuesta disfuncional mediante la medición del fallo de órganos específicos. Incluye seis ejes de función orgánica: respiratoria, cardiovascular, coagulación, sistema nervioso central, hepática y renal. Para más información, consulte a <a href="https://doi.org/10.1097/00003246-199811000-00016" target="_blank" rel="noopener noreferrer">Vincent y colaboradores</a>.</p>
<p>Lo relevante es el cambio en la puntuación SOFA, no solo su valor absoluto. Por ejemplo, un paciente en diálisis tiene, de hecho, una puntuación SOFA de al menos cuatro puntos. Sin embargo, esta puede permanecer estable a lo largo del tiempo. Si aparece una infección, una puntuación estable de cuatro no basta para clasificarlo como sepsis. En cambio, si en el contexto de una infección aumenta de cuatro a seis puntos —por ejemplo, por hipotensión que requiere vasopresores—, cumple criterios de sepsis según esta explicación.</p>
<p>En el juego, SOFA se recalcula con los signos actuales y los últimos resultados disponibles del hemograma, panel metabólico y gasometría arterial. «Parcial» indica datos pendientes; un intervalo indica que un tratamiento activo no tiene una dosis definida en el caso. La puntuación corresponde al momento de la partida.</p>
<p class="referencia-escala">Referencia: <a href="https://jamanetwork.com/journals/jama/fullarticle/2492881" target="_blank" rel="noopener noreferrer">tabla SOFA del consenso Sepsis-3</a>.</p>`
};
