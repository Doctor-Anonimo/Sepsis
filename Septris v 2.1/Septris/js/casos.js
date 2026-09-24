// Datos históricos recuperados de Stanford Septris. No constituyen un protocolo clínico vigente.
globalThis.CASOS_ORIGINALES = [
  {
    "name": "Peter",
    "gender": "Male",
    "health": 260,
    "healthRate": 2,
    "picture": "peter_n.png",
    "death_picture": "peter_d.png",
    "healed_picture": "peter_h.png",
    "selected_picture": "peter_s.png",
    "healed_tip": {
      "response": "¡Peter se recuperó! +500 puntos. Los líquidos y los antibióticos no curan las perforaciones intestinales; se necesita un control eficaz del foco. La progresión hacia una enfermedad grave ocurre durante las «horas de oro», cuando el reconocimiento y el tratamiento definitivos ofrecen el mayor beneficio para el desenlace.",
      "score": 500,
      "image": "cat1.png"
    },
    "death_tip": {
      "response": "Peter falleció. Los líquidos y los antibióticos no curan las perforaciones intestinales; se necesita un control eficaz del foco. Recuerde examinar el abdomen. Además, si el paciente empeora, solicite apoyo temprano de la UCI. −1000 puntos.",
      "score": -1000,
      "image": "cat5.png"
    },
    "history": {
      "Age": 65,
      "Chief Complaint": "Fiebre y dolor abdominal desde hace una semana.",
      "History of Present Illness": "Diagnóstico reciente de cáncer de colon metastásico, actualmente en quimioterapia. Tuvo una hospitalización reciente. Hace una semana presentó ausencia de evacuaciones y de expulsión de gases, con dolor abdominal difuso e intenso. El dolor aumentó bruscamente hace seis horas, lo que motivó su consulta a urgencias.",
      "Past Medical Illness": "Hipertensión e hiperlipidemia."
    },
    "vitals": [
      {
        "name": "SBP",
        "at300": 118,
        "at200": 105,
        "at100": 90,
        "at0": 60,
        "type": "integer"
      },
      {
        "name": "DBP",
        "at300": 80,
        "at200": 60,
        "at100": 40,
        "at0": 30,
        "type": "integer"
      },
      {
        "name": "HR",
        "at300": 90,
        "at200": 125,
        "at100": 140,
        "at0": 160,
        "type": "integer"
      },
      {
        "name": "Temp",
        "at300": 38.4,
        "at200": 38.7,
        "at100": 38.3,
        "at0": 38.8,
        "type": "decimal1"
      },
      {
        "name": "RR",
        "at300": 18,
        "at200": 24,
        "at100": 28,
        "at0": 40,
        "type": "integer"
      },
      {
        "name": "SpO2",
        "at300": 97,
        "at200": 93,
        "at100": 90,
        "at0": 85,
        "type": "integer"
      },
      {
        "name": "Urine Out",
        "at300": 0.5,
        "at200": 0.4,
        "at100": 0.3,
        "at0": 0.2,
        "type": "decimal1"
      },
      {
        "name": "GCS",
        "at300": 15,
        "at200": 14,
        "at100": 7,
        "at0": 3,
        "type": "integer"
      },
      {
        "name": "Weight",
        "at300": 77,
        "at200": 77,
        "at100": 77,
        "at0": 77,
        "type": "integer"
      }
    ],
    "tests": [
      {
        "name": "General",
        "labID": "physicalexam",
        "type": "string",
        "result": "Al ingreso: temperatura de 38,5 °C, pulso de 105/min y frecuencia respiratoria de 19/min. Abdomen rígido, extremadamente doloroso a la palpación y con ruidos intestinales disminuidos. Taquicardia. Extremidades calientes. El paciente parece incómodo.",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Hemocultivos",
        "labID": "bloodcultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "Al evaluar una sepsis, obtenga hemocultivos antes de iniciar los antibióticos. Los resultados pueden tardar varios días, así que continúe el tratamiento mientras espera. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Urocultivo",
        "labID": "urinecultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "El urocultivo tardará en estar disponible; continúe el tratamiento mientras espera. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Uroanálisis: densidad urinaria",
        "labID": "ua",
        "type": "decimal3",
        "result": "",
        "at300": 1.01,
        "at200": 1.03,
        "at100": 1.01,
        "at0": 1.03,
        "unit": ""
      },
      {
        "name": "Uroanálisis: leucocitos",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Uroanálisis: cilindros",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Lactato",
        "labID": "lactate",
        "type": "decimal1",
        "result": "",
        "at300": 0,
        "at200": 2,
        "at100": 4,
        "at0": 8,
        "unit": ""
      },
      {
        "name": "Hemograma: plaquetas",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 200,
        "at200": 150,
        "at100": 80,
        "at0": 40,
        "unit": "×10^3/μL",
        "analyte": "platelets"
      },
      {
        "name": "Hemograma: recuento de leucocitos",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 2.5,
        "at200": 3.5,
        "at100": 2.5,
        "at0": 3.5,
        "unit": ""
      },
      {
        "name": "Hemograma: hematocrito",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 35,
        "at200": 30,
        "at100": 25,
        "at0": 20,
        "unit": ""
      },
      {
        "name": "Sodio",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 138,
        "at200": 142,
        "at100": 138,
        "at0": 142,
        "unit": ""
      },
      {
        "name": "Potasio",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 4.2,
        "at200": 3.8,
        "at100": 4.2,
        "at0": 3.8,
        "unit": ""
      },
      {
        "name": "Cloro",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 106,
        "at200": 100,
        "at100": 106,
        "at0": 100,
        "unit": ""
      },
      {
        "name": "Bicarbonato",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 30,
        "at200": 20,
        "at100": 15,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Nitrógeno ureico en sangre (BUN)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 10,
        "at200": 25,
        "at100": 30,
        "at0": 50,
        "unit": ""
      },
      {
        "name": "Creatinina",
        "labID": "cmp",
        "type": "decimal2",
        "result": "",
        "at300": 1.2,
        "at200": 1.4,
        "at100": 2,
        "at0": 8,
        "unit": "mg/dL",
        "analyte": "creatinine"
      },
      {
        "name": "Glucosa",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 180,
        "at200": 250,
        "at100": 60,
        "at0": 40,
        "unit": ""
      },
      {
        "name": "Bilirrubina total",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 1.4,
        "at200": 2,
        "at100": 3,
        "at0": 5,
        "unit": "mg/dL",
        "analyte": "bilirubin"
      },
      {
        "name": "Alanina aminotransferasa (ALT)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 60,
        "at200": 100,
        "at100": 200,
        "at0": 800,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: pH",
        "labID": "abg",
        "type": "decimal2",
        "result": "",
        "at300": 7.44,
        "at200": 7.36,
        "at100": 7.3,
        "at0": 7,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: presión de oxígeno (PaO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 100,
        "at200": 70,
        "at100": 60,
        "at0": 50,
        "unit": "mmHg",
        "analyte": "pao2"
      },
      {
        "name": "Gasometría arterial: presión de dióxido de carbono (PaCO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 45,
        "at200": 35,
        "at100": 30,
        "at0": 20,
        "unit": ""
      },
      {
        "name": "Troponinas",
        "labID": "troponins",
        "type": "decimal2",
        "result": "",
        "at300": 0,
        "at200": 0.1,
        "at100": 0,
        "at0": 0.1,
        "unit": ""
      },
      {
        "name": "Razón internacional normalizada (INR)",
        "labID": "dicpanel",
        "type": "decimal1",
        "result": "",
        "at300": 0.8,
        "at200": 1.5,
        "at100": 4,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Tiempo parcial de tromboplastina (TPT)",
        "labID": "dicpanel",
        "type": "",
        "result": "",
        "at300": 23,
        "at200": 36,
        "at100": 40,
        "at0": 60,
        "unit": ""
      },
      {
        "name": "Panel de coagulación intravascular diseminada (CID)",
        "labID": "dicpanel",
        "type": "string",
        "result": "Negativo",
        "at300": "",
        "at200": "",
        "at100": "Positivo",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Radiografía de tórax",
        "labID": "chestxray",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "Síndrome de dificultad respiratoria aguda (SDRA) leve",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Electrocardiograma (ECG)",
        "labID": "ekg",
        "type": "string",
        "result": "Taquicardia",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía de tórax",
        "labID": "chestct",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "Síndrome de dificultad respiratoria aguda (SDRA) leve",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía abdominal",
        "labID": "abdominalct",
        "type": "string",
        "result": "",
        "at300": "Anormal: obstrucción intestinal y sospecha de perforación.",
        "at200": "Anormal: obstrucción intestinal con líquido libre intraperitoneal.",
        "at100": "Anormal: obstrucción intestinal con líquido libre intraperitoneal y perforación.",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Ecocardiograma",
        "labID": "echocardiogram",
        "type": "string",
        "result": "Hiperdinámico",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      }
    ],
    "treatments": [
      {
        "id": "d5halfnormalsaline500cc",
        "value": 0.25,
        "valueBelow200": 0,
        "valueBelow100": 0,
        "below300": {
          "response": "Administre cargas de 1000 mL de solución salina normal o cristaloides balanceados durante 30 minutos. Use volúmenes mayores y una administración más rápida. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ivnormalsaline500ml",
        "value": 0,
        "valueBelow200": 0.75,
        "valueBelow100": 1.25
      },
      {
        "id": "ivnormalsaline1000ml",
        "value": 0,
        "valueBelow200": 1.25,
        "valueBelow100": 2.25,
        "below300": {
          "response": "¡Bien! La carga inicial de líquidos en pacientes con hipoperfusión tisular por sepsis es de 1000 mL o más de cristaloides, hasta alcanzar un mínimo de 30 mL/kg durante las primeras tres horas. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "cefazolin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La cobertura de la cefazolina (Kefzol) es demasiado limitada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ceftriaxone",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "cefepime",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "vancomycin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "No hay indicios de infección por Staphylococcus aureus resistente a la meticilina (SARM) en este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "meropenem",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "zosyn",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "levofloxacin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "norepinephrine",
        "value": 0,
        "valueBelow200": 0.5,
        "valueBelow100": 0.5,
        "below300": {
          "response": "El paciente no necesitaba vasopresores en este momento. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        },
        "below200": {
          "response": "¡Bien! La noradrenalina es el vasopresor de primera elección para el choque séptico. +100 puntos.",
          "score": 100
        }
      },
      {
        "id": "dopamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dopamina no es el vasopresor de elección para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "dobutamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dobutamina no es el vasopresor ni el inotrópico de elección. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "heparin",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La heparina no está indicada y puede causar sangrado. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "aspirin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La aspirina no está indicada para este paciente. −200 puntos.",
          "score": -200,
          "image": "cat4.png"
        }
      },
      {
        "id": "icutransfer",
        "value": 0,
        "valueBelow200": 50,
        "valueBelow100": 50,
        "below300": {
          "response": "La UCI considera que este paciente no necesita traslado y que usted puede tratarlo en hospitalización. En pacientes con sepsis sin signos de sepsis grave ni choque, inicie antibióticos y líquidos con vigilancia estrecha. Considere un nivel de atención superior en cuanto aparezcan signos de sepsis grave."
        },
        "below200": {
          "response": "¡Bien! Se recomienda pedir ayuda temprana ante un paciente con sepsis. Considere siempre una valoración por UCI en los pacientes con sepsis grave. +100 puntos.",
          "score": 100
        },
        "below100": {
          "response": "¡Buena decisión! Este paciente está en choque séptico. Los pacientes en choque deben ingresar a UCI dentro de las primeras seis horas. Usted también está de turno en UCI, así que seguirá a cargo. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "revascularization",
        "value": -50,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Este paciente no necesita revascularización. −250 puntos.",
          "score": -250,
          "image": "cat5.png"
        }
      },
      {
        "id": "interventionalradiology",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La radiología intervencionista no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "giercp",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La colangiopancreatografía retrógrada endoscópica (CPRE) no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "surgery",
        "value": 300,
        "valueBelow200": "",
        "valueBelow100": 0,
        "below300": {
          "response": "¡Bien! Este paciente necesitaba cirugía para controlar el foco de sepsis. +250 puntos.",
          "score": 250,
          "image": "cat1.png",
          "quiz": "surgery_quiz"
        },
        "below100": {
          "response": "Hizo bien en avisar a cirugía. Ahora debe estabilizar al paciente y volver a llamar cuando esté listo para el quirófano."
        }
      },
      {
        "id": "chesttube",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "El tubo de tórax no está indicado para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      }
    ],
    "quizzes": [
      {
        "id": "surgery_quiz",
        "question": "Pregunta de bonificación: al ingreso, el paciente presentaba FC de 105/min, PA de 110/70 mmHg, leucocitos de 3 G/L, FR de 19/min, temperatura de 38,5 °C y lactato normal. Con estos datos y la historia clínica, ¿cómo clasificaría al paciente?",
        "answers": [
          {
            "text": "Síndrome de respuesta inflamatoria sistémica (SRIS)",
            "response": "Incorrecto. Aunque el paciente cumple criterios de SRIS, existe un foco infeccioso sospechado. Cumple criterios de sepsis. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Sepsis",
            "response": "¡Bien! Este paciente tenía manifestaciones de SRIS y una infección abdominal, por lo que corresponde a sepsis. +200 puntos.",
            "score": 200,
            "image": "cat2.png"
          },
          {
            "text": "Sepsis grave",
            "response": "Incorrecto. El paciente tenía sepsis al ingreso: cumplía criterios de SRIS y tenía una infección, pero sí presentaba disfunción orgánica u otros signos de sepsis grave. −200 puntos. [El comentario original es contradictorio y requiere revisión clínica; se conserva la puntuación del caso.]",
            "score": -200,
            "image": "cat4.png"
          }
        ]
      }
    ],
    "combos": [
      {
        "ids": [
          "meropenem",
          "Piperacilline/tazobactam (zosyn)"
        ],
        "number": 1,
        "value": 0,
        "below200": 2,
        "below100": 3,
        "response": "¡Bien! La cobertura antibiótica de una infección intraabdominal sospechada debe incluir microorganismos gramnegativos entéricos y anaerobios. +100 puntos.",
        "score": 100,
        "image": "cat2.png"
      },
      {
        "ids": [
          "norepinephrine",
          "dobutamine"
        ],
        "number": "",
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      }
    ],
    "scoreContext": {
      "supplementalOxygen": false,
      "fio2": 0.21,
      "respiratorySupport": false,
      "assumedAir": true
    }
  },
  {
    "name": "Will",
    "gender": "Male",
    "health": 140,
    "healthRate": 2,
    "picture": "will_n.png",
    "death_picture": "will_d.png",
    "healed_picture": "will_h.png",
    "selected_picture": "will_s.png",
    "healed_tip": {
      "response": "¡Will se recuperó! +500 puntos. El 40 % de las neumonías presentan derrame pleural asociado. Se estima una mortalidad del 15 % en pacientes con líquido pleural infectado.",
      "score": 500,
      "image": "cat1.png"
    },
    "death_tip": {
      "response": "Will falleció. −1000 puntos. El 40 % de las neumonías presentan derrame pleural asociado. Se estima una mortalidad del 15 % en pacientes con líquido pleural infectado. Recuerde controlar el foco y pedir apoyo temprano de la UCI.",
      "score": -1000,
      "image": "cat5.png"
    },
    "history": {
      "Age": 59,
      "Chief Complaint": "«Me cuesta respirar».",
      "History of Present Illness": "El paciente tiene enfermedad pulmonar obstructiva crónica (EPOC), con una hospitalización por exacerbación durante el último mes. Hace tres días presentó fiebre, dificultad respiratoria y tos. Produce esputo verde oscuro. Ha olvidado usar sus inhaladores para la EPOC.",
      "Past Medical Illness": "Hipertensión y diabetes."
    },
    "vitals": [
      {
        "name": "SBP",
        "at300": 160,
        "at200": 112,
        "at100": 90,
        "at0": 60,
        "type": "integer"
      },
      {
        "name": "DBP",
        "at300": 100,
        "at200": 60,
        "at100": 40,
        "at0": 30,
        "type": "integer"
      },
      {
        "name": "HR",
        "at300": 105,
        "at200": 125,
        "at100": 140,
        "at0": 160,
        "type": "integer"
      },
      {
        "name": "Temp",
        "at300": 38.4,
        "at200": 38.7,
        "at100": 38.3,
        "at0": 38.8,
        "type": "decimal1"
      },
      {
        "name": "RR",
        "at300": 18,
        "at200": 24,
        "at100": 28,
        "at0": 10,
        "type": "integer"
      },
      {
        "name": "SpO2",
        "at300": 93,
        "at200": 90,
        "at100": 85,
        "at0": 76,
        "type": "integer"
      },
      {
        "name": "Urine Out",
        "at300": 0.5,
        "at200": 0.4,
        "at100": 0.3,
        "at0": 0.2,
        "type": "decimal1"
      },
      {
        "name": "GCS",
        "at300": 15,
        "at200": 15,
        "at100": 15,
        "at0": 3,
        "type": "integer"
      },
      {
        "name": "Weight",
        "at300": 80,
        "at200": 80,
        "at100": 80,
        "at0": 80,
        "type": "integer"
      }
    ],
    "tests": [
      {
        "name": "General",
        "labID": "physicalexam",
        "type": "string",
        "result": "Se observa incómodo, con dificultad respiratoria. Disminución de los ruidos respiratorios y crepitantes en la base pulmonar derecha. Sibilancias difusas. El resto del examen no muestra hallazgos relevantes.",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Hemocultivos",
        "labID": "bloodcultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "Al evaluar una sepsis, obtenga hemocultivos antes de iniciar los antibióticos. Los resultados pueden tardar varios días, así que continúe el tratamiento mientras espera. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Urocultivo",
        "labID": "urinecultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "El urocultivo tardará en estar disponible; continúe el tratamiento mientras espera. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Uroanálisis: densidad urinaria",
        "labID": "ua",
        "type": "decimal3",
        "result": "",
        "at300": 1.01,
        "at200": 1.03,
        "at100": 1.01,
        "at0": 1.03,
        "unit": ""
      },
      {
        "name": "Uroanálisis: leucocitos",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Uroanálisis: cilindros",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Lactato",
        "labID": "lactate",
        "type": "decimal1",
        "result": "",
        "at300": 0,
        "at200": 4,
        "at100": 6,
        "at0": 8,
        "unit": ""
      },
      {
        "name": "Hemograma: plaquetas",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 200,
        "at200": 150,
        "at100": 80,
        "at0": 40,
        "unit": "×10^3/μL",
        "analyte": "platelets"
      },
      {
        "name": "Hemograma: recuento de leucocitos",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 12,
        "at200": 14,
        "at100": 16,
        "at0": 18,
        "unit": ""
      },
      {
        "name": "Hemograma: hematocrito",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 45,
        "at200": 40,
        "at100": 35,
        "at0": 30,
        "unit": ""
      },
      {
        "name": "Sodio",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 135,
        "at200": 132,
        "at100": 130,
        "at0": 125,
        "unit": ""
      },
      {
        "name": "Potasio",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 4.2,
        "at200": 4.7,
        "at100": 5.5,
        "at0": 5.5,
        "unit": ""
      },
      {
        "name": "Cloro",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 106,
        "at200": 100,
        "at100": 106,
        "at0": 100,
        "unit": ""
      },
      {
        "name": "Bicarbonato",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 30,
        "at200": 20,
        "at100": 15,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Nitrógeno ureico en sangre (BUN)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 10,
        "at200": 25,
        "at100": 30,
        "at0": 50,
        "unit": ""
      },
      {
        "name": "Creatinina",
        "labID": "cmp",
        "type": "decimal2",
        "result": "",
        "at300": 1.4,
        "at200": 1.6,
        "at100": 2,
        "at0": 5,
        "unit": "mg/dL",
        "analyte": "creatinine"
      },
      {
        "name": "Glucosa",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 180,
        "at200": 240,
        "at100": 250,
        "at0": 300,
        "unit": ""
      },
      {
        "name": "Bilirrubina total",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 1.4,
        "at200": 2,
        "at100": 3,
        "at0": 5,
        "unit": "mg/dL",
        "analyte": "bilirubin"
      },
      {
        "name": "Alanina aminotransferasa (ALT)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 60,
        "at200": 100,
        "at100": 200,
        "at0": 800,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: pH",
        "labID": "abg",
        "type": "decimal2",
        "result": "",
        "at300": 7.36,
        "at200": 7.3,
        "at100": 7.2,
        "at0": 7.1,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: presión de oxígeno (PaO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 70,
        "at200": 60,
        "at100": 50,
        "at0": 40,
        "unit": "mmHg",
        "analyte": "pao2"
      },
      {
        "name": "Gasometría arterial: presión de dióxido de carbono (PaCO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 40,
        "at200": 45,
        "at100": 55,
        "at0": 65,
        "unit": ""
      },
      {
        "name": "Troponinas",
        "labID": "troponins",
        "type": "decimal2",
        "result": "",
        "at300": 0,
        "at200": 0.1,
        "at100": 0,
        "at0": 0.1,
        "unit": ""
      },
      {
        "name": "Razón internacional normalizada (INR)",
        "labID": "dicpanel",
        "type": "decimal1",
        "result": "",
        "at300": 0.8,
        "at200": 1.5,
        "at100": 3,
        "at0": 4,
        "unit": ""
      },
      {
        "name": "Tiempo parcial de tromboplastina (TPT)",
        "labID": "dicpanel",
        "type": "",
        "result": "",
        "at300": 23,
        "at200": 30,
        "at100": 40,
        "at0": 60,
        "unit": ""
      },
      {
        "name": "Panel de coagulación intravascular diseminada (CID)",
        "labID": "dicpanel",
        "type": "string",
        "result": "",
        "at300": "Negativo",
        "at200": "",
        "at100": "Positivo",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Radiografía de tórax",
        "labID": "chestxray",
        "type": "string",
        "result": "",
        "at300": "Consolidación densa del lóbulo inferior derecho y pulmones hiperinsuflados. Derrame pleural derecho.",
        "at200": "",
        "at100": "Infiltrados algodonosos difusos bilaterales con consolidación densa del lóbulo inferior derecho. Derrame pleural derecho.",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Electrocardiograma (ECG)",
        "labID": "ekg",
        "type": "string",
        "result": "",
        "at300": "Taquicardia",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía de tórax",
        "labID": "chestct",
        "type": "string",
        "result": "",
        "at300": "Consolidación densa del lóbulo inferior derecho y cambios compatibles con enfisema. Realce de la envoltura del derrame pleural derecho.",
        "at200": "",
        "at100": "Opacidades difusas bilaterales en vidrio esmerilado con consolidación densa del lóbulo inferior derecho. Realce de la envoltura del derrame pleural derecho.",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía abdominal",
        "labID": "abdominalct",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Ecocardiograma",
        "labID": "echocardiogram",
        "type": "string",
        "result": "Ventrículo izquierdo hiperdinámico con signos de hipertensión pulmonar.",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      }
    ],
    "treatments": [
      {
        "id": "id (do not edit)",
        "value": "value",
        "valueBelow200": "value below 200",
        "valueBelow100": "value below 100",
        "below300": {
          "response": "Comentario para salud inferior a 300",
          "score": "score below 300",
          "image": "image below 300",
          "quiz": "Quiz ID below 300"
        },
        "below200": {
          "response": "Comentario para salud inferior a 200",
          "score": "score below 200",
          "quiz": "Quiz ID below 200"
        },
        "below100": {
          "response": "Comentario para salud inferior a 100",
          "score": "score below 100",
          "image": "image below 100"
        }
      },
      {
        "id": "d5halfnormalsaline500cc",
        "value": 0.25,
        "valueBelow200": 0,
        "valueBelow100": 0,
        "below300": {
          "response": "Los líquidos hipotónicos no serán de utilidad para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ivnormalsaline500ml",
        "value": 0.75,
        "valueBelow200": 0.75,
        "valueBelow100": 0.5
      },
      {
        "id": "ivnormalsaline1000ml",
        "value": 1.25,
        "valueBelow200": 1.25,
        "valueBelow100": 0.75,
        "below300": {
          "response": "¡Bien! La carga inicial de líquidos ante hipoperfusión tisular por sepsis es de 1000 mL o más de cristaloides, hasta alcanzar un mínimo de 30 mL/kg durante las primeras tres horas. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "cefazolin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La cobertura de la cefazolina es demasiado limitada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ceftriaxone",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La cobertura de la ceftriaxona es demasiado limitada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "cefepime",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Es una buena elección, pero no como único antibiótico; considere añadir otros para ampliar la cobertura."
        }
      },
      {
        "id": "vancomycin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Es una buena elección, pero no como único antibiótico; considere añadir otros para ampliar la cobertura."
        }
      },
      {
        "id": "meropenem",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "zosyn",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "levofloxacin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La cobertura de la levofloxacina es demasiado limitada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "norepinephrine",
        "value": 0,
        "valueBelow200": 0.5,
        "valueBelow100": 0.5,
        "below300": {
          "response": "El paciente no necesitaba vasopresores en este momento. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        },
        "below200": {
          "response": "¡Bien! La noradrenalina es el vasopresor de primera elección para el choque séptico. +100 puntos.",
          "score": 100
        }
      },
      {
        "id": "dopamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dopamina no es el vasopresor de elección para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "dobutamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dobutamina no es el vasopresor ni el inotrópico de elección. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "heparin",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La heparina no está indicada para este paciente y puede causar sangrado. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "aspirin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La aspirina no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "icutransfer",
        "value": 0,
        "valueBelow200": 50,
        "valueBelow100": 50,
        "below300": {
          "response": "La UCI considera que este paciente no necesita traslado y que usted puede tratarlo en hospitalización. En pacientes con sepsis sin signos de sepsis grave ni choque, inicie antibióticos y líquidos con vigilancia estrecha. Considere un nivel de atención superior en cuanto aparezcan signos de sepsis grave.",
          "image": "cat3.png"
        },
        "below200": {
          "response": "¡Bien! Se recomienda pedir ayuda temprana ante un paciente con sepsis. Considere siempre una valoración por UCI en pacientes con sepsis grave. +100 puntos.",
          "score": 100
        },
        "below100": {
          "response": "¡Buena decisión! Este paciente está en choque séptico. Los pacientes en choque deben ingresar a UCI dentro de las primeras seis horas para iniciar tratamiento temprano dirigido por objetivos. Usted también está de turno en UCI, así que seguirá a cargo. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "revascularization",
        "value": -50,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Este paciente no necesitaba revascularización. −250 puntos.",
          "score": -250,
          "image": "cat5.png"
        }
      },
      {
        "id": "interventionalradiology",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La radiología intervencionista no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "giercp",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La colangiopancreatografía retrógrada endoscópica (CPRE) no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "surgery",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Cirugía revisó las imágenes del tórax y considera que usted puede realizar el drenaje."
        }
      },
      {
        "id": "chesttube",
        "value": 2,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "¡Bien! Además de los antibióticos, el empiema y el derrame paraneumónico requieren evacuación para controlar el foco infeccioso. +250 puntos.",
          "score": 250,
          "image": "cat1.png"
        }
      }
    ],
    "quizzes": [
      {
        "id": "healed_quiz",
        "question": "Pregunta de bonificación: al ingreso, el paciente presentaba FC de 120/min, PA de 110/72 mmHg, leucocitos de 13 G/L, FR de 21/min, temperatura de 38,4 °C y lactato normal. Con estos datos y la historia clínica, ¿cómo lo clasificaría?",
        "answers": [
          {
            "text": "Síndrome de respuesta inflamatoria sistémica (SRIS)",
            "response": "Incorrecto. Los signos vitales y los laboratorios cumplían criterios de SRIS al ingreso, pero la neumonía y el empiema lo clasifican como sepsis. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Sepsis",
            "response": "Correcto. Tenía SRIS al ingreso y la neumonía con empiema lo clasifica como sepsis. +200 puntos.",
            "score": 200,
            "image": "cat2.png"
          },
          {
            "text": "Sepsis grave",
            "response": "Incorrecto. No presentaba disfunción orgánica al ingreso, por lo que se clasifica como sepsis. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          }
        ]
      }
    ],
    "combos": [
      {
        "ids": [
          "d5halfnormalsaline500cc",
          "ivnormalsaline500ml",
          "ivnormalsaline1000ml"
        ],
        "number": 1,
        "value": 0,
        "below200": "",
        "below100": "",
        "response": "El tratamiento basado en guías aumentó significativamente el volumen de líquidos intravenosos administrados (4,0 frente a 2,5 L), redujo un 25 % el tiempo hasta administrar antibióticos y aumentó un 77 % el uso de vasopresores.",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "cefazolin",
          "ceftriaxone"
        ],
        "number": 1,
        "value": 0,
        "below200": "",
        "below100": "",
        "response": "Recuerde que, ante una presunta neumonía asociada a la atención sanitaria, los antibióticos deben cubrir SARM, Pseudomonas y otros microorganismos resistentes.",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "vancomycin",
          "meropenem"
        ],
        "number": 2,
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "¡Bien! Ante una presunta neumonía asociada a la atención sanitaria, los antibióticos deben cubrir SARM, Pseudomonas y otros microorganismos resistentes. +100 puntos.",
        "score": 100,
        "image": "cat2.png"
      },
      {
        "ids": [
          "piperacillin/tazobactam",
          "meropenem"
        ],
        "number": 2,
        "value": 0,
        "below200": "",
        "below100": "",
        "response": "Combinar piperacilina/tazobactam (Zosyn) y meropenem no aporta mucho beneficio adicional para este paciente. −50 puntos.",
        "score": -50,
        "image": "cat4.png"
      },
      {
        "ids": [
          "vancomycin",
          "piperacillin/tazobactam"
        ],
        "number": 2,
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "¡Bien! Ante una presunta neumonía asociada a la atención sanitaria, los antibióticos deben cubrir SARM, Pseudomonas y otros microorganismos resistentes. +100 puntos.",
        "score": 100,
        "image": "cat2.png"
      },
      {
        "ids": [
          "Cefepime",
          " Vancomycin"
        ],
        "number": 2,
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "¡Bien! Ante una presunta neumonía asociada a la atención sanitaria, los antibióticos deben cubrir SARM, Pseudomonas y otros microorganismos resistentes. +100 puntos.",
        "score": 100,
        "image": "cat2.png"
      },
      {
        "ids": [
          "chesttube",
          "Cefepime",
          "vancomycin",
          "ivnormalsaline500ml",
          "ivnormalsaline1000ml"
        ],
        "number": 4,
        "value": 7,
        "below200": "",
        "below100": "",
        "response": "¡Excelente!",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "chesttube",
          "vancomycin",
          "ivnormalsaline500ml",
          "ivnormalsaline1000ml"
        ],
        "number": 3,
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "Recuerde que, ante una presunta neumonía asociada a la atención sanitaria, los antibióticos deben cubrir SARM, Pseudomonas y otros microorganismos resistentes.",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "chesttube",
          "vancomycin",
          "piperacillin/tazobactam",
          "ivnormalsaline500ml",
          "ivnormalsaline1000ml"
        ],
        "number": 4,
        "value": 7,
        "below200": "",
        "below100": "",
        "response": "¡Excelente!",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "chesttube",
          "vancomycin",
          "meropenem",
          "ivnormalsaline500ml",
          "ivnormalsaline1000ml"
        ],
        "number": 4,
        "value": 7,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "vancomycin",
          "meropenem",
          "levofloxacin"
        ],
        "number": 3,
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "vancomycin",
          "piperacillin/tazobactam",
          "levofloxacin"
        ],
        "number": 3,
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "vancomycin",
          "meropenem",
          "piperacillin/tazobactam",
          "levofloxacin"
        ],
        "number": 4,
        "value": 0,
        "below200": "",
        "below100": "",
        "response": "Combinar piperacilina/tazobactam (Zosyn) y meropenem no aporta mucho beneficio adicional para este paciente. −50 puntos.",
        "score": -50,
        "image": "cat4.png"
      },
      {
        "ids": [
          "norepinephrine",
          "dobutamine"
        ],
        "number": 2,
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      }
    ],
    "scoreContext": {
      "supplementalOxygen": false,
      "fio2": 0.21,
      "respiratorySupport": false,
      "assumedAir": true
    }
  },
  {
    "name": "Ann",
    "gender": "Female",
    "health": 160,
    "healthRate": 2,
    "picture": "ann_n.png",
    "death_picture": "ann_d.png",
    "healed_picture": "ann_h.png",
    "selected_picture": "ann_s.png",
    "healed_tip": {
      "response": "¡Ann se recuperó! +500 puntos. Recuerde: los pacientes con sepsis grave o choque deben recibir antibióticos durante la primera hora desde su reconocimiento. El uso temprano del antibiótico adecuado, como meropenem ante microorganismos productores de betalactamasas de espectro extendido (BLEE), salva vidas.",
      "score": 500,
      "image": "cat1.png"
    },
    "death_tip": {
      "response": "Ann falleció. −1000 puntos. Los pacientes con sepsis grave o choque deben recibir antibióticos durante la primera hora desde su reconocimiento. Reevalúe los antibióticos si la paciente no mejora y recuerde solicitar apoyo temprano de la UCI.",
      "score": -1000,
      "image": "cat5.png"
    },
    "history": {
      "Age": 65,
      "Chief Complaint": "Según la hija: «Mi madre está débil y confundida».",
      "History of Present Illness": "La paciente presenta debilidad y confusión desde hace cuatro días, además de aumento de la frecuencia urinaria y ardor al orinar.",
      "Past Medical Illness": "Diabetes, demencia, accidente cerebrovascular, insuficiencia cardíaca, infecciones urinarias recurrentes y hospitalización hace dos meses para tratamiento con ceftriaxona."
    },
    "vitals": [
      {
        "name": "SBP",
        "at300": 118,
        "at200": 105,
        "at100": 90,
        "at0": 60,
        "type": "integer"
      },
      {
        "name": "DBP",
        "at300": 80,
        "at200": 60,
        "at100": 40,
        "at0": 30,
        "type": "integer"
      },
      {
        "name": "HR",
        "at300": 90,
        "at200": 125,
        "at100": 140,
        "at0": 160,
        "type": "integer"
      },
      {
        "name": "Temp",
        "at300": 38.3,
        "at200": 38.8,
        "at100": 38.9,
        "at0": 40.5,
        "type": "decimal1"
      },
      {
        "name": "RR",
        "at300": 18,
        "at200": 24,
        "at100": 28,
        "at0": 40,
        "type": "integer"
      },
      {
        "name": "SpO2",
        "at300": 97,
        "at200": 93,
        "at100": 90,
        "at0": 85,
        "type": "integer"
      },
      {
        "name": "Urine Out",
        "at300": 0.5,
        "at200": 0.4,
        "at100": 0.3,
        "at0": 0.2,
        "type": "decimal1"
      },
      {
        "name": "GCS",
        "at300": 15,
        "at200": 14,
        "at100": 13,
        "at0": 3,
        "type": "integer"
      },
      {
        "name": "Weight",
        "at300": 65,
        "at200": 65,
        "at100": 65,
        "at0": 65,
        "type": "integer"
      }
    ],
    "tests": [
      {
        "name": "General",
        "labID": "physicalexam",
        "type": "string",
        "result": "Confusa y orientada únicamente en persona. Debilidad del lado derecho y dolor a la palpación del ángulo costovertebral derecho.",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Hemocultivos",
        "labID": "bloodcultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "Obtener hemocultivos antes de administrar antibióticos aumenta su rendimiento diagnóstico. Continúe el manejo mientras se procesan. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Urocultivo",
        "labID": "urinecultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "Revise el urocultivo en 24 horas; por ahora, continúe el tratamiento. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Uroanálisis: densidad urinaria",
        "labID": "ua",
        "type": "decimal3",
        "result": "",
        "at300": 1.001,
        "at200": 1.025,
        "at100": 1.03,
        "at0": 1.035,
        "unit": ""
      },
      {
        "name": "Uroanálisis: leucocitos",
        "labID": "ua",
        "type": "string",
        "result": "Presentes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Uroanálisis: cilindros",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "Presentes",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Lactato",
        "labID": "lactate",
        "type": "decimal1",
        "result": "",
        "at300": 0,
        "at200": 2,
        "at100": 4,
        "at0": 8,
        "unit": ""
      },
      {
        "name": "Hemograma: plaquetas",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 200,
        "at200": 150,
        "at100": 80,
        "at0": 40,
        "unit": "×10^3/μL",
        "analyte": "platelets"
      },
      {
        "name": "Hemograma: recuento de leucocitos",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 12,
        "at200": 14,
        "at100": 16,
        "at0": 18,
        "unit": ""
      },
      {
        "name": "Hemograma: hematocrito",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 35,
        "at200": 30,
        "at100": 25,
        "at0": 20,
        "unit": ""
      },
      {
        "name": "Sodio",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 130,
        "at200": 125,
        "at100": 122,
        "at0": 120,
        "unit": ""
      },
      {
        "name": "Potasio",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 3.5,
        "at200": 4.5,
        "at100": 5,
        "at0": 5.5,
        "unit": ""
      },
      {
        "name": "Cloro",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 100,
        "at200": 106,
        "at100": 100,
        "at0": 106,
        "unit": ""
      },
      {
        "name": "Bicarbonato",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 30,
        "at200": 20,
        "at100": 15,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Nitrógeno ureico en sangre (BUN)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 20,
        "at200": 30,
        "at100": 40,
        "at0": 50,
        "unit": ""
      },
      {
        "name": "Creatinina",
        "labID": "cmp",
        "type": "decimal2",
        "result": "",
        "at300": 1.2,
        "at200": 1.4,
        "at100": 2,
        "at0": 8,
        "unit": "mg/dL",
        "analyte": "creatinine"
      },
      {
        "name": "Glucosa",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 100,
        "at200": 250,
        "at100": 60,
        "at0": 40,
        "unit": ""
      },
      {
        "name": "Bilirrubina total",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 0.5,
        "at200": 1.4,
        "at100": 2,
        "at0": 4,
        "unit": "mg/dL",
        "analyte": "bilirubin"
      },
      {
        "name": "Alanina aminotransferasa (ALT)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 30,
        "at200": 60,
        "at100": 200,
        "at0": 800,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: pH",
        "labID": "abg",
        "type": "decimal2",
        "result": "",
        "at300": 7.44,
        "at200": 7.36,
        "at100": 7.3,
        "at0": 7,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: presión de oxígeno (PaO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 100,
        "at200": 70,
        "at100": 60,
        "at0": 50,
        "unit": "mmHg",
        "analyte": "pao2"
      },
      {
        "name": "Gasometría arterial: presión de dióxido de carbono (PaCO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 45,
        "at200": 35,
        "at100": 30,
        "at0": 20,
        "unit": ""
      },
      {
        "name": "Troponinas",
        "labID": "troponins",
        "type": "decimal2",
        "result": "",
        "at300": 0,
        "at200": 0.1,
        "at100": 0,
        "at0": 0.1,
        "unit": ""
      },
      {
        "name": "Razón internacional normalizada (INR)",
        "labID": "dicpanel",
        "type": "decimal1",
        "result": "",
        "at300": 0.8,
        "at200": 1.5,
        "at100": 4,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Tiempo parcial de tromboplastina (TPT)",
        "labID": "dicpanel",
        "type": "",
        "result": "",
        "at300": 23,
        "at200": 36,
        "at100": 40,
        "at0": 60,
        "unit": ""
      },
      {
        "name": "Panel de coagulación intravascular diseminada (CID)",
        "labID": "dicpanel",
        "type": "string",
        "result": "Negativo",
        "at300": "",
        "at200": "",
        "at100": "Positivo",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Radiografía de tórax",
        "labID": "chestxray",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "Edema pulmonar leve",
        "at100": "Edema pulmonar moderado",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Electrocardiograma (ECG)",
        "labID": "ekg",
        "type": "string",
        "result": "Ondas Q en las derivaciones inferiores",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía de tórax",
        "labID": "chestct",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "Edema pulmonar leve",
        "at100": "Edema pulmonar moderado",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía abdominal",
        "labID": "abdominalct",
        "type": "string",
        "result": "Leve aumento de la densidad de la grasa perirrenal derecha",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Ecocardiograma",
        "labID": "echocardiogram",
        "type": "string",
        "result": "45–55 %",
        "at300": "",
        "at200": "35–45 %",
        "at100": "25–35 %",
        "at0": "",
        "unit": ""
      }
    ],
    "treatments": [
      {
        "id": "d5halfnormalsaline500cc",
        "value": 0.25,
        "valueBelow200": 0,
        "valueBelow100": 0,
        "below300": {
          "response": "Administre cargas de 1000 mL de solución salina normal o lactato de Ringer durante 30 minutos. Use volúmenes mayores y una administración más rápida. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ivnormalsaline500ml",
        "value": 0.75,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "ivnormalsaline1000ml",
        "value": 1.25,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "¡Bien! La carga inicial de líquidos en pacientes con hipoperfusión tisular por sepsis es de 1000 mL o más de cristaloides, hasta alcanzar un mínimo de 30 mL/kg durante las primeras tres horas. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "cefazolin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La cobertura de la cefazolina es demasiado limitada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ceftriaxone",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "cefepime",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "vancomycin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Es razonable pensar en microorganismos atípicos ante infecciones recurrentes, pero sigue siendo más probable una infección por gramnegativos. −50 puntos.",
          "score": -50,
          "image": "cat3.png"
        }
      },
      {
        "id": "meropenem",
        "value": 3,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "¡Bien! Las infecciones recurrentes y los tratamientos antibióticos pueden favorecer microorganismos resistentes, como los productores de BLEE, para los cuales meropenem es una mejor opción. +100 puntos.",
          "score": 100,
          "image": "cat2.png",
          "quiz": "mero_quiz"
        }
      },
      {
        "id": "zosyn",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "levofloxacin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "norepinephrine",
        "value": 0,
        "valueBelow200": 0.5,
        "valueBelow100": 0.5,
        "below300": {
          "response": "El paciente no necesitaba vasopresores en este momento. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        },
        "below200": {
          "response": "¡Bien! La noradrenalina es el vasopresor de primera elección para el choque séptico. +100 puntos.",
          "score": 100
        }
      },
      {
        "id": "dopamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dopamina no es el vasopresor de elección para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "dobutamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dobutamina no es el vasopresor de elección. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "heparin",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La heparina no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "aspirin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La aspirina no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "icutransfer",
        "value": 0,
        "valueBelow200": 50,
        "valueBelow100": 50,
        "below300": {
          "response": "La UCI considera que este paciente no necesita traslado y que usted puede tratarlo en hospitalización. En pacientes con sepsis sin signos de sepsis grave ni choque, inicie antibióticos y líquidos con vigilancia estrecha. Considere un nivel de atención superior en cuanto aparezcan signos de sepsis grave."
        },
        "below200": {
          "response": "¡Bien! Se recomienda pedir ayuda temprana ante un paciente con sepsis. Considere siempre una valoración por UCI en pacientes con sepsis grave. +100 puntos.",
          "score": 100
        },
        "below100": {
          "response": "¡Buena decisión! Este paciente está en choque séptico. Los pacientes en choque deben ingresar a UCI dentro de las primeras seis horas. Usted también está de turno en UCI, así que seguirá a cargo. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "revascularization",
        "value": -50,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Esta paciente no necesita revascularización. −250 puntos.",
          "score": -250,
          "image": "cat5.png"
        }
      },
      {
        "id": "interventionalradiology",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La radiología intervencionista no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "giercp",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La colangiopancreatografía retrógrada endoscópica (CPRE) no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "surgery",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La cirugía no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "chesttube",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "El tubo de tórax no está indicado para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      }
    ],
    "quizzes": [
      {
        "id": "healed_quiz",
        "question": "Pregunta de bonificación: al ingreso, la paciente presentaba FC de 130/min, PA de 100/50 mmHg, leucocitos de 16 G/L, FR de 26/min y temperatura de 38,7 °C. Con estos datos y sus antecedentes de confusión, ¿cómo la clasificaría?",
        "answers": [
          {
            "text": "Síndrome de respuesta inflamatoria sistémica (SRIS)",
            "response": "Incorrecto. El lactato elevado, el deterioro renal y la alteración del estado mental indican disfunción orgánica, por lo que corresponde a sepsis grave. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Sepsis",
            "response": "Incorrecto. El lactato elevado, el deterioro renal y la alteración del estado mental indican disfunción orgánica, por lo que corresponde a sepsis grave. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Sepsis grave",
            "response": "¡Bien! El lactato elevado y la confusión superior a su estado basal indican disfunción orgánica y permiten clasificarla como sepsis grave. +200 puntos.",
            "score": 200,
            "image": "cat2.png"
          }
        ]
      },
      {
        "id": "mero_quiz",
        "question": "Pregunta de bonificación: ¿qué parámetro describe mejor la definición de sepsis grave?",
        "answers": [
          {
            "text": "Hipotensión",
            "response": "Incorrecto. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Diuresis menor de 0,5 mL/kg durante una hora",
            "response": "Incorrecto. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Cambio del estado mental",
            "response": "Incorrecto. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Todas las anteriores forman parte de la definición de sepsis grave",
            "response": "Correcto. +200 puntos.",
            "score": 200,
            "image": "cat2.png"
          },
          {
            "text": "Ninguna de las anteriores"
          }
        ]
      }
    ],
    "combos": [
      {
        "ids": [
          "meropenem",
          "ivnormalsaline1000ml"
        ],
        "number": 2,
        "value": 7,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "meropenem",
          "ivnormalsaline500ml"
        ],
        "number": 2,
        "value": 4,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "levofloxacin",
          "zosyn",
          "cefepime",
          "ceftriaxone",
          "cefazolin"
        ],
        "number": 1,
        "value": 0,
        "below200": "",
        "below100": "",
        "response": "Las infecciones recurrentes y los tratamientos antibióticos pueden favorecer microorganismos resistentes, como los productores de BLEE.",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "norepinephrine",
          "dobutamine"
        ],
        "number": 2,
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      }
    ],
    "scoreContext": {
      "supplementalOxygen": false,
      "fio2": 0.21,
      "respiratorySupport": false,
      "assumedAir": true
    }
  },
  {
    "name": "Lisa",
    "gender": "Female",
    "health": 250,
    "healthRate": 2,
    "picture": "lisa_n.png",
    "death_picture": "lisa_d.png",
    "healed_picture": "lisa_h.png",
    "selected_picture": "lisa_s.png",
    "healed_tip": {
      "response": "¡Lisa se recuperó! +500 puntos. Los estados de bajo gasto cardíaco suelen acompañarse de presión venosa central elevada y signos de hipoperfusión, como extremidades frías.",
      "score": 500,
      "image": "cat1.png"
    },
    "death_tip": {
      "response": "Lisa falleció. −1000 puntos. Recuerde: no todas las personas con SRIS tienen sepsis. Además, solicite apoyo temprano de la UCI cuando el paciente evolucione desfavorablemente.",
      "score": -1000,
      "image": "cat5.png"
    },
    "history": {
      "Age": 54,
      "Chief Complaint": "«Me duele el pecho».",
      "History of Present Illness": "Dolor torácico de inicio intermitente, dificultad respiratoria y sudoración desde hace unas seis horas, con empeoramiento hace 45 minutos. La paciente no había presentado estos síntomas previamente y se encontraba bien.",
      "Past Medical Illness": "Hipertensión, hiperlipidemia y diabetes tipo 2."
    },
    "vitals": [
      {
        "name": "SBP",
        "at300": 110,
        "at200": 105,
        "at100": 80,
        "at0": 60,
        "type": "integer"
      },
      {
        "name": "DBP",
        "at300": 70,
        "at200": 50,
        "at100": 60,
        "at0": 30,
        "type": "integer"
      },
      {
        "name": "HR",
        "at300": 80,
        "at200": 70,
        "at100": 60,
        "at0": 40,
        "type": "integer"
      },
      {
        "name": "Temp",
        "at300": 36.8,
        "at200": 37.3,
        "at100": 36.8,
        "at0": 37.3,
        "type": "decimal1"
      },
      {
        "name": "RR",
        "at300": 18,
        "at200": 24,
        "at100": 28,
        "at0": 40,
        "type": "integer"
      },
      {
        "name": "SpO2",
        "at300": 97,
        "at200": 93,
        "at100": 90,
        "at0": 85,
        "type": "integer"
      },
      {
        "name": "Urine Out",
        "at300": 0.5,
        "at200": 0.5,
        "at100": 0.3,
        "at0": 0.2,
        "type": "decimal1"
      },
      {
        "name": "GCS",
        "at300": 15,
        "at200": 15,
        "at100": 10,
        "at0": 3,
        "type": "integer"
      },
      {
        "name": "Weight",
        "at300": 54,
        "at200": 54,
        "at100": 54,
        "at0": 54,
        "type": "integer"
      }
    ],
    "tests": [
      {
        "name": "General",
        "labID": "physicalexam",
        "type": "string",
        "result": "Al ingreso: temperatura de 37,3 °C, pulso de 58/min, frecuencia respiratoria de 18/min y presión arterial de 98/58 mmHg. Se observa agitada e incómoda. Bradicardia sin soplos ni ritmo de galope. Presión venosa yugular de 11 cm. El dolor no se reproduce a la palpación. Pulmones sin hallazgos. Examen abdominal normal. Extremidades frías con edema leve.",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Hemocultivos",
        "labID": "bloodcultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Urocultivo",
        "labID": "urinecultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Uroanálisis: densidad urinaria",
        "labID": "ua",
        "type": "decimal3",
        "result": "",
        "at300": 1.01,
        "at200": 1.03,
        "at100": 1.01,
        "at0": 1.03,
        "unit": ""
      },
      {
        "name": "Uroanálisis: leucocitos",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Uroanálisis: cilindros",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Lactato",
        "labID": "lactate",
        "type": "decimal1",
        "result": "",
        "at300": 0,
        "at200": 2,
        "at100": 4,
        "at0": 8,
        "unit": ""
      },
      {
        "name": "Hemograma: plaquetas",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 200,
        "at200": 350,
        "at100": 250,
        "at0": 300,
        "unit": "×10^3/μL",
        "analyte": "platelets"
      },
      {
        "name": "Hemograma: recuento de leucocitos",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 6,
        "at200": 10,
        "at100": 8,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Hemograma: hematocrito",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 40,
        "at200": 45,
        "at100": 40,
        "at0": 45,
        "unit": ""
      },
      {
        "name": "Sodio",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 135,
        "at200": 145,
        "at100": 138,
        "at0": 142,
        "unit": ""
      },
      {
        "name": "Potasio",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 4,
        "at200": 5,
        "at100": 4,
        "at0": 5,
        "unit": ""
      },
      {
        "name": "Cloro",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 100,
        "at200": 106,
        "at100": 100,
        "at0": 106,
        "unit": ""
      },
      {
        "name": "Bicarbonato",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 30,
        "at200": 20,
        "at100": 15,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Nitrógeno ureico en sangre (BUN)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 15,
        "at200": 25,
        "at100": 30,
        "at0": 50,
        "unit": ""
      },
      {
        "name": "Creatinina",
        "labID": "cmp",
        "type": "decimal2",
        "result": "",
        "at300": 1.2,
        "at200": 1.4,
        "at100": 2,
        "at0": 8,
        "unit": "mg/dL",
        "analyte": "creatinine"
      },
      {
        "name": "Glucosa",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 100,
        "at200": 180,
        "at100": 220,
        "at0": 250,
        "unit": ""
      },
      {
        "name": "Bilirrubina total",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 0.5,
        "at200": 0.1,
        "at100": 0.4,
        "at0": 0.9,
        "unit": "mg/dL",
        "analyte": "bilirubin"
      },
      {
        "name": "Alanina aminotransferasa (ALT)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 50,
        "at200": 100,
        "at100": 150,
        "at0": 200,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: pH",
        "labID": "abg",
        "type": "decimal2",
        "result": "",
        "at300": 7.4,
        "at200": 7.36,
        "at100": 7.3,
        "at0": 7,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: presión de oxígeno (PaO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 95,
        "at200": 70,
        "at100": 60,
        "at0": 50,
        "unit": "mmHg",
        "analyte": "pao2"
      },
      {
        "name": "Gasometría arterial: presión de dióxido de carbono (PaCO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 40,
        "at200": 35,
        "at100": 30,
        "at0": 20,
        "unit": ""
      },
      {
        "name": "Troponinas",
        "labID": "troponins",
        "type": "decimal2",
        "result": "",
        "at300": 0,
        "at200": 1,
        "at100": 10,
        "at0": 50,
        "unit": ""
      },
      {
        "name": "Razón internacional normalizada (INR)",
        "labID": "dicpanel",
        "type": "decimal1",
        "result": "",
        "at300": 0.8,
        "at200": 1.5,
        "at100": 1,
        "at0": 1.3,
        "unit": ""
      },
      {
        "name": "Tiempo parcial de tromboplastina (TPT)",
        "labID": "dicpanel",
        "type": "",
        "result": "",
        "at300": 23,
        "at200": 36,
        "at100": 25,
        "at0": 24,
        "unit": ""
      },
      {
        "name": "Panel de coagulación intravascular diseminada (CID)",
        "labID": "dicpanel",
        "type": "string",
        "result": "Negativo",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Radiografía de tórax",
        "labID": "chestxray",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Electrocardiograma (ECG)",
        "labID": "ekg",
        "type": "string",
        "result": "",
        "at300": "Bradicardia sinusal. Elevación del ST de 1 mm en II, III y aVF.",
        "at200": "Bradicardia sinusal. Elevación del ST de 2 mm en II, III y aVF, con depresión del ST de 1 mm en I, aVL y aVR.",
        "at100": "Bloqueo auriculoventricular de segundo grado, Mobitz II",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía de tórax",
        "labID": "chestct",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía abdominal",
        "labID": "abdominalct",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "Lisa no presenta síntomas que sugieran un origen abdominal; considere otros diagnósticos. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "name": "Ecocardiograma",
        "labID": "echocardiogram",
        "type": "string",
        "result": "",
        "at300": "Alteración de la movilidad de la pared del ventrículo derecho.",
        "at200": "Alteración de la movilidad de la pared del ventrículo derecho. Dilatación de la aurícula izquierda.",
        "at100": "Acinesia de la pared del ventrículo derecho. Dilatación de la aurícula izquierda.",
        "at0": "",
        "unit": ""
      }
    ],
    "treatments": [
      {
        "id": "d5halfnormalsaline500cc",
        "value": 0.25,
        "valueBelow200": 0,
        "valueBelow100": 0,
        "below300": {
          "response": "Administre cargas de 1000 mL de solución salina normal o lactato de Ringer durante 30 minutos. Use volúmenes mayores y una administración más rápida. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ivnormalsaline500ml",
        "value": 0,
        "valueBelow200": 0.75,
        "valueBelow100": 1.25
      },
      {
        "id": "ivnormalsaline1000ml",
        "value": 0,
        "valueBelow200": 1.25,
        "valueBelow100": 2.25
      },
      {
        "id": "cefazolin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "ceftriaxone",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "cefepime",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "vancomycin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "meropenem",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "zosyn",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "levofloxacin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "norepinephrine",
        "value": 0,
        "valueBelow200": 0,
        "valueBelow100": 0
      },
      {
        "id": "dopamine",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "dobutamine",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "heparin",
        "value": 0,
        "valueBelow200": 0.5,
        "valueBelow100": ""
      },
      {
        "id": "aspirin",
        "value": 0,
        "valueBelow200": 0.5,
        "valueBelow100": ""
      },
      {
        "id": "icutransfer",
        "value": 0,
        "valueBelow200": 50,
        "valueBelow100": 50,
        "below300": {
          "response": "La UCI considera que el paciente todavía no necesita traslado y que usted puede continuar el tratamiento."
        },
        "below200": {
          "response": "¡Bien! Se recomienda pedir ayuda temprana para esta paciente. Necesitará al menos 24 horas de vigilancia en UCI. +50 puntos.",
          "score": 50
        }
      },
      {
        "id": "revascularization",
        "value": 300,
        "valueBelow200": "",
        "valueBelow100": 0,
        "below300": {
          "response": "¡Buena decisión! Esta paciente necesitaba revascularización. +250 puntos.",
          "quiz": "revasc_quiz"
        },
        "below100": {
          "response": "La paciente está demasiado inestable para una revascularización. Primero debe reanimarla antes de intentarlo nuevamente."
        }
      },
      {
        "id": "interventionalradiology",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La radiología intervencionista no está indicada para esta paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "giercp",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La CPRE no está indicada para esta paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "surgery",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "El tiempo desde el ingreso hasta la revascularización debe ser inferior a 90 minutos. Debe activar el código de infarto con elevación del ST. −50 puntos.",
          "score": -50,
          "image": "cat3.png"
        }
      },
      {
        "id": "chesttube",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La paciente no necesita un tubo de tórax y este procedimiento puede hacerle daño; considere otros diagnósticos. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      }
    ],
    "quizzes": [
      {
        "id": "revasc_quiz",
        "question": "Pregunta de bonificación: al ingreso, la paciente presentaba FC de 95/min, PA de 100/60 mmHg, leucocitos de 8 G/L, FR de 22/min, temperatura de 37,0 °C y lactato normal. Con estos datos y la historia clínica, ¿cómo la clasificaría?",
        "answers": [
          {
            "text": "Síndrome de respuesta inflamatoria sistémica (SRIS)",
            "response": "¡Bien! Una FC mayor de 90/min y una FR mayor de 20/min cumplen criterios de SRIS, pero la paciente no tiene una infección. +200 puntos.",
            "score": 200,
            "image": "cat2.png"
          },
          {
            "text": "Sepsis",
            "response": "Reconsidere su respuesta. Aunque los signos vitales cumplen criterios de SRIS, no hay una infección que permita clasificarla como sepsis o sepsis grave. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Sepsis grave",
            "response": "Reconsidere su respuesta. Aunque los signos vitales cumplen criterios de SRIS, no hay una infección que permita clasificarla como sepsis o sepsis grave. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          }
        ]
      }
    ],
    "combos": [
      {
        "ids": [
          "ivnormalsaline1000ml",
          "ivnormalsaline500ml",
          "dobutamine"
        ],
        "number": 2,
        "value": 0,
        "below200": "",
        "below100": 2,
        "response": "",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "dobutamine"
        ],
        "number": 1,
        "value": 0,
        "below200": 0.5,
        "below100": 1,
        "response": "Puede iniciarse una infusión de dobutamina o añadirse a un vasopresor ante disfunción miocárdica —presiones de llenado cardíaco elevadas y bajo gasto— o signos persistentes de hipoperfusión, incluso después de alcanzar un volumen intravascular y una presión arterial media adecuados (recomendación fuerte, grado 1C). +100 puntos.",
        "score": 100,
        "image": "cat2.png"
      }
    ],
    "scoreContext": {
      "supplementalOxygen": false,
      "fio2": 0.21,
      "respiratorySupport": false,
      "assumedAir": true
    }
  },
  {
    "name": "Ron",
    "gender": "Male",
    "health": 160,
    "healthRate": 2,
    "picture": "ron_n.png",
    "death_picture": "ron_d.png",
    "healed_picture": "ron_h.png",
    "selected_picture": "ron_s.png",
    "healed_tip": {
      "response": "¡Ron se recuperó! +500 puntos. ¡Felicitaciones! Incluso con el manejo moderno, la mortalidad de la colangitis es del 5–10 %, similar a la del infarto de miocardio.",
      "score": 500,
      "image": "cat1.png"
    },
    "death_tip": {
      "response": "Ron falleció. Recuerde: incluso un tratamiento correcto puede ser ineficaz si no se administra de inmediato. Si el paciente evoluciona mal, solicite apoyo temprano de la UCI. −1000 puntos.",
      "score": -1000,
      "image": "cat5.png"
    },
    "history": {
      "Age": 62,
      "Chief Complaint": "«Me duele mucho el lado derecho del abdomen».",
      "History of Present Illness": "Fiebre de reciente aparición, ictericia progresiva y dolor abdominal intenso desde ayer.",
      "Past Medical Illness": "Ninguno"
    },
    "vitals": [
      {
        "name": "SBP",
        "at300": 118,
        "at200": 105,
        "at100": 90,
        "at0": 60,
        "type": "integer"
      },
      {
        "name": "DBP",
        "at300": 80,
        "at200": 60,
        "at100": 40,
        "at0": 30,
        "type": "integer"
      },
      {
        "name": "HR",
        "at300": 105,
        "at200": 125,
        "at100": 140,
        "at0": 160,
        "type": "integer"
      },
      {
        "name": "Temp",
        "at300": 38.3,
        "at200": 38.8,
        "at100": 38.3,
        "at0": 38.8,
        "type": "decimal1"
      },
      {
        "name": "RR",
        "at300": 18,
        "at200": 24,
        "at100": 28,
        "at0": 40,
        "type": "integer"
      },
      {
        "name": "SpO2",
        "at300": 97,
        "at200": 93,
        "at100": 90,
        "at0": 85,
        "type": "integer"
      },
      {
        "name": "Urine Out",
        "at300": 0.5,
        "at200": 0.5,
        "at100": 0.25,
        "at0": 0.1,
        "type": "decimal1"
      },
      {
        "name": "GCS",
        "at300": 15,
        "at200": 13,
        "at100": 11,
        "at0": 3,
        "type": "integer"
      },
      {
        "name": "Weight",
        "at300": 85,
        "at200": 85,
        "at100": 85,
        "at0": 85,
        "type": "integer"
      }
    ],
    "tests": [
      {
        "name": "General",
        "labID": "physicalexam",
        "type": "string",
        "result": "Al ingreso: temperatura de 39,3 °C, pulso de 135/min, frecuencia respiratoria de 18/min y PA de 85/48 mmHg. Somnoliento, pero despierta con estímulos. Orientado en persona, pero no en lugar ni tiempo. Sudoroso. Ictericia intensa. Taquicardia, sin otros hallazgos cardíacos. Examen pulmonar normal. Abdomen doloroso, especialmente en el cuadrante superior derecho.",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Hemocultivos",
        "labID": "bloodcultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "Los hemocultivos están en el laboratorio, pero los resultados tardarán; continúe el tratamiento. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Urocultivo",
        "labID": "urinecultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "Obtenga siempre los cultivos antes de administrar antibióticos para optimizar su rendimiento diagnóstico. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Uroanálisis: densidad urinaria",
        "labID": "ua",
        "type": "decimal3",
        "result": "",
        "at300": 1.01,
        "at200": 1.03,
        "at100": 1.01,
        "at0": 1.03,
        "unit": ""
      },
      {
        "name": "Uroanálisis: leucocitos",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Uroanálisis: cilindros",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Lactato",
        "labID": "lactate",
        "type": "decimal1",
        "result": "",
        "at300": 0,
        "at200": 2,
        "at100": 4,
        "at0": 8,
        "unit": "",
        "tip": {
          "response": "¡Bien! Ante la sospecha de sepsis, debe medir el lactato. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Hemograma: plaquetas",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 200,
        "at200": 150,
        "at100": 80,
        "at0": 40,
        "unit": "×10^3/μL",
        "analyte": "platelets"
      },
      {
        "name": "Hemograma: recuento de leucocitos",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 12,
        "at200": 15,
        "at100": 20,
        "at0": 30,
        "unit": ""
      },
      {
        "name": "Hemograma: hematocrito",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 30,
        "at200": 35,
        "at100": 32,
        "at0": 34,
        "unit": ""
      },
      {
        "name": "Sodio",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 145,
        "at200": 135,
        "at100": 142,
        "at0": 138,
        "unit": ""
      },
      {
        "name": "Potasio",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 4,
        "at200": 5,
        "at100": 4,
        "at0": 5,
        "unit": ""
      },
      {
        "name": "Cloro",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 106,
        "at200": 100,
        "at100": 106,
        "at0": 100,
        "unit": ""
      },
      {
        "name": "Bicarbonato",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 30,
        "at200": 20,
        "at100": 15,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Nitrógeno ureico en sangre (BUN)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 15,
        "at200": 25,
        "at100": 30,
        "at0": 50,
        "unit": ""
      },
      {
        "name": "Creatinina",
        "labID": "cmp",
        "type": "decimal2",
        "result": "",
        "at300": 1.2,
        "at200": 1.4,
        "at100": 2,
        "at0": 8,
        "unit": "mg/dL",
        "analyte": "creatinine"
      },
      {
        "name": "Glucosa",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 80,
        "at200": 180,
        "at100": 250,
        "at0": 40,
        "unit": ""
      },
      {
        "name": "Bilirrubina total",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 1.4,
        "at200": 3,
        "at100": 6,
        "at0": 10,
        "unit": "mg/dL",
        "analyte": "bilirubin"
      },
      {
        "name": "Alanina aminotransferasa (ALT)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 60,
        "at200": 100,
        "at100": 200,
        "at0": 800,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: pH",
        "labID": "abg",
        "type": "decimal2",
        "result": "",
        "at300": 7.44,
        "at200": 7.36,
        "at100": 7.3,
        "at0": 7,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: presión de oxígeno (PaO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 95,
        "at200": 70,
        "at100": 60,
        "at0": 50,
        "unit": "mmHg",
        "analyte": "pao2"
      },
      {
        "name": "Gasometría arterial: presión de dióxido de carbono (PaCO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 45,
        "at200": 35,
        "at100": 30,
        "at0": 20,
        "unit": ""
      },
      {
        "name": "Troponinas",
        "labID": "troponins",
        "type": "decimal2",
        "result": "",
        "at300": 0.01,
        "at200": 0.08,
        "at100": 0.02,
        "at0": 0.07,
        "unit": ""
      },
      {
        "name": "Razón internacional normalizada (INR)",
        "labID": "dicpanel",
        "type": "decimal1",
        "result": "",
        "at300": 0.8,
        "at200": 1.5,
        "at100": 5,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Tiempo parcial de tromboplastina (TPT)",
        "labID": "dicpanel",
        "type": "",
        "result": "",
        "at300": 23,
        "at200": 32,
        "at100": 40,
        "at0": 60,
        "unit": ""
      },
      {
        "name": "Panel de coagulación intravascular diseminada (CID)",
        "labID": "dicpanel",
        "type": "string",
        "result": "Negativo",
        "at300": "",
        "at200": "",
        "at100": "Positivo",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Radiografía de tórax",
        "labID": "chestxray",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "Síndrome de dificultad respiratoria aguda (SDRA) leve",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Electrocardiograma (ECG)",
        "labID": "ekg",
        "type": "string",
        "result": "Taquicardia",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía de tórax",
        "labID": "chestct",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "Síndrome de dificultad respiratoria aguda (SDRA) leve",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía abdominal",
        "labID": "abdominalct",
        "type": "string",
        "result": "Dilatación de la vía biliar",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Ecocardiograma",
        "labID": "echocardiogram",
        "type": "string",
        "result": "Ventrículo izquierdo hiperdinámico",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      }
    ],
    "treatments": [
      {
        "id": "d5halfnormalsaline500cc",
        "value": 0.25,
        "valueBelow200": 0,
        "valueBelow100": 0,
        "below300": {
          "response": "Administre cargas de 1000 mL de solución salina normal o lactato de Ringer durante 30 minutos. Use volúmenes mayores y una administración más rápida. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ivnormalsaline500ml",
        "value": 0,
        "valueBelow200": 0.75,
        "valueBelow100": 1.25
      },
      {
        "id": "ivnormalsaline1000ml",
        "value": 0,
        "valueBelow200": 1.25,
        "valueBelow100": 2.25,
        "below300": {
          "response": "¡Bien! La carga inicial de líquidos ante hipoperfusión tisular por sepsis es de 1000 mL o más de cristaloides, hasta alcanzar un mínimo de 30 mL/kg durante las primeras tres horas. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "cefazolin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La cobertura de la cefazolina es demasiado limitada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ceftriaxone",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "cefepime",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "vancomycin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "El tratamiento dirigido a SARM no está indicado para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "meropenem",
        "value": 0,
        "valueBelow200": 2,
        "valueBelow100": "",
        "below300": {
          "response": "¡Bien! El tratamiento antibiótico empírico de las infecciones biliares debe cubrir gramnegativos y anaerobios. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "zosyn",
        "value": 0,
        "valueBelow200": 2,
        "valueBelow100": "",
        "below300": {
          "response": "¡Bien! El tratamiento antibiótico empírico de las infecciones biliares debe cubrir gramnegativos y anaerobios. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "levofloxacin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "norepinephrine",
        "value": 0,
        "valueBelow200": 0.5,
        "valueBelow100": 0.5
      },
      {
        "id": "dopamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dopamina no es el vasopresor de elección para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "dobutamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dobutamina no es el vasopresor ni el inotrópico de elección en este caso. Puede iniciarse su infusión o añadirse a un vasopresor ante disfunción miocárdica —presiones de llenado elevadas y bajo gasto— o signos persistentes de hipoperfusión, incluso después de alcanzar un volumen intravascular y una presión arterial media adecuados (recomendación fuerte, grado 1C). −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "heparin",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La heparina no está indicada para este paciente y puede causar sangrado. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "aspirin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La aspirina no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "icutransfer",
        "value": 0,
        "valueBelow200": 50,
        "valueBelow100": 50,
        "below300": {
          "response": "La UCI considera que este paciente no necesita traslado y que usted puede tratarlo en hospitalización. En pacientes con sepsis sin signos de sepsis grave ni choque, inicie antibióticos y líquidos con vigilancia estrecha. Considere un nivel de atención superior en cuanto aparezcan signos de sepsis grave."
        },
        "below200": {
          "response": "¡Bien! Se recomienda pedir ayuda temprana ante un paciente con sepsis. Considere siempre una valoración por UCI en pacientes con sepsis grave. +100 puntos.",
          "score": 100
        },
        "below100": {
          "response": "¡Buena decisión! Este paciente está en choque séptico. Los pacientes en choque deben ingresar a UCI dentro de las primeras seis horas para iniciar tratamiento temprano dirigido por objetivos. Usted también está de turno en UCI, así que seguirá a cargo. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "revascularization",
        "value": -50,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Esta decisión no es adecuada. Evite administrar tratamientos innecesarios. −250 puntos.",
          "score": -250,
          "image": "cat5.png"
        }
      },
      {
        "id": "interventionalradiology",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "En lugar de un drenaje biliar percutáneo, considere una valoración por gastroenterología. −50 puntos.",
          "score": -50,
          "image": "cat3.png"
        }
      },
      {
        "id": "giercp",
        "value": 300,
        "valueBelow200": "",
        "valueBelow100": 0,
        "below300": {
          "response": "¡Bien! Resolver la obstrucción biliar permitiría controlar el foco de esta infección.",
          "quiz": "giercp_quiz"
        },
        "below100": {
          "response": "El paciente está demasiado inestable para una CPRE. Primero debe reanimarlo antes de intentarlo nuevamente."
        }
      },
      {
        "id": "surgery",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Antes de enviar a este paciente a cirugía, considere si existe una forma menos invasiva de controlar el foco de sepsis. −50 puntos.",
          "score": -50,
          "image": "cat3.png"
        }
      },
      {
        "id": "chesttube",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La paciente no necesita un tubo de tórax y este procedimiento puede hacerle daño; considere otros diagnósticos. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      }
    ],
    "quizzes": [
      {
        "id": "healed_quiz",
        "question": "Pregunta de bonificación: el control del foco puede incluir lo siguiente:",
        "answers": [
          {
            "text": "Drenaje de un absceso o desbridamiento de tejido necrótico infectado",
            "response": "Incorrecto. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Retiro de un dispositivo o catéter potencialmente infectado",
            "response": "Incorrecto. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Procedimiento quirúrgico o de radiología intervencionista, o cultivos de esputo, sangre y orina",
            "response": "Incorrecto. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Todas las anteriores",
            "response": "Correcto. +200 puntos.",
            "score": 200,
            "image": "cat2.png"
          },
          {
            "text": "Ninguna de las anteriores"
          }
        ]
      },
      {
        "id": "giercp_quiz",
        "question": "Pregunta de bonificación: al ingreso, el paciente presentaba FC de 130/min, PA de 100/50 mmHg, leucocitos de 18 G/L, FR de 26/min, temperatura de 38,7 °C y lactato elevado. Según los signos vitales, los laboratorios y la historia clínica, ¿cómo lo clasificaría?",
        "answers": [
          {
            "text": "Síndrome de respuesta inflamatoria sistémica (SRIS)",
            "response": "Incorrecto. El paciente tenía sepsis grave porque la infección había causado disfunción orgánica: somnolencia e insuficiencia renal. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Sepsis",
            "response": "Incorrecto. El paciente tenía sepsis grave porque la infección había causado disfunción orgánica: somnolencia e insuficiencia renal. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Sepsis grave",
            "response": "Correcto. El paciente estaba confuso al ingreso y tenía lesión renal aguda, por lo que cumple criterios de sepsis grave. +200 puntos.",
            "score": 200,
            "image": "cat2.png"
          }
        ]
      }
    ],
    "combos": [
      {
        "ids": [
          "zosyn",
          "meropenem"
        ],
        "number": 1,
        "value": 2,
        "below200": "",
        "below100": "",
        "response": "¡Bien! El tratamiento antibiótico empírico de las infecciones biliares debe cubrir gramnegativos y anaerobios. +200 puntos.",
        "score": 200,
        "image": "cat2.png"
      },
      {
        "ids": [
          "levofloxacin",
          "cefepime",
          "ceftriaxone"
        ],
        "number": 1,
        "value": 0,
        "below200": "",
        "below100": "",
        "response": "Recuerde: el tratamiento antibiótico empírico de las infecciones biliares debe cubrir gramnegativos y anaerobios.",
        "score": 0,
        "image": "cat3.png"
      },
      {
        "ids": [
          "norepinephrine",
          "dobutamine"
        ],
        "number": 2,
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      }
    ],
    "scoreContext": {
      "supplementalOxygen": false,
      "fio2": 0.21,
      "respiratorySupport": false,
      "assumedAir": true
    }
  },
  {
    "name": "Marco",
    "gender": "Male",
    "health": 150,
    "healthRate": 2,
    "picture": "marco_n.png",
    "death_picture": "marco_d.png",
    "healed_picture": "marco_h.png",
    "selected_picture": "marco_s.png",
    "healed_tip": {
      "response": "¡Marco se recuperó! +500 puntos. Recuerde: los pacientes con sepsis grave o choque deben recibir antibióticos durante la primera hora desde su reconocimiento. Al controlar el foco y utilizar antibióticos de amplio espectro, salvó a uno de los pacientes más graves del hospital.",
      "score": 500,
      "image": "cat1.png"
    },
    "death_tip": {
      "response": "Marco falleció. −1000 puntos. Recuerde: los pacientes con sepsis grave o choque deben recibir antibióticos durante la primera hora desde su reconocimiento. Los líquidos y los antibióticos por sí solos no siempre curan la sepsis; el control eficaz del foco es fundamental.",
      "score": -1000,
      "image": "cat5.png"
    },
    "history": {
      "Age": 27,
      "Chief Complaint": "Según la madre: «Tiene fiebre desde hace seis horas».",
      "History of Present Illness": "Leucemia mieloide aguda diagnosticada hace dos semanas. Recibió quimioterapia de inducción en este hospital, iniciada hace una semana y media. El recuento de leucocitos ha descendido durante el tratamiento. Presenta dolor en el sitio del catéter central de inserción periférica (PICC) del brazo derecho.",
      "Past Medical Illness": "Depresión"
    },
    "vitals": [
      {
        "name": "SBP",
        "at300": 118,
        "at200": 105,
        "at100": 90,
        "at0": 60,
        "type": "integer"
      },
      {
        "name": "DBP",
        "at300": 80,
        "at200": 60,
        "at100": 40,
        "at0": 30,
        "type": "integer"
      },
      {
        "name": "HR",
        "at300": 105,
        "at200": 125,
        "at100": 140,
        "at0": 160,
        "type": "integer"
      },
      {
        "name": "Temp",
        "at300": 38.4,
        "at200": 38.7,
        "at100": 38.3,
        "at0": 38.8,
        "type": "decimal1"
      },
      {
        "name": "RR",
        "at300": 18,
        "at200": 24,
        "at100": 28,
        "at0": 40,
        "type": "integer"
      },
      {
        "name": "SpO2",
        "at300": 97,
        "at200": 93,
        "at100": 90,
        "at0": 85,
        "type": "integer"
      },
      {
        "name": "Urine Out",
        "at300": 0.5,
        "at200": 0.4,
        "at100": 0.3,
        "at0": 0.2,
        "type": "decimal1"
      },
      {
        "name": "GCS",
        "at300": 15,
        "at200": 12,
        "at100": 8,
        "at0": 3,
        "type": "integer"
      },
      {
        "name": "Weight",
        "at300": 73,
        "at200": 73,
        "at100": 73,
        "at0": 73,
        "type": "integer"
      }
    ],
    "tests": [
      {
        "name": "General",
        "labID": "physicalexam",
        "type": "string",
        "result": "Al ingreso: temperatura de 39,3 °C, pulso de 112/min, frecuencia respiratoria de 18/min y PA de 108/45 mmHg. Somnoliento, pero despierta con estímulos. En el sitio del PICC del brazo derecho hay eritema, induración y secreción purulenta. Sudoroso. Taquicardia sin otros hallazgos cardíacos. Examen pulmonar y resto de la exploración normales.",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Hemocultivos",
        "labID": "bloodcultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "Obtener hemocultivos antes de administrar antibióticos aumenta su rendimiento diagnóstico. Continúe el manejo mientras se procesan. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Urocultivo",
        "labID": "urinecultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "Revise el urocultivo en 24 horas; por ahora, continúe el tratamiento. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Uroanálisis: densidad urinaria",
        "labID": "ua",
        "type": "decimal3",
        "result": "",
        "at300": 1.01,
        "at200": 1.03,
        "at100": 1.032,
        "at0": 1.035,
        "unit": ""
      },
      {
        "name": "Uroanálisis: leucocitos",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Uroanálisis: cilindros",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Lactato",
        "labID": "lactate",
        "type": "decimal1",
        "result": "",
        "at300": 0,
        "at200": 2,
        "at100": 4,
        "at0": 8,
        "unit": "",
        "tip": {
          "response": "¡Buena decisión! Seguir la evolución del lactato es una parte importante de la reanimación de pacientes con sepsis grave y choque séptico. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Hemograma: plaquetas",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 200,
        "at200": 150,
        "at100": 80,
        "at0": 40,
        "unit": "×10^3/μL",
        "analyte": "platelets"
      },
      {
        "name": "Hemograma: recuento de leucocitos",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 0,
        "at200": 0,
        "at100": 0,
        "at0": 0,
        "unit": ""
      },
      {
        "name": "Hemograma: hematocrito",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 35,
        "at200": 30,
        "at100": 28,
        "at0": 25,
        "unit": ""
      },
      {
        "name": "Sodio",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 138,
        "at200": 142,
        "at100": 138,
        "at0": 142,
        "unit": ""
      },
      {
        "name": "Potasio",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 5,
        "at200": 5.2,
        "at100": 5.5,
        "at0": 6,
        "unit": ""
      },
      {
        "name": "Cloro",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 106,
        "at200": 100,
        "at100": 106,
        "at0": 100,
        "unit": ""
      },
      {
        "name": "Bicarbonato",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 30,
        "at200": 20,
        "at100": 15,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Nitrógeno ureico en sangre (BUN)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 10,
        "at200": 25,
        "at100": 30,
        "at0": 50,
        "unit": ""
      },
      {
        "name": "Creatinina",
        "labID": "cmp",
        "type": "decimal2",
        "result": "",
        "at300": 1.2,
        "at200": 1.4,
        "at100": 3,
        "at0": 6,
        "unit": "mg/dL",
        "analyte": "creatinine"
      },
      {
        "name": "Glucosa",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 180,
        "at200": 250,
        "at100": 60,
        "at0": 40,
        "unit": ""
      },
      {
        "name": "Bilirrubina total",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 1.4,
        "at200": 2,
        "at100": 4,
        "at0": 6,
        "unit": "mg/dL",
        "analyte": "bilirubin"
      },
      {
        "name": "Alanina aminotransferasa (ALT)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 60,
        "at200": 100,
        "at100": 200,
        "at0": 800,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: pH",
        "labID": "abg",
        "type": "decimal2",
        "result": "",
        "at300": 7.44,
        "at200": 7.36,
        "at100": 7.3,
        "at0": 7,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: presión de oxígeno (PaO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 100,
        "at200": 70,
        "at100": 60,
        "at0": 50,
        "unit": "mmHg",
        "analyte": "pao2"
      },
      {
        "name": "Gasometría arterial: presión de dióxido de carbono (PaCO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 45,
        "at200": 35,
        "at100": 30,
        "at0": 20,
        "unit": ""
      },
      {
        "name": "Troponinas",
        "labID": "troponins",
        "type": "decimal2",
        "result": "",
        "at300": 0,
        "at200": 0.1,
        "at100": 0,
        "at0": 0.1,
        "unit": ""
      },
      {
        "name": "Razón internacional normalizada (INR)",
        "labID": "dicpanel",
        "type": "decimal1",
        "result": "",
        "at300": 1.5,
        "at200": 3,
        "at100": 6,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Tiempo parcial de tromboplastina (TPT)",
        "labID": "dicpanel",
        "type": "",
        "result": "",
        "at300": 23,
        "at200": 36,
        "at100": 40,
        "at0": 60,
        "unit": ""
      },
      {
        "name": "Panel de coagulación intravascular diseminada (CID)",
        "labID": "dicpanel",
        "type": "string",
        "result": "Negativo",
        "at300": "",
        "at200": "",
        "at100": "Positivo",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Radiografía de tórax",
        "labID": "chestxray",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "Síndrome de dificultad respiratoria aguda (SDRA) leve",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Electrocardiograma (ECG)",
        "labID": "ekg",
        "type": "string",
        "result": "Taquicardia",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía de tórax",
        "labID": "chestct",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "Síndrome de dificultad respiratoria aguda (SDRA) leve",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía abdominal",
        "labID": "abdominalct",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Ecocardiograma",
        "labID": "echocardiogram",
        "type": "string",
        "result": "Ventrículo izquierdo hiperdinámico",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      }
    ],
    "treatments": [
      {
        "id": "d5halfnormalsaline500cc",
        "value": 0,
        "valueBelow200": 0.25,
        "valueBelow100": 0.25,
        "below300": {
          "response": "Administre cargas de 1000 mL de solución salina normal o lactato de Ringer durante 30 minutos. Use volúmenes mayores y una administración más rápida. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ivnormalsaline500ml",
        "value": 0,
        "valueBelow200": 0.75,
        "valueBelow100": 1.25
      },
      {
        "id": "ivnormalsaline1000ml",
        "value": 0,
        "valueBelow200": 1.25,
        "valueBelow100": 1.25,
        "below300": {
          "response": "¡Bien! La carga inicial de líquidos ante hipoperfusión tisular por sepsis es de 1000 mL o más de cristaloides, hasta alcanzar un mínimo de 30 mL/kg durante las primeras tres horas. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "cefazolin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La cobertura de la cefazolina es demasiado limitada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ceftriaxone",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La ceftriaxona no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "cefepime",
        "value": 1,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "vancomycin",
        "value": 1,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "El paciente tiene signos de infección del catéter, por lo que la vancomicina es una elección adecuada. Recuerde que, en la neutropenia febril, el tratamiento empírico también incluye cefepima o piperacilina/tazobactam (Zosyn)."
        }
      },
      {
        "id": "meropenem",
        "value": 1,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "zosyn",
        "value": 1,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "levofloxacin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "norepinephrine",
        "value": 0,
        "valueBelow200": 0.5,
        "valueBelow100": 0.5
      },
      {
        "id": "dopamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dopamina no es el vasopresor de elección para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "dobutamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dobutamina no es el vasopresor de elección para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "heparin",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La heparina no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "aspirin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La aspirina no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "icutransfer",
        "value": 0,
        "valueBelow200": 50,
        "valueBelow100": 50,
        "below300": {
          "response": "La UCI considera que este paciente no necesita traslado y que usted puede tratarlo en hospitalización. En pacientes con sepsis sin signos de sepsis grave ni choque, inicie antibióticos y líquidos con vigilancia estrecha. Considere un nivel de atención superior en cuanto aparezcan signos de sepsis grave."
        },
        "below200": {
          "response": "¡Bien! Se recomienda pedir ayuda temprana ante un paciente con sepsis. Considere siempre una valoración por UCI en pacientes con sepsis grave. +100 puntos.",
          "score": 100
        },
        "below100": {
          "response": "¡Buena decisión! Este paciente está en choque séptico. Los pacientes en choque deben ingresar a UCI dentro de las primeras seis horas para iniciar tratamiento temprano dirigido por objetivos. Usted también está de turno en UCI, así que seguirá a cargo. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "removecentralline",
        "value": 2,
        "valueBelow200": "",
        "valueBelow100": 1,
        "below300": {
          "response": "¡Bien! Identificó el foco infeccioso. +250 puntos.",
          "score": 250,
          "image": "cat1.png"
        }
      },
      {
        "id": "revascularization",
        "value": -50,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Esta decisión no es adecuada. Evite administrar tratamientos innecesarios. −250 puntos.",
          "score": -250,
          "image": "cat5.png"
        }
      },
      {
        "id": "interventionalradiology",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La radiología intervencionista no está indicada para esta paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "giercp",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La CPRE no está indicada para esta paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "surgery",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La cirugía no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "chesttube",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La paciente no necesita un tubo de tórax y este procedimiento puede hacerle daño; considere otros diagnósticos. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      }
    ],
    "quizzes": [
      {
        "id": "healed_quiz",
        "question": "Pregunta de bonificación: al ingreso, el paciente presentaba FC de 130/min, PA de 95/45 mmHg, leucocitos de 0, FR de 26/min, temperatura de 38,8 °C y lactato de 3. Según la historia clínica, los laboratorios y los signos vitales, ¿cómo lo clasificaría?",
        "answers": [
          {
            "text": "Síndrome de respuesta inflamatoria sistémica (SRIS)",
            "response": "Incorrecto. Recuerde que SRIS más infección corresponde a sepsis, y sepsis más disfunción orgánica corresponde a sepsis grave. La disfunción renal y la alteración del estado mental son signos de daño orgánico. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Sepsis",
            "response": "Incorrecto. Recuerde que SRIS más infección corresponde a sepsis, y sepsis más disfunción orgánica corresponde a sepsis grave. La disfunción renal y la alteración del estado mental son signos de daño orgánico. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Sepsis grave",
            "response": "¡Bien! Al añadir la alteración del estado mental y la insuficiencia renal a la sepsis, el diagnóstico es sepsis grave. +200 puntos.",
            "score": 200,
            "image": "cat2.png"
          }
        ]
      },
      {
        "id": "vanzos_quiz",
        "question": "Pregunta de bonificación: la administración de un antimicrobiano eficaz durante la primera hora desde la documentación de hipotensión se asoció con mayor supervivencia hasta el alta hospitalaria en adultos con choque séptico.",
        "answers": [
          {
            "text": "Verdadero",
            "response": "Correcto. +200 puntos.",
            "score": 200,
            "image": "cat2.png"
          },
          {
            "text": "Falso",
            "response": "Incorrecto. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          }
        ]
      }
    ],
    "combos": [
      {
        "ids": [
          "vancomycin",
          "cepefime",
          "ivnormalsaline1000ml",
          "removecentralline"
        ],
        "number": 4,
        "value": 7,
        "below200": "",
        "below100": 9,
        "response": "¡Excelente! Cubrió todas las posibilidades.",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "vancomycin",
          "piperacillin/tazobactam",
          "ivnormalsaline1000ml",
          "removecentralline"
        ],
        "number": 4,
        "value": 7,
        "below200": "",
        "below100": 9,
        "response": "¡Excelente! Cubrió todas las posibilidades.",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "vancomycin",
          "meropenem",
          "ivnormalsaline1000ml",
          "removecentralline"
        ],
        "number": 4,
        "value": 7,
        "below200": "",
        "below100": 9,
        "response": "",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "vancomycin",
          "ivnormalsaline1000ml",
          "removecentralline"
        ],
        "number": 3,
        "value": 3,
        "below200": "",
        "below100": 8,
        "response": "",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "cefazolin",
          "ceftriaxone",
          "levofloxacin",
          "meropenem"
        ],
        "number": 1,
        "value": 0,
        "below200": "",
        "below100": "",
        "response": "Recuerde considerar una infección por grampositivos, como enterococos o SARM.",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "vancomycin",
          "cefepime"
        ],
        "number": 2,
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "¡Bien! +100 puntos. Ante la sospecha de una infección por grampositivos, debe añadirse vancomicina a la cobertura empírica de la neutropenia febril. Añada cobertura para SARM si sospecha: 1) infección del catéter, 2) mucositis, 3) antecedente reciente de SARM, 4) profilaxis con fluoroquinolonas, 5) infección de piel o tejidos blandos, o 6) hipotensión.",
        "score": 100,
        "image": "cat2.png"
      },
      {
        "ids": [
          "vancomycin",
          "zosyn"
        ],
        "number": 2,
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "¡Bien! +100 puntos. En la neutropenia febril, la cobertura antibiótica incluye cefepima o piperacilina/tazobactam (Zosyn), más vancomicina si se sospecha infección por grampositivos.",
        "score": 100,
        "image": "cat2.png"
      },
      {
        "ids": [
          "vancomycin",
          "cefepime",
          "piperacillin/tazobactam",
          ""
        ],
        "number": 3,
        "value": "",
        "below200": "",
        "below100": "",
        "response": "Añadir piperacilina/tazobactam a cefepima no aporta mucho beneficio adicional en este caso. −100 puntos.",
        "score": -100,
        "image": "cat4.png"
      },
      {
        "ids": [
          "norepinephrine",
          "dobutamine"
        ],
        "number": 2,
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      }
    ],
    "scoreContext": {
      "supplementalOxygen": false,
      "fio2": 0.21,
      "respiratorySupport": false,
      "assumedAir": true
    }
  },
  {
    "name": "Tracee",
    "gender": "Female",
    "health": 250,
    "healthRate": 2,
    "picture": "tracee_n.png",
    "death_picture": "tracee_d.png",
    "healed_picture": "tracee_h.png",
    "selected_picture": "tracee_s.png",
    "healed_tip": {
      "response": "¡Tracee se recuperó! +500 puntos.",
      "score": 500,
      "image": "cat1.png"
    },
    "death_tip": {
      "response": "Tracee falleció. −1000 puntos. Recuerde: no todas las personas con SRIS tienen sepsis. Si el paciente evoluciona desfavorablemente, no demore la solicitud de apoyo a la UCI.",
      "score": -1000,
      "image": "cat5.png"
    },
    "history": {
      "Age": 57,
      "Chief Complaint": "«No puedo respirar».",
      "History of Present Illness": "Dificultad respiratoria desde hace siete días, seguida de tos seca desde hace tres días y, posteriormente, dolor torácico pleurítico leve.",
      "Past Medical Illness": "Antecedente remoto de osteosarcoma tratado con quimioterapia y radioterapia."
    },
    "vitals": [
      {
        "name": "SBP",
        "at300": 110,
        "at200": 105,
        "at100": 90,
        "at0": 60,
        "type": "integer"
      },
      {
        "name": "DBP",
        "at300": 80,
        "at200": 60,
        "at100": 40,
        "at0": 30,
        "type": "integer"
      },
      {
        "name": "HR",
        "at300": 105,
        "at200": 125,
        "at100": 140,
        "at0": 160,
        "type": "integer"
      },
      {
        "name": "Temp",
        "at300": 36,
        "at200": 37,
        "at100": 38.9,
        "at0": 40.5,
        "type": "decimal1"
      },
      {
        "name": "RR",
        "at300": 18,
        "at200": 24,
        "at100": 28,
        "at0": 40,
        "type": "integer"
      },
      {
        "name": "SpO2",
        "at300": 94,
        "at200": 93,
        "at100": 90,
        "at0": 85,
        "type": "integer"
      },
      {
        "name": "Urine Out",
        "at300": 0.5,
        "at200": 0.5,
        "at100": 0.4,
        "at0": 0.2,
        "type": "decimal1"
      },
      {
        "name": "GCS",
        "at300": 15,
        "at200": 15,
        "at100": 8,
        "at0": 3,
        "type": "integer"
      },
      {
        "name": "Weight",
        "at300": 49,
        "at200": 49,
        "at100": 49,
        "at0": 49,
        "type": "integer"
      }
    ],
    "tests": [
      {
        "name": "General",
        "labID": "physicalexam",
        "type": "string",
        "result": "Taquicardia, aspecto enfermo, dificultad respiratoria leve y componente pulmonar del segundo ruido cardíaco (P2) aumentado.",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Hemocultivos",
        "labID": "bloodcultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Urocultivo",
        "labID": "urinecultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Uroanálisis: densidad urinaria",
        "labID": "ua",
        "type": "decimal3",
        "result": "",
        "at300": 1.01,
        "at200": 1.03,
        "at100": 1.01,
        "at0": 10.2,
        "unit": ""
      },
      {
        "name": "Uroanálisis: leucocitos",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Uroanálisis: cilindros",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Lactato",
        "labID": "lactate",
        "type": "decimal1",
        "result": "",
        "at300": 0.5,
        "at200": 1.8,
        "at100": 1,
        "at0": 1.2,
        "unit": ""
      },
      {
        "name": "Hemograma: plaquetas",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 300,
        "at200": 550,
        "at100": 300,
        "at0": 200,
        "unit": "×10^3/μL",
        "analyte": "platelets"
      },
      {
        "name": "Hemograma: recuento de leucocitos",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 8,
        "at200": 9,
        "at100": 11,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Hemograma: hematocrito",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 40,
        "at200": 38,
        "at100": 35,
        "at0": 30,
        "unit": ""
      },
      {
        "name": "Sodio",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 135,
        "at200": 132,
        "at100": 131,
        "at0": 130,
        "unit": ""
      },
      {
        "name": "Potasio",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 4.2,
        "at200": 4.7,
        "at100": 5,
        "at0": 5.5,
        "unit": ""
      },
      {
        "name": "Cloro",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 106,
        "at200": 100,
        "at100": 106,
        "at0": 100,
        "unit": ""
      },
      {
        "name": "Bicarbonato",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 26,
        "at200": 22,
        "at100": 18,
        "at0": 15,
        "unit": ""
      },
      {
        "name": "Nitrógeno ureico en sangre (BUN)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 20,
        "at200": 30,
        "at100": 40,
        "at0": 50,
        "unit": ""
      },
      {
        "name": "Creatinina",
        "labID": "cmp",
        "type": "decimal2",
        "result": "",
        "at300": 1.2,
        "at200": 1.4,
        "at100": 2,
        "at0": 8,
        "unit": "mg/dL",
        "analyte": "creatinine"
      },
      {
        "name": "Glucosa",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 120,
        "at200": 190,
        "at100": 150,
        "at0": 100,
        "unit": ""
      },
      {
        "name": "Bilirrubina total",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 1,
        "at200": 1.1,
        "at100": 1.4,
        "at0": 1.6,
        "unit": "mg/dL",
        "analyte": "bilirubin"
      },
      {
        "name": "Alanina aminotransferasa (ALT)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 50,
        "at200": 90,
        "at100": 200,
        "at0": 800,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: pH",
        "labID": "abg",
        "type": "decimal2",
        "result": "",
        "at300": 7.44,
        "at200": 7.36,
        "at100": 7.3,
        "at0": 7,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: presión de oxígeno (PaO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 75,
        "at200": 70,
        "at100": 60,
        "at0": 50,
        "unit": "mmHg",
        "analyte": "pao2"
      },
      {
        "name": "Gasometría arterial: presión de dióxido de carbono (PaCO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 40,
        "at200": 35,
        "at100": 30,
        "at0": 20,
        "unit": ""
      },
      {
        "name": "Troponinas",
        "labID": "troponins",
        "type": "decimal2",
        "result": "",
        "at300": 0.2,
        "at200": 0.5,
        "at100": 1,
        "at0": 2,
        "unit": ""
      },
      {
        "name": "Razón internacional normalizada (INR)",
        "labID": "dicpanel",
        "type": "decimal1",
        "result": "",
        "at300": 1.1,
        "at200": 1.3,
        "at100": 1.8,
        "at0": 2.5,
        "unit": ""
      },
      {
        "name": "Tiempo parcial de tromboplastina (TPT)",
        "labID": "dicpanel",
        "type": "",
        "result": "",
        "at300": 30,
        "at200": 35,
        "at100": 40,
        "at0": 60,
        "unit": ""
      },
      {
        "name": "Panel de coagulación intravascular diseminada (CID)",
        "labID": "dicpanel",
        "type": "string",
        "result": "Negativo",
        "at300": "",
        "at200": "",
        "at100": "Positivo",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Radiografía de tórax",
        "labID": "chestxray",
        "type": "string",
        "result": "",
        "at300": "Pulmones hiperinsuflados; atelectasia frente a infarto en el lóbulo medio derecho.",
        "at200": "Volúmenes pulmonares bajos, atelectasia frente a infarto en el lóbulo medio derecho y edema pulmonar bilateral.",
        "at100": "Edema pulmonar moderado",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Electrocardiograma (ECG)",
        "labID": "ekg",
        "type": "string",
        "result": "",
        "at300": "Taquicardia sinusal y extrasístoles ventriculares frecuentes.",
        "at200": "Taquicardia sinusal, extrasístoles ventriculares frecuentes, ondas Q e inversión de la onda T en la derivación III.",
        "at100": "Taquicardia sinusal, ondas Q e inversión de la onda T en la derivación III.",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía de tórax",
        "labID": "chestct",
        "type": "string",
        "result": "",
        "at300": "Embolias pulmonares extensas que afectan ambas arterias pulmonares principales. Posible infarto del lóbulo medio derecho.",
        "at200": "Embolias pulmonares extensas que afectan ambas arterias pulmonares principales. Infarto en cuña en el lóbulo medio derecho. Opacidades bilaterales en vidrio esmerilado compatibles con edema pulmonar leve.",
        "at100": "Embolias pulmonares extensas que afectan ambas arterias pulmonares principales. Infarto en cuña en el lóbulo medio derecho. Opacidades bilaterales en vidrio esmerilado compatibles con edema pulmonar leve.",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía abdominal",
        "labID": "abdominalct",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Ecocardiograma",
        "labID": "echocardiogram",
        "type": "string",
        "result": "",
        "at300": "Dilatación leve del ventrículo derecho con hipocinesia del segmento medio de la pared libre, compatible con sobrecarga ventricular derecha. Fracción de eyección del ventrículo izquierdo normal.",
        "at200": "Dilatación leve del ventrículo derecho con hipocinesia moderada del segmento medio de la pared libre, compatible con sobrecarga ventricular derecha. Fracción de eyección del ventrículo izquierdo normal.",
        "at100": "Dilatación grave del ventrículo derecho con hipocinesia grave. Disfunción sistólica moderada a grave del ventrículo izquierdo, con fracción de eyección estimada del 25–35 %.",
        "at0": "",
        "unit": ""
      }
    ],
    "treatments": [
      {
        "id": "d5halfnormalsaline500cc",
        "value": 0.25,
        "valueBelow200": 0.1,
        "valueBelow100": 0.1,
        "below300": {
          "response": "Administre cargas de 1000 mL de solución salina normal o lactato de Ringer durante 30 minutos. Use volúmenes mayores y una administración más rápida. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ivnormalsaline500ml",
        "value": 0.75,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "ivnormalsaline1000ml",
        "value": 1.25,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "cefazolin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "ceftriaxone",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "cefepime",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "vancomycin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "meropenem",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "zosyn",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "levofloxacin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "norepinephrine",
        "value": 0,
        "valueBelow200": 0,
        "valueBelow100": 0
      },
      {
        "id": "dopamine",
        "value": 0,
        "valueBelow200": 0,
        "valueBelow100": 0
      },
      {
        "id": "dobutamine",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "heparin",
        "value": 4,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "¡Bien! No retrase la anticoagulación si existe una alta sospecha de embolia pulmonar y no es posible obtener imágenes de inmediato. +250 puntos.",
          "score": 250,
          "image": "cat1.png"
        }
      },
      {
        "id": "aspirin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "icutransfer",
        "value": 0,
        "valueBelow200": 50,
        "valueBelow100": 50,
        "below300": {
          "response": "La UCI considera que la paciente no necesita traslado y que usted puede continuar el tratamiento."
        },
        "below200": {
          "response": "¡Bien! Se recomienda pedir ayuda temprana ante un paciente con sepsis. Considere siempre una valoración por UCI en pacientes con sepsis grave. +100 puntos.",
          "score": 100
        }
      },
      {
        "id": "revascularization",
        "value": -50,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Esta decisión no es adecuada. Evite administrar tratamientos innecesarios. −250 puntos.",
          "score": -250,
          "image": "cat5.png"
        }
      },
      {
        "id": "interventionalradiology",
        "value": 0,
        "valueBelow200": 0,
        "valueBelow100": 0,
        "below300": {
          "response": "La radiología intervencionista no está indicada para esta paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "giercp",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La CPRE no está indicada para esta paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "surgery",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La cirugía no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "chesttube",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La paciente no necesita un tubo de tórax y este procedimiento puede hacerle daño; considere otros diagnósticos. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      }
    ],
    "quizzes": [
      {
        "id": "healed_quiz",
        "question": "Pregunta de bonificación: al ingreso, la paciente presentaba FC de 110/min, PA de 110/70 mmHg, leucocitos de 8, FR de 22/min y temperatura de 37,0 °C. ¿Cómo la clasificaría?",
        "answers": [
          {
            "text": "Síndrome de respuesta inflamatoria sistémica (SRIS)",
            "response": "¡Bien! Esta paciente tiene SRIS. No puede diagnosticarse sepsis sin una infección. +200 puntos.",
            "score": 200,
            "image": "cat2.png"
          },
          {
            "text": "Sepsis",
            "response": "Incorrecto. Para diagnosticar sepsis debe existir una infección documentada o sospechada. Con estos datos solo puede afirmarse que tiene manifestaciones de SRIS. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Sepsis grave",
            "response": "Incorrecto. Para diagnosticar sepsis debe existir una infección documentada o sospechada. Con estos datos solo puede afirmarse que tiene manifestaciones de SRIS. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          }
        ]
      }
    ],
    "combos": [
      {
        "ids": [
          "heparin",
          "ivnormalsaline1000ml",
          "ivnormalsaline500ml"
        ],
        "number": 2,
        "value": 7,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      }
    ],
    "scoreContext": {
      "supplementalOxygen": false,
      "fio2": 0.21,
      "respiratorySupport": false,
      "assumedAir": true
    }
  },
  {
    "name": "Paul",
    "gender": "Male",
    "health": 60,
    "healthRate": 2,
    "picture": "paul_n.png",
    "death_picture": "paul_d.png",
    "healed_picture": "paul_h.png",
    "selected_picture": "paul_s.png",
    "healed_tip": {
      "response": "¡Paul se recuperó! +500 puntos. El control quirúrgico de la fascitis necrosante es fundamental para tratar la sepsis en estos pacientes.",
      "score": 500,
      "image": "cat1.png"
    },
    "death_tip": {
      "response": "Paul falleció. −1000 puntos. Recuerde que algunas infecciones de tejidos blandos requieren intervención quirúrgica. Solicite apoyo temprano de la UCI si el paciente evoluciona desfavorablemente.",
      "score": -1000,
      "image": "cat5.png"
    },
    "history": {
      "Age": 48,
      "Chief Complaint": "«Tengo el muslo derecho rojo y doloroso desde ayer».",
      "History of Present Illness": "Febrícula y dolor perineal desde hace dos días. Anoche notó enrojecimiento y dolor que se extendían por la cara interna del muslo derecho. Esta mañana se encontraba letárgico y confuso. Sin antecedentes de traumatismo.",
      "Past Medical Illness": "Diabetes y hemorroidectomía hace dos semanas."
    },
    "vitals": [
      {
        "name": "SBP",
        "at300": 110,
        "at200": 105,
        "at100": 90,
        "at0": 60,
        "type": "integer"
      },
      {
        "name": "DBP",
        "at300": 80,
        "at200": 60,
        "at100": 40,
        "at0": 30,
        "type": "integer"
      },
      {
        "name": "HR",
        "at300": 105,
        "at200": 125,
        "at100": 140,
        "at0": 160,
        "type": "integer"
      },
      {
        "name": "Temp",
        "at300": 38.3,
        "at200": 38.7,
        "at100": 38.5,
        "at0": 38.8,
        "type": "decimal1"
      },
      {
        "name": "RR",
        "at300": 18,
        "at200": 24,
        "at100": 28,
        "at0": 40,
        "type": "integer"
      },
      {
        "name": "SpO2",
        "at300": 95,
        "at200": 93,
        "at100": 90,
        "at0": 85,
        "type": "integer"
      },
      {
        "name": "Urine Out",
        "at300": 0.5,
        "at200": 0.5,
        "at100": 0.4,
        "at0": 0.2,
        "type": "decimal1"
      },
      {
        "name": "GCS",
        "at300": 15,
        "at200": 15,
        "at100": 13,
        "at0": 3,
        "type": "integer"
      },
      {
        "name": "Weight",
        "at300": 98,
        "at200": 98,
        "at100": 98,
        "at0": 98,
        "type": "integer"
      }
    ],
    "tests": [
      {
        "name": "General",
        "labID": "physicalexam",
        "type": "string",
        "result": "Leve malestar y confusión. Eritema en la cara interna del muslo derecho. No hay fluctuación ni crepitación, aunque la zona es extremadamente dolorosa a la palpación.",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Hemocultivos",
        "labID": "bloodcultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "Obtenga siempre los cultivos antes de administrar antibióticos para optimizar su rendimiento diagnóstico. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Urocultivo",
        "labID": "urinecultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "Revise el urocultivo en 24 horas; por ahora, continúe el tratamiento. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Uroanálisis: densidad urinaria",
        "labID": "ua",
        "type": "decimal3",
        "result": "",
        "at300": 1.01,
        "at200": 1.03,
        "at100": 1.01,
        "at0": 1.02,
        "unit": ""
      },
      {
        "name": "Uroanálisis: leucocitos",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Uroanálisis: cilindros",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Lactato",
        "labID": "lactate",
        "type": "decimal1",
        "result": "",
        "at300": 0.5,
        "at200": 3,
        "at100": 4,
        "at0": 6,
        "unit": "",
        "tip": {
          "response": "¡Buena decisión! Seguir la evolución del lactato es una parte importante de la reanimación de pacientes con sepsis grave y choque séptico. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Hemograma: plaquetas",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 200,
        "at200": 150,
        "at100": 80,
        "at0": 40,
        "unit": "×10^3/μL",
        "analyte": "platelets"
      },
      {
        "name": "Hemograma: recuento de leucocitos",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 12,
        "at200": 15,
        "at100": 25,
        "at0": 40,
        "unit": ""
      },
      {
        "name": "Hemograma: hematocrito",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 35,
        "at200": 30,
        "at100": 28,
        "at0": 25,
        "unit": ""
      },
      {
        "name": "Sodio",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 140,
        "at200": 135,
        "at100": 130,
        "at0": 120,
        "unit": ""
      },
      {
        "name": "Potasio",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 3.7,
        "at200": 4.2,
        "at100": 4.4,
        "at0": 4.2,
        "unit": ""
      },
      {
        "name": "Cloro",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 106,
        "at200": 100,
        "at100": 106,
        "at0": 100,
        "unit": ""
      },
      {
        "name": "Bicarbonato",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 30,
        "at200": 20,
        "at100": 15,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Nitrógeno ureico en sangre (BUN)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 20,
        "at200": 25,
        "at100": 30,
        "at0": 50,
        "unit": ""
      },
      {
        "name": "Creatinina",
        "labID": "cmp",
        "type": "decimal2",
        "result": "",
        "at300": 1.2,
        "at200": 1.4,
        "at100": 2,
        "at0": 8,
        "unit": "mg/dL",
        "analyte": "creatinine"
      },
      {
        "name": "Glucosa",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 120,
        "at200": 180,
        "at100": 250,
        "at0": 400,
        "unit": ""
      },
      {
        "name": "Bilirrubina total",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 1.4,
        "at200": 2,
        "at100": 3,
        "at0": 5,
        "unit": "mg/dL",
        "analyte": "bilirubin"
      },
      {
        "name": "Alanina aminotransferasa (ALT)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 60,
        "at200": 100,
        "at100": 200,
        "at0": 800,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: pH",
        "labID": "abg",
        "type": "decimal2",
        "result": "",
        "at300": 7.44,
        "at200": 7.36,
        "at100": 7.3,
        "at0": 7,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: presión de oxígeno (PaO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 75,
        "at200": 70,
        "at100": 60,
        "at0": 50,
        "unit": "mmHg",
        "analyte": "pao2"
      },
      {
        "name": "Gasometría arterial: presión de dióxido de carbono (PaCO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 40,
        "at200": 35,
        "at100": 30,
        "at0": 20,
        "unit": ""
      },
      {
        "name": "Troponinas",
        "labID": "troponins",
        "type": "decimal2",
        "result": "",
        "at300": 0.05,
        "at200": 0.03,
        "at100": 0.05,
        "at0": 0.04,
        "unit": ""
      },
      {
        "name": "Razón internacional normalizada (INR)",
        "labID": "dicpanel",
        "type": "decimal1",
        "result": "",
        "at300": 1,
        "at200": 1.5,
        "at100": 5,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Tiempo parcial de tromboplastina (TPT)",
        "labID": "dicpanel",
        "type": "",
        "result": "",
        "at300": 25,
        "at200": 30,
        "at100": 40,
        "at0": 60,
        "unit": ""
      },
      {
        "name": "Panel de coagulación intravascular diseminada (CID)",
        "labID": "dicpanel",
        "type": "string",
        "result": "Negativo",
        "at300": "",
        "at200": "",
        "at100": "Positivo",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Radiografía de tórax",
        "labID": "chestxray",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "Síndrome de dificultad respiratoria aguda (SDRA) leve",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Electrocardiograma (ECG)",
        "labID": "ekg",
        "type": "string",
        "result": "Taquicardia",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía de tórax",
        "labID": "chestct",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "Síndrome de dificultad respiratoria aguda (SDRA) leve",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía abdominal",
        "labID": "abdominalct",
        "type": "string",
        "result": "La tomografía muestra engrosamiento cutáneo y aumento de la densidad de la grasa subcutánea, con cambios inflamatorios subcutáneos e intermusculares. Se observan colecciones líquidas subfasciales en forma de media luna. No se identifican gas ni abscesos definidos.",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Ecocardiograma",
        "labID": "echocardiogram",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      }
    ],
    "treatments": [
      {
        "id": "d5halfnormalsaline500cc",
        "value": 0.25,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Administre cargas de 1000 mL de solución salina normal o lactato de Ringer durante 30 minutos. Use volúmenes mayores y una administración más rápida. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ivnormalsaline500ml",
        "value": 0,
        "valueBelow200": 0.75,
        "valueBelow100": ""
      },
      {
        "id": "ivnormalsaline1000ml",
        "value": 0,
        "valueBelow200": 1.25,
        "valueBelow100": ""
      },
      {
        "id": "cefazolin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La cobertura de la cefazolina es demasiado limitada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ceftriaxone",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "cefepime",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "vancomycin",
        "value": 0.5,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "meropenem",
        "value": 0.5,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "zosyn",
        "value": 0.5,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "levofloxacin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "norepinephrine",
        "value": 0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "quiz": "norep_quiz"
        }
      },
      {
        "id": "dopamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dopamina no es el vasopresor de elección para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "dobutamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dobutamina no es un vasopresor de primera línea y puede perjudicar a este paciente. Puede iniciarse su infusión o añadirse a un vasopresor ante disfunción miocárdica —presiones de llenado elevadas y bajo gasto— o signos persistentes de hipoperfusión, incluso después de alcanzar un volumen intravascular y una presión arterial media adecuados (recomendación fuerte, grado 1C). −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "heparin",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La heparina no está indicada para este paciente y puede causar sangrado. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "aspirin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La aspirina no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "icutransfer",
        "value": 0,
        "valueBelow200": 50,
        "valueBelow100": 50,
        "below300": {
          "response": "La UCI considera que este paciente no necesita traslado y que usted puede tratarlo en hospitalización. En pacientes con sepsis sin signos de sepsis grave ni choque, inicie antibióticos y líquidos con vigilancia estrecha. Considere un nivel de atención superior en cuanto aparezcan signos de sepsis grave."
        },
        "below200": {
          "response": "¡Bien! Se recomienda pedir ayuda temprana ante un paciente con sepsis. Considere siempre una valoración por UCI en pacientes con sepsis grave. +100 puntos.",
          "score": 100
        },
        "below100": {
          "response": "¡Buena decisión! Este paciente está en choque séptico. Los pacientes en choque deben ingresar a UCI dentro de las primeras seis horas para iniciar tratamiento temprano dirigido por objetivos. Usted también está de turno en UCI, así que seguirá a cargo. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "revascularization",
        "value": -50,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Esta decisión no es adecuada. Evite administrar tratamientos innecesarios. −250 puntos.",
          "score": -250,
          "image": "cat5.png"
        }
      },
      {
        "id": "interventionalradiology",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La radiología intervencionista no está indicada para esta paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "giercp",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La CPRE no está indicada para esta paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "surgery",
        "value": 300,
        "valueBelow200": "",
        "valueBelow100": 0,
        "below300": {
          "response": "¡Buena decisión! +250 puntos. El control quirúrgico de la fascitis necrosante es fundamental para tratar la sepsis en este paciente.",
          "score": 250,
          "image": "cat1.png",
          "quiz": "surgery_quiz"
        },
        "below100": {
          "response": "Hizo bien en avisar a cirugía. Ahora debe estabilizar al paciente y volver a llamar cuando esté listo para el quirófano."
        }
      },
      {
        "id": "chesttube",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La paciente no necesita un tubo de tórax y este procedimiento puede hacerle daño; considere otros diagnósticos. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      }
    ],
    "quizzes": [
      {
        "id": "norep_quiz",
        "question": "Pregunta de bonificación: respecto al uso de corticoides en la sepsis, ¿en qué situación sería más apropiado utilizarlos?",
        "answers": [
          {
            "text": "La hidrocortisona intravenosa a 200 mg/día puede ser beneficiosa en adultos con choque séptico cuya presión arterial sistólica permanece por debajo de 90 mmHg a pesar de una reanimación adecuada con líquidos y un tratamiento intensivo con vasopresores.",
            "response": "Correcto. +200 puntos.",
            "score": 200,
            "image": "cat2.png"
          },
          {
            "text": "Administrar corticoides en cuanto se identifique la sepsis.",
            "response": "Incorrecto. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Administrar hidrocortisona a adultos con choque séptico si mantienen una presión arterial adecuada —sistólica mayor de 90 mmHg— con reanimación apropiada con líquidos y tratamiento intensivo con vasopresores.",
            "response": "",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "No administrar nunca corticoides a un paciente con sepsis.",
            "response": "Incorrecto. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          }
        ]
      },
      {
        "id": "surgery_quiz",
        "question": "Pregunta de bonificación: el paciente ingresó en muy mal estado. ¿Cómo sabría si cumplía criterios de choque séptico?",
        "answers": [
          {
            "text": "Lactato mayor de 8",
            "response": "Incorrecto. Un lactato muy elevado puede aparecer en el choque, pero no establece el diagnóstico. El choque séptico requiere hipotensión persistente después de una reanimación intensiva. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Fiebre persistente que no responde al acetaminofén",
            "response": "Incorrecto. La fiebre persistente no establece el diagnóstico de choque séptico. Se requiere hipotensión persistente después de una reanimación intensiva. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Hipotensión después de una reanimación con un volumen elevado de líquidos, superior a 6 L",
            "response": "Correcto. En el choque séptico, la reanimación intensiva con líquidos no logra restablecer las presiones normales de perfusión. +200 puntos.",
            "score": 200,
            "image": "cat2.png"
          }
        ]
      }
    ],
    "combos": [
      {
        "ids": [
          "vancomycin",
          "ivnormalsaline500ml",
          "ivnormalsaline1000ml"
        ],
        "number": 2,
        "value": 0,
        "below200": "",
        "below100": 1,
        "response": "",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "levofloxacin",
          "cefepime",
          "cefazolin",
          "ceftriaxone"
        ],
        "number": 1,
        "value": 0,
        "below200": "",
        "below100": "",
        "response": "Recuerde que la fascitis necrosante suele ser una infección polimicrobiana. El tratamiento antibiótico debe cubrir SARM, gramnegativos y anaerobios.",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "vancomycin",
          "meropenem"
        ],
        "number": 2,
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "¡Bien! El tratamiento antibiótico de la fascitis necrosante debe cubrir SARM, gramnegativos y anaerobios. +100 puntos.",
        "score": 100,
        "image": "cat2.png"
      },
      {
        "ids": [
          "vancomycin",
          "zosyn"
        ],
        "number": 2,
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "¡Bien! El tratamiento antibiótico de la fascitis necrosante debe cubrir SARM, gramnegativos y anaerobios. +100 puntos.",
        "score": 100,
        "image": "cat2.png"
      },
      {
        "ids": [
          "vancomycin",
          "meropenem",
          "zosyn"
        ],
        "number": 3,
        "value": -1,
        "below200": "",
        "below100": "",
        "response": "Combinar piperacilina/tazobactam (Zosyn) y meropenem no aporta beneficio adicional en este caso. −100 puntos.",
        "score": -100,
        "image": "cat4.png"
      },
      {
        "ids": [
          "norepinephrine",
          "dobutamine"
        ],
        "number": 2,
        "value": 0.5,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      }
    ],
    "scoreContext": {
      "supplementalOxygen": false,
      "fio2": 0.21,
      "respiratorySupport": false,
      "assumedAir": true
    }
  },
  {
    "name": "Rajesh",
    "gender": "Male",
    "health": 230,
    "healthRate": 2,
    "picture": "rajesh_n.png",
    "death_picture": "rajesh_d.png",
    "healed_picture": "rajesh_h.png",
    "selected_picture": "rajesh_s.png",
    "healed_tip": {
      "response": "¡Rajesh se recuperó! +500 puntos. Los líquidos y los antibióticos no resuelven por sí solos la sepsis por una fuga anastomótica; se necesita un control eficaz del foco.",
      "score": 500,
      "image": "cat1.png"
    },
    "death_tip": {
      "response": "Rajesh falleció. Los líquidos y los antibióticos no resuelven por sí solos la sepsis por una fuga anastomótica; se necesita un control eficaz del foco. Examine el abdomen, especialmente por la cirugía reciente. Si el paciente evoluciona mal, solicite apoyo temprano de la UCI. −1000 puntos.",
      "score": -1000,
      "image": "cat5.png"
    },
    "history": {
      "Age": 57,
      "Chief Complaint": "Escalofríos intensos de inicio súbito y dolor abdominal desde hace tres horas.",
      "History of Present Illness": "Paciente hospitalizado hace ocho días para una hemicolectomía programada por adenocarcinoma del colon descendente. Hace tres horas comenzó con dolor abdominal y escalofríos intensos.",
      "Past Medical Illness": "Tabaquismo, hipertensión, gota y antecedente de apendicectomía."
    },
    "vitals": [
      {
        "name": "SBP",
        "at300": 150,
        "at200": 110,
        "at100": 90,
        "at0": 60,
        "type": "integer"
      },
      {
        "name": "DBP",
        "at300": 95,
        "at200": 70,
        "at100": 40,
        "at0": 30,
        "type": "integer"
      },
      {
        "name": "HR",
        "at300": 85,
        "at200": 125,
        "at100": 140,
        "at0": 160,
        "type": "integer"
      },
      {
        "name": "Temp",
        "at300": 39,
        "at200": 38.7,
        "at100": 39,
        "at0": 38.8,
        "type": "decimal1"
      },
      {
        "name": "RR",
        "at300": 18,
        "at200": 28,
        "at100": 34,
        "at0": 40,
        "type": "integer"
      },
      {
        "name": "SpO2",
        "at300": 97,
        "at200": 93,
        "at100": 90,
        "at0": 85,
        "type": "integer"
      },
      {
        "name": "Urine Out",
        "at300": 0.5,
        "at200": 0.4,
        "at100": 0.3,
        "at0": 0.2,
        "type": "decimal1"
      },
      {
        "name": "GCS",
        "at300": 15,
        "at200": 13,
        "at100": 7,
        "at0": 3,
        "type": "integer"
      },
      {
        "name": "Weight",
        "at300": 66,
        "at200": 66,
        "at100": 66,
        "at0": 66,
        "type": "integer"
      }
    ],
    "tests": [
      {
        "name": "General",
        "labID": "physicalexam",
        "type": "string",
        "result": "En la valoración: confuso, temperatura de 38,5 °C, pulso de 119/min y frecuencia respiratoria de 26/min. Abdomen rígido, extremadamente doloroso a la palpación y con ruidos intestinales disminuidos. Extremidades calientes. El paciente parece incómodo.",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Hemocultivos",
        "labID": "bloodcultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "Al evaluar una sepsis, obtenga hemocultivos antes de iniciar los antibióticos. Los resultados pueden tardar varios días, así que continúe el tratamiento mientras espera. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Urocultivo",
        "labID": "urinecultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "El urocultivo tardará en estar disponible; continúe el tratamiento mientras espera. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Uroanálisis: densidad urinaria",
        "labID": "ua",
        "type": "decimal3",
        "result": "",
        "at300": 1.01,
        "at200": 1.03,
        "at100": 1.01,
        "at0": 1.03,
        "unit": ""
      },
      {
        "name": "Uroanálisis: leucocitos",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Uroanálisis: cilindros",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Lactato",
        "labID": "lactate",
        "type": "decimal1",
        "result": "",
        "at300": 0,
        "at200": 6,
        "at100": 8,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Hemograma: plaquetas",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 200,
        "at200": 150,
        "at100": 80,
        "at0": 40,
        "unit": "×10^3/μL",
        "analyte": "platelets"
      },
      {
        "name": "Hemograma: recuento de leucocitos",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 2.5,
        "at200": 3.5,
        "at100": 2.5,
        "at0": 3.5,
        "unit": ""
      },
      {
        "name": "Hemograma: hematocrito",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 35,
        "at200": 30,
        "at100": 25,
        "at0": 20,
        "unit": ""
      },
      {
        "name": "Sodio",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 138,
        "at200": 142,
        "at100": 138,
        "at0": 142,
        "unit": ""
      },
      {
        "name": "Potasio",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 4.2,
        "at200": 3.8,
        "at100": 4.2,
        "at0": 3.8,
        "unit": ""
      },
      {
        "name": "Cloro",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 106,
        "at200": 100,
        "at100": 106,
        "at0": 100,
        "unit": ""
      },
      {
        "name": "Bicarbonato",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 30,
        "at200": 20,
        "at100": 15,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Nitrógeno ureico en sangre (BUN)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 10,
        "at200": 25,
        "at100": 30,
        "at0": 50,
        "unit": ""
      },
      {
        "name": "Creatinina",
        "labID": "cmp",
        "type": "decimal2",
        "result": "",
        "at300": 1.2,
        "at200": 1.4,
        "at100": 2,
        "at0": 8,
        "unit": "mg/dL",
        "analyte": "creatinine"
      },
      {
        "name": "Glucosa",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 180,
        "at200": 250,
        "at100": 60,
        "at0": 40,
        "unit": ""
      },
      {
        "name": "Bilirrubina total",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 1.4,
        "at200": 2,
        "at100": 3,
        "at0": 5,
        "unit": "mg/dL",
        "analyte": "bilirubin"
      },
      {
        "name": "Alanina aminotransferasa (ALT)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 60,
        "at200": 100,
        "at100": 200,
        "at0": 800,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: pH",
        "labID": "abg",
        "type": "decimal2",
        "result": "",
        "at300": 7.44,
        "at200": 7.36,
        "at100": 7.3,
        "at0": 7,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: presión de oxígeno (PaO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 100,
        "at200": 70,
        "at100": 60,
        "at0": 50,
        "unit": "mmHg",
        "analyte": "pao2"
      },
      {
        "name": "Gasometría arterial: presión de dióxido de carbono (PaCO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 45,
        "at200": 35,
        "at100": 30,
        "at0": 20,
        "unit": ""
      },
      {
        "name": "Troponinas",
        "labID": "troponins",
        "type": "decimal2",
        "result": "",
        "at300": 0,
        "at200": 0.1,
        "at100": 0,
        "at0": 0.1,
        "unit": ""
      },
      {
        "name": "Razón internacional normalizada (INR)",
        "labID": "dicpanel",
        "type": "decimal1",
        "result": "",
        "at300": 0.8,
        "at200": 1.5,
        "at100": 4,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Tiempo parcial de tromboplastina (TPT)",
        "labID": "dicpanel",
        "type": "",
        "result": "",
        "at300": 23,
        "at200": 36,
        "at100": 40,
        "at0": 60,
        "unit": ""
      },
      {
        "name": "Panel de coagulación intravascular diseminada (CID)",
        "labID": "dicpanel",
        "type": "string",
        "result": "Negativo",
        "at300": "",
        "at200": "",
        "at100": "Positivo",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Radiografía de tórax",
        "labID": "chestxray",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "Síndrome de dificultad respiratoria aguda (SDRA) leve",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Electrocardiograma (ECG)",
        "labID": "ekg",
        "type": "string",
        "result": "Taquicardia",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía de tórax",
        "labID": "chestct",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "",
        "at100": "Síndrome de dificultad respiratoria aguda (SDRA) leve",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía abdominal",
        "labID": "abdominalct",
        "type": "string",
        "result": "",
        "at300": "Colecciones con gas en las proximidades de la anastomosis.",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Ecocardiograma",
        "labID": "echocardiogram",
        "type": "string",
        "result": "Hiperdinámico",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      }
    ],
    "treatments": [
      {
        "id": "d5halfnormalsaline500cc",
        "value": 0.25,
        "valueBelow200": 0,
        "valueBelow100": 0,
        "below300": {
          "response": "Administre cargas de 1000 mL de solución salina normal o lactato de Ringer durante 30 minutos. Use volúmenes mayores y una administración más rápida. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ivnormalsaline500ml",
        "value": 0,
        "valueBelow200": 0.75,
        "valueBelow100": 1.25
      },
      {
        "id": "ivnormalsaline1000ml",
        "value": 0,
        "valueBelow200": 1.25,
        "valueBelow100": 2.25,
        "below300": {
          "response": "¡Bien! La carga inicial de líquidos ante hipoperfusión tisular por sepsis es de 1000 mL o más de cristaloides, hasta alcanzar un mínimo de 30 mL/kg durante las primeras tres horas. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "cefazolin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La cobertura de la cefazolina es demasiado limitada para este caso. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ceftriaxone",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La cobertura de la ceftriaxona es demasiado limitada para este caso, dada la duración de la hospitalización. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "cefepime",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La cefepima por sí sola es insuficiente, considerando la flora anaerobia intestinal.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "vancomycin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "No hay indicios de infección por Staphylococcus aureus resistente a la meticilina (SARM) en este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "meropenem",
        "value": 0.5,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "zosyn",
        "value": 0.5,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "levofloxacin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "norepinephrine",
        "value": 0,
        "valueBelow200": 0.5,
        "valueBelow100": 0.5,
        "below300": {
          "response": "El paciente no necesitaba vasopresores en este momento. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        },
        "below200": {
          "response": "¡Bien! La noradrenalina es el vasopresor de primera elección para el choque séptico. +100 puntos.",
          "score": 100
        }
      },
      {
        "id": "dopamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dopamina no es el vasopresor de elección para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "dobutamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dobutamina no es el vasopresor ni el inotrópico de elección. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "heparin",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La heparina no está indicada y puede causar sangrado. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "aspirin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La aspirina no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "icutransfer",
        "value": 0,
        "valueBelow200": 50,
        "valueBelow100": 50,
        "below300": {
          "response": "La UCI considera que este paciente no necesita traslado y que usted puede tratarlo en hospitalización. En pacientes con sepsis sin signos de sepsis grave ni choque, inicie antibióticos y líquidos con vigilancia estrecha. Considere un nivel de atención superior en cuanto aparezcan signos de sepsis grave."
        },
        "below200": {
          "response": "¡Bien! Se recomienda pedir ayuda temprana ante un paciente con sepsis. Considere siempre una valoración por UCI en los pacientes con sepsis grave. +100 puntos.",
          "score": 100
        },
        "below100": {
          "response": "¡Buena decisión! Este paciente está en choque séptico. Los pacientes en choque deben ingresar a UCI dentro de las primeras seis horas para iniciar tratamiento temprano dirigido por objetivos. Usted también está de turno en UCI, así que seguirá a cargo. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "revascularization",
        "value": -50,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Este paciente no necesita revascularización. −250 puntos.",
          "score": -250,
          "image": "cat5.png"
        }
      },
      {
        "id": "interventionalradiology",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La radiología intervencionista no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "giercp",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La colangiopancreatografía retrógrada endoscópica (CPRE) no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "surgery",
        "value": 300,
        "valueBelow200": "",
        "valueBelow100": 0,
        "below300": {
          "response": "¡Bien! Este paciente necesitaba cirugía para controlar el foco de sepsis. +250 puntos.",
          "score": 250,
          "image": "cat1.png",
          "quiz": "surgery_quiz"
        },
        "below100": {
          "response": "Hizo bien en avisar a cirugía. Ahora debe estabilizar al paciente y volver a llamar cuando esté listo para el quirófano."
        }
      },
      {
        "id": "chesttube",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La paciente no necesita un tubo de tórax y este procedimiento puede hacerle daño; considere otros diagnósticos. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      }
    ],
    "quizzes": [
      {
        "id": "surgery_quiz",
        "question": "Pregunta de bonificación: al ingreso, el paciente presentaba FC de 115/min, PA de 110/70 mmHg, leucocitos de 3, FR de 22/min, temperatura de 38,5 °C y lactato normal. Con estos datos y la historia clínica, ¿cómo lo clasificaría?",
        "answers": [
          {
            "text": "Síndrome de respuesta inflamatoria sistémica (SRIS)",
            "response": "Incorrecto. Aunque el paciente cumple criterios de SRIS, existe un foco infeccioso sospechado. Cumple criterios de sepsis. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Sepsis",
            "response": "¡Bien! Este paciente tenía manifestaciones de SRIS y una infección abdominal, por lo que corresponde a sepsis. +200 puntos.",
            "score": 200,
            "image": "cat2.png"
          },
          {
            "text": "Sepsis grave",
            "response": "Incorrecto. El paciente tenía sepsis al ingreso: cumplía criterios de SRIS y tenía una infección, pero sí presentaba disfunción orgánica u otros signos de sepsis grave. −200 puntos. [El comentario original es contradictorio y requiere revisión clínica; se conserva la puntuación del caso.]",
            "score": -200,
            "image": "cat4.png"
          }
        ]
      }
    ],
    "combos": [
      {
        "ids": [
          "meropenem",
          "zosyn"
        ],
        "number": 1,
        "value": 0,
        "below200": 2,
        "below100": 3,
        "response": "¡Bien! La cobertura antibiótica de una infección intraabdominal sospechada debe incluir microorganismos gramnegativos entéricos y anaerobios. +100 puntos.",
        "score": 100,
        "image": "cat2.png"
      },
      {
        "ids": [
          "norepinephrine",
          "dobutamine"
        ],
        "number": "",
        "value": 1,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      }
    ],
    "scoreContext": {
      "supplementalOxygen": false,
      "fio2": 0.21,
      "respiratorySupport": false,
      "assumedAir": true
    }
  },
  {
    "name": "Tina",
    "gender": "Female",
    "health": 240,
    "healthRate": 2,
    "picture": "tina_n.png",
    "death_picture": "tina_d.png",
    "healed_picture": "tina_h.png",
    "selected_picture": "tina_s.png",
    "healed_tip": {
      "response": "¡Tina se recuperó! +500 puntos. Recuerde: los pacientes con sepsis grave o choque deben recibir antibióticos durante la primera hora desde su reconocimiento. El uso temprano de antibióticos adecuados… [El comentario está incompleto en la fuente original.]",
      "score": 500,
      "image": "cat1.png"
    },
    "death_tip": {
      "response": "Tina falleció. −1000 puntos. Los pacientes con sepsis grave o choque deben recibir antibióticos durante la primera hora desde su reconocimiento. Reevalúe los antibióticos si la paciente no mejora y recuerde solicitar apoyo temprano de la UCI.",
      "score": -1000,
      "image": "cat5.png"
    },
    "history": {
      "Age": 25,
      "Chief Complaint": "Según enfermería: «Tina tiene más dolor abdominal y está confundida».",
      "History of Present Illness": "La paciente tuvo un parto domiciliario de un niño hace cuatro días. Presenta escalofríos intensos y fiebre de 39,5 °C.",
      "Past Medical Illness": "Antecedente de diabetes."
    },
    "vitals": [
      {
        "name": "SBP",
        "at300": 118,
        "at200": 105,
        "at100": 90,
        "at0": 60,
        "type": "integer"
      },
      {
        "name": "DBP",
        "at300": 80,
        "at200": 60,
        "at100": 40,
        "at0": 30,
        "type": "integer"
      },
      {
        "name": "HR",
        "at300": 105,
        "at200": 125,
        "at100": 140,
        "at0": 160,
        "type": "integer"
      },
      {
        "name": "Temp",
        "at300": 38.3,
        "at200": 38.8,
        "at100": 38.9,
        "at0": 40.5,
        "type": "decimal1"
      },
      {
        "name": "RR",
        "at300": 20,
        "at200": 24,
        "at100": 28,
        "at0": 40,
        "type": "integer"
      },
      {
        "name": "SpO2",
        "at300": 97,
        "at200": 93,
        "at100": 90,
        "at0": 85,
        "type": "integer"
      },
      {
        "name": "Urine Out",
        "at300": 0.5,
        "at200": 0.4,
        "at100": 0.3,
        "at0": 0.2,
        "type": "decimal1"
      },
      {
        "name": "GCS",
        "at300": 15,
        "at200": 13,
        "at100": 9,
        "at0": 3,
        "type": "integer"
      },
      {
        "name": "Weight",
        "at300": 73,
        "at200": 73,
        "at100": 73,
        "at0": 73,
        "type": "integer"
      }
    ],
    "tests": [
      {
        "name": "General",
        "labID": "physicalexam",
        "type": "string",
        "result": "Confusa, alerta y orientada únicamente en persona. Dolor en la parte baja del abdomen y secreción purulenta.",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Hemocultivos",
        "labID": "bloodcultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "Obtener hemocultivos antes de administrar antibióticos aumenta su rendimiento diagnóstico. Continúe el manejo mientras se procesan. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Urocultivo",
        "labID": "urinecultures",
        "type": "string",
        "result": "Resultados pendientes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": "",
        "tip": {
          "response": "Revise el urocultivo en 24 horas; por ahora, continúe el tratamiento. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "name": "Uroanálisis: densidad urinaria",
        "labID": "ua",
        "type": "decimal3",
        "result": "",
        "at300": 1.001,
        "at200": 1.025,
        "at100": 1.03,
        "at0": 1.035,
        "unit": ""
      },
      {
        "name": "Uroanálisis: leucocitos",
        "labID": "ua",
        "type": "string",
        "result": "Presentes",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Uroanálisis: cilindros",
        "labID": "ua",
        "type": "string",
        "result": "Ninguno",
        "at300": "",
        "at200": "Presentes",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Lactato",
        "labID": "lactate",
        "type": "decimal1",
        "result": "",
        "at300": 0,
        "at200": 2,
        "at100": 4,
        "at0": 8,
        "unit": ""
      },
      {
        "name": "Hemograma: plaquetas",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 200,
        "at200": 150,
        "at100": 80,
        "at0": 40,
        "unit": "×10^3/μL",
        "analyte": "platelets"
      },
      {
        "name": "Hemograma: recuento de leucocitos",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 12,
        "at200": 14,
        "at100": 16,
        "at0": 18,
        "unit": ""
      },
      {
        "name": "Hemograma: hematocrito",
        "labID": "cbc",
        "type": "",
        "result": "",
        "at300": 30,
        "at200": 30,
        "at100": 25,
        "at0": 20,
        "unit": ""
      },
      {
        "name": "Sodio",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 130,
        "at200": 125,
        "at100": 122,
        "at0": 120,
        "unit": ""
      },
      {
        "name": "Potasio",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 3.5,
        "at200": 4.5,
        "at100": 5,
        "at0": 5.5,
        "unit": ""
      },
      {
        "name": "Cloro",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 100,
        "at200": 106,
        "at100": 100,
        "at0": 106,
        "unit": ""
      },
      {
        "name": "Bicarbonato",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 30,
        "at200": 20,
        "at100": 15,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Nitrógeno ureico en sangre (BUN)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 20,
        "at200": 30,
        "at100": 40,
        "at0": 50,
        "unit": ""
      },
      {
        "name": "Creatinina",
        "labID": "cmp",
        "type": "decimal2",
        "result": "",
        "at300": 0.8,
        "at200": 1,
        "at100": 2,
        "at0": 8,
        "unit": "mg/dL",
        "analyte": "creatinine"
      },
      {
        "name": "Glucosa",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 100,
        "at200": 250,
        "at100": 60,
        "at0": 40,
        "unit": ""
      },
      {
        "name": "Bilirrubina total",
        "labID": "cmp",
        "type": "decimal1",
        "result": "",
        "at300": 0.5,
        "at200": 1.4,
        "at100": 2,
        "at0": 4,
        "unit": "mg/dL",
        "analyte": "bilirubin"
      },
      {
        "name": "Alanina aminotransferasa (ALT)",
        "labID": "cmp",
        "type": "",
        "result": "",
        "at300": 30,
        "at200": 60,
        "at100": 200,
        "at0": 800,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: pH",
        "labID": "abg",
        "type": "decimal2",
        "result": "",
        "at300": 7.44,
        "at200": 7.36,
        "at100": 7.3,
        "at0": 7,
        "unit": ""
      },
      {
        "name": "Gasometría arterial: presión de oxígeno (PaO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 100,
        "at200": 70,
        "at100": 60,
        "at0": 50,
        "unit": "mmHg",
        "analyte": "pao2"
      },
      {
        "name": "Gasometría arterial: presión de dióxido de carbono (PaCO₂)",
        "labID": "abg",
        "type": "",
        "result": "",
        "at300": 40,
        "at200": 35,
        "at100": 30,
        "at0": 20,
        "unit": ""
      },
      {
        "name": "Troponinas",
        "labID": "troponins",
        "type": "decimal2",
        "result": "",
        "at300": 0,
        "at200": 0.1,
        "at100": 0,
        "at0": 0.1,
        "unit": ""
      },
      {
        "name": "Razón internacional normalizada (INR)",
        "labID": "dicpanel",
        "type": "decimal1",
        "result": "",
        "at300": 0.8,
        "at200": 1.5,
        "at100": 4,
        "at0": 10,
        "unit": ""
      },
      {
        "name": "Tiempo parcial de tromboplastina (TPT)",
        "labID": "dicpanel",
        "type": "",
        "result": "",
        "at300": 23,
        "at200": 36,
        "at100": 40,
        "at0": 60,
        "unit": ""
      },
      {
        "name": "Panel de coagulación intravascular diseminada (CID)",
        "labID": "dicpanel",
        "type": "string",
        "result": "Negativo",
        "at300": "",
        "at200": "",
        "at100": "Positivo",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Radiografía de tórax",
        "labID": "chestxray",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "Edema pulmonar leve",
        "at100": "Edema pulmonar moderado",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Electrocardiograma (ECG)",
        "labID": "ekg",
        "type": "string",
        "result": "Taquicardia",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía de tórax",
        "labID": "chestct",
        "type": "string",
        "result": "Normal",
        "at300": "",
        "at200": "Edema pulmonar leve",
        "at100": "Edema pulmonar moderado",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Tomografía abdominal",
        "labID": "abdominalct",
        "type": "string",
        "result": "Cambios inflamatorios asociados con gas dentro del endometrio engrosado. Posible retención de restos de la gestación.",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      },
      {
        "name": "Ecocardiograma",
        "labID": "echocardiogram",
        "type": "string",
        "result": "Hiperdinámico",
        "at300": "",
        "at200": "",
        "at100": "",
        "at0": "",
        "unit": ""
      }
    ],
    "treatments": [
      {
        "id": "d5halfnormalsaline500cc",
        "value": 0.25,
        "valueBelow200": 0,
        "valueBelow100": 0,
        "below300": {
          "response": "Administre cargas de 1000 mL de solución salina normal o lactato de Ringer durante 30 minutos. Use volúmenes mayores y una administración más rápida. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ivnormalsaline500ml",
        "value": 0.75,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "ivnormalsaline1000ml",
        "value": 1.25,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "¡Bien! La carga inicial de líquidos ante hipoperfusión tisular por sepsis es de 1000 mL o más de cristaloides, hasta alcanzar un mínimo de 30 mL/kg durante las primeras tres horas. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "cefazolin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La cobertura de la cefazolina es demasiado limitada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "ceftriaxone",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "No sin metronidazol, porque la flora urogenital incluye anaerobios. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "cefepime",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "No sin metronidazol, porque la flora urogenital incluye anaerobios. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "vancomycin",
        "value": "",
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "No hay indicios de infección por Staphylococcus aureus resistente a la meticilina (SARM) en este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "meropenem",
        "value": 1.75,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Los carbapenémicos tienen un espectro demasiado amplio para esta paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "zosyn",
        "value": 1.75,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "levofloxacin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": ""
      },
      {
        "id": "norepinephrine",
        "value": 0,
        "valueBelow200": 0.5,
        "valueBelow100": 0.5,
        "below300": {
          "response": "El paciente no necesitaba vasopresores en este momento. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        },
        "below200": {
          "response": "¡Bien! La noradrenalina es el vasopresor de primera elección para el choque séptico. +100 puntos.",
          "score": 100
        }
      },
      {
        "id": "dopamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dopamina no es el vasopresor de elección para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "dobutamine",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La dobutamina no es el vasopresor de elección. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "heparin",
        "value": -0.5,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La heparina no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "aspirin",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La aspirina no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "icutransfer",
        "value": 0,
        "valueBelow200": 50,
        "valueBelow100": 50,
        "below300": {
          "response": "La UCI considera que este paciente no necesita traslado y que usted puede tratarlo en hospitalización. En pacientes con sepsis sin signos de sepsis grave ni choque, inicie antibióticos y líquidos con vigilancia estrecha. Considere un nivel de atención superior en cuanto aparezcan signos de sepsis grave."
        },
        "below200": {
          "response": "¡Bien! Se recomienda pedir ayuda temprana ante un paciente con sepsis. Considere siempre una valoración por UCI en pacientes con sepsis grave. +100 puntos.",
          "score": 100
        },
        "below100": {
          "response": "¡Buena decisión! Este paciente está en choque séptico. Los pacientes en choque deben ingresar a UCI dentro de las primeras seis horas para iniciar tratamiento temprano dirigido por objetivos. Usted también está de turno en UCI, así que seguirá a cargo. +100 puntos.",
          "score": 100,
          "image": "cat2.png"
        }
      },
      {
        "id": "revascularization",
        "value": -50,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "Esta paciente no necesita revascularización. −250 puntos.",
          "score": -205,
          "image": "cat5.png"
        }
      },
      {
        "id": "interventionalradiology",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La radiología intervencionista no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "giercp",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La colangiopancreatografía retrógrada endoscópica (CPRE) no está indicada para este paciente. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      },
      {
        "id": "surgery",
        "value": 50,
        "valueBelow200": 100,
        "valueBelow100": "",
        "below300": {
          "response": "¡Bien! Esta paciente necesitaba un legrado para controlar el foco de sepsis. +250 puntos.",
          "score": 250,
          "image": "cat1.png",
          "quiz": "healed_quiz"
        },
        "below100": {
          "response": "Hizo bien en avisar a ginecología y obstetricia. Ahora debe estabilizar a la paciente y volver a llamar a cirugía cuando esté lista para el quirófano."
        }
      },
      {
        "id": "chesttube",
        "value": 0,
        "valueBelow200": "",
        "valueBelow100": "",
        "below300": {
          "response": "La paciente no necesita un tubo de tórax y este procedimiento puede hacerle daño; considere otros diagnósticos. −100 puntos.",
          "score": -100,
          "image": "cat4.png"
        }
      }
    ],
    "quizzes": [
      {
        "id": "healed_quiz",
        "question": "Pregunta de bonificación: al ingreso, la paciente presentaba FC de 130/min, PA de 100/50 mmHg, leucocitos de 16, FR de 26/min y temperatura de 38,7 °C. Con estos datos y sus antecedentes de confusión, ¿cómo la clasificaría?",
        "answers": [
          {
            "text": "Síndrome de respuesta inflamatoria sistémica (SRIS)",
            "response": "Incorrecto. El lactato elevado, el deterioro renal y la alteración del estado mental indican disfunción orgánica, por lo que corresponde a sepsis grave. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Sepsis",
            "response": "Incorrecto. El lactato elevado, el deterioro renal y la alteración del estado mental indican disfunción orgánica, por lo que corresponde a sepsis grave. −200 puntos.",
            "score": -200,
            "image": "cat4.png"
          },
          {
            "text": "Sepsis grave",
            "response": "¡Bien! La confusión por encima de su estado basal indica disfunción orgánica y permite clasificarla como sepsis grave. +200 puntos.",
            "score": 200,
            "image": "cat2.png"
          }
        ]
      }
    ],
    "combos": [
      {
        "ids": [
          "meropenem",
          "ivnormalsaline1000ml"
        ],
        "number": 2,
        "value": 3,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "zosyn",
          "ivnormalsaline1000ml"
        ],
        "number": 2,
        "value": 3,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      },
      {
        "ids": [
          "levofloxacin",
          "ceftriaxone",
          "cefazolin"
        ],
        "number": 1,
        "value": 0,
        "below200": "",
        "below100": "",
        "response": "",
        "score": "",
        "image": ""
      }
    ],
    "scoreContext": {
      "supplementalOxygen": false,
      "fio2": 0.21,
      "respiratorySupport": false,
      "assumedAir": true
    }
  }
];
globalThis.CASO_TUTORIAL = {
  "name": "Paciente de práctica",
  "gender": "Male",
  "health": 150,
  "healthRate": 0,
  "picture": "ron_n.png",
  "death_picture": "ron_d.png",
  "healed_picture": "ron_h.png",
  "selected_picture": "ron_s.png",
  "healed_tip": {
    "response": "¡Terminaste el tutorial! En una partida completa puedes tener más de un paciente al mismo tiempo. Recuerda atender a ambos.",
    "score": 500,
    "image": "cat1.png"
  },
  "death_tip": {
    "response": "El paciente de práctica falleció. Revisa el efecto de los tratamientos: los inadecuados pueden reducir su salud. −1000 puntos.",
    "score": -1000,
    "image": "cat5.png"
  },
  "history": {
    "Age": 42,
    "Chief Complaint": "«¡Quiero ayudarte a aprender a jugar Septris! Pulsa Examen físico en la parte inferior para descubrir cómo puedes ayudarme».",
    "History of Present Illness": "Paciente sano.",
    "Past Medical Illness": "Ninguno"
  },
  "vitals": [
    {
      "name": "SBP",
      "at300": 120,
      "at200": 110,
      "at100": 115,
      "at0": 109,
      "type": "integer"
    },
    {
      "name": "DBP",
      "at300": 80,
      "at200": 75,
      "at100": 75,
      "at0": 73,
      "type": "integer"
    },
    {
      "name": "HR",
      "at300": 88,
      "at200": 70,
      "at100": 75,
      "at0": 70,
      "type": "integer"
    },
    {
      "name": "Temp",
      "at300": 38.3,
      "at200": 38.8,
      "at100": 38.3,
      "at0": 38.8,
      "type": "decimal1"
    },
    {
      "name": "RR",
      "at300": 16,
      "at200": 14,
      "at100": 12,
      "at0": 16,
      "type": "integer"
    },
    {
      "name": "SpO2",
      "at300": 97,
      "at200": 93,
      "at100": 90,
      "at0": 85,
      "type": "integer"
    },
    {
      "name": "Urine Out",
      "at300": 0.5,
      "at200": 0.5,
      "at100": 0.25,
      "at0": 0.1,
      "type": "decimal1"
    },
    {
      "name": "GCS",
      "at300": 15,
      "at200": 13,
      "at100": 11,
      "at0": 3,
      "type": "integer"
    },
    {
      "name": "Weight",
      "at300": 85,
      "at200": 85,
      "at100": 85,
      "at0": 85,
      "type": "integer"
    }
  ],
  "tests": [
    {
      "name": "General",
      "labID": "physicalexam",
      "type": "string",
      "result": "Si fuera un paciente real, aquí verías los hallazgos de mi examen físico. Como soy el paciente del tutorial, ¡me encuentro bien!",
      "at300": "",
      "at200": "",
      "at100": "",
      "at0": ""
    },
    {
      "name": "Hemograma: plaquetas",
      "labID": "cbc",
      "type": "",
      "result": "",
      "at300": 200,
      "at200": 150,
      "at100": 80,
      "at0": 40,
      "tip": {
        "response": "Después de solicitar un estudio o aplicar un tratamiento, puedes recibir un comentario como este. El hemograma está en proceso y aparece como «Pendiente» en Laboratorios/Diagnóstico. Cada estudio pendiente muestra los segundos restantes hasta obtener sus resultados. Al finalizar el contador aparecerán todos los valores correspondientes: en el hemograma, las plaquetas, los leucocitos y el hematocrito.",
        "score": 100,
        "image": "cat2.png"
      },
      "analyte": "platelets",
      "unit": "×10^3/μL"
    },
    {
      "name": "Hemograma: recuento de leucocitos",
      "labID": "cbc",
      "type": "",
      "result": "",
      "at300": 12,
      "at200": 15,
      "at100": 20,
      "at0": 30
    },
    {
      "name": "Hemograma: hematocrito",
      "labID": "cbc",
      "type": "",
      "result": "",
      "at300": 30,
      "at200": 35,
      "at100": 32,
      "at0": 34
    },
    {
      "name": "Sodio",
      "labID": "cmp",
      "type": "",
      "result": "",
      "at300": 145,
      "at200": 135,
      "at100": 142,
      "at0": 138,
      "tip": {
        "response": "¡El panel metabólico está en proceso! Cuando termine, la creatinina y la bilirrubina se incorporarán al cálculo de SOFA. Puedes pulsar la puntuación para consultar el desglose de cada componente. NEWS cambia con los signos vitales actuales.",
        "score": 100,
        "image": "cat2.png"
      }
    },
    {
      "name": "Potasio",
      "labID": "cmp",
      "type": "decimal1",
      "result": "",
      "at300": 4,
      "at200": 5,
      "at100": 4,
      "at0": 5
    },
    {
      "name": "Cloro",
      "labID": "cmp",
      "type": "",
      "result": "",
      "at300": 106,
      "at200": 100,
      "at100": 106,
      "at0": 100
    },
    {
      "name": "Bicarbonato",
      "labID": "cmp",
      "type": "",
      "result": "",
      "at300": 30,
      "at200": 20,
      "at100": 15,
      "at0": 10
    },
    {
      "name": "Nitrógeno ureico en sangre (BUN)",
      "labID": "cmp",
      "type": "",
      "result": "",
      "at300": 15,
      "at200": 25,
      "at100": 30,
      "at0": 50
    },
    {
      "name": "Creatinina",
      "labID": "cmp",
      "type": "decimal2",
      "result": "",
      "at300": 1.2,
      "at200": 1.4,
      "at100": 2,
      "at0": 8,
      "unit": "mg/dL",
      "analyte": "creatinine"
    },
    {
      "name": "Glucosa",
      "labID": "cmp",
      "type": "",
      "result": "",
      "at300": 80,
      "at200": 180,
      "at100": 250,
      "at0": 40
    },
    {
      "name": "Bilirrubina total",
      "labID": "cmp",
      "type": "decimal1",
      "result": "",
      "at300": 1.4,
      "at200": 3,
      "at100": 6,
      "at0": 10,
      "unit": "mg/dL",
      "analyte": "bilirubin"
    },
    {
      "name": "Alanina aminotransferasa (ALT)",
      "labID": "cmp",
      "type": "",
      "result": "",
      "at300": 60,
      "at200": 100,
      "at100": 200,
      "at0": 800
    },
    {
      "name": "Gasometría arterial: pH",
      "labID": "abg",
      "type": "decimal2",
      "result": "",
      "at300": 7.44,
      "at200": 7.36,
      "at100": 7.3,
      "at0": 7,
      "tip": {
        "response": "¡Ya solicitaste los tres estudios! Cuando estén disponibles, SOFA incorporará la gasometría, las plaquetas, la bilirrubina y la creatinina. El diagnóstico debe acompañarse de tratamiento: ahora tienes habilitado un tratamiento de práctica. Pruébalo y observa la posición del paciente y sus puntuaciones.",
        "score": 100,
        "image": "cat2.png"
      }
    },
    {
      "name": "Gasometría arterial: presión de oxígeno (PaO₂)",
      "labID": "abg",
      "type": "",
      "result": "",
      "at300": 95,
      "at200": 70,
      "at100": 60,
      "at0": 50,
      "analyte": "pao2",
      "unit": "mmHg"
    },
    {
      "name": "Gasometría arterial: presión de dióxido de carbono (PaCO₂)",
      "labID": "abg",
      "type": "",
      "result": "",
      "at300": 45,
      "at200": 35,
      "at100": 30,
      "at0": 20
    }
  ],
  "treatments": [
    {
      "id": "goodtreat",
      "value": 7,
      "valueBelow200": "",
      "valueBelow100": "",
      "below300": {
        "response": "¡Así está mejor! Cuando un paciente recibe un tratamiento adecuado, su salud aumenta. Quizá la recuperación todavía sea lenta; probemos ahora el último tratamiento.",
        "score": 100,
        "image": "cat2.png"
      }
    },
    {
      "id": "badtreat",
      "value": -5,
      "valueBelow200": "",
      "valueBelow100": "",
      "below300": {
        "response": "Ese tratamiento no fue adecuado. La salud puede empeorar cuando se aplica un tratamiento incorrecto: lo verás en el descenso del retrato. Probemos ahora el tratamiento adecuado.",
        "score": 100,
        "image": "cat2.png"
      }
    },
    {
      "id": "healtreat",
      "value": 300,
      "valueBelow200": "",
      "valueBelow100": "",
      "below300": {
        "response": "¡Ahora sí! Cuando el tratamiento permite que el paciente llegue hasta la parte superior del panel, se considera recuperado y recibe el alta.",
        "score": 100,
        "image": "cat2.png"
      }
    }
  ],
  "quizzes": [
    {
      "id": "healed_quiz",
      "question": "Pregunta de bonificación: el control del foco puede incluir lo siguiente:",
      "answers": [
        {
          "text": "Drenaje de un absceso o desbridamiento de tejido necrótico infectado",
          "response": "Incorrecto. −200 puntos.",
          "score": -200,
          "image": "cat4.png"
        },
        {
          "text": "Retiro de un dispositivo o catéter potencialmente infectado",
          "response": "Incorrecto. −200 puntos.",
          "score": -200,
          "image": "cat4.png"
        },
        {
          "text": "Procedimiento quirúrgico o de radiología intervencionista, o cultivos de esputo, sangre y orina",
          "response": "Incorrecto. −200 puntos.",
          "score": -200,
          "image": "cat4.png"
        },
        {
          "text": "Todas las anteriores",
          "response": "Correcto. +200 puntos.",
          "score": 200,
          "image": "cat2.png"
        },
        {
          "text": "Ninguna de las anteriores"
        }
      ]
    }
  ],
  "combos": [
    {
      "ids": [
        "goodtreat",
        "healtreat"
      ],
      "number": 2,
      "value": 40,
      "below200": "",
      "below100": "",
      "response": "Además, algunos tratamientos actúan en conjunto y permiten una recuperación más rápida que por separado. Procura completar el manejo de cada paciente.",
      "score": 200,
      "image": "cat2.png"
    }
  ],
  "scoreContext": {
    "supplementalOxygen": false,
    "fio2": 0.21,
    "respiratorySupport": false,
    "assumedAir": true
  }
};
globalThis.MENUS_ORIGINALES = {
  "TopMenu": [
    {
      "text": "Physical Exam",
      "image": "icons/icon-stethoscope.png",
      "lab": "physicalexam"
    },
    {
      "text": "Labs",
      "image": "icons/labs.png",
      "submenu": "Labs"
    },
    {
      "text": "Imaging",
      "image": "icons/imaging.png",
      "submenu": "Imaging"
    },
    {
      "text": "Treat",
      "image": "icons/treat.png",
      "submenu": "Treatment"
    },
    {
      "text": "Consult",
      "image": "icons/consult.png",
      "submenu": "Consult"
    },
    {
      "text": "Cultures",
      "image": "icons/cultures.png",
      "submenu": "Cultures"
    }
  ],
  "Labs": [
    {
      "text": "Back",
      "submenu": "TopMenu"
    },
    {
      "text": "UA",
      "lab": "ua",
      "duration": 8
    },
    {
      "text": "Lactate",
      "lab": "lactate",
      "duration": 8
    },
    {
      "text": "CBC",
      "lab": "cbc",
      "duration": 8
    },
    {
      "text": "CMP",
      "lab": "cmp",
      "duration": 8
    },
    {
      "text": "ABG",
      "lab": "abg",
      "duration": 8
    },
    {
      "text": "Troponins",
      "lab": "troponins",
      "duration": 8
    },
    {
      "text": "DIC Panel",
      "lab": "dicpanel",
      "duration": 8
    }
  ],
  "Imaging": [
    {
      "text": "Back",
      "submenu": "TopMenu"
    },
    {
      "text": "Chest X-Ray",
      "lab": "chestxray",
      "duration": 12
    },
    {
      "text": "EKG",
      "lab": "ekg",
      "duration": 12
    },
    {
      "text": "Chest CT",
      "lab": "chestct",
      "duration": 12
    },
    {
      "text": "Abdominal CT",
      "lab": "abdominalct",
      "duration": 12
    },
    {
      "text": "Echocardiogram",
      "lab": "echocardiogram",
      "duration": 12
    }
  ],
  "Treatment": [
    {
      "text": "Back",
      "submenu": "TopMenu"
    },
    {
      "text": "Antibiotics",
      "submenu": "Antibiotics"
    },
    {
      "text": "Fluids",
      "submenu": "Fluids"
    },
    {
      "text": "Pressors",
      "submenu": "Pressors"
    },
    {
      "text": "Aspirin",
      "treatment": "aspirin",
      "duration": 1000
    },
    {
      "text": "Heparin",
      "treatment": "heparin",
      "duration": 1000
    },
    {
      "text": "Chest Tube Placement",
      "treatment": "chesttube",
      "duration": 1000,
      "usesperpatient": 1
    },
    {
      "text": "Remove Central Line",
      "treatment": "removecentralline",
      "duration": 1000,
      "usesperpatient": 1
    }
  ],
  "Antibiotics": [
    {
      "text": "Back",
      "submenu": "Treatment"
    },
    {
      "text": "Cefazolin ",
      "treatment": "cefazolin",
      "duration": 1000
    },
    {
      "text": "Ceftriaxone",
      "treatment": "ceftriaxone",
      "duration": 1000
    },
    {
      "text": "Cefepime",
      "treatment": "cefepime",
      "duration": 1000
    },
    {
      "text": "Vancomycin",
      "treatment": "vancomycin",
      "duration": 1000
    },
    {
      "text": "Meropenem",
      "treatment": "meropenem",
      "duration": 1000
    },
    {
      "text": "Piperacillin-tazobactam (Zosyn)",
      "treatment": "zosyn",
      "duration": 1000
    },
    {
      "text": "Levofloxacin",
      "treatment": "levofloxacin",
      "duration": 1000
    }
  ],
  "Fluids": [
    {
      "text": "Back",
      "submenu": "Treatment"
    },
    {
      "text": "D5 1/2 NS 500ml Bolus",
      "treatment": "d5halfnormalsaline500cc",
      "duration": 20
    },
    {
      "text": "IV NS, 500 ml Bolus",
      "treatment": "ivnormalsaline500ml",
      "duration": 20
    },
    {
      "text": "IV NS, 1000 ml Bolus",
      "treatment": "ivnormalsaline1000ml",
      "duration": 40
    }
  ],
  "Pressors": [
    {
      "text": "Back",
      "submenu": "Treatment"
    },
    {
      "text": "Norepinephrine",
      "treatment": "norepinephrine",
      "duration": 1000
    },
    {
      "text": "Dopamine",
      "treatment": "dopamine",
      "duration": 1000
    },
    {
      "text": "Dobutamine",
      "treatment": "dobutamine",
      "duration": 1000
    }
  ],
  "Consult": [
    {
      "text": "Back",
      "submenu": "TopMenu"
    },
    {
      "text": "ICU Transfer",
      "treatment": "icutransfer",
      "duration": 1,
      "usesperpatient": 2
    },
    {
      "text": "Revascularize",
      "treatment": "revascularization",
      "duration": 1
    },
    {
      "text": "Interventional Radiology",
      "treatment": "interventionalradiology",
      "duration": 1
    },
    {
      "text": "GI-ERCP",
      "treatment": "giercp",
      "duration": 1
    },
    {
      "text": "Surgery",
      "treatment": "surgery",
      "duration": 1
    }
  ],
  "Cultures": [
    {
      "text": "Back",
      "submenu": "TopMenu"
    },
    {
      "text": "Blood Cultures",
      "lab": "bloodcultures"
    },
    {
      "text": "Urine Cultures",
      "lab": "urinecultures"
    }
  ]
};
globalThis.MENUS_TUTORIAL = {
  "TopMenu": [
    {
      "text": "Physical Exam",
      "image": "icons/icon-stethoscope.png",
      "lab": "physicalexam",
      "unlock": [
        "CBC"
      ]
    },
    {
      "text": "Labs",
      "image": "icons/labs.png",
      "submenu": "Labs"
    },
    {
      "text": "Treat",
      "image": "icons/treat.png",
      "submenu": "Treatment"
    }
  ],
  "Labs": [
    {
      "text": "Back",
      "submenu": "TopMenu"
    },
    {
      "text": "CBC",
      "lab": "cbc",
      "duration": 8,
      "unlock": [
        "CMP"
      ]
    },
    {
      "text": "CMP",
      "lab": "cmp",
      "duration": 8,
      "unlock": [
        "ABG"
      ]
    },
    {
      "text": "ABG",
      "lab": "abg",
      "duration": 8,
      "unlock": [
        "A Bad Treatment"
      ]
    }
  ],
  "Treatment": [
    {
      "text": "Back",
      "submenu": "TopMenu"
    },
    {
      "text": "A Good Treatment",
      "treatment": "goodtreat",
      "duration": 20,
      "unlock": [
        "A Healing Treatment"
      ]
    },
    {
      "text": "A Bad Treatment",
      "treatment": "badtreat",
      "duration": 10,
      "unlock": [
        "A Good Treatment"
      ]
    },
    {
      "text": "A Healing Treatment",
      "treatment": "healtreat",
      "duration": 1000
    }
  ]
};