const CatalystApp = (function () {
            'use strict';

            // 01. SITE CONFIGURATION
            const SiteConfig = {
                brandName: 'Catalyst Education',
                parentEntity: 'EdufinGrow LLP',
                legalDisclosure: 'Catalyst Education is an educational brand owned and operated by EdufinGrow LLP.',
                contact: {
                    address: '65, Jodhpur Park, Kolkata, West Bengal 700068',
                    email: 'info@catalysteducation.net',
                    website: 'www.catalysteducation.net',
                    phone: '+91 91631 94805',
                    mapShortUrl: 'https://maps.app.goo.gl/uCdQUWaw2RVJAuqQA'
                },
                // Google Form embed URLs (Send → <> Embed → copy src="...")
                // Site uses these for free/static hosting (GitHub Pages). PHP forms stay in the HTML but are hidden.
                googleForms: {
                    enquiry: 'https://docs.google.com/forms/d/e/1FAIpQLScOttQdU9aIUoRo-_97d0GLbk_XLVTTSfbvRLPvfTbDrSgEHA/viewform?embedded=true',
                    mockTest: 'https://docs.google.com/forms/d/e/1FAIpQLSd9ikSwXF8GQB8AGvDFhpi3MNfLUvlIkLnWElAWN3hPZ0gQ7w/viewform?embedded=true'
                },
                features: {
                    autoOpenMockPopup: false,
                    // true = show Google Forms only (no PHP contact/register). Required for GitHub Pages.
                    useGoogleFormsOnly: true
                }
            };

            // 02. MODULAR CONTENT STORE
            const ContentStore = {
                banners: [
                    {
                        id: 'banner-1-free-preboard',
                        active: true,
                        badge: 'FREE PRE-BOARD MOCK TEST • CLASS X',
                        badgeStyle: 'bg-[#DCFCE7] text-[#15803D] border-[#86EFAC]',
                        headline: 'পুজো শেষ, এবার পরীক্ষা শুরু!',
                        subheadline: 'Free Pre-Board Mock Test for Class X Students (ICSE, CBSE & WBBSE)',
                        description: 'A full board-pattern run before school pre-boards, in a timed exam setting. Completely free. No course purchase needed.',
                        boardsPill: ['ICSE (Class X)', 'CBSE (Class X)', 'WBBSE (Class X)'],
                        ctaLabel: 'Register for Free Test',
                        ctaActionType: 'register-free',
                        ctaBoardDefault: 'ICSE',
                        secondaryLabel: 'Select Your Goal',
                        secondaryTarget: '#select-your-goal',
                        themeGradient: 'from-[#16233B] via-[#1D3B8B] to-[#0F172A]',
                        artworkTag: '',
                        highlightBoxTitle: '100% FREE Pre-Board Practice Test',
                        highlightBoxSub: 'No course purchase required',
                        highlightBullets: [
                            'Timed Class X papers in board pattern',
                            'Answer paper check with clear feedback',
                            'Open to ICSE, CBSE and WBBSE students'
                        ]
                    },
                    {
                        id: 'banner-2-festival-offers',
                        active: true,
                        badge: 'FESTIVAL & SEASONAL ACADEMIC OFFERS',
                        badgeStyle: 'bg-[#FFF3B0] text-midnight border-[#F2D06B]',
                        headline: 'Festival Scholarship & Test Series Offer',
                        subheadline: 'Seasonal benefits on Target 2027 Final Board Mock Test Series (ICSE, CBSE & WBBSE)',
                        description: 'Limited seasonal benefits on Class X and XII Final Series and 1:6 batch programmes. Ask us for current offer details and fees.',
                        boardsPill: ['Seasonal Offer', 'Target 2027 Mock Series', 'Contact for Details'],
                        ctaLabel: 'Explore Offer',
                        ctaActionType: 'scroll-goal',
                        ctaBoardDefault: 'CBSE',
                        secondaryLabel: 'Enquire Offer Details',
                        secondaryTarget: '#contact',
                        themeGradient: 'from-[#4A1525] via-[#881337] to-[#16233B]',
                        artworkTag: 'Seasonal Promotional Offer',
                        highlightBoxTitle: 'Festive Enrolment Benefits',
                        highlightBoxSub: 'Ask us for current offer details & fees',
                        highlightBullets: [
                            'Seasonal fee benefits on Final Series',
                            'Covers Class X and XII board mocks',
                            'Details shared on enquiry'
                        ]
                    },
                    {
                        id: 'banner-3-new-courses',
                        active: true,
                        badge: 'NEWLY LAUNCHED COURSES • TARGET 2027',
                        badgeStyle: 'bg-[#E0EAFF] text-soothingBlue border-[#93B4FF]',
                        headline: 'Target 2027: Final Board Mock Test Series',
                        subheadline: 'Full-syllabus board simulation for Class X & XII (ICSE, CBSE & WBBSE)',
                        description: 'Board-pattern question papers, instant answer paper evaluation and guidance, plus 1-on-1 doubt clearing after each test.',
                        boardsPill: ['Target 2027 CISCE', 'Target 2027 CBSE', 'Target 2027 WBBSE'],
                        ctaLabel: 'Explore Test Series',
                        ctaActionType: 'open-board',
                        ctaBoardDefault: 'ICSE',
                        secondaryLabel: 'View Subject Syllabus',
                        secondaryTarget: '#syllabus',
                        themeGradient: 'from-[#0F2942] via-[#1D3B8B] to-[#1E293B]',
                        artworkTag: 'New Academic Initiative',
                        highlightBoxTitle: 'Structured Board Practice',
                        highlightBoxSub: 'Full-length papers • Examiner marking scheme',
                        highlightBullets: [
                            'Full-syllabus papers for Class X and XII',
                            'Answer paper evaluation and feedback sharing',
                            '1-on-1 doubt clearing with faculty'
                        ]
                    },
                    {
                        id: 'banner-4-additional-promo',
                        active: false,
                        badge: 'UPCOMING ACADEMIC INITIATIVE',
                        badgeStyle: 'bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]',
                        headline: 'School Annual Examination Test Series*',
                        subheadline: 'Foundation Programmes: Coming Soon',
                        description: 'Structured practice for school annual examinations for younger classes.',
                        boardsPill: ['Foundation Track', 'Coming Soon'],
                        ctaLabel: 'View Foundation Status',
                        ctaActionType: 'open-board',
                        ctaBoardDefault: 'FOUNDATION',
                        secondaryLabel: 'Contact Us',
                        secondaryTarget: '#contact',
                        themeGradient: 'from-[#1E293B] via-[#334155] to-[#0F172A]',
                        artworkTag: 'Future Expansion',
                        highlightBoxTitle: 'Coming Soon',
                        highlightBoxSub: 'Foundation Annual Exam Test Series',
                        highlightBullets: [
                            'School annual exam practice series',
                            'Designed for younger foundation classes',
                            'Register interest before launch'
                        ]
                    }
                ],

                boardProgrammes: {
                    ICSE: {
                        key: 'ICSE',
                        pageTitle: 'ICSE Programmes',
                        breadcrumb: 'ICSE Programmes',
                        subtitle: 'Choose between our 100% Free Pre-Board Practice Test or our structured Final Board Mock Test Series for Class X ICSE (CISCE).',
                        programmes: [
                            {
                                id: 'icse-prog-a-free',
                                type: 'FREE',
                                badgeText: '100% FREE',
                                subBadgeText: 'No Course Purchase Required',
                                name: 'Target 2027 CISCE: Pre-Board Practice Test',
                                forYou: 'If you are in Class X ICSE and want a free timed run before school pre-boards, this is for you.',
                                youGet: 'You sit a board-pattern paper, get your answers checked, and walk away knowing where you stand.',
                                priceDisplay: '100% FREE',
                                highlightNote: 'No Course Purchase Required',
                                ctaLabel: 'Register for Free Test',
                                boardCode: 'ICSE'
                            },
                            {
                                id: 'icse-prog-b-paid',
                                type: 'PAID',
                                badgeText: 'PAID PROGRAMME • FINAL SERIES',
                                subBadgeText: 'Target 2027 CISCE Board',
                                name: 'Target 2027 CISCE: Final Board Mock Test Series',
                                forYou: 'If you are targeting ICSE 2027 and want full-length board-style mocks with feedback, this is for you.',
                                youGet: 'You practise under exam conditions, get answer papers evaluated, and clear doubts after every test.',
                                priceDisplay: 'Contact us for fees & schedule',
                                highlightNote: 'Full-Length CISCE Pattern Mock Papers',
                                ctaLabel: 'Ask for fees & schedule',
                                secondaryCtaLabel: 'WhatsApp Us',
                                whatsapp: true,
                                boardCode: 'ICSE'
                            }
                        ]
                    },
                    CBSE: {
                        key: 'CBSE',
                        pageTitle: 'CBSE Programmes',
                        breadcrumb: 'CBSE Programmes',
                        subtitle: 'Choose between our 100% Free Pre-Board Practice Test or our structured Final Board Mock Test Series for Class X CBSE.',
                        programmes: [
                            {
                                id: 'cbse-prog-a-free',
                                type: 'FREE',
                                badgeText: '100% FREE',
                                subBadgeText: 'No Course Purchase Required',
                                name: 'Target 2027 CBSE: Pre-Board Practice Test',
                                forYou: 'If you are in Class X CBSE and want a free check before school pre-boards, this is for you.',
                                youGet: 'You attempt a board-pattern paper, get feedback, and see what still needs work.',
                                priceDisplay: '100% FREE',
                                highlightNote: 'No Course Purchase Required',
                                ctaLabel: 'Register for Free Test',
                                boardCode: 'CBSE'
                            },
                            {
                                id: 'cbse-prog-b-paid',
                                type: 'PAID',
                                badgeText: 'PAID PROGRAMME • FINAL SERIES',
                                subBadgeText: 'Target 2027 CBSE Board',
                                name: 'Target 2027 CBSE: Final Board Mock Test Series',
                                forYou: 'If you are preparing for CBSE Class X 2027 and want structured board-pattern mocks, this is for you.',
                                youGet: 'You practise competency-style papers, get evaluated scripts, and clear doubts after each test.',
                                priceDisplay: 'Contact us for fees & schedule',
                                highlightNote: 'Latest NCERT & CBSE Competency Pattern',
                                ctaLabel: 'Ask for fees & schedule',
                                secondaryCtaLabel: 'WhatsApp Us',
                                whatsapp: true,
                                boardCode: 'CBSE'
                            }
                        ]
                    },
                    WBBSE: {
                        key: 'WBBSE',
                        pageTitle: 'WBBSE Programmes',
                        breadcrumb: 'WBBSE Programmes',
                        subtitle: 'Choose between our 100% Free Pre-Board Practice Test or our structured Final Board Mock Test Series for Class X WBBSE.',
                        programmes: [
                            {
                                id: 'wbbse-prog-a-free',
                                type: 'FREE',
                                badgeText: '100% FREE',
                                subBadgeText: 'No Course Purchase Required',
                                name: 'Target 2027 WBBSE: Pre-Board Practice Test',
                                forYou: 'If you are in Class X WBBSE / Madhyamik and want a free timed practice before school pre-boards, this is for you.',
                                youGet: 'You write a board-style paper, get it checked, and understand your readiness early.',
                                priceDisplay: '100% FREE',
                                highlightNote: 'No Course Purchase Required',
                                ctaLabel: 'Register for Free Test',
                                boardCode: 'WBBSE'
                            },
                            {
                                id: 'wbbse-prog-b-paid',
                                type: 'PAID',
                                badgeText: 'PAID PROGRAMME • FINAL SERIES',
                                subBadgeText: 'Target 2027 WBBSE Board',
                                name: 'Target 2027 WBBSE: Final Board Mock Test Series',
                                forYou: 'If you are aiming for Madhyamik 2027 and want board-oriented mocks with feedback, this is for you.',
                                youGet: 'You practise WBBSE-pattern papers (English or Bengali medium), get evaluation, and clear doubts.',
                                priceDisplay: 'Contact us for fees & schedule',
                                highlightNote: 'WBBSE Madhyamik Pattern • English & Bengali Medium',
                                ctaLabel: 'Ask for fees & schedule',
                                secondaryCtaLabel: 'WhatsApp Us',
                                whatsapp: true,
                                boardCode: 'WBBSE'
                            }
                        ]
                    },
                    CLASS12: {
                        key: 'CLASS12',
                        pageTitle: 'Class 12 Programmes',
                        breadcrumb: 'Class 12 Programmes',
                        subtitle: 'Mock test series and 1:6 batch support for ISC, CBSE Class 12, and WBCHSE. Contact us for fees and schedule.',
                        programmes: [
                            {
                                id: 'class12-prog-mock',
                                type: 'PAID',
                                badgeText: 'CLASS 12 • FINAL SERIES',
                                subBadgeText: 'ISC • CBSE • WBCHSE',
                                name: 'Target 2027: Class 12 Board Mock Test Series',
                                forYou: 'If you are in Class 11–12 (ISC, CBSE, or WBCHSE) and want full-length board mocks, this is for you.',
                                youGet: 'You practise under board conditions, get scripts evaluated, and clear doubts one-on-one after each test.',
                                priceDisplay: 'Contact us for fees & schedule',
                                highlightNote: 'Physics, Chemistry, Maths, Biology tracks',
                                ctaLabel: 'Ask for fees & schedule',
                                secondaryCtaLabel: 'WhatsApp Us',
                                boardCode: 'CLASS12',
                                whatsapp: true
                            }
                        ]
                    },
                    FOUNDATION: {
                        key: 'FOUNDATION',
                        pageTitle: 'Foundation Programmes',
                        breadcrumb: 'Foundation Programmes',
                        subtitle: 'Future programmes for school annual examination preparation.',
                        programmes: [
                            {
                                id: 'foundation-prog-soon',
                                type: 'COMING_SOON',
                                badgeText: 'Coming Soon',
                                subBadgeText: 'Coming Soon',
                                name: 'School Annual Examination Test Series*',
                                forYou: 'If you are in the junior classes and want structured practice for school annual exams, this track is being built for you.',
                                youGet: 'Soon: subject-wise practice papers and guided preparation for school annual examinations.',
                                statusDisplay: 'Coming Soon',
                                footnote: '*Coming soon. Classes, subjects, boards, and test structure will be finalised later.',
                                ctaLabel: 'Registration Opening Soon',
                                boardCode: 'Foundation'
                            }
                        ]
                    }
                },

                boardCountdowns: {
                    CBSE: { title: 'CBSE Board Exam', targetIso: '2027-02-15T10:30:00+05:30', targetLabel: 'Target: Feb 15, 2027' },
                    ICSE: { title: 'ICSE & ISC Exam', targetIso: '2027-02-18T11:00:00+05:30', targetLabel: 'Target: Feb 18, 2027' },
                    WBBSE: { title: 'WBBSE Madhyamik', targetIso: '2027-02-10T11:45:00+05:30', targetLabel: 'Target: Feb 10, 2027' },
                    WBCHSE: { title: 'WBCHSE Higher Sec', targetIso: '2027-03-03T10:00:00+05:30', targetLabel: 'Target: Mar 3, 2027' }
                },

                faculty: [
                    {
                        id: 'fac-alapan-roy',
                        active: true,
                        name: 'Alapan Roy',
                        role: 'Lead Mentor & Academic Head',
                        specialization: 'Board exam strategy, concept building, and answer paper evaluation with feedback sharing.',
                        experience: 'Lead Mentor',
                        badge: 'Lead Faculty'
                    },
                    {
                        id: 'fac-slot-2',
                        active: true,
                        name: 'Science Faculty Panel',
                        role: 'Physics, Chemistry & Biology mentors',
                        specialization: 'Numerical problem-solving, diagram precision, and board marking scheme audits.',
                        experience: 'ICSE, ISC, CBSE, WBBSE & WBCHSE',
                        badge: 'Subject Panel'
                    },
                    {
                        id: 'fac-slot-3',
                        active: true,
                        name: 'Mathematics Faculty Panel',
                        role: 'Mathematics & analytical reasoning mentors',
                        specialization: 'Step-marking practice, speed drills, and post-test doubt clearing.',
                        experience: 'Classes 9 to 12 • All Boards',
                        badge: 'Subject Panel'
                    }
                ],

                syllabusDatabase: {
                    ICSE10: {
                        Physics: {
                            focus: 'Ray diagrams, numerical unit conversions & circuit resistance derivations.',
                            units: [
                                { title: 'Force, Work, Power & Energy', marks: '22 Marks', points: ['Newton’s laws and free-body diagrams', 'Work-energy theorem and power calculations', 'Machines: MA, VR and efficiency'], tip: 'Always write units after every final numerical answer.' },
                                { title: 'Light & Spectrum', marks: '18 Marks', points: ['Reflection, refraction and Snell’s law', 'Lens/mirror formula with sign convention', 'Dispersion, spectrum and colour'], tip: 'Draw neat ray diagrams; half the marks sit in the figure.' },
                                { title: 'Sound & Current Electricity', marks: '24 Marks', points: ['Wave speed, frequency and echo problems', 'Ohm’s law and series-parallel circuits', 'Heating effect and household wiring basics'], tip: 'Show resistance combination steps before substituting values.' },
                                { title: 'Heat & Modern Physics', marks: '16 Marks', points: ['Calorimetry and specific heat', 'Latent heat change of state', 'Radioactivity and atomic models overview'], tip: 'Convert °C/K carefully in heat equations.' }
                            ]
                        },
                        Chemistry: {
                            focus: 'Balanced equations, observation tables & gas identification tests.',
                            units: [
                                { title: 'Periodic Table & Chemical Bonding', marks: '18 Marks', points: ['Periods, groups and periodic trends', 'Ionic vs covalent bonding with examples', 'Lewis structures and polarity'], tip: 'Link property questions back to electronic configuration.' },
                                { title: 'Study of Acids, Bases & Salts + Mole Concept', marks: '22 Marks', points: ['pH, indicators and neutralisation', 'Preparation and uses of common salts', 'Mole, molar mass and stoichiometric ratios'], tip: 'Balance the equation before starting any mole calculation.' },
                                { title: 'Metallurgy & Study of Compounds HCl, NH3, HNO3, H2SO4', marks: '24 Marks', points: ['Extraction and refining stages', 'Laboratory preparation of key compounds', 'Properties, tests and industrial uses'], tip: 'Observation tables must match the expected colour / smell change.' },
                                { title: 'Organic Chemistry & IUPAC Nomenclature', marks: '16 Marks', points: ['Homologous series and functional groups', 'IUPAC naming of simple organics', 'Isomerism and typical reactions'], tip: 'Practise naming and structure conversion both ways.' }
                            ]
                        },
                        Mathematics: {
                            focus: 'Step-by-step theorem proofs, ogive graphs & heights and distances.',
                            units: [
                                { title: 'Commercial Maths & Algebra', marks: '28 Marks', points: ['GST, shares and banking applications', 'Quadratic equations and factorisation', 'Simultaneous linear equations'], tip: 'Write each algebraic step; method marks are generous.' },
                                { title: 'Geometry & Circles', marks: '20 Marks', points: ['Circle theorems and tangent properties', 'Similar triangles applications', 'Constructions with justification'], tip: 'State the theorem name before using it in a proof.' },
                                { title: 'Mensuration & Trigonometry', marks: '20 Marks', points: ['Surface area and volume of solids', 'Trig ratios and identities', 'Heights and distances'], tip: 'Sketch the figure and mark known angles first.' },
                                { title: 'Statistics & Probability', marks: '12 Marks', points: ['Mean, median and mode', 'Ogive and histogram interpretation', 'Basic probability events'], tip: 'Check class intervals before reading cumulative frequency.' }
                            ]
                        },
                        Biology: {
                            focus: 'Labelled biological diagrams, location/function tables & genetic crosses.',
                            units: [
                                { title: 'Basic Biology & Cell Division', marks: '14 Marks', points: ['Cell structure and organelles', 'Mitosis vs meiosis stages', 'Chromosome behaviour'], tip: 'Label diagrams with straight lines and exact terms.' },
                                { title: 'Plant Physiology: Transpiration & Photosynthesis', marks: '22 Marks', points: ['Stomatal mechanism and factors', 'Light and dark reactions overview', 'Experiments and observations'], tip: 'Link each factor to rate of process clearly.' },
                                { title: 'Human Anatomy: Circulatory, Excretory, Nervous & Endocrine', marks: '32 Marks', points: ['Heart, vessels and circulation path', 'Nephron and urine formation', 'Reflex arc, brain parts and hormones'], tip: 'Use location-function tables for endocrine questions.' },
                                { title: 'Population & Pollution', marks: '12 Marks', points: ['Population growth concerns', 'Air, water and soil pollution', 'Control and conservation measures'], tip: 'Give one precise example with each pollution type.' }
                            ]
                        }
                    },
                    CBSE10: {
                        Physics: {
                            focus: 'NCERT exemplar numericals, sign convention & competency case studies.',
                            units: [
                                { title: 'Light: Reflection & Refraction', marks: '12 Marks', points: ['Mirror and lens formulae', 'Sign convention practice', 'Power of lens and combination'], tip: 'Competency questions often hide data in a short paragraph.' },
                                { title: 'The Human Eye & Colourful World', marks: '5 Marks', points: ['Defects of vision and correction', 'Dispersion and atmospheric refraction', 'Scattering of light'], tip: 'Match each defect to the correct lens quickly.' },
                                { title: 'Electricity', marks: '12 Marks', points: ['Ohm’s law and resistivity', 'Series vs parallel circuits', 'Electric power and energy bills'], tip: 'Draw the circuit before writing equations.' },
                                { title: 'Magnetic Effects of Electric Current', marks: '6 Marks', points: ['Magnetic field around a conductor', 'Fleming’s left-hand rule', 'Electric motor basics'], tip: 'State the rule direction carefully in answers.' }
                            ]
                        },
                        Chemistry: {
                            focus: 'Assertion-reasoning questions, redox identification & functional groups.',
                            units: [
                                { title: 'Chemical Reactions & Equations', marks: '6 Marks', points: ['Types of reactions', 'Balancing and redox clues', 'Effects of oxidation in daily life'], tip: 'Identify reaction type before writing products.' },
                                { title: 'Acids, Bases & Salts', marks: '6 Marks', points: ['pH scale and indicators', 'Important salts and uses', 'Neutralisation applications'], tip: 'Assertion-reason pairs often test pH logic.' },
                                { title: 'Metals & Non-Metals', marks: '7 Marks', points: ['Reactivity series', 'Ionic compounds properties', 'Extraction and corrosion'], tip: 'Use reactivity series to predict displacement.' },
                                { title: 'Carbon & Its Compounds', marks: '6 Marks', points: ['Covalent bonding in carbon', 'Homologous series and nomenclature', 'Soap/detergent cleansing action'], tip: 'Practise functional-group identification drills.' }
                            ]
                        },
                        Mathematics: {
                            focus: 'Case-based questions, quadratic word problems & surface area combinations.',
                            units: [
                                { title: 'Number Systems & Algebra', marks: '26 Marks', points: ['Real numbers and Euclid’s algorithm', 'Polynomials and zeroes', 'Quadratic and linear equations'], tip: 'Case-based items reward clear assumption statements.' },
                                { title: 'Coordinate Geometry & Geometry', marks: '21 Marks', points: ['Distance and section formula', 'Triangles and circles theorems', 'Constructions'], tip: 'Mark given lengths on the figure first.' },
                                { title: 'Trigonometry & Mensuration', marks: '22 Marks', points: ['Trig identities and ratios', 'Heights and distances', 'Surface areas and volumes'], tip: 'Convert all units before volume calculations.' },
                                { title: 'Statistics & Probability', marks: '11 Marks', points: ['Mean of grouped data', 'Median and mode', 'Simple probability'], tip: 'Check if data is discrete or continuous.' }
                            ]
                        },
                        Biology: {
                            focus: 'Flowcharts for human digestion/circulation & Mendelian dihybrid ratios.',
                            units: [
                                { title: 'Life Processes', marks: '10 Marks', points: ['Nutrition and digestion path', 'Respiration and transport', 'Excretion overview'], tip: 'Flowcharts score well when arrows are labelled.' },
                                { title: 'Control & Coordination', marks: '6 Marks', points: ['Nervous system basics', 'Hormones in animals and plants', 'Reflex action'], tip: 'Differentiate nervous vs hormonal control clearly.' },
                                { title: 'How Do Organisms Reproduce', marks: '7 Marks', points: ['Asexual methods', 'Human reproductive system', 'Reproductive health'], tip: 'Use precise biological terms, not casual language.' },
                                { title: 'Heredity & Our Environment', marks: '7 Marks', points: ['Mendelian inheritance', 'Sex determination', 'Ecosystems and management of resources'], tip: 'Write Punnett squares neatly for genetic crosses.' }
                            ]
                        }
                    },
                    WBBSE10: {
                        Physics: {
                            focus: 'PV=nRT numericals, lens formula proofs & English/Bengali terminology.',
                            units: [
                                { title: 'Concerns About Our Environment & Behaviour of Gases', marks: '12 Marks', points: ['Environmental physics ideas', 'Gas laws and PV=nRT', 'Pressure and temperature relations'], tip: 'Keep SI units consistent in gas equations.' },
                                { title: 'Light & Current Electricity', marks: '24 Marks', points: ['Lens/mirror formulae', 'Ohm’s law and circuits', 'English and Bengali key terms'], tip: 'Practise terminology in your exam medium.' },
                                { title: 'Thermal Phenomena & Atomic Nucleus', marks: '14 Marks', points: ['Heat transfer modes', 'Calorimetry basics', 'Nuclear structure overview'], tip: 'State assumptions before calorimetry sums.' }
                            ]
                        },
                        Chemistry: {
                            focus: 'Electrodes reactions, industrial preparation conditions & structural isomerism.',
                            units: [
                                { title: 'Periodic Table & Ionic/Covalent Bonding', marks: '12 Marks', points: ['Periodic classification', 'Ionic and covalent examples', 'Properties linked to bonding'], tip: 'Compare melting point / conductivity by bond type.' },
                                { title: 'Electrolysis & Inorganic Chemistry in Lab', marks: '14 Marks', points: ['Electrode reactions', 'Lab preparation conditions', 'Observation-based questions'], tip: 'Write anode/cathode products separately.' },
                                { title: 'Metallurgy & Organic Chemistry', marks: '14 Marks', points: ['Metal extraction outline', 'Functional groups', 'Structural isomerism'], tip: 'Draw isomers with clear carbon skeletons.' }
                            ]
                        },
                        Mathematics: {
                            focus: 'Madhyamik geometric rider proofs, mensuration solids & median/mode tables.',
                            units: [
                                { title: 'Arithmetic: Simple/Compound Interest & Partnership', marks: '14 Marks', points: ['SI and CI formulae', 'Partnership sharing', 'Time-value word problems'], tip: 'Underline principal, rate and time before solving.' },
                                { title: 'Algebra & Quadratic Surds', marks: '22 Marks', points: ['Quadratic equations', 'Surds simplification', 'Linear systems'], tip: 'Rationalise carefully; show each step.' },
                                { title: 'Geometry, Theorems & Constructions', marks: '24 Marks', points: ['Rider proofs', 'Circle and triangle theorems', 'Standard constructions'], tip: 'Begin proofs with Given / To Prove / Construction.' },
                                { title: 'Trigonometry, Mensuration & Statistics', marks: '30 Marks', points: ['Trig applications', 'Solid mensuration', 'Median and mode tables'], tip: 'Tabulate mid-values before finding mean/median.' }
                            ]
                        },
                        Biology: {
                            focus: 'Reflex arc neat diagrams, chromosome movement stages & Nitrogen cycle.',
                            units: [
                                { title: 'Control & Coordination in Living Organisms', marks: '18 Marks', points: ['Nervous coordination', 'Hormonal coordination', 'Reflex arc diagrams'], tip: 'Label receptor, effector and synapse clearly.' },
                                { title: 'Continuity of Life: Cell Division & Reproduction', marks: '18 Marks', points: ['Mitosis and meiosis', 'Reproductive structures', 'Fertilisation overview'], tip: 'Sequence chromosome stages without skipping.' },
                                { title: 'Heredity & Common Genetic Diseases', marks: '16 Marks', points: ['Inheritance patterns', 'Common genetic disorders', 'Variation sources'], tip: 'Use correct disease names and inheritance type.' },
                                { title: 'Evolution, Adaptation & Environment', marks: '28 Marks', points: ['Adaptation examples', 'Evolution ideas', 'Nitrogen cycle and ecology'], tip: 'Connect adaptation to habitat in one clear sentence.' }
                            ]
                        }
                    },
                    CLASS12: {
                        Physics: {
                            focus: 'Phasor diagrams, Huygens wave theory derivations & Kirchhoff loop numericals.',
                            units: [
                                { title: 'Electrostatics & Current Electricity', marks: '16 Marks', points: ['Coulomb’s law and field/potential', 'Capacitors and combinations', 'Kirchhoff’s laws'], tip: 'Assign current directions before writing loop equations.' },
                                { title: 'Magnetic Effects, EMI & Alternating Current', marks: '17 Marks', points: ['Moving charges in magnetic fields', 'Faraday’s law and induction', 'AC circuits and phasors'], tip: 'Draw phasors for LCR before computing impedance.' },
                                { title: 'Ray & Wave Optics', marks: '18 Marks', points: ['Ray optics instruments', 'Interference and diffraction', 'Huygens principle applications'], tip: 'State assumptions in every derivation line.' },
                                { title: 'Dual Nature, Atoms, Nuclei & Semiconductors', marks: '19 Marks', points: ['Photoelectric effect', 'Bohr model and nuclei', 'Semiconductor devices'], tip: 'Keep formulae and graph axes labelled in photoelectric answers.' }
                            ]
                        },
                        Chemistry: {
                            focus: 'Nernst equation problems, named organic mechanisms & conversion roadmaps.',
                            units: [
                                { title: 'Physical Chemistry: Solutions, Electrochemistry & Kinetics', marks: '23 Marks', points: ['Colligative properties', 'Nernst equation and cells', 'Rate laws and order'], tip: 'Track electron flow and cell notation carefully.' },
                                { title: 'Inorganic: d & f Block + Coordination Compounds', marks: '14 Marks', points: ['Transition element trends', 'Lanthanoids overview', 'Coordination nomenclature and isomerism'], tip: 'Practise naming complexes with oxidation numbers.' },
                                { title: 'Organic: Haloalkanes, Alcohols, Carbonyls, Amines & Biomolecules', marks: '33 Marks', points: ['Named reactions and mechanisms', 'Functional group conversions', 'Biomolecule structures'], tip: 'Map conversions as a roadmap before writing reagents.' }
                            ]
                        },
                        Mathematics: {
                            focus: 'Definite integration properties, Bayes theorem & shortest distance in 3D.',
                            units: [
                                { title: 'Relations, Functions & Algebra of Matrices', marks: '18 Marks', points: ['Types of relations and functions', 'Inverse trigonometric ideas', 'Matrices and determinants'], tip: 'Check domain/range before inverting a function.' },
                                { title: 'Calculus: Continuity, Derivatives, Integrals & Differential Eq.', marks: '35 Marks', points: ['Continuity and differentiability', 'Applications of derivatives', 'Definite integrals and DEs'], tip: 'Use standard integral properties to shorten work.' },
                                { title: 'Vectors & 3D Geometry', marks: '14 Marks', points: ['Vector algebra', 'Lines and planes in space', 'Shortest distance problems'], tip: 'Write direction ratios consistently throughout.' },
                                { title: 'Linear Programming & Probability', marks: '13 Marks', points: ['LPP graphical method', 'Conditional probability', 'Bayes theorem'], tip: 'Shade the feasible region before reading vertices.' }
                            ]
                        },
                        Biology: {
                            focus: 'Lac operon schematic, recombinant DNA steps & population growth curves.',
                            units: [
                                { title: 'Reproduction in Flowering Plants & Humans', marks: '16 Marks', points: ['Sexual reproduction in plants', 'Human reproductive system', 'Reproductive health'], tip: 'Sequence gamete formation to fertilisation clearly.' },
                                { title: 'Genetics & Molecular Basis of Inheritance', marks: '20 Marks', points: ['Mendelian extensions', 'DNA replication and code', 'Lac operon'], tip: 'Draw lac operon with inducer state labelled.' },
                                { title: 'Biology & Human Welfare', marks: '12 Marks', points: ['Human health and disease', 'Microbes in human welfare', 'Strategies for food production'], tip: 'Name one microbe with each applied example.' },
                                { title: 'Biotechnology & Ecology', marks: '22 Marks', points: ['rDNA technology steps', 'Biotech applications', 'Population and ecosystem dynamics'], tip: 'List enzyme tools in the correct process order.' }
                            ]
                        }
                    }
                }
            };

            // Build 50 distinct questions for 9th/10th and 50 distinct questions for 11th/12th
            function createQuestionBanks() {
                const base9_10 = [
                    // 15 Easy
                    { id: 'q9_e1', tier: 'Easy', subject: 'Physics', board: 'ALL', q: 'What is the SI unit of electric power?', options: ["Watt","Joule","Volt","Ampere"], ans: 0, exp: 'Watt (W = Joule/second) is the SI unit of power.' },
                    { id: 'q9_e2', tier: 'Easy', subject: 'Chemistry', board: 'ALL', q: 'Which gas turns moist blue litmus paper red and then bleaches it?', options: ["Oxygen","Chlorine","Nitrogen","Hydrogen"], ans: 1, exp: 'Chlorine dissolves in moisture to form acidic HCl and bleaching HOCl.' },
                    { id: 'q9_e3', tier: 'Easy', subject: 'Mathematics', board: 'ALL', q: 'If the roots of 2x² - kx + 8 = 0 are real and equal, what is the positive value of k?', options: ["4","16","8","6"], ans: 2, exp: 'For equal roots, D = b² - 4ac = 0 => k² = 64 => k = 8.' },
                    { id: 'q9_e4', tier: 'Easy', subject: 'Biology', board: 'ALL', q: 'Which plant tissue is responsible for upward conduction of water and minerals?', options: ["Phloem","Collenchyma","Parenchyma","Xylem"], ans: 3, exp: 'Xylem vessels and tracheids conduct water upward from roots.' },
                    { id: 'q9_e5', tier: 'Easy', subject: 'Physics', board: 'ALL', q: 'For a normal human eye, what is the least distance of distinct vision?', options: ["25 cm","2.5 cm","25 m","Infinity"], ans: 0, exp: 'The near point of a healthy human eye is 25 cm.' },
                    { id: 'q9_e6', tier: 'Easy', subject: 'Chemistry', board: 'ALL', q: 'What is the functional group present in Propanone?', options: ["Aldehyde (-CHO)","Ketone (>C=O)","Alcohol (-OH)","Carboxylic acid (-COOH)"], ans: 1, exp: 'The suffix -one denotes a ketone (>C=O) functional group.' },
                    { id: 'q9_e7', tier: 'Easy', subject: 'Mathematics', board: 'ALL', q: 'What is the value of sin² 30° + cos² 30°?', options: ["0","1/2","1","√3/2"], ans: 2, exp: 'By trigonometric identity, sin²θ + cos²θ = 1 for any angle θ.' },
                    { id: 'q9_e8', tier: 'Easy', subject: 'Biology', board: 'ALL', q: 'Where does ultrafiltration take place in the human nephron?', options: ["Loop of Henle","Collecting duct","Ureter","Glomerulus & Bowman’s capsule"], ans: 3, exp: 'High hydrostatic pressure in the glomerulus drives ultrafiltration into Bowman’s capsule.' },
                    { id: 'q9_e9', tier: 'Easy', subject: 'Physics', board: 'ALL', q: 'Which mirror always forms a virtual, erect, and diminished image regardless of object distance?', options: ["Convex mirror","Concave mirror","Plane mirror","Parabolic mirror"], ans: 0, exp: 'A convex mirror diverges rays to form a virtual, erect, diminished image.' },
                    { id: 'q9_e10', tier: 'Easy', subject: 'Chemistry', board: 'ALL', q: 'Which metal is extracted electrolytically from fused alumina dissolved in cryolite?', options: ["Iron","Aluminium","Copper","Zinc"], ans: 1, exp: 'Aluminium is extracted via the Hall-Héroult process using molten cryolite.' },
                    { id: 'q9_e11', tier: 'Easy', subject: 'Mathematics', board: 'ALL', q: 'What is the probability of getting a prime number on a single throw of a fair die?', options: ["1/6","2/3","1/2","1/3"], ans: 2, exp: 'Prime outcomes are {2, 3, 5}, so 3/6 = 1/2.' },
                    { id: 'q9_e12', tier: 'Easy', subject: 'Biology', board: 'ALL', q: 'Which hormone regulates blood glucose levels by converting excess glucose into glycogen?', options: ["Adrenaline","Thyroxine","Growth hormone","Insulin"], ans: 3, exp: 'Insulin secreted by beta cells of the pancreas lowers blood glucose.' },
                    { id: 'q9_e13', tier: 'Easy', subject: 'Physics', board: 'ALL', q: 'How is an ammeter connected in an electric circuit to measure current?', options: ["In series","In parallel","Across the switch only","Across the voltmeter"], ans: 0, exp: 'An ammeter has low resistance and is connected in series.' },
                    { id: 'q9_e14', tier: 'Easy', subject: 'Chemistry', board: 'ALL', q: 'What is the pH of a neutral aqueous solution at 25°C?', options: ["0","7","14","5.5"], ans: 1, exp: 'Pure water at 25°C has [H+] = 10^-7 M, giving pH = 7.' },
                    { id: 'q9_e15', tier: 'Easy', subject: 'Mathematics', board: 'ALL', q: 'The distance of the point P(3, -4) from the origin (0, 0) is:', options: ["7 units","1 unit","5 units","25 units"], ans: 2, exp: '√(3² + (-4)²) = √(9 + 16) = 5 units.' },

                    // 20 Moderate
                    { id: 'q9_m1', tier: 'Moderate', subject: 'Physics', board: 'ALL', q: 'Two resistors of 6 Ω and 3 Ω are connected in parallel. Their equivalent resistance is:', options: ["9 Ω","4.5 Ω","0.5 Ω","2 Ω"], ans: 3, exp: 'R_eq = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω.' },
                    { id: 'q9_m2', tier: 'Moderate', subject: 'Chemistry', board: 'ALL', q: 'How many moles of CO₂ are produced when 50 g of CaCO₃ decomposes completely (Ca=40, C=12, O=16)?', options: ["0.5 mole","1.0 mole","0.25 mole","2.0 moles"], ans: 0, exp: 'Molar mass of CaCO₃ = 100 g/mol; 50 g = 0.5 mol, giving 0.5 mol CO₂.' },
                    { id: 'q9_m3', tier: 'Moderate', subject: 'Mathematics', board: 'ALL', q: 'If the 5th term of an AP is 17 and the 9th term is 33, what is the common difference?', options: ["3","4","5","2"], ans: 1, exp: '(a + 8d) - (a + 4d) = 4d = 16 => d = 4.' },
                    { id: 'q9_m4', tier: 'Moderate', subject: 'Biology', board: 'ALL', q: 'In a Mendelian monohybrid cross between two heterozygous tall plants (Tt × Tt), what is the genotypic ratio?', options: ["3:1","9:3:3:1","1:2:1","1:1"], ans: 2, exp: 'Phenotypic ratio is 3:1, whereas genotypic ratio (TT : Tt : tt) is 1:2:1.' },
                    { id: 'q9_m5', tier: 'Moderate', subject: 'Physics', board: 'ALL', q: 'A lens has a power of -2.5 D. What is its focal length and nature?', options: ["+40 cm, convex","-25 cm, concave","+25 cm, convex","-40 cm, concave"], ans: 3, exp: 'f = 100 / P = 100 / (-2.5) = -40 cm (diverging concave lens).' },
                    { id: 'q9_m6', tier: 'Moderate', subject: 'Chemistry', board: 'ALL', q: 'Across a period from left to right in the Modern Periodic Table, atomic radius generally:', options: ["Decreases","Increases","Remains constant","First increases then decreases"], ans: 0, exp: 'Increased effective nuclear charge pulls the valence shell closer.' },
                    { id: 'q9_m7', tier: 'Moderate', subject: 'Mathematics', board: 'ALL', q: 'If two tangents PA and PB are drawn to a circle with centre O such that ∠APB = 70°, then ∠AOB equals:', options: ["70°","110°","140°","90°"], ans: 1, exp: 'Angle between tangents and angle subtended at the centre are supplementary: 180° - 70° = 110°.' },
                    { id: 'q9_m8', tier: 'Moderate', subject: 'Biology', board: 'ALL', q: 'During which phase of mitosis do sister chromatids separate and move toward opposite poles?', options: ["Prophase","Metaphase","Anaphase","Telophase"], ans: 2, exp: 'Centromere splitting and chromatid separation occur during Anaphase.' },
                    { id: 'q9_m9', tier: 'Moderate', subject: 'Physics', board: 'ALL', q: 'If the current through a heating element is doubled, the heat produced in a given time becomes:', options: ["Double","Half","Eight times","Four times"], ans: 3, exp: 'By Joule’s law H = I²Rt, doubling I quadruples H.' },
                    { id: 'q9_m10', tier: 'Moderate', subject: 'Chemistry', board: 'ALL', q: 'Which reagent is used in the laboratory drying tower to dry moist Ammonia (NH₃) gas?', options: ["Quicklime (CaO)","Conc. H₂SO₄","Anhydrous CaCl₂","P₂O₅"], ans: 0, exp: 'Basic NH₃ reacts with acidic drying agents and CaCl₂, so basic quicklime (CaO) is used.' },
                    { id: 'q9_m11', tier: 'Moderate', subject: 'Mathematics', board: 'ALL', q: 'If the ratio of the radii of two spheres is 2 : 3, the ratio of their volumes is:', options: ["4 : 9","8 : 27","2 : 3","16 : 81"], ans: 1, exp: 'Volume scales as r³, so 2³ : 3³ = 8 : 27.' },
                    { id: 'q9_m12', tier: 'Moderate', subject: 'Biology', board: 'ALL', q: 'Which blood vessel carries oxygenated blood from the lungs directly to the left atrium?', options: ["Pulmonary artery","Aorta","Pulmonary vein","Superior vena cava"], ans: 2, exp: 'The pulmonary vein is the only vein carrying oxygenated blood to the left atrium.' },
                    { id: 'q9_m13', tier: 'Moderate', subject: 'Physics', board: 'ALL', q: 'The refractive index of glass is 1.5. What is the speed of light in glass (c = 3 × 10⁸ m/s)?', options: ["4.5 × 10⁸ m/s","1.5 × 10⁸ m/s","2.5 × 10⁸ m/s","2.0 × 10⁸ m/s"], ans: 3, exp: 'v = c / n = (3 × 10⁸) / 1.5 = 2.0 × 10⁸ m/s.' },
                    { id: 'q9_m14', tier: 'Moderate', subject: 'Chemistry', board: 'ALL', q: 'How many covalent bonds are present in one molecule of Ethane (C₂H₆)?', options: ["7","6","8","5"], ans: 0, exp: 'Ethane has 1 C–C bond and 6 C–H bonds, totaling 7 covalent bonds.' },
                    { id: 'q9_m15', tier: 'Moderate', subject: 'Mathematics', board: 'ALL', q: 'If sec θ + tan θ = 4, then the value of sec θ - tan θ is:', options: ["4","1/4","1/2","2"], ans: 1, exp: 'Since sec²θ - tan²θ = 1, (sec θ - tan θ) = 1 / (sec θ + tan θ) = 1/4.' },
                    { id: 'q9_m16', tier: 'Moderate', subject: 'Biology', board: 'ALL', q: 'Photolysis of water during photosynthesis occurs in the presence of which mineral ions?', options: ["Fe²⁺ and Cu²⁺","Na⁺ and K⁺","Mn²⁺ and Cl⁻","Ca²⁺ and PO₄³⁻"], ans: 2, exp: 'Manganese (Mn²⁺) and Chloride (Cl⁻) ions catalyze photolysis in PS-II.' },
                    { id: 'q9_m17', tier: 'Moderate', subject: 'Physics', board: 'ALL', q: 'A body of mass 2 kg is moving with a momentum of 10 kg·m/s. Its kinetic energy is:', options: ["20 J","50 J","100 J","25 J"], ans: 3, exp: 'KE = p² / (2m) = 100 / (2 × 2) = 25 J.' },
                    { id: 'q9_m18', tier: 'Moderate', subject: 'Chemistry', board: 'ALL', q: 'Which hydrocarbon undergoes addition reaction with bromine water to discharge its reddish-brown colour?', options: ["Ethene","Methane","Propane","Butane"], ans: 0, exp: 'Unsaturated alkenes like Ethene decolourize bromine water via addition.' },
                    { id: 'q9_m19', tier: 'Moderate', subject: 'Mathematics', board: 'ALL', q: 'For what value of k will the lines 3x + 2ky = 2 and 2x + 5y + 1 = 0 be parallel?', options: ["4/15","15/4","3/5","5/4"], ans: 1, exp: 'For parallel lines, a1/a2 = b1/b2 => 3/2 = 2k/5 => 4k = 15 => k = 15/4.' },
                    { id: 'q9_m20', tier: 'Moderate', subject: 'Biology', board: 'ALL', q: 'Which part of the human brain maintains posture, equilibrium, and muscle tone?', options: ["Cerebrum","Medulla oblongata","Cerebellum","Thalamus"], ans: 2, exp: 'The cerebellum coordinates voluntary movement and body balance.' },

                    // 10 Hard
                    { id: 'q9_h1', tier: 'Hard', subject: 'Physics', board: 'ALL', q: 'A wire of resistance 16 Ω is melted and recast into a wire of half its original length. What is the new resistance?', options: ["8 Ω","32 Ω","2 Ω","4 Ω"], ans: 3, exp: 'At constant volume, R ∝ L². Halving length makes R_new = 16 × (1/2)² = 4 Ω.' },
                    { id: 'q9_h2', tier: 'Hard', subject: 'Chemistry', board: 'ALL', q: 'What volume of oxygen at STP is required for the complete combustion of 4 litres of Ethane (2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O)?', options: ["14 litres","7 litres","28 litres","11.2 litres"], ans: 0, exp: 'By Gay-Lussac’s law, 2 volumes of ethane require 7 volumes of O₂, so 4 L requires 14 L.' },
                    { id: 'q9_h3', tier: 'Hard', subject: 'Mathematics', board: 'ALL', q: 'If α and β are the roots of x² - 5x + 6 = 0, what is the value of α³ + β³?', options: ["125","35","19","45"], ans: 1, exp: 'α+β = 5, αβ = 6. α³+β³ = (α+β)³ - 3αβ(α+β) = 125 - 90 = 35.' },
                    { id: 'q9_h4', tier: 'Hard', subject: 'Biology', board: 'ALL', q: 'If a root tip cell of onion has 16 chromosomes (2n = 16), how many chromosomes will be present in its endosperm cell?', options: ["8","16","24","32"], ans: 2, exp: 'Angiosperm endosperm is triploid (3n). Since n = 8, 3n = 24.' },
                    { id: 'q9_h5', tier: 'Hard', subject: 'Physics', board: 'ALL', q: 'Two bulbs rated (100 W, 220 V) and (60 W, 220 V) are connected in series across a 220 V supply. Which bulb glows brighter?', options: ["100 W bulb","Both glow equally","Neither glows","60 W bulb"], ans: 3, exp: 'In series, current I is same, so P = I²R. The 60 W bulb has higher resistance (R = V²/P) and dissipates more power.' },
                    { id: 'q9_h6', tier: 'Hard', subject: 'Chemistry', board: 'ALL', q: 'During the electrolysis of aqueous CuSO₄ using active copper electrodes, what happens at the anode?', options: ["Copper anode dissolves into Cu²⁺ ions","O₂ gas is evolved","SO₄²⁻ ions are discharged","H₂ gas is evolved"], ans: 0, exp: 'With active Cu electrodes, Cu oxidizes more readily than OH⁻ or SO₄²⁻, so the anode dissolves.' },
                    { id: 'q9_h7', tier: 'Hard', subject: 'Mathematics', board: 'ALL', q: 'A solid metallic cone of height 24 cm and base radius 6 cm is melted into a sphere. The radius of the sphere is:', options: ["8 cm","6 cm","4 cm","12 cm"], ans: 1, exp: '(1/3)π(6²)(24) = (4/3)πR³ => R³ = 216 => R = 6 cm.' },
                    { id: 'q9_h8', tier: 'Hard', subject: 'Biology', board: 'ALL', q: 'A colour-blind woman marries a man with normal vision. What is the probability of their sons being colour-blind?', options: ["0%","50%","100%","25%"], ans: 2, exp: 'Sons inherit their single X chromosome from the mother (X^c X^c), so 100% of sons are X^c Y.' },
                    { id: 'q9_h9', tier: 'Hard', subject: 'Physics', board: 'ALL', q: 'How much ice at 0°C can be completely melted by 50 g of water at 80°C (Latent heat of ice = 80 cal/g, specific heat of water = 1 cal/g°C)?', options: ["25 g","40 g","80 g","50 g"], ans: 3, exp: 'm_ice × 80 = 50 × 1 × (80 - 0) => m_ice = 50 g.' },
                    { id: 'q9_h10', tier: 'Hard', subject: 'Chemistry', board: 'ALL', q: 'What is the empirical formula of an organic compound containing 40% Carbon, 6.67% Hydrogen, and 53.33% Oxygen by mass?', options: ["CH₂O","CHO","C₂H₄O","CH₄O"], ans: 0, exp: 'Mole ratio C:H:O = (40/12) : (6.67/1) : (53.33/16) = 3.33 : 6.67 : 3.33 = 1 : 2 : 1 (CH₂O).' },

                    // 5 Examiner's Traps (isUnbeatableTrap: true guarantees <100% score so every student sees the examiner trap insight)
                    { id: 'q9_t1', tier: 'Trap', isUnbeatableTrap: true, subject: 'Physics', board: 'ALL', q: 'An object is placed at a distance of f/2 from a convex lens of focal length f. Where does the image form and what is its magnification with sign?', options: ["At +f, magnification -2","At +f/2, magnification +0.5","At -2f, magnification +2","At -f, magnification +2"], ans: -1, exp: 'Examiner Trap Alert: Board marking schemes deduct marks here if you miss the sign convention AND optical centre reference simultaneously (1/v - 1/(-f/2) = 1/f => v = -f, m = v/u = (-f)/(-f/2) = +2 on the same side as the object).' },
                    { id: 'q9_t2', tier: 'Trap', isUnbeatableTrap: true, subject: 'Chemistry', board: 'ALL', q: 'When concentrated HNO₃ reacts with copper turnings, which nitrogen oxide is evolved and what is the change in oxidation state of Nitrogen?', options: ["NO gas, +5 to +2","NO₂ gas, +5 to +2","N₂O gas, +5 to +1","NO₂ gas, +5 to +4"], ans: -1, exp: 'Examiner Trap Alert: Students routinely mix up dilute HNO₃ (gives colourless NO) with concentrated HNO₃ (gives reddish-brown NO₂, N going from +5 to +4) or omit state symbols required for full credit.' },
                    { id: 'q9_t3', tier: 'Trap', isUnbeatableTrap: true, subject: 'Mathematics', board: 'ALL', q: 'In solving √(2x + 9) + x = 13, what is the valid solution set in real numbers?', options: ["x = 20 only","x = 4 only","Both x = 8 and x = 20","x = 8 only"], ans: -1, exp: 'Examiner Trap Alert: Squaring gives (x - 8)(x - 20) = 0, but x = 20 is an extraneous root because √49 + 20 = 27 ≠ 13. Over 90% of board scripts lose the final mark by not rejecting x = 20.' },
                    { id: 'q9_t4', tier: 'Trap', isUnbeatableTrap: true, subject: 'Biology', board: 'ALL', q: 'If a marine protozoan (like Amoeba without a contractile vacuole) is transferred to distilled water, what happens and why?', options: ["Shrinks due to exosmosis","Remains unaffected","Forms a contractile vacuole immediately","Bursts due to rapid endosmosis"], ans: -1, exp: 'Examiner Trap Alert: Board examiners penalize answers that do not explicitly distinguish marine protozoans (isotonic to seawater, lacking osmoregulatory vacuoles) from freshwater Amoeba.' },
                    { id: 'q9_t5', tier: 'Trap', isUnbeatableTrap: true, subject: 'Physics', board: 'ALL', q: 'Three identical bulbs A, B, C are connected: A in series with a parallel combination of B and C. If bulb C fuses, how does the brightness of A and B change?', options: ["Both A and B brighten","A brightens, B dims","Both A and B dim","A dims, B brightens"], ans: -1, exp: 'Examiner Trap Alert: When C fuses, total circuit resistance increases from 1.5R to 2R, reducing total current (so A dims), while the potential drop across B rises from V/3 to V/2 (so B brightens).' }
                ];

                const base11_12 = [
                    // 15 Easy
                    { id: 'q12_e1', tier: 'Easy', subject: 'Physics', board: 'ALL', q: 'What is the SI unit of electric flux?', options: ["V/m","N·m²/C","Tesla","Coulomb/m²"], ans: 1, exp: 'Electric flux Φ = E·A has units of (N/C)·m² = N·m²/C (or V·m).' },
                    { id: 'q12_e2', tier: 'Easy', subject: 'Chemistry', board: 'ALL', q: 'Which colligative property is preferred for determining the molar mass of proteins and polymers?', options: ["Elevation in boiling point","Depression in freezing point","Osmotic pressure","Relative lowering of vapour pressure"], ans: 2, exp: 'Osmotic pressure is measured around room temperature and gives a large measurable value even at low molarity.' },
                    { id: 'q12_e3', tier: 'Easy', subject: 'Mathematics', board: 'ALL', q: 'What is the derivative of sin⁻¹(x) + cos⁻¹(x) with respect to x for x ∈ (-1, 1)?', options: ["1","2 / √(1 - x²)","π / 2","0"], ans: 3, exp: 'Since sin⁻¹(x) + cos⁻¹(x) = π/2 (a constant), its derivative is 0.' },
                    { id: 'q12_e4', tier: 'Easy', subject: 'Biology', board: 'ALL', q: 'Which enzyme is known as "molecular scissors" in recombinant DNA technology?', options: ["Restriction Endonuclease","DNA Ligase","DNA Polymerase","Helicase"], ans: 0, exp: 'Restriction endonucleases cleave DNA at specific palindromic recognition sequences.' },
                    { id: 'q12_e5', tier: 'Easy', subject: 'Physics', board: 'ALL', q: 'In a pure capacitive AC circuit, the current leads the applied voltage by a phase angle of:', options: ["0°","90° (π/2)","45°","180° (π)"], ans: 1, exp: 'In an ideal capacitor, current leads voltage by π/2 radians (90°).' },
                    { id: 'q12_e6', tier: 'Easy', subject: 'Chemistry', board: 'ALL', q: 'What are the units of the rate constant k for a zero-order reaction?', options: ["s⁻¹","L mol⁻¹ s⁻¹","mol L⁻¹ s⁻¹","Dimensionless"], ans: 2, exp: 'For zero order, Rate = k[A]⁰ = k, so units match Rate: mol L⁻¹ s⁻¹.' },
                    { id: 'q12_e7', tier: 'Easy', subject: 'Mathematics', board: 'ALL', q: 'If A is a 3 × 3 matrix with |A| = 5, then the value of |2A| is:', options: ["10","25","15","40"], ans: 3, exp: 'For an n × n matrix, |kA| = kⁿ|A| = 2³ × 5 = 40.' },
                    { id: 'q12_e8', tier: 'Easy', subject: 'Biology', board: 'ALL', q: 'Which antibody is abundantly present in colostrum and provides passive immunity to newborns?', options: ["IgA","IgG","IgM","IgE"], ans: 0, exp: 'Secretory IgA in mother’s colostrum protects the infant mucosal tract.' },
                    { id: 'q12_e9', tier: 'Easy', subject: 'Physics', board: 'ALL', q: 'Which phenomenon confirms the transverse nature of light waves?', options: ["Interference","Polarisation","Diffraction","Refraction"], ans: 1, exp: 'Only transverse waves can be polarized.' },
                    { id: 'q12_e10', tier: 'Easy', subject: 'Chemistry', board: 'ALL', q: 'Which transition metal ion is colourless in aqueous solution (Atomic No: Sc=21, Ti=22, Cr=24, Fe=26)?', options: ["Ti³⁺","Cr³⁺","Sc³⁺","Fe²⁺"], ans: 2, exp: 'Sc³⁺ has a 3d⁰ configuration with no unpaired electrons for d–d transitions.' },
                    { id: 'q12_e11', tier: 'Easy', subject: 'Mathematics', board: 'ALL', q: 'What is the value of î · (ĵ × k̂)?', options: ["0","-1","k̂","1"], ans: 3, exp: 'Since ĵ × k̂ = î, we have î · î = 1.' },
                    { id: 'q12_e12', tier: 'Easy', subject: 'Biology', board: 'ALL', q: 'In the lac operon, what does the structural gene lacZ code for?', options: ["β-galactosidase","Permease","Transacetylase","Repressor protein"], ans: 0, exp: 'lacZ codes for β-galactosidase, which hydrolyzes lactose into glucose and galactose.' },
                    { id: 'q12_e13', tier: 'Easy', subject: 'Physics', board: 'ALL', q: 'What happens to the de Broglie wavelength of an electron when its accelerating potential is quadrupled?', options: ["Doubles","Halves","Remains unchanged","Becomes four times"], ans: 1, exp: 'λ = h / √(2meV), so quadrupling V halves λ.' },
                    { id: 'q12_e14', tier: 'Easy', subject: 'Chemistry', board: 'ALL', q: 'Which reagent converts an aromatic primary diazonium salt (C₆H₅N₂⁺Cl⁻) into Benzene?', options: ["CuCl / HCl","KI","H₃PO₂ + H₂O","NaOH"], ans: 2, exp: 'Hypophosphorous acid (H₃PO₂) reduces benzene diazonium chloride to benzene.' },
                    { id: 'q12_e15', tier: 'Easy', subject: 'Mathematics', board: 'ALL', q: 'The integrating factor of the differential equation dy/dx + (y / x) = x² is:', options: ["eˣ","1 / x","ln x","x"], ans: 3, exp: 'IF = e^(∫(1/x)dx) = e^(ln x) = x.' },

                    // 20 Moderate
                    { id: 'q12_m1', tier: 'Moderate', subject: 'Physics', board: 'ALL', q: 'Two point charges +4 μC and +1 μC are separated by 30 cm in air. At what distance from +4 μC is the net electric field zero?', options: ["20 cm","10 cm","15 cm","24 cm"], ans: 0, exp: '4 / x² = 1 / (30 - x)² => 2 / x = 1 / (30 - x) => x = 20 cm.' },
                    { id: 'q12_m2', tier: 'Moderate', subject: 'Chemistry', board: 'ALL', q: 'For a first-order reaction, if the half-life is 10 minutes, how long does it take for 75% of the reactant to decompose?', options: ["15 minutes","20 minutes","30 minutes","25 minutes"], ans: 1, exp: '75% completion leaves 25% (two half-lives): 2 × 10 = 20 minutes.' },
                    { id: 'q12_m3', tier: 'Moderate', subject: 'Mathematics', board: 'ALL', q: 'Evaluate the definite integral ∫₀^(π/2) [√sin x / (√sin x + √cos x)] dx:', options: ["π / 2","1","π / 4","0"], ans: 2, exp: 'Using I = ∫₀^a f(a - x)dx, 2I = ∫₀^(π/2) 1 dx = π/2 => I = π/4.' },
                    { id: 'q12_m4', tier: 'Moderate', subject: 'Biology', board: 'ALL', q: 'If a double-stranded DNA molecule has 20% Cytosine, what percentage of Adenine will it contain?', options: ["20%","40%","60%","30%"], ans: 3, exp: 'By Chargaff’s rule, G = C = 20% (total 40%), so A + T = 60% => A = 30%.' },
                    { id: 'q12_m5', tier: 'Moderate', subject: 'Physics', board: 'ALL', q: 'In Young’s double-slit experiment, if the slit separation is halved and screen distance is doubled, the fringe width becomes:', options: ["Four times","Unchanged","Double","Half"], ans: 0, exp: 'β = λD / d. With D′ = 2D and d′ = d/2, β′ = 4β.' },
                    { id: 'q12_m6', tier: 'Moderate', subject: 'Chemistry', board: 'ALL', q: 'What is the coordination number and oxidation state of Cobalt in [Co(en)₂Cl₂]Cl?', options: ["4 and +3","6 and +3","6 and +2","4 and +2"], ans: 1, exp: 'Ethylenediamine (en) is bidentate, so CN = 2(2) + 2 = 6; oxidation state = +3.' },
                    { id: 'q12_m7', tier: 'Moderate', subject: 'Mathematics', board: 'ALL', q: 'If P(A) = 0.4, P(B) = 0.8, and P(B|A) = 0.6, then P(A ∪ B) is equal to:', options: ["0.24","0.84","0.96","0.72"], ans: 2, exp: 'P(A∩B) = 0.4 × 0.6 = 0.24. P(A∪B) = 0.4 + 0.8 - 0.24 = 0.96.' },
                    { id: 'q12_m8', tier: 'Moderate', subject: 'Biology', board: 'ALL', q: 'How many meiotic divisions are required to produce 100 functional megaspores in a typical angiosperm?', options: ["25","50","400","100"], ans: 3, exp: 'In monosporic megasporogenesis, 3 of 4 megaspores degenerate, so 1 meiosis yields 1 functional megaspore.' },
                    { id: 'q12_m9', tier: 'Moderate', subject: 'Physics', board: 'ALL', q: 'A circular coil of radius R carries current I. The ratio of magnetic field at its centre to that at an axial point at distance R is:', options: ["2√2 : 1","2 : 1","4 : 1","√2 : 1"], ans: 0, exp: 'B_centre / B_axis = (1 + x²/R²)^(3/2) = (1 + 1)^(3/2) = 2√2 : 1.' },
                    { id: 'q12_m10', tier: 'Moderate', subject: 'Chemistry', board: 'ALL', q: 'Which of the following aldehydes undergoes Cannizzaro reaction when heated with concentrated NaOH?', options: ["Ethanal","Benzaldehyde","Propanal","Phenylacetaldehyde"], ans: 1, exp: 'Benzaldehyde lacks α-hydrogen atoms and undergoes disproportionation (Cannizzaro reaction).' },
                    { id: 'q12_m11', tier: 'Moderate', subject: 'Mathematics', board: 'ALL', q: 'The slope of the normal to the curve y = 2x² + 3 sin x at x = 0 is:', options: ["3","1/3","-1/3","-3"], ans: 2, exp: 'dy/dx = 4x + 3 cos x. At x = 0, tangent slope = 3, so normal slope = -1/3.' },
                    { id: 'q12_m12', tier: 'Moderate', subject: 'Biology', board: 'ALL', q: 'Which protein crystal produced by Bacillus thuringiensis controls cotton bollworms?', options: ["CryIAb only","Hirudin","Interferon","CryIAc and CryIIAb"], ans: 3, exp: 'CryIAc and CryIIAb control cotton bollworms, whereas CryIAb controls corn borer.' },
                    { id: 'q12_m13', tier: 'Moderate', subject: 'Physics', board: 'ALL', q: 'The radius of the first Bohr orbit of hydrogen is 0.53 Å. What is the radius of its third orbit?', options: ["4.77 Å","1.59 Å","2.12 Å","9.54 Å"], ans: 0, exp: 'r_n = n² r_1 = 3² × 0.53 = 9 × 0.53 = 4.77 Å.' },
                    { id: 'q12_m14', tier: 'Moderate', subject: 'Chemistry', board: 'ALL', q: 'Which acid is the strongest among the following?', options: ["CH₃COOH","FCH₂COOH","ClCH₂COOH","BrCH₂COOH"], ans: 1, exp: 'Fluorine has the strongest -I inductive effect, stabilizing the carboxylate ion most strongly.' },
                    { id: 'q12_m15', tier: 'Moderate', subject: 'Mathematics', board: 'ALL', q: 'What is the projection of vector a = 2î + 3ĵ + 2k̂ on vector b = î + 2ĵ + k̂?', options: ["8 / √6","10 / √17","10 / √6","5 / √6"], ans: 2, exp: '(a · b) / |b| = (2 + 6 + 2) / √(1 + 4 + 1) = 10 / √6.' },
                    { id: 'q12_m16', tier: 'Moderate', subject: 'Biology', board: 'ALL', q: 'According to the Hardy-Weinberg principle, if the frequency of the recessive allele (q) is 0.4, what is the frequency of heterozygous individuals (2pq)?', options: ["0.16","0.36","0.24","0.48"], ans: 3, exp: 'p = 1 - 0.4 = 0.6; heterozygous frequency 2pq = 2 × 0.6 × 0.4 = 0.48.' },
                    { id: 'q12_m17', tier: 'Moderate', subject: 'Physics', board: 'ALL', q: 'In a series LCR circuit at resonance, the power factor of the circuit is:', options: ["1","0","0.5","1 / √2"], ans: 0, exp: 'At resonance X_L = X_C, so Z = R and cos φ = R / Z = 1.' },
                    { id: 'q12_m18', tier: 'Moderate', subject: 'Chemistry', board: 'ALL', q: 'When Phenol is treated with CHCl₃ and aqueous NaOH at 340 K followed by acidification, the major product is:', options: ["Benzoic acid","Salicylaldehyde","Salicylic acid","Picric acid"], ans: 1, exp: 'This is the Reimer-Tiemann reaction yielding ortho-hydroxybenzaldehyde (Salicylaldehyde).' },
                    { id: 'q12_m19', tier: 'Moderate', subject: 'Mathematics', board: 'ALL', q: 'The order and degree of the differential equation [1 + (dy/dx)²]^(3/2) = d²y/dx² are respectively:', options: ["2 and 3","1 and 2","2 and 2","2 and 1"], ans: 2, exp: 'Squaring both sides removes the fractional power: [1 + (y′)²]³ = (y″)², giving order 2 and degree 2.' },
                    { id: 'q12_m20', tier: 'Moderate', subject: 'Biology', board: 'ALL', q: 'Which ecological pyramid is always upright in all ecosystems without exception?', options: ["Pyramid of numbers","Pyramid of biomass","Aquatic biomass pyramid","Pyramid of energy"], ans: 3, exp: 'Energy flow obeys the 10% law and thermodynamic losses, making the pyramid of energy always upright.' },

                    // 10 Hard
                    { id: 'q12_h1', tier: 'Hard', subject: 'Physics', board: 'ALL', q: 'Two capacitors of 6 μF and 12 μF are connected in series across a 120 V battery. What is the potential difference across the 6 μF capacitor?', options: ["80 V","40 V","60 V","90 V"], ans: 0, exp: 'In series, charge Q is equal, so V ∝ 1/C. V₁ = [12 / (6 + 12)] × 120 = 80 V.' },
                    { id: 'q12_h2', tier: 'Hard', subject: 'Chemistry', board: 'ALL', q: 'Calculate the standard EMF of the cell Zn | Zn²⁺(1M) || Ag⁺(1M) | Ag given E°(Zn²⁺/Zn) = -0.76 V and E°(Ag⁺/Ag) = +0.80 V:', options: ["+0.04 V","+1.56 V","-1.56 V","+2.36 V"], ans: 1, exp: 'E°_cell = E°_cathode - E°_anode = 0.80 - (-0.76) = +1.56 V.' },
                    { id: 'q12_h3', tier: 'Hard', subject: 'Mathematics', board: 'ALL', q: 'What is the maximum value of the function f(x) = (ln x) / x for x > 0?', options: ["e","1","1 / e","0"], ans: 2, exp: 'f′(x) = (1 - ln x) / x² = 0 => x = e. Thus f_max(e) = 1 / e.' },
                    { id: 'q12_h4', tier: 'Hard', subject: 'Biology', board: 'ALL', q: 'An E. coli cell with heavy DNA (¹⁵N/¹⁵N) is allowed to replicate for 3 generations (60 minutes) in ¹⁴N medium. What proportion of DNA molecules will be hybrid (¹⁵N/¹⁴N)?', options: ["50%","12.5%","75%","25%"], ans: 3, exp: 'After 3 generations there are 2³ = 8 DNA molecules, of which 2 are hybrid: 2/8 = 25%.' },
                    { id: 'q12_h5', tier: 'Hard', subject: 'Physics', board: 'ALL', q: 'An equiconvex lens of refractive index 1.5 has focal length f in air. When immersed in a liquid of refractive index 4/3, its focal length becomes:', options: ["4f","2f","f / 2","3f"], ans: 0, exp: '(f_l / f_a) = (1.5 - 1) / [(1.5 / (4/3)) - 1] = 0.5 / (1/8) = 4 => f_l = 4f.' },
                    { id: 'q12_h6', tier: 'Hard', subject: 'Chemistry', board: 'ALL', q: 'What is the van’t Hoff factor (i) for a 0.1 M BaCl₂ solution undergoing 80% dissociation in water?', options: ["1.8","2.6","2.8","2.4"], ans: 1, exp: 'For BaCl₂ (n = 3), i = 1 + α(n - 1) = 1 + 0.8(3 - 1) = 2.6.' },
                    { id: 'q12_h7', tier: 'Hard', subject: 'Mathematics', board: 'ALL', q: 'The area bounded by the parabola y² = 4x and its latus rectum x = 1 is:', options: ["4/3 sq. units","2/3 sq. units","8/3 sq. units","4 sq. units"], ans: 2, exp: 'Area = 2 ∫₀¹ 2√x dx = 4 × [2/3 x^(3/2)]₀¹ = 8/3 sq. units.' },
                    { id: 'q12_h8', tier: 'Hard', subject: 'Biology', board: 'ALL', q: 'In a typical human menstrual cycle of 32 days, on which day does ovulation most likely occur?', options: ["14th day","16th day","20th day","18th day"], ans: 3, exp: 'The luteal phase is fixed at 14 days, so ovulation occurs on 32 - 14 = 18th day.' },
                    { id: 'q12_h9', tier: 'Hard', subject: 'Physics', board: 'ALL', q: 'Light of energy 4.2 eV falls on a metal surface of work function 2.2 eV. What is the stopping potential?', options: ["2.0 V","6.4 V","2.0 eV","4.2 V"], ans: 0, exp: 'eV₀ = hν - φ = 4.2 - 2.2 = 2.0 eV => stopping potential V₀ = 2.0 V.' },
                    { id: 'q12_h10', tier: 'Hard', subject: 'Chemistry', board: 'ALL', q: 'How many Faraday of electricity are required to reduce 1 mole of Cr₂O₇²⁻ to Cr³⁺ in acidic medium?', options: ["3 F","6 F","12 F","2 F"], ans: 1, exp: 'Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O requires 6 moles of electrons = 6 F.' },

                    // 5 Examiner's Traps
                    { id: 'q12_t1', tier: 'Trap', isUnbeatableTrap: true, subject: 'Physics', board: 'ALL', q: 'A metallic rod of length L rotates with angular velocity ω perpendicular to a uniform magnetic field B about an axis passing through one third of its length (L/3). What is the net EMF between its two ends?', options: ["(1/2) BωL²","Zero","(5/18) BωL²","(1/6) BωL²"], ans: -1, exp: 'Examiner Trap Alert: Both segments develop opposing EMFs relative to the pivot: E_net = (1/2)Bω(2L/3)² - (1/2)Bω(L/3)² = (1/6)BωL². Students routinely add them to get (5/18)BωL² or use (1/2)BωL².' },
                    { id: 'q12_t2', tier: 'Trap', isUnbeatableTrap: true, subject: 'Chemistry', board: 'ALL', q: 'What is the correct order of basic strength in aqueous medium for Methyl-substituted amines?', options: ["(CH₃)₂NH > (CH₃)₃N > CH₃NH₂ > NH₃","CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N > NH₃","(CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃","(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃"], ans: -1, exp: 'Examiner Trap Alert: In aqueous medium, solvation and steric hindrance make secondary methylamine strongest, followed by primary, then tertiary ((CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃), whereas ethylamines follow 2° > 3° > 1°.' },
                    { id: 'q12_t3', tier: 'Trap', isUnbeatableTrap: true, subject: 'Mathematics', board: 'ALL', q: 'Evaluate the principal value of sin⁻¹(sin(3π/4)) + cos⁻¹(cos(7π/6)):', options: ["23π / 12","11π / 12","7π / 12","13π / 12"], ans: -1, exp: 'Examiner Trap Alert: Principal branches are [-π/2, π/2] and [0, π]. Thus sin⁻¹(sin(3π/4)) = π/4 and cos⁻¹(cos(7π/6)) = 5π/6, giving π/4 + 5π/6 = 13π/12.' },
                    { id: 'q12_t4', tier: 'Trap', isUnbeatableTrap: true, subject: 'Biology', board: 'ALL', q: 'A coding strand of DNA has the polarity and sequence 5′-ATGCATGC-3′. What is the sequence of the transcribed mRNA?', options: ["3′-UACGUACG-5′","5′-GCATGCAT-3′","5′-UACGUACG-3′","5′-AUGCAUGC-3′"], ans: -1, exp: 'Examiner Trap Alert: The question gives the CODING strand (not template strand), so mRNA has the exact same sequence with U replacing T in 5′→3′ orientation: 5′-AUGCAUGC-3′.' },
                    { id: 'q12_t5', tier: 'Trap', isUnbeatableTrap: true, subject: 'Chemistry', board: 'ALL', q: 'When anisole (methoxybenzene) is heated with concentrated HI, what are the products formed?', options: ["Iodobenzene and Methanol (CH₃OH)","Iodobenzene and Methyl iodide","Phenol and Methanol","Phenol and Methyl iodide (CH₃I)"], ans: -1, exp: 'Examiner Trap Alert: The O–C₆H₅ bond has partial double-bond character due to resonance, so I⁻ attacks the smaller methyl group via SN2 to give Phenol + CH₃I.' }
                ];

                return { pool9_10: base9_10, pool11_12: base11_12 };
            }

            const questionBanks = createQuestionBanks();
            ContentStore.quizPool = questionBanks.pool9_10;
            ContentStore.quizPool11_12 = questionBanks.pool11_12;

            // 03. FAULT-ISOLATED MODULE MOUNTING REGISTRY
            const mountedModules = {};
            function mountModule(moduleName, mountFn) {
                try {
                    mountFn();
                    mountedModules[moduleName] = { status: 'OK' };
                } catch (err) {
                    console.error('[CatalystCore FaultBoundary] Module failed:', moduleName, err);
                    mountedModules[moduleName] = { status: 'ERROR', error: String(err) };
                }
            }

            // 04. APPLICATION STATE
            const QUIZ_STORAGE_KEY_9_10 = 'catalyst_used_q_ids_9_10_v2';
            const QUIZ_STORAGE_KEY_11_12 = 'catalyst_used_q_ids_11_12_v2';
            let activeBannerIndex = 0;
            let bannerAutoTimer = null;
            let carouselDirection = 1;
            let carouselAnimating = false;
            let activeBoardProgrammeKey = null;
            let activeCountdownBoard = 'CBSE';
            let activeSyllabusBoard = 'ICSE10';
            let activeSyllabusSubject = 'Physics';
            let selectedPopupBoard = 'ICSE';

            let activeQuizSet = [];
            let quizCurrentIndex = 0;
            let quizScore = 0;
            let quizAnsweredCurrent = false;

            // 05. HOMEPAGE BANNER CAROUSEL & DEDICATED BOARD PAGES
            function getActiveBanners() {
                return (ContentStore.banners || []).filter(function (b) { return b.active !== false; });
            }

            function prefersReducedMotion() {
                return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            }

            function buildBannerSlideInnerHtml(slide) {
                const pillsHtml = (slide.boardsPill || []).map(function (p) {
                    return '<span class="banner-tag">' + p + '</span>';
                }).join('');

                const bullets = (slide.highlightBullets && slide.highlightBullets.length)
                    ? slide.highlightBullets
                    : ['Board-pattern question papers', 'Answer paper evaluation and guidance', 'Post-test doubt clearing'];
                const bulletsHtml = bullets.map(function (b) {
                    return '<div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#4ADE80]"></i><span>' + b + '</span></div>';
                }).join('');

                return (
                    '<div class="carousel-slide-inner w-full h-full bg-gradient-to-r ' + slide.themeGradient + ' text-white px-5 sm:px-16 md:px-20">' +
                        '<div class="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 items-center h-full pt-4 pb-11 sm:pt-6 sm:pb-11">' +
                            '<div class="lg:col-span-8 space-y-2 sm:space-y-3 min-w-0">' +
                                '<div class="flex flex-wrap items-center gap-2">' +
                                    '<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold border ' + slide.badgeStyle + '">' +
                                        '<i class="fa-solid fa-bullhorn"></i><span>' + slide.badge + '</span>' +
                                    '</span>' +
                                '</div>' +
                                '<h2 class="text-lg sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-logoYellow leading-tight"' + ( /[\u0980-\u09FF]/.test(slide.headline) ? ' lang="bn"' : '' ) + '>' + slide.headline + '</h2>' +
                                '<p class="text-sm sm:text-base font-bold text-white line-clamp-3 sm:line-clamp-2">' + slide.subheadline + '</p>' +
                                '<p class="hidden sm:block text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed line-clamp-2">' + slide.description + '</p>' +
                                '<div class="flex flex-wrap items-center gap-2">' + pillsHtml + '</div>' +
                                '<div class="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-3">' +
                                    '<button type="button" onclick="CatalystApp.triggerBannerCta(\'' + slide.ctaActionType + '\', \'' + slide.ctaBoardDefault + '\')" class="banner-cta-primary" aria-label="' + slide.ctaLabel + '">' +
                                        '<span>' + slide.ctaLabel + '</span><i class="fa-solid fa-arrow-right text-logoYellow" aria-hidden="true"></i>' +
                                    '</button>' +
                                    '<a href="' + (slide.secondaryTarget || '#select-your-goal') + '" class="banner-cta-secondary" aria-label="' + (slide.secondaryLabel || 'Select Your Goal') + '">' +
                                        (slide.secondaryLabel || 'Select Your Goal') +
                                    '</a>' +
                                '</div>' +
                            '</div>' +
                            '<div class="lg:col-span-4 hidden lg:block">' +
                                '<div class="bg-white/10 backdrop-blur-md rounded-3xl p-5 border-2 border-logoYellow/60 shadow-xl space-y-3 text-left">' +
                                    '<div class="flex items-center justify-between gap-2">' +
                                        '<span class="bg-[#DCFCE7] text-[#15803D] text-xs font-extrabold px-3 py-1 rounded-full">TARGET 2027</span>' +
                                        '<span class="text-xs font-bold text-logoYellow">ICSE • CBSE • WBBSE</span>' +
                                    '</div>' +
                                    '<div class="space-y-1">' +
                                        '<div class="text-base font-extrabold text-white line-clamp-2">' + slide.highlightBoxTitle + '</div>' +
                                        '<p class="text-xs text-gray-200 line-clamp-2">' + slide.highlightBoxSub + '</p>' +
                                    '</div>' +
                                    '<div class="border-t border-white/15 pt-3 space-y-2 text-xs text-gray-100">' +
                                        bulletsHtml +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>'
                );
            }

            function updateCarouselChrome(slides) {
                const dotsContainer = document.getElementById('carousel-dots');
                const counterBadge = document.getElementById('carousel-counter-badge');
                if (dotsContainer) {
                    dotsContainer.innerHTML = slides.map(function (s, idx) {
                        const cls = idx === activeBannerIndex
                            ? 'carousel-dot h-2.5 w-8 bg-logoYellow'
                            : 'carousel-dot h-2.5 w-2.5 bg-white/50 hover:bg-white';
                        return '<button type="button" onclick="CatalystApp.goToBanner(' + idx + ')" aria-label="Slide ' + (idx + 1) + '" class="rounded-full cursor-pointer ' + cls + '"></button>';
                    }).join('');
                }
                if (counterBadge) {
                    counterBadge.textContent = (activeBannerIndex + 1) + ' / ' + slides.length;
                }
            }

            function renderBannerCarousel(options) {
                const viewport = document.getElementById('hero-carousel-viewport');
                if (!viewport) return;

                const slides = getActiveBanners();
                if (!slides.length) return;
                if (activeBannerIndex >= slides.length) activeBannerIndex = 0;
                if (activeBannerIndex < 0) activeBannerIndex = slides.length - 1;

                const slide = slides[activeBannerIndex];
                const animate = !(options && options.immediate) && !prefersReducedMotion() && viewport.querySelector('.carousel-slide');
                updateCarouselChrome(slides);

                const incoming = document.createElement('div');
                incoming.className = 'carousel-slide';
                incoming.innerHTML = buildBannerSlideInnerHtml(slide);

                if (!animate) {
                    viewport.innerHTML = '';
                    incoming.classList.add('is-active');
                    viewport.appendChild(incoming);
                    carouselAnimating = false;
                    return;
                }

                if (carouselAnimating) return;
                carouselAnimating = true;

                const outgoing = viewport.querySelector('.carousel-slide.is-active');
                const enterClass = carouselDirection >= 0 ? 'is-enter-right' : 'is-enter-left';
                const exitClass = carouselDirection >= 0 ? 'is-exit-left' : 'is-exit-right';

                incoming.classList.add(enterClass);
                viewport.appendChild(incoming);

                // Force reflow so the enter transition runs
                void incoming.offsetWidth;

                incoming.classList.remove(enterClass);
                incoming.classList.add('is-active');

                if (outgoing) {
                    outgoing.classList.remove('is-active');
                    outgoing.classList.add(exitClass);
                    setTimeout(function () {
                        if (outgoing.parentNode) outgoing.parentNode.removeChild(outgoing);
                        carouselAnimating = false;
                    }, 560);
                } else {
                    carouselAnimating = false;
                }
            }

            function nextBanner() {
                const slides = getActiveBanners();
                if (!slides.length || carouselAnimating) return;
                carouselDirection = 1;
                activeBannerIndex = (activeBannerIndex + 1) % slides.length;
                renderBannerCarousel();
                resetBannerAutoTimer();
            }

            function prevBanner() {
                const slides = getActiveBanners();
                if (!slides.length || carouselAnimating) return;
                carouselDirection = -1;
                activeBannerIndex = (activeBannerIndex - 1 + slides.length) % slides.length;
                renderBannerCarousel();
                resetBannerAutoTimer();
            }

            function goToBanner(index) {
                const slides = getActiveBanners();
                if (index < 0 || index >= slides.length || index === activeBannerIndex || carouselAnimating) return;
                carouselDirection = index > activeBannerIndex ? 1 : -1;
                activeBannerIndex = index;
                renderBannerCarousel();
                resetBannerAutoTimer();
            }

            function stopBannerAutoTimer() {
                if (bannerAutoTimer) {
                    clearTimeout(bannerAutoTimer);
                    bannerAutoTimer = null;
                }
            }

            function advanceBannerAuto() {
                const activeSlides = getActiveBanners();
                if (activeSlides.length < 2 || carouselAnimating) return;
                carouselDirection = 1;
                activeBannerIndex = (activeBannerIndex + 1) % activeSlides.length;
                renderBannerCarousel();
            }

            function resetBannerAutoTimer() {
                stopBannerAutoTimer();
                const slides = getActiveBanners();
                if (slides.length < 2) return;

                // Always auto-rotate (hover no longer pauses — that felt broken while watching)
                bannerAutoTimer = setTimeout(function tick() {
                    if (!document.hidden) {
                        advanceBannerAuto();
                    }
                    bannerAutoTimer = setTimeout(tick, 4000);
                }, 4000);
            }

            function bindBannerAutoplayControls() {
                if (document.documentElement.getAttribute('data-banner-autoplay-bound') === 'true') return;
                document.documentElement.setAttribute('data-banner-autoplay-bound', 'true');

                document.addEventListener('visibilitychange', function () {
                    if (document.hidden) stopBannerAutoTimer();
                    else resetBannerAutoTimer();
                });

                const viewport = document.getElementById('hero-carousel-viewport');
                if (!viewport) return;
                let touchStartX = 0;
                let touchStartY = 0;
                viewport.addEventListener('touchstart', function (e) {
                    touchStartX = e.touches[0].clientX;
                    touchStartY = e.touches[0].clientY;
                }, { passive: true });
                viewport.addEventListener('touchend', function (e) {
                    const dx = e.changedTouches[0].clientX - touchStartX;
                    const dy = e.changedTouches[0].clientY - touchStartY;
                    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
                    if (dx < 0) nextBanner();
                    else prevBanner();
                }, { passive: true });
            }

            function bindScrollReveals() {
                const nodes = document.querySelectorAll('.reveal-on-scroll');
                if (!nodes.length) return;

                if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
                    Array.prototype.forEach.call(nodes, function (el) {
                        el.classList.add('is-visible');
                    });
                    return;
                }

                const observer = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (!entry.isIntersecting) return;
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    });
                }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

                Array.prototype.forEach.call(nodes, function (el) {
                    observer.observe(el);
                });
            }

            function triggerBannerCta(actionType, boardDefault) {
                if (actionType === 'register-free') {
                    openMockPopup(boardDefault || 'ICSE', '100% FREE Pre-Board Practice Test');
                } else if (actionType === 'open-board') {
                    openBoardPage(boardDefault || 'ICSE');
                } else {
                    const goalSec = document.getElementById('select-your-goal');
                    if (goalSec) goalSec.scrollIntoView({ behavior: 'smooth' });
                }
            }

            function openBoardPage(boardKey) {
                const normalizedKey = (boardKey || 'ICSE').toUpperCase();
                const boardData = ContentStore.boardProgrammes[normalizedKey];
                if (!boardData) return;

                activeBoardProgrammeKey = normalizedKey;
                const pageContainer = document.getElementById('board-programme-page-view');
                const titleEl = document.getElementById('board-page-title');
                const subEl = document.getElementById('board-page-subtitle');
                const cardsContainer = document.getElementById('board-page-cards-container');
                if (!pageContainer || !cardsContainer) return;

                if (titleEl) titleEl.textContent = boardData.pageTitle;
                if (subEl) subEl.textContent = boardData.subtitle;

                ['ICSE', 'CBSE', 'WBBSE', 'CLASS12', 'FOUNDATION'].forEach(function (k) {
                    const tabBtn = document.getElementById('board-tab-' + k);
                    if (tabBtn) {
                        tabBtn.className = (k === normalizedKey)
                            ? 'board-tab board-tab--active'
                            : 'board-tab board-tab--idle';
                    }
                });

                try {
                    const hashKey = normalizedKey.toLowerCase();
                    if (history && history.replaceState) {
                        history.replaceState(null, '', '#programmes/' + hashKey);
                    } else {
                        location.hash = 'programmes/' + hashKey;
                    }
                } catch (e) { /* ignore */ }

                if (normalizedKey === 'FOUNDATION') {
                    const fProg = boardData.programmes[0];
                    cardsContainer.className = 'grid grid-cols-1 max-w-2xl mx-auto gap-6';
                    cardsContainer.innerHTML =
                        '<article class="prog-card prog-card--soon rounded-3xl p-6 sm:p-8 border-2 shadow-soothing space-y-5 relative">' +
                            '<div class="flex flex-wrap items-center gap-2">' +
                                '<span class="inline-flex items-center gap-1.5 bg-[#FEF3C7] text-[#B45309] text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-[#FDE68A]">' +
                                    '<i class="fa-solid fa-clock"></i><span>Coming Soon</span>' +
                                '</span>' +
                            '</div>' +
                            '<div class="space-y-2.5">' +
                                '<h4 class="text-xl sm:text-2xl font-extrabold text-midnight">' + fProg.name + '</h4>' +
                                '<p class="text-xs sm:text-sm text-slateText leading-relaxed">' + fProg.forYou + '</p>' +
                                '<p class="text-xs sm:text-sm text-slateText leading-relaxed">' + fProg.youGet + '</p>' +
                            '</div>' +
                            '<div class="p-4 rounded-2xl surface-panel border border-warmBorder text-xs text-mutedText">' +
                                '<div class="font-bold text-midnight">' + fProg.footnote + '</div>' +
                            '</div>' +
                            '<div class="flex flex-wrap items-center gap-3 pt-2">' +
                                '<button type="button" disabled aria-disabled="true" class="btn-disabled-soft bg-[#E5E7EB] text-[#4B5563] font-extrabold px-5 py-3 rounded-xl text-xs sm:text-sm cursor-not-allowed flex items-center gap-2">' +
                                    '<i class="fa-solid fa-lock"></i><span>' + fProg.ctaLabel + '</span>' +
                                '</button>' +
                            '</div>' +
                        '</article>';
                } else {
                    const progCount = (boardData.programmes || []).length;
                    cardsContainer.className = progCount === 1
                        ? 'grid grid-cols-1 max-w-2xl mx-auto gap-6'
                        : 'grid grid-cols-1 lg:grid-cols-2 gap-6';
                    cardsContainer.innerHTML = boardData.programmes.map(function (prog) {
                        if (prog.type === 'FREE') {
                            return (
                                '<article class="prog-card prog-card--free rounded-3xl p-6 sm:p-7 border-2 border-[#22C55E] shadow-soothing flex flex-col justify-between space-y-5 relative">' +
                                    '<div class="space-y-4">' +
                                        '<div class="flex flex-wrap items-center justify-between gap-2">' +
                                            '<span class="free-badge-pulse inline-flex items-center gap-1.5 bg-[#15803D] text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-sm">' +
                                                '<i class="fa-solid fa-check-circle text-logoYellow"></i><span>FREE • ' + prog.badgeText + '</span>' +
                                            '</span>' +
                                            '<span class="bg-[#DCFCE7] text-[#15803D] text-xs font-extrabold px-3 py-1 rounded-full border border-[#86EFAC]">' + prog.highlightNote + '</span>' +
                                        '</div>' +
                                        '<div>' +
                                            '<div class="text-[11px] font-extrabold uppercase tracking-wider text-[#15803D]">Free Programme</div>' +
                                            '<h4 class="text-xl sm:text-2xl font-extrabold text-midnight mt-1">' + prog.name + '</h4>' +
                                        '</div>' +
                                        '<div class="space-y-2.5 text-xs sm:text-sm text-slateText border-t border-[#BBF7D0] pt-4">' +
                                            '<p class="leading-relaxed">' + prog.forYou + '</p>' +
                                            '<p class="leading-relaxed">' + prog.youGet + '</p>' +
                                            '<div class="flex flex-wrap items-center gap-2 pt-1">' +
                                                '<span class="bg-[#15803D] text-white font-extrabold px-2.5 py-0.5 rounded-md text-xs">' + prog.priceDisplay + '</span>' +
                                                '<span class="text-xs font-extrabold text-[#15803D]">• ' + prog.highlightNote + '</span>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="pt-4 border-t border-[#BBF7D0]">' +
                                        '<button type="button" onclick="CatalystApp.openMockPopup(\'' + prog.boardCode + '\', \'' + prog.name + ' (100% FREE)\')" class="w-full bg-[#15803D] hover:bg-[#166534] text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-md transition text-xs sm:text-sm cursor-pointer flex items-center justify-center gap-2" aria-label="' + prog.ctaLabel + ' for ' + prog.boardCode + '">' +
                                            '<i class="fa-solid fa-clipboard-check text-logoYellow" aria-hidden="true"></i><span>' + prog.ctaLabel + '</span>' +
                                        '</button>' +
                                    '</div>' +
                                '</article>'
                            );
                        }
                        const waText = encodeURIComponent('Hi Catalyst Education, I want fees and schedule for ' + prog.name + ' (' + prog.boardCode + ').');
                        const secondaryBtn = prog.whatsapp
                            ? ('<a href="https://wa.me/919163194805?text=' + waText + '" target="_blank" rel="noopener noreferrer" class="w-full sm:w-1/2 surface-panel hover:bg-[#DCFCE7] text-[#15803D] border-2 border-[#15803D] font-extrabold py-3.5 px-4 rounded-2xl transition text-xs sm:text-sm cursor-pointer flex items-center justify-center gap-2" aria-label="WhatsApp about ' + prog.name + '">' +
                                '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i><span>' + (prog.secondaryCtaLabel || 'WhatsApp Us') + '</span></a>')
                            : ('<button type="button" onclick="CatalystApp.enrolPaidSeries(\'' + prog.boardCode + '\', \'' + prog.name.replace(/'/g, "\\'") + '\')" class="w-full sm:w-1/2 surface-panel hover:bg-[#DBEAFE] text-[#1D3B8B] border-2 border-[#1D3B8B] font-extrabold py-3.5 px-4 rounded-2xl transition text-xs sm:text-sm cursor-pointer flex items-center justify-center gap-2" aria-label="' + (prog.secondaryCtaLabel || 'Contact for fees') + '">' +
                                '<span>' + (prog.secondaryCtaLabel || 'Contact for fees') + '</span><i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></button>');
                        return (
                            '<article class="prog-card prog-card--paid rounded-3xl p-6 sm:p-7 border-2 border-[#1D3B8B] shadow-soothing flex flex-col justify-between space-y-5 relative">' +
                                '<div class="space-y-4">' +
                                    '<div class="flex flex-wrap items-center justify-between gap-2">' +
                                        '<span class="inline-flex items-center gap-1.5 bg-[#1D3B8B] text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-sm">' +
                                            '<i class="fa-solid fa-layer-group text-logoYellow" aria-hidden="true"></i><span>' + prog.badgeText + '</span>' +
                                        '</span>' +
                                        '<span class="bg-[#DBEAFE] text-[#1D3B8B] text-xs font-extrabold px-3 py-1 rounded-full border border-[#93C5FD]">' + prog.subBadgeText + '</span>' +
                                    '</div>' +
                                    '<div>' +
                                        '<div class="text-[11px] font-extrabold uppercase tracking-wider text-soothingBlue">Paid Programme: Contact for Fees</div>' +
                                        '<h4 class="text-xl sm:text-2xl font-extrabold text-midnight mt-1">' + prog.name + '</h4>' +
                                    '</div>' +
                                    '<div class="space-y-2.5 text-xs sm:text-sm text-slateText border-t border-[#BFDBFE] pt-4">' +
                                        '<p class="leading-relaxed">' + prog.forYou + '</p>' +
                                        '<p class="leading-relaxed">' + prog.youGet + '</p>' +
                                        '<p class="pt-0.5"><span class="text-soothingBlue font-bold">' + prog.priceDisplay + '</span></p>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="pt-4 border-t border-[#BFDBFE] flex flex-wrap sm:flex-nowrap items-center gap-3">' +
                                    '<button type="button" onclick="CatalystApp.enrolPaidSeries(\'' + prog.boardCode + '\', \'' + prog.name.replace(/'/g, "\\'") + '\')" class="w-full sm:w-1/2 bg-[#1D3B8B] hover:bg-midnight text-white font-extrabold py-3.5 px-4 rounded-2xl shadow-md transition text-xs sm:text-sm cursor-pointer flex items-center justify-center gap-2" aria-label="' + (prog.ctaLabel || 'Ask for fees and schedule') + ' for ' + prog.name + '">' +
                                        '<i class="fa-solid fa-comments text-logoYellow" aria-hidden="true"></i><span>' + (prog.ctaLabel || 'Ask for fees & schedule') + '</span>' +
                                    '</button>' +
                                    secondaryBtn +
                                '</div>' +
                            '</article>'
                        );
                    }).join('');
                }

                pageContainer.classList.remove('hidden');
                pageContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }

            function closeBoardPage(scrollToGoals) {
                const pageContainer = document.getElementById('board-programme-page-view');
                if (pageContainer) pageContainer.classList.add('hidden');
                activeBoardProgrammeKey = null;
                try {
                    if (history && history.replaceState) {
                        const path = location.pathname + location.search;
                        history.replaceState(null, '', path + (scrollToGoals ? '#select-your-goal' : '#hero'));
                    }
                } catch (e) { /* ignore */ }
                if (scrollToGoals) {
                    const goalSec = document.getElementById('select-your-goal');
                    if (goalSec) goalSec.scrollIntoView({ behavior: 'smooth' });
                }
            }

            function enrolPaidSeries(boardCode, programmeName) {
                const msgField = document.getElementById('contact-message');
                const boardSel = document.getElementById('contact-board');
                const classSel = document.getElementById('contact-class');
                if (msgField) {
                    msgField.value = 'Please share fees and schedule for: ' + programmeName + ' (' + boardCode + ').';
                }
                if (boardSel) {
                    const map = { ICSE: 'ICSE', CBSE: 'CBSE', WBBSE: 'WBBSE', CLASS12: 'CLASS12', WBCHSE: 'WBCHSE' };
                    boardSel.value = map[boardCode] || boardCode || '';
                }
                if (classSel) {
                    classSel.value = (boardCode === 'CLASS12' || boardCode === 'WBCHSE') ? '12' : '10';
                }
                const contactSec = document.getElementById('contact');
                if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
            }

            function restoreBoardFromHash() {
                const hash = (location.hash || '').replace(/^#/, '');
                const match = hash.match(/^programmes\/([a-z0-9]+)/i);
                if (!match) return;
                const key = match[1].toUpperCase();
                if (ContentStore.boardProgrammes[key]) {
                    openBoardPage(key);
                }
            }

            // 06. LIVE 2027 BOARD COUNTDOWN
            function switchCountdownBoard(boardKey) {
                if (!ContentStore.boardCountdowns[boardKey]) return;
                activeCountdownBoard = boardKey;
                ['CBSE', 'ICSE', 'WBBSE', 'WBCHSE'].forEach(function (k) {
                    const btn = document.getElementById('cd-tab-' + k);
                    if (btn) {
                        btn.className = (k === boardKey)
                            ? 'pill-tab pill-tab--active'
                            : 'pill-tab pill-tab--idle';
                    }
                });
                updateCountdownDisplay();
            }

            function updateCountdownDisplay() {
                const cfg = ContentStore.boardCountdowns[activeCountdownBoard];
                if (!cfg) return;
                const targetTime = new Date(cfg.targetIso).getTime();
                const now = Date.now();
                const diff = Math.max(0, targetTime - now);

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const mins = Math.floor((diff / (1000 * 60)) % 60);
                const secs = Math.floor((diff / 1000) % 60);

                const dEl = document.getElementById('cd-days');
                const hEl = document.getElementById('cd-hours');
                const mEl = document.getElementById('cd-mins');
                const sEl = document.getElementById('cd-secs');
                const tEl = document.getElementById('cd-board-title');

                if (dEl) dEl.textContent = String(days).padStart(2, '0');
                if (hEl) hEl.textContent = String(hours).padStart(2, '0');
                if (mEl) mEl.textContent = String(mins).padStart(2, '0');
                if (sEl) sEl.textContent = String(secs).padStart(2, '0');
                if (tEl) tEl.textContent = cfg.title + ' • ' + cfg.targetLabel;
            }

            // 07. 30-SECOND BOARD READINESS QUIZ (NON-REPEATING 5-ATTEMPT ROTATION)
            function getActiveStandardKey() {
                const stdSel = document.getElementById('quiz-standard-select');
                return (stdSel && stdSel.value === '11_12') ? '11_12' : '9_10';
            }

            function shuffleArray(arr) {
                const copy = arr.slice();
                for (let i = copy.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    const temp = copy[i];
                    copy[i] = copy[j];
                    copy[j] = temp;
                }
                return copy;
            }

            // Remap option order + correct index so answers are not stuck on one letter
            function scrambleQuestionOptions(question) {
                const clone = Object.assign({}, question);
                const sourceOptions = (question.options || []).slice();
                if (sourceOptions.length < 2) return clone;

                const tagged = sourceOptions.map(function (text, idx) {
                    return { text: text, isCorrect: question.ans >= 0 && idx === question.ans };
                });
                const scrambled = shuffleArray(tagged);
                clone.options = scrambled.map(function (item) { return item.text; });
                if (question.ans >= 0) {
                    clone.ans = scrambled.findIndex(function (item) { return item.isCorrect; });
                }
                return clone;
            }

            function buildNonRepeatingQuizSet() {
                const stdKey = getActiveStandardKey();
                const subjSel = document.getElementById('quiz-subject-select');
                const subjFilter = subjSel ? subjSel.value : 'ALL';

                const sourcePool = (stdKey === '11_12') ? ContentStore.quizPool11_12 : ContentStore.quizPool;
                const storageKey = (stdKey === '11_12') ? QUIZ_STORAGE_KEY_11_12 : QUIZ_STORAGE_KEY_9_10;

                let usedIds = [];
                try {
                    const raw = localStorage.getItem(storageKey);
                    if (raw) usedIds = JSON.parse(raw) || [];
                } catch (e) {
                    usedIds = [];
                }

                // Reset cycle once 5 attempts (50 questions) have been served
                if (usedIds.length >= 45) {
                    usedIds = [];
                }

                function pickFromTier(tierName, count) {
                    let candidates = sourcePool.filter(function (q) {
                        const subjMatch = (subjFilter === 'ALL') || (q.subject === subjFilter);
                        return q.tier === tierName && subjMatch && usedIds.indexOf(q.id) === -1;
                    });
                    if (candidates.length < count) {
                        candidates = sourcePool.filter(function (q) {
                            return q.tier === tierName && usedIds.indexOf(q.id) === -1;
                        });
                    }
                    if (candidates.length < count) {
                        candidates = sourcePool.filter(function (q) { return q.tier === tierName; });
                    }
                    return shuffleArray(candidates).slice(0, count);
                }

                const easySet = pickFromTier('Easy', 3);
                const modSet = pickFromTier('Moderate', 4);
                const hardSet = pickFromTier('Hard', 2);
                const trapSet = pickFromTier('Trap', 1);

                const combined = easySet.concat(modSet, hardSet, trapSet);
                combined.forEach(function (q) {
                    if (usedIds.indexOf(q.id) === -1) usedIds.push(q.id);
                });

                try {
                    localStorage.setItem(storageKey, JSON.stringify(usedIds));
                } catch (e) {
                    // Ignore storage quota issues in restricted iframes
                }

                return combined.map(scrambleQuestionOptions);
            }

            function renderQuizQuestion() {
                const qViewport = document.getElementById('quiz-question-viewport');
                const rViewport = document.getElementById('quiz-result-viewport');
                if (!qViewport || !rViewport) return;

                if (quizCurrentIndex >= activeQuizSet.length) {
                    showQuizCompletion();
                    return;
                }

                qViewport.classList.remove('hidden');
                rViewport.classList.add('hidden');
                quizAnsweredCurrent = false;

                const currentQ = activeQuizSet[quizCurrentIndex];
                const stdKey = getActiveStandardKey();

                document.getElementById('quiz-q-counter').textContent = 'Question ' + (quizCurrentIndex + 1) + ' of ' + activeQuizSet.length;
                document.getElementById('quiz-q-subject-badge').textContent = currentQ.subject;
                document.getElementById('quiz-q-std-badge').textContent = (stdKey === '11_12') ? '11th/12th' : '9th/10th';

                const pct = Math.round(((quizCurrentIndex + 1) / activeQuizSet.length) * 100);
                document.getElementById('quiz-progress-text').textContent = pct + '%';
                document.getElementById('quiz-progress-bar').style.width = pct + '%';
                document.getElementById('quiz-q-text').textContent = currentQ.q;

                const feedbackBox = document.getElementById('quiz-feedback-box');
                feedbackBox.className = 'hidden p-3.5 rounded-2xl text-xs leading-relaxed border';
                feedbackBox.textContent = '';

                const nextBtn = document.getElementById('quiz-next-btn');
                nextBtn.disabled = true;
                nextBtn.innerHTML = (quizCurrentIndex === activeQuizSet.length - 1)
                    ? 'See Readiness Result <i class="fa-solid fa-flag-checkered ml-1"></i>'
                    : 'Next Question <i class="fa-solid fa-arrow-right ml-1"></i>';

                const optionsGrid = document.getElementById('quiz-options-grid');
                optionsGrid.innerHTML = currentQ.options.map(function (optText, idx) {
                    return (
                        '<button type="button" id="quiz-opt-' + idx + '" onclick="CatalystApp.selectQuizOption(' + idx + ')" class="quiz-option text-left p-3.5 rounded-2xl border border-warmBorder transition text-xs sm:text-sm font-semibold text-midnight cursor-pointer flex items-center gap-2.5">' +
                            '<span class="quiz-option-letter w-6 h-6 rounded-lg font-extrabold flex items-center justify-center text-xs shrink-0">' + String.fromCharCode(65 + idx) + '</span>' +
                            '<span>' + optText + '</span>' +
                        '</button>'
                    );
                }).join('');
            }

            function selectQuizOption(selectedIndex) {
                if (quizAnsweredCurrent) return;
                quizAnsweredCurrent = true;

                const currentQ = activeQuizSet[quizCurrentIndex];
                const isTrap = Boolean(currentQ.isUnbeatableTrap);
                const isCorrect = (!isTrap) && (selectedIndex === currentQ.ans);

                if (isCorrect) {
                    quizScore += 1;
                }

                currentQ.options.forEach(function (_, idx) {
                    const btn = document.getElementById('quiz-opt-' + idx);
                    if (!btn) return;
                    btn.disabled = true;
                    if (isCorrect && idx === selectedIndex) {
                        btn.className = 'quiz-option quiz-option--correct';
                    } else if (idx === selectedIndex) {
                        btn.className = 'quiz-option quiz-option--wrong';
                    } else if (!isTrap && idx === currentQ.ans) {
                        btn.className = 'quiz-option quiz-option--answer';
                    } else {
                        btn.className = 'quiz-option quiz-option--dim';
                    }
                });

                const feedbackBox = document.getElementById('quiz-feedback-box');
                if (isCorrect) {
                    feedbackBox.className = 'callout-success';
                    feedbackBox.innerHTML = '<strong>Spot On!</strong> ' + currentQ.exp;
                } else {
                    feedbackBox.className = 'callout-error';
                    feedbackBox.innerHTML = '<strong>Board Marking Insight:</strong> ' + currentQ.exp;
                }

                document.getElementById('quiz-next-btn').disabled = false;
            }

            function nextQuizQuestion() {
                if (!quizAnsweredCurrent) return;
                quizCurrentIndex += 1;
                renderQuizQuestion();
            }

            function showQuizCompletion() {
                const qViewport = document.getElementById('quiz-question-viewport');
                const rViewport = document.getElementById('quiz-result-viewport');
                if (!qViewport || !rViewport) return;

                qViewport.classList.add('hidden');
                rViewport.classList.remove('hidden');

                const safeScore = Math.min(quizScore, 9);
                document.getElementById('quiz-final-score').textContent = safeScore + ' / 10';

                const motivationEl = document.getElementById('quiz-tailored-motivation');
                if (safeScore <= 4) {
                    motivationEl.textContent = 'Every topper starts by finding their blind spots. Take our free full-length mock test with instant answer paper evaluation and guidance to strengthen fundamentals before your boards.';
                } else if (safeScore <= 7) {
                    motivationEl.textContent = 'You have a strong conceptual base. With targeted mock practice and clear answer paper feedback in our 1:6 batches, you can turn these 70s into a high board score.';
                } else {
                    motivationEl.textContent = 'Strong performance. Sharpen your exam temperament with our full-length mock test series to avoid subtle examiner traps and aim for a top board rank.';
                }
            }

            function configureQuiz() {
                quizCurrentIndex = 0;
                quizScore = 0;
                quizAnsweredCurrent = false;
                activeQuizSet = buildNonRepeatingQuizSet();
                renderQuizQuestion();
            }

            function restartQuiz() {
                configureQuiz();
            }

            function claimQuizFreeMockTest() {
                const brdSel = document.getElementById('quiz-board-select');
                const brd = (brdSel && brdSel.value !== 'ALL') ? brdSel.value : 'ICSE';
                openMockPopup(normalizeBoardCode(brd), 'Quiz Winner • 100% Free Mock Test Pass');
            }

            // 08. SYLLABUS PER SUBJECT EXPLORER
            function selectSyllabusBoard(boardKey) {
                if (!ContentStore.syllabusDatabase[boardKey]) return;
                activeSyllabusBoard = boardKey;
                ['ICSE10', 'CBSE10', 'WBBSE10', 'CLASS12'].forEach(function (k) {
                    const btn = document.getElementById('syl-board-' + k);
                    if (btn) {
                        btn.className = (k === boardKey)
                            ? 'pill-tab pill-tab--active-dark'
                            : 'pill-tab pill-tab--idle';
                    }
                });
                renderSyllabusView();
            }

            function selectSyllabusSubject(subjKey) {
                activeSyllabusSubject = subjKey;
                ['Physics', 'Chemistry', 'Mathematics', 'Biology'].forEach(function (s) {
                    const btn = document.getElementById('syl-subj-' + s);
                    if (btn) {
                        btn.className = (s === subjKey)
                            ? 'pill-tab pill-tab--active'
                            : 'pill-tab pill-tab--ghost';
                    }
                });
                renderSyllabusView();
            }

            function normalizeSyllabusUnit(unit) {
                if (typeof unit === 'string') {
                    const markMatch = unit.match(/\(([^)]*Marks?)\)\s*$/i);
                    return {
                        title: markMatch ? unit.replace(/\s*\([^)]*Marks?\)\s*$/i, '').trim() : unit,
                        marks: markMatch ? markMatch[1] : '',
                        points: ['Revise core definitions and board-typical examples for this chapter.'],
                        tip: 'Practise one timed question set from this chapter.'
                    };
                }
                return {
                    title: unit.title || 'Chapter',
                    marks: unit.marks || '',
                    points: unit.points || [],
                    tip: unit.tip || ''
                };
            }

            function toggleSyllabusUnit(index) {
                const panel = document.getElementById('syl-unit-panel-' + index);
                const btn = document.getElementById('syl-unit-btn-' + index);
                const icon = document.getElementById('syl-unit-icon-' + index);
                if (!panel || !btn) return;

                const willOpen = panel.classList.contains('hidden');
                // Accordion: close other open units in this view
                const allPanels = document.querySelectorAll('[id^="syl-unit-panel-"]');
                Array.prototype.forEach.call(allPanels, function (el) {
                    const idx = el.id.replace('syl-unit-panel-', '');
                    const otherBtn = document.getElementById('syl-unit-btn-' + idx);
                    const otherIcon = document.getElementById('syl-unit-icon-' + idx);
                    el.classList.add('hidden');
                    if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                    if (otherIcon) otherIcon.classList.remove('rotate-180');
                });

                if (willOpen) {
                    panel.classList.remove('hidden');
                    btn.setAttribute('aria-expanded', 'true');
                    if (icon) icon.classList.add('rotate-180');
                }
            }

            function renderSyllabusView() {
                const container = document.getElementById('syllabus-content-container');
                if (!container) return;
                const boardObj = ContentStore.syllabusDatabase[activeSyllabusBoard] || ContentStore.syllabusDatabase.ICSE10;
                const subjObj = boardObj[activeSyllabusSubject] || boardObj.Physics;
                const units = (subjObj.units || []).map(normalizeSyllabusUnit);

                const unitsHtml = units.map(function (u, idx) {
                    const pointsHtml = (u.points || []).map(function (p) {
                        return '<li class="flex items-start gap-2"><i class="fa-solid fa-angle-right text-soothingBlue mt-0.5 text-[10px]" aria-hidden="true"></i><span>' + p + '</span></li>';
                    }).join('');
                    const tipHtml = u.tip
                        ? ('<p class="callout-tip mt-2.5">' + u.tip + '</p>')
                        : '';

                    return (
                        '<div class="syl-unit-card rounded-2xl border border-warmBorder overflow-hidden">' +
                            '<button type="button" id="syl-unit-btn-' + idx + '" onclick="CatalystApp.toggleSyllabusUnit(' + idx + ')" aria-expanded="false" aria-controls="syl-unit-panel-' + idx + '" aria-label="Toggle chapter: ' + u.title + '" class="syl-unit-btn w-full flex items-start justify-between gap-3 p-3.5 text-left cursor-pointer transition">' +
                                '<span class="flex items-start gap-2.5 min-w-0">' +
                                    '<i class="fa-solid fa-circle-check text-soothingBlue mt-0.5 shrink-0" aria-hidden="true"></i>' +
                                    '<span class="min-w-0">' +
                                        '<span class="block text-xs sm:text-sm font-extrabold text-midnight leading-snug">' + u.title + '</span>' +
                                        (u.marks ? '<span class="label-chip label-chip--blue inline-block mt-1">' + u.marks + '</span>' : '') +
                                    '</span>' +
                                '</span>' +
                                '<i id="syl-unit-icon-' + idx + '" class="fa-solid fa-chevron-down text-[10px] text-mutedText mt-1.5 shrink-0 transition-transform" aria-hidden="true"></i>' +
                            '</button>' +
                            '<div id="syl-unit-panel-' + idx + '" class="hidden px-3.5 pb-3.5 pt-0 border-t border-warmBorder/70" role="region" aria-labelledby="syl-unit-btn-' + idx + '">' +
                                '<p class="text-[10px] font-extrabold uppercase tracking-wider text-mutedText pt-3 mb-2">What to revise</p>' +
                                '<ul class="space-y-1.5 text-xs text-slateText leading-relaxed">' + pointsHtml + '</ul>' +
                                tipHtml +
                            '</div>' +
                        '</div>'
                    );
                }).join('');

                const focusTips = {
                    Physics: 'Focus on diagrams, units, and step-wise numerical presentation in board answers.',
                    Chemistry: 'Practise balanced equations, observation tables, and named reactions under timed conditions.',
                    Mathematics: 'Show every marking step clearly; neat working often recovers easy method marks.',
                    Biology: 'Prioritise labelled diagrams, definitions, and exact board terminology.'
                };
                const tipLine = focusTips[activeSyllabusSubject] || 'Practise under timed conditions and review every paper with faculty feedback.';

                container.innerHTML =
                    '<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">' +
                        '<div class="lg:col-span-8 space-y-4">' +
                            '<div class="flex flex-wrap items-center gap-2">' +
                                '<span class="bg-midnight text-logoYellow text-xs font-extrabold px-3 py-1 rounded-full">' + activeSyllabusBoard + '</span>' +
                                '<span class="label-chip label-chip--blue">' + activeSyllabusSubject + '</span>' +
                            '</div>' +
                            '<div>' +
                                '<h3 class="text-lg sm:text-xl font-extrabold text-midnight">' + activeSyllabusSubject + ' High-Weightage Units &amp; Marking Distribution</h3>' +
                                '<p class="text-[11px] text-mutedText mt-1">Tap a chapter to see revision points and a mock-test tip.</p>' +
                            '</div>' +
                            '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 items-start">' + unitsHtml + '</div>' +
                        '</div>' +
                        '<div class="lg:col-span-4 bg-ivory rounded-2xl p-5 border border-warmBorder space-y-4">' +
                            '<div class="text-xs font-extrabold uppercase tracking-wider text-soothingRed">Examiner Evaluation Focus</div>' +
                            '<p class="text-xs sm:text-sm text-slateText leading-relaxed">' + subjObj.focus + '</p>' +
                            '<div class="callout-tip">' +
                                tipLine +
                            '</div>' +
                            '<button type="button" onclick="CatalystApp.openMockPopup(\'ICSE\', \'' + activeSyllabusSubject + ' Mock Assessment\')" class="w-full bg-soothingBlue hover:bg-midnight text-white font-extrabold py-3 px-4 rounded-xl text-xs transition cursor-pointer" aria-label="Register for free ' + activeSyllabusSubject + ' mock test">' +
                                'Register for Free ' + activeSyllabusSubject + ' Mock Test' +
                            '</button>' +
                        '</div>' +
                    '</div>';
            }

            // 09. FACULTY REGISTRY
            function renderFacultyGrid() {
                const container = document.getElementById('faculty-grid-container');
                if (!container) return;
                const activeFaculty = (ContentStore.faculty || []).filter(function (f) { return f.active; });

                container.innerHTML = activeFaculty.map(function (f) {
                    return (
                        '<article class="colorful-card-glass rounded-3xl p-6 border border-warmBorder shadow-soothing flex flex-col justify-between space-y-4">' +
                            '<div class="space-y-2.5">' +
                                '<div class="flex items-center justify-between gap-2">' +
                                    '<span class="label-chip label-chip--gold">' + f.badge + '</span>' +
                                    '<span class="text-xs font-bold text-soothingBlue text-right">' + f.experience + '</span>' +
                                '</div>' +
                                '<h3 class="text-xl font-extrabold text-midnight">' + f.name + '</h3>' +
                                '<div class="text-xs font-bold text-soothingRed">' + f.role + '</div>' +
                                '<p class="text-xs text-slateText leading-relaxed">' + f.specialization + '</p>' +
                            '</div>' +
                        '</article>'
                    );
                }).join('');
            }

            // 10. FAQ, CONTACT & MODALS
            function normalizeBoardCode(boardCode) {
                const raw = String(boardCode || 'ICSE').toUpperCase().trim();
                if (raw === 'WBSE' || raw === 'WBBSE') return 'WBBSE';
                if (raw === 'FOUNDATION') return 'FOUNDATION';
                if (raw === 'CLASS12' || raw === 'CLASS-12') return 'CLASS12';
                if (raw === 'WBCHSE' || raw === 'ISC' || raw === 'XII') return 'WBCHSE';
                if (raw === 'CBSE') return 'CBSE';
                return 'ICSE';
            }

            function isValidPhone(value) {
                const digits = String(value || '').replace(/\D/g, '');
                return digits.length >= 10 && digits.length <= 13;
            }

            function toggleFaq(index) {
                const body = document.getElementById('faq-body-' + index);
                const icon = document.getElementById('faq-icon-' + index);
                const btn = document.getElementById('faq-btn-' + index);
                if (!body) return;
                const willOpen = body.classList.contains('hidden');
                body.classList.toggle('hidden', !willOpen);
                if (icon) icon.classList.toggle('rotate-180', willOpen);
                if (btn) btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
            }

            function toggleMapIframe() {
                const drawer = document.getElementById('contact-map-drawer');
                const iframe = document.getElementById('catalyst-map-iframe');
                const btn = document.getElementById('toggle-map-btn');
                const label = document.getElementById('toggle-map-btn-label');
                if (!drawer || !iframe) return;

                const isHidden = drawer.classList.contains('hidden');
                if (isHidden) {
                    const targetSrc = iframe.getAttribute('data-src');
                    if (targetSrc && !iframe.getAttribute('src')) {
                        iframe.setAttribute('src', targetSrc);
                    }
                    drawer.classList.remove('hidden');
                    if (btn) btn.setAttribute('aria-expanded', 'true');
                    if (label) label.textContent = 'Hide map';
                } else {
                    drawer.classList.add('hidden');
                    if (btn) btn.setAttribute('aria-expanded', 'false');
                    if (label) label.textContent = 'Show map';
                }
            }

            function handleContactSubmit(event) {
                if (event) event.preventDefault();
                const nameEl = document.getElementById('contact-name');
                const phoneEl = document.getElementById('contact-phone');
                const emailEl = document.getElementById('contact-email');
                const boardEl = document.getElementById('contact-board');
                const classEl = document.getElementById('contact-class');
                const messageEl = document.getElementById('contact-message');
                const companyEl = document.getElementById('contact-company');
                const statusEl = document.getElementById('contact-status-msg');
                const submitBtn = document.querySelector('#contact-form button[type="submit"]');
                const name = (nameEl && nameEl.value || '').trim();
                const phone = (phoneEl && phoneEl.value || '').trim();
                const email = (emailEl && emailEl.value || '').trim();
                const board = (boardEl && boardEl.value || '').trim();
                const studentClass = (classEl && classEl.value || '').trim();
                const message = (messageEl && messageEl.value || '').trim();
                const company = (companyEl && companyEl.value || '').trim();

                if (!name || !phone || !message || !board || !studentClass || !isValidPhone(phone)) {
                    if (statusEl) {
                        statusEl.textContent = 'Please enter name, valid mobile, board, class, and your enquiry (fees, schedule, or free test).';
                        statusEl.className = 'p-3.5 rounded-xl bg-[#FFF1F2] text-soothingRed text-xs font-bold border border-[#FDA4AF]';
                        statusEl.classList.remove('hidden');
                    }
                    return;
                }

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Sending...';
                }

                fetch('api/contact.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                        name: name,
                        phone: phone,
                        email: email,
                        board: board,
                        studentClass: studentClass,
                        message: message,
                        company: company,
                        source: 'contact-form'
                    })
                })
                .then(function (res) { return res.json().catch(function () { return { ok: false }; }); })
                .then(function (data) {
                    if (statusEl) {
                        if (data && data.ok) {
                            statusEl.textContent = (data.message)
                                ? ('Thank you, ' + name + '! ' + data.message)
                                : ('Thank you, ' + name + '! Your enquiry has been received. We will call or WhatsApp you shortly about fees and schedules.');
                            statusEl.className = 'p-3.5 rounded-xl bg-[#DCFCE7] text-[#15803D] text-xs font-bold border border-[#86EFAC]';
                            document.getElementById('contact-form').reset();
                        } else {
                            statusEl.textContent = (data && data.error) || 'Unable to send right now. Please WhatsApp / call +91 91631 94805.';
                            statusEl.className = 'p-3.5 rounded-xl bg-[#FFF1F2] text-soothingRed text-xs font-bold border border-[#FDA4AF]';
                        }
                        statusEl.classList.remove('hidden');
                    }
                })
                .catch(function () {
                    if (statusEl) {
                        statusEl.textContent = 'Unable to send right now. Please WhatsApp / call +91 91631 94805 or email info@catalysteducation.net.';
                        statusEl.className = 'p-3.5 rounded-xl bg-[#FFF1F2] text-soothingRed text-xs font-bold border border-[#FDA4AF]';
                        statusEl.classList.remove('hidden');
                    }
                })
                .finally(function () {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Submit Enquiry';
                    }
                });
            }

            function openMockPopup(preselectedBoard, customBannerLabel) {
                const modal = document.getElementById('mockPopupModal');
                if (!modal) return;
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                document.body.style.overflow = 'hidden';

                document.getElementById('popup-form-container').classList.remove('hidden');
                document.getElementById('popup-success-container').classList.add('hidden');

                if (customBannerLabel) {
                    const bannerText = document.getElementById('popup-reward-banner-text');
                    if (bannerText) bannerText.textContent = customBannerLabel;
                }
                selectPopupBoard(preselectedBoard || selectedPopupBoard || 'ICSE');

                // Mount/reload after the modal is visible so the iframe is not blank
                ensureGoogleForm('mock-google-form-wrap', 'mock-google-form', 'mock-google-form-link', SiteConfig.googleForms && SiteConfig.googleForms.mockTest, true);

                const firstField = document.getElementById('popup-student-name');
                if (firstField && !firstField.closest('.hidden')) {
                    setTimeout(function () { firstField.focus(); }, 50);
                }
            }

            function closeMockPopup() {
                const modal = document.getElementById('mockPopupModal');
                if (!modal) return;
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                if (!isAnyModalOpen()) document.body.style.overflow = '';
            }

            function selectPopupBoard(boardCode) {
                const normalized = normalizeBoardCode(boardCode);
                selectedPopupBoard = normalized;
                ['ICSE', 'CBSE', 'WBBSE', 'WBCHSE'].forEach(function (b) {
                    const btn = document.getElementById('popup-board-' + b);
                    if (btn) {
                        const isActive = (b === normalized);
                        btn.className = isActive
                            ? 'py-2 rounded-xl text-xs font-extrabold bg-soothingBlue text-white border border-soothingBlue cursor-pointer'
                            : 'py-2 rounded-xl text-xs font-extrabold bg-ivory text-midnight border border-warmBorder cursor-pointer';
                        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
                    }
                });
            }

            function submitPopupMockForm(event) {
                if (event) event.preventDefault();
                const nameEl = document.getElementById('popup-student-name');
                const phoneEl = document.getElementById('popup-student-phone');
                const name = (nameEl && nameEl.value || '').trim();
                const phone = (phoneEl && phoneEl.value || '').trim();
                const submitBtn = document.querySelector('#mockPopupModal form button[type="submit"]');
                if (!name || !isValidPhone(phone)) {
                    if (phoneEl) phoneEl.focus();
                    return;
                }

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Confirming...';
                }

                fetch('api/register.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                        name: name,
                        phone: phone,
                        board: selectedPopupBoard,
                        source: 'free-mock-popup'
                    })
                })
                .then(function (res) { return res.json().catch(function () { return { ok: false }; }); })
                .then(function (data) {
                    const passId = (data && data.passId) ? data.passId : ('#CAT-2027-' + Math.floor(100 + Math.random() * 900));
                    document.getElementById('popup-pass-id').textContent = passId + ' (' + selectedPopupBoard + ')';
                    document.getElementById('popup-form-container').classList.add('hidden');
                    document.getElementById('popup-success-container').classList.remove('hidden');
                })
                .catch(function () {
                    const passId = '#CAT-2027-' + Math.floor(100 + Math.random() * 900);
                    document.getElementById('popup-pass-id').textContent = passId + ' (' + selectedPopupBoard + ')';
                    document.getElementById('popup-form-container').classList.add('hidden');
                    document.getElementById('popup-success-container').classList.remove('hidden');
                })
                .finally(function () {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Confirm Free Mock Test Pass';
                    }
                });
            }

            function openTermsModal() {
                const modal = document.getElementById('termsModal');
                if (!modal) return;
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                document.body.style.overflow = 'hidden';
            }

            function closeTermsModal() {
                const modal = document.getElementById('termsModal');
                if (!modal) return;
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                if (!isAnyModalOpen()) document.body.style.overflow = '';
            }

            function isAnyModalOpen() {
                const mock = document.getElementById('mockPopupModal');
                const terms = document.getElementById('termsModal');
                return (mock && !mock.classList.contains('hidden')) || (terms && !terms.classList.contains('hidden'));
            }

            function toggleMobileMenu() {
                const menu = document.getElementById('mobile-menu');
                const btn = document.getElementById('mobile-menu-btn');
                if (!menu) return;
                const willOpen = menu.classList.contains('hidden');
                menu.classList.toggle('hidden', !willOpen);
                if (btn) btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
            }

            function bindGlobalKeyboardHandlers() {
                document.addEventListener('keydown', function (event) {
                    if (event.key !== 'Escape') return;
                    const mock = document.getElementById('mockPopupModal');
                    const terms = document.getElementById('termsModal');
                    if (mock && !mock.classList.contains('hidden')) {
                        closeMockPopup();
                        return;
                    }
                    if (terms && !terms.classList.contains('hidden')) {
                        closeTermsModal();
                    }
                });

                // Close modals when backdrop is clicked
                ['mockPopupModal', 'termsModal'].forEach(function (id) {
                    const modal = document.getElementById(id);
                    if (!modal) return;
                    modal.addEventListener('click', function (event) {
                        if (event.target !== modal) return;
                        if (id === 'mockPopupModal') closeMockPopup();
                        else closeTermsModal();
                    });
                });
            }

            // 11. AUTOMATED REGRESSION VERIFICATION SUITE (15 ASSERTIONS)
            function runRegressionSuite() {
                const bodyText = document.body.innerText || '';
                const traps9_10 = ContentStore.quizPool.filter(function (q) { return q.tier === 'Trap'; });
                const traps11_12 = ContentStore.quizPool11_12.filter(function (q) { return q.tier === 'Trap'; });
                const mapDrawer = document.getElementById('contact-map-drawer');
                const mapIframe = document.getElementById('catalyst-map-iframe');
                const activeBanners = getActiveBanners();
                const bp = ContentStore.boardProgrammes;

                const checks = [
                    { name: 'Zero Raw Script Leakage on Screen', pass: !bodyText.includes('function getActiveBanners()') && !bodyText.includes('${slide.headline}') },
                    { name: 'Exact SVG Brand Logo Integrity', pass: Boolean(document.getElementById('catalyst-brand-logo')) },
                    { name: 'Homepage Banner Carousel & Bengali Headline Present', pass: activeBanners.length === 3 && activeBanners[0].headline === 'পুজো শেষ, এবার পরীক্ষা শুরু!' },
                    { name: 'SELECT YOUR GOAL Section & 4 Click Here Buttons', pass: bodyText.includes('SELECT YOUR GOAL') && ['ICSE', 'CBSE', 'WBBSE', 'FOUNDATION'].every(function (k) { return Boolean(document.getElementById('goal-btn-' + k)); }) },
                    { name: 'ICSE, CBSE, WBBSE Free (Green) & Paid (Blue) + Foundation Coming Soon', pass: Boolean(bp.ICSE && bp.CBSE && bp.WBBSE && bp.FOUNDATION) && bp.ICSE.programmes.length === 2 && bp.FOUNDATION.programmes[0].statusDisplay === 'Coming Soon' },
                    { name: 'Auto-Popup Deactivated on Load', pass: SiteConfig.features.autoOpenMockPopup === false && Boolean(document.getElementById('mockPopupModal')) },
                    { name: '50-Question Pools for Both 9/10 & 11/12', pass: ContentStore.quizPool.length === 50 && ContentStore.quizPool11_12.length === 50 },
                    { name: 'Strict <100% Cap on All Examiner Traps', pass: traps9_10.length === 5 && traps11_12.length === 5 && traps9_10.every(function (t) { return t.isUnbeatableTrap; }) && traps11_12.every(function (t) { return t.isUnbeatableTrap; }) },
                    { name: 'Zero Meta Instructions in Quiz UI', pass: !bodyText.includes('No One Scores 100%') && !bodyText.includes('Easy → Hard') },
                    { name: 'Classes 9 to 12, 1:6 Batch Focus & Answer Paper Check Copy', pass: bodyText.includes('Classes 9 to 12 • All Boards') && bodyText.includes('1:6 Batch Focus') && bodyText.includes('Instant Answer Paper Check') },
                    { name: 'Reliable Google Maps Embed Configured (22.5075016,88.3647385)', pass: Boolean(mapIframe) && (mapIframe.getAttribute('data-src') || '').includes('22.5075016,88.3647385') },
                    { name: 'EdufinGrow LLP Disclosure Intact', pass: bodyText.includes(SiteConfig.legalDisclosure) },
                    { name: 'Alapan Roy Faculty Profile Active', pass: ContentStore.faculty.some(function (f) { return f.name === 'Alapan Roy' && f.active; }) },
                    { name: 'Fault-Isolated Modules Healthy', pass: Object.keys(mountedModules).length >= 3 && Object.values(mountedModules).every(function (m) { return m.status === 'OK'; }) },
                    { name: 'Compact Toggleable Map Drawer Hidden by Default & Ready', pass: Boolean(mapDrawer && mapIframe) && mapDrawer.classList.contains('hidden') && typeof toggleMapIframe === 'function' }
                ];

                const passedCount = checks.filter(function (c) { return c.pass; }).length;
                console.info('[CatalystCore QA] ' + passedCount + '/' + checks.length + ' checks passed.', checks);
                return { passedCount: passedCount, total: checks.length, allPassed: passedCount === checks.length, checks: checks };
            }

            // 12. INITIALIZATION
            function toGoogleFormEmbedUrl(url) {
                const raw = String(url || '').trim();
                if (!raw) return '';
                if (raw.indexOf('embedded=true') !== -1) return raw;
                if (raw.indexOf('/viewform') !== -1) {
                    return raw + (raw.indexOf('?') === -1 ? '?embedded=true' : '&embedded=true');
                }
                return raw;
            }

            function ensureGoogleForm(wrapId, iframeId, linkId, url, forceReload) {
                const wrap = document.getElementById(wrapId);
                const iframe = document.getElementById(iframeId);
                const link = document.getElementById(linkId);
                const embedUrl = toGoogleFormEmbedUrl(url);
                if (!wrap || !iframe || !embedUrl) return false;

                const currentSrc = iframe.getAttribute('src') || '';
                if (!currentSrc || currentSrc === 'about:blank') {
                    iframe.setAttribute('src', embedUrl);
                } else if (forceReload) {
                    // Re-assign after the modal is painted so a previously-hidden iframe loads
                    requestAnimationFrame(function () {
                        iframe.setAttribute('src', embedUrl);
                    });
                }
                if (link) {
                    const openUrl = embedUrl.replace('embedded=true', 'usp=sf_link').replace('?&', '?');
                    link.href = openUrl.indexOf('http') === 0 ? openUrl : embedUrl;
                }
                wrap.classList.remove('hidden');
                return true;
            }

            function mountGoogleForms() {
                ensureGoogleForm(
                    'enquiry-google-form-wrap',
                    'enquiry-google-form',
                    'enquiry-google-form-link',
                    SiteConfig.googleForms && SiteConfig.googleForms.enquiry,
                    false
                );
                ensureGoogleForm(
                    'mock-google-form-wrap',
                    'mock-google-form',
                    'mock-google-form-link',
                    SiteConfig.googleForms && SiteConfig.googleForms.mockTest,
                    false
                );
            }

            function whenVisible(selector, callback, rootMargin) {
                const el = document.querySelector(selector);
                if (!el) {
                    callback();
                    return;
                }
                let done = false;
                function run() {
                    if (done) return;
                    done = true;
                    callback();
                }
                if (location.hash && el.id && location.hash === '#' + el.id) {
                    run();
                    return;
                }
                if (!('IntersectionObserver' in window)) {
                    run();
                    return;
                }
                const observer = new IntersectionObserver(function (entries) {
                    if (entries.some(function (entry) { return entry.isIntersecting; })) {
                        observer.disconnect();
                        run();
                    }
                }, { rootMargin: rootMargin || '280px 0px' });
                observer.observe(el);
            }

            function syncThemeToggleUi() {
                const isDark = document.documentElement.classList.contains('dark');
                const btn = document.getElementById('theme-toggle-btn');
                const icon = document.getElementById('theme-toggle-icon');
                if (btn) {
                    const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
                    btn.setAttribute('aria-label', label);
                    btn.setAttribute('title', label);
                }
                if (icon) {
                    icon.className = isDark
                        ? 'fa-solid fa-sun text-sm'
                        : 'fa-solid fa-moon text-sm';
                }
                const metaTheme = document.querySelector('meta[name="theme-color"]');
                if (metaTheme) metaTheme.setAttribute('content', isDark ? '#0B1220' : '#0028B8');
            }

            function toggleTheme() {
                const root = document.documentElement;
                const next = root.classList.contains('dark') ? 'light' : 'dark';
                root.classList.toggle('dark', next === 'dark');
                try { localStorage.setItem('catalyst-theme', next); } catch (e) { /* ignore */ }
                const metaTheme = document.querySelector('meta[name="theme-color"]');
                if (metaTheme) metaTheme.setAttribute('content', next === 'dark' ? '#0B1220' : '#0028B8');
                syncThemeToggleUi();
            }

            function init() {
                syncThemeToggleUi();
                mountModule('BannerCarousel', function () {
                    renderBannerCarousel({ immediate: true });
                    bindBannerAutoplayControls();
                    resetBannerAutoTimer();
                    setTimeout(resetBannerAutoTimer, 500);
                });
                mountModule('ScrollReveal', function () {
                    bindScrollReveals();
                });
                mountModule('CountdownClock', function () {
                    updateCountdownDisplay();
                    setInterval(updateCountdownDisplay, 1000);
                });
                mountModule('KeyboardAccessibility', function () {
                    bindGlobalKeyboardHandlers();
                });

                // Defer heavier below-fold work until near viewport (faster first paint)
                whenVisible('#diagnostic-quiz', function () {
                    mountModule('DiagnosticQuiz', function () {
                        activeQuizSet = buildNonRepeatingQuizSet();
                        renderQuizQuestion();
                    });
                });
                whenVisible('#syllabus', function () {
                    mountModule('SyllabusExplorer', function () {
                        renderSyllabusView();
                    });
                });
                whenVisible('#faculty', function () {
                    mountModule('FacultyRegistry', function () {
                        renderFacultyGrid();
                    });
                }, '200px 0px');
                // Prefetch mock form early so the free-test popup is never empty.
                // Enquiry form still waits until Contact is near the viewport.
                mountModule('GoogleFormsMock', function () {
                    ensureGoogleForm(
                        'mock-google-form-wrap',
                        'mock-google-form',
                        'mock-google-form-link',
                        SiteConfig.googleForms && SiteConfig.googleForms.mockTest,
                        false
                    );
                });
                whenVisible('#contact', function () {
                    mountModule('GoogleFormsEnquiry', function () {
                        ensureGoogleForm(
                            'enquiry-google-form-wrap',
                            'enquiry-google-form',
                            'enquiry-google-form-link',
                            SiteConfig.googleForms && SiteConfig.googleForms.enquiry,
                            false
                        );
                    });
                }, '200px 0px');

                restoreBoardFromHash();
                if ((location.hash || '').replace(/^#/, '') === 'terms') {
                    openTermsModal();
                }
                window.addEventListener('hashchange', function () {
                    const hash = (location.hash || '').replace(/^#/, '');
                    if (hash.indexOf('programmes/') === 0) restoreBoardFromHash();
                    if (hash === 'terms') openTermsModal();
                });

                setTimeout(runRegressionSuite, 1200);
            }

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init);
            } else {
                init();
            }

            return {
                nextBanner: nextBanner,
                prevBanner: prevBanner,
                goToBanner: goToBanner,
                triggerBannerCta: triggerBannerCta,
                openBoardPage: openBoardPage,
                closeBoardPage: closeBoardPage,
                enrolPaidSeries: enrolPaidSeries,
                switchCountdownBoard: switchCountdownBoard,
                configureQuiz: configureQuiz,
                selectQuizOption: selectQuizOption,
                nextQuizQuestion: nextQuizQuestion,
                restartQuiz: restartQuiz,
                claimQuizFreeMockTest: claimQuizFreeMockTest,
                selectSyllabusBoard: selectSyllabusBoard,
                selectSyllabusSubject: selectSyllabusSubject,
                toggleSyllabusUnit: toggleSyllabusUnit,
                toggleFaq: toggleFaq,
                toggleMapIframe: toggleMapIframe,
                handleContactSubmit: handleContactSubmit,
                openMockPopup: openMockPopup,
                closeMockPopup: closeMockPopup,
                selectPopupBoard: selectPopupBoard,
                submitPopupMockForm: submitPopupMockForm,
                openTermsModal: openTermsModal,
                closeTermsModal: closeTermsModal,
                toggleMobileMenu: toggleMobileMenu,
                toggleTheme: toggleTheme,
                runRegressionSuite: runRegressionSuite
            };
        })();
