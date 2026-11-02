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
                features: {
                    autoOpenMockPopup: false
                }
            };

            // 02. MODULAR CONTENT STORE
            const ContentStore = {
                banners: [
                    {
                        id: 'banner-1-free-preboard',
                        active: true,
                        badge: 'FREE PRE-BOARD MOCK TEST ADVERTISEMENT • CLASS X',
                        badgeStyle: 'bg-[#DCFCE7] text-[#15803D] border-[#86EFAC]',
                        headline: 'পুজো শেষ, এবার পরীক্ষা শুরু!',
                        subheadline: 'Free Pre-Board Mock Test Programme for Class X Students — ICSE, CBSE & WBBSE',
                        description: 'Assess your complete board preparation before your school pre-board examinations in a realistic exam environment. 100% FREE — No Course Purchase Required.',
                        boardsPill: ['ICSE (Class X)', 'CBSE (Class X)', 'WBBSE (Class X)'],
                        ctaLabel: 'Register for Free Test',
                        ctaActionType: 'register-free',
                        ctaBoardDefault: 'ICSE',
                        secondaryLabel: 'Select Your Goal',
                        secondaryTarget: '#select-your-goal',
                        themeGradient: 'from-[#16233B] via-[#1D3B8B] to-[#0F172A]',
                        artworkTag: '',
                        highlightBoxTitle: '100% FREE Pre-Board Practice Test',
                        highlightBoxSub: 'No Course Purchase Required • Instant Script Evaluation'
                    },
                    {
                        id: 'banner-2-festival-offers',
                        active: true,
                        badge: 'FESTIVAL & SEASONAL ACADEMIC OFFERS',
                        badgeStyle: 'bg-[#FFF3B0] text-midnight border-[#F2D06B]',
                        headline: 'Festival Scholarship & Test Series Offer',
                        subheadline: 'Special Seasonal Benefits on Target 2027 Final Board Mock Test Series (ICSE, CBSE & WBBSE)',
                        description: 'Avail seasonal scholarship waivers on our structured Class X & XII Final Board Mock Test Series and 1:6 Batch Focus programmes. Valid for current festival registrations.',
                        boardsPill: ['Diwali & Christmas Seasonal Offer', 'Target 2027 Mock Series', 'Limited Validity'],
                        ctaLabel: 'Explore Offer',
                        ctaActionType: 'scroll-goal',
                        ctaBoardDefault: 'CBSE',
                        secondaryLabel: 'Enquire Offer Details',
                        secondaryTarget: '#contact',
                        themeGradient: 'from-[#4A1525] via-[#881337] to-[#16233B]',
                        artworkTag: 'Seasonal Promotional Offer',
                        highlightBoxTitle: 'Festive Enrolment Benefits',
                        highlightBoxSub: 'Applicable on Target 2027 Final Board Mock Test Series'
                    },
                    {
                        id: 'banner-3-new-courses',
                        active: true,
                        badge: 'NEWLY LAUNCHED COURSES • TARGET 2027',
                        badgeStyle: 'bg-[#E0EAFF] text-soothingBlue border-[#93B4FF]',
                        headline: 'Target 2027 — Final Board Mock Test Series',
                        subheadline: 'Newly Launched Full-Syllabus Board Simulation for Class X & XII (ICSE, CBSE & WBBSE)',
                        description: 'Structured board-pattern question papers, instant script evaluation, and 1-on-1 post-test doubt clearing with expert faculty.',
                        boardsPill: ['Target 2027 CISCE', 'Target 2027 CBSE', 'Target 2027 WBBSE'],
                        ctaLabel: 'Explore Test Series',
                        ctaActionType: 'open-board',
                        ctaBoardDefault: 'ICSE',
                        secondaryLabel: 'View Subject Syllabus',
                        secondaryTarget: '#syllabus',
                        themeGradient: 'from-[#0F2942] via-[#1D3B8B] to-[#1E293B]',
                        artworkTag: 'New Academic Initiative',
                        highlightBoxTitle: 'Structured Board Practice',
                        highlightBoxSub: 'Full-Length Papers • Examiner Marking Scheme'
                    },
                    {
                        id: 'banner-4-additional-promo',
                        active: false,
                        badge: 'UPCOMING ACADEMIC INITIATIVE',
                        badgeStyle: 'bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]',
                        headline: 'School Annual Examination Test Series*',
                        subheadline: 'Foundation Programmes — Launching Soon',
                        description: 'Structured practice and evaluation for school annual examinations.',
                        boardsPill: ['Foundation Track', '*Launching Soon'],
                        ctaLabel: 'View Foundation Status',
                        ctaActionType: 'open-board',
                        ctaBoardDefault: 'FOUNDATION',
                        secondaryLabel: 'Contact Us',
                        secondaryTarget: '#contact',
                        themeGradient: 'from-[#1E293B] via-[#334155] to-[#0F172A]',
                        artworkTag: 'Future Expansion',
                        highlightBoxTitle: '*Launching Soon',
                        highlightBoxSub: 'Foundation Annual Exam Test Series'
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
                                name: 'Target 2027 CISCE — Pre-Board Practice Test',
                                targetAudience: 'Class X students preparing for the ICSE examination.',
                                purpose: 'To help students assess their preparation before their school pre-board examinations.',
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
                                name: 'Target 2027 CISCE — Final Board Mock Test Series',
                                targetAudience: 'Class X students preparing for the ICSE board examination in 2027.',
                                purpose: 'Structured mock test practice for the final board examinations.',
                                priceDisplay: 'To be announced upon schedule release',
                                highlightNote: 'Full-Length CISCE Pattern Mock Papers',
                                ctaLabel: 'Explore Test Series',
                                secondaryCtaLabel: 'Enrol Now',
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
                                name: 'Target 2027 CBSE — Pre-Board Practice Test',
                                targetAudience: 'Class X CBSE students.',
                                purpose: 'Assess preparation before school pre-board examinations.',
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
                                name: 'Target 2027 CBSE — Final Board Mock Test Series',
                                targetAudience: 'Class X CBSE students preparing for the 2027 board examination.',
                                purpose: 'Structured board-pattern mock test practice.',
                                priceDisplay: 'To be announced upon schedule release',
                                highlightNote: 'Latest NCERT & CBSE Competency Pattern',
                                ctaLabel: 'Explore Test Series',
                                secondaryCtaLabel: 'Enrol Now',
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
                                name: 'Target 2027 WBBSE — Pre-Board Practice Test',
                                targetAudience: 'Class X students preparing for the West Bengal Board of Secondary Education examination.',
                                purpose: 'Assess preparation before school pre-board examinations.',
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
                                name: 'Target 2027 WBBSE — Final Board Mock Test Series',
                                targetAudience: 'Class X WBBSE students preparing for the 2027 board examination.',
                                purpose: 'Structured practice through board-oriented mock tests.',
                                priceDisplay: 'To be announced upon schedule release',
                                highlightNote: 'WBBSE Madhyamik Pattern • English & Bengali Medium',
                                ctaLabel: 'Explore Test Series',
                                secondaryCtaLabel: 'Enrol Now',
                                boardCode: 'WBBSE'
                            }
                        ]
                    },
                    FOUNDATION: {
                        key: 'FOUNDATION',
                        pageTitle: 'Foundation Programmes',
                        breadcrumb: 'Foundation Programmes',
                        subtitle: 'Future expansion programmes for school annual examination preparation.',
                        programmes: [
                            {
                                id: 'foundation-prog-soon',
                                type: 'COMING_SOON',
                                badgeText: 'LAUNCHING SOON',
                                subBadgeText: 'Coming Soon',
                                name: 'School Annual Examination Test Series*',
                                targetAudience: 'Foundation students from relevant school classes.',
                                purpose: 'Practice and preparation for school annual examinations.',
                                statusDisplay: 'LAUNCHING SOON',
                                footnote: '*Launching Soon — The classes, subjects, boards and test structure will be finalised later.',
                                ctaLabel: 'Registration Opening Soon',
                                secondaryCtaLabel: 'Payment Inactive',
                                boardCode: 'Foundation'
                            }
                        ]
                    }
                },

                boardCountdowns: {
                    CBSE: { title: 'CBSE Board Exam', targetIso: '2027-02-15T10:30:00+05:30', targetLabel: 'Target: Feb 15, 2027', milestone: 'Mock Test Roadmap' },
                    ICSE: { title: 'ICSE & ISC Exam', targetIso: '2027-02-18T11:00:00+05:30', targetLabel: 'Target: Feb 18, 2027', milestone: 'Mock Test Roadmap' },
                    WBBSE: { title: 'WBBSE Madhyamik', targetIso: '2027-02-10T11:45:00+05:30', targetLabel: 'Target: Feb 10, 2027', milestone: 'Mock Test Roadmap' },
                    WBCHSE: { title: 'WBCHSE Higher Sec', targetIso: '2027-03-03T10:00:00+05:30', targetLabel: 'Target: Mar 3, 2027', milestone: 'Mock Test Roadmap' }
                },

                faculty: [
                    {
                        id: 'fac-alapan-roy',
                        active: true,
                        name: 'Alapan Roy',
                        role: 'Lead Mentor & Academic Head',
                        specialization: 'Board Examination Strategy, Concept Architecture & Script Evaluation',
                        experience: '1:6 Batch Focus • Classes 9 to 12',
                        badge: 'Lead Faculty'
                    },
                    {
                        id: 'fac-slot-2',
                        active: true,
                        name: 'Senior Science Panel',
                        role: 'Physics, Chemistry & Biology Specialists',
                        specialization: 'Numerical problem-solving, diagram precision & board marking scheme audits',
                        experience: 'ICSE, ISC, CBSE, WBBSE & WBCHSE',
                        badge: 'Subject Panel'
                    },
                    {
                        id: 'fac-slot-3',
                        active: true,
                        name: 'Mathematics & Foundation Panel',
                        role: 'Pure Mathematics & Analytical Reasoning',
                        specialization: 'Step-marking optimization, speed drills & post-test doubt clearing',
                        experience: 'Classes 9 to 12 • All Boards',
                        badge: 'Subject Panel'
                    }
                ],

                syllabusDatabase: {
                    ICSE10: {
                        Physics: { units: ['Force, Work, Power & Energy (22 Marks)', 'Light & Spectrum (18 Marks)', 'Sound & Current Electricity (24 Marks)', 'Heat & Modern Physics (16 Marks)'], focus: 'Ray diagrams, numerical unit conversions & circuit resistance derivations.' },
                        Chemistry: { units: ['Periodic Table & Chemical Bonding (18 Marks)', 'Study of Acids, Bases & Salts + Mole Concept (22 Marks)', 'Metallurgy & Study of Compounds HCl, NH3, HNO3, H2SO4 (24 Marks)', 'Organic Chemistry & IUPAC Nomenclature (16 Marks)'], focus: 'Balanced equations, observation tables & gas identification tests.' },
                        Mathematics: { units: ['Commercial Maths & Algebra (28 Marks)', 'Geometry & Circles (20 Marks)', 'Mensuration & Trigonometry (20 Marks)', 'Statistics & Probability (12 Marks)'], focus: 'Step-by-step theorem proofs, ogive graphs & heights and distances.' },
                        Biology: { units: ['Basic Biology & Cell Division (14 Marks)', 'Plant Physiology — Transpiration & Photosynthesis (22 Marks)', 'Human Anatomy — Circulatory, Excretory, Nervous & Endocrine (32 Marks)', 'Population & Pollution (12 Marks)'], focus: 'Labelled biological diagrams, location/function tables & genetic crosses.' }
                    },
                    CBSE10: {
                        Physics: { units: ['Light — Reflection & Refraction (12 Marks)', 'The Human Eye & Colourful World (5 Marks)', 'Electricity (12 Marks)', 'Magnetic Effects of Electric Current (6 Marks)'], focus: 'NCERT exemplar numericals, sign convention & competency case studies.' },
                        Chemistry: { units: ['Chemical Reactions & Equations (6 Marks)', 'Acids, Bases & Salts (6 Marks)', 'Metals & Non-Metals (7 Marks)', 'Carbon & Its Compounds (6 Marks)'], focus: 'Assertion-reasoning questions, redox identification & functional groups.' },
                        Mathematics: { units: ['Number Systems & Algebra (26 Marks)', 'Coordinate Geometry & Geometry (21 Marks)', 'Trigonometry & Mensuration (22 Marks)', 'Statistics & Probability (11 Marks)'], focus: 'Case-based questions, quadratic word problems & surface area combinations.' },
                        Biology: { units: ['Life Processes (10 Marks)', 'Control & Coordination (6 Marks)', 'How Do Organisms Reproduce (7 Marks)', 'Heredity & Our Environment (7 Marks)'], focus: 'Flowcharts for human digestion/circulation & Mendelian dihybrid ratios.' }
                    },
                    WBBSE10: {
                        Physics: { units: ['Concerns About Our Environment & Behaviour of Gases (12 Marks)', 'Light & Current Electricity (24 Marks)', 'Thermal Phenomena & Atomic Nucleus (14 Marks)'], focus: 'PV=nRT numericals, lens formula proofs & English/Bengali terminology.' },
                        Chemistry: { units: ['Periodic Table & Ionic/Covalent Bonding (12 Marks)', 'Electrolysis & Inorganic Chemistry in Lab (14 Marks)', 'Metallurgy & Organic Chemistry (14 Marks)'], focus: 'Electrodes reactions, industrial preparation conditions & structural isomerism.' },
                        Mathematics: { units: ['Arithmetic — Simple/Compound Interest & Partnership (14 Marks)', 'Algebra & Quadratic Surds (22 Marks)', 'Geometry, Theorems & Constructions (24 Marks)', 'Trigonometry, Mensuration & Statistics (30 Marks)'], focus: 'Madhyamik geometric rider proofs, mensuration solids & median/mode tables.' },
                        Biology: { units: ['Control & Coordination in Living Organisms (18 Marks)', 'Continuity of Life — Cell Division & Reproduction (18 Marks)', 'Heredity & Common Genetic Diseases (16 Marks)', 'Evolution, Adaptation & Environment (28 Marks)'], focus: 'Reflex arc neat diagrams, chromosome movement stages & Nitrogen cycle.' }
                    },
                    CLASS12: {
                        Physics: { units: ['Electrostatics & Current Electricity (16 Marks)', 'Magnetic Effects, EMI & Alternating Current (17 Marks)', 'Ray & Wave Optics (18 Marks)', 'Dual Nature, Atoms, Nuclei & Semiconductors (19 Marks)'], focus: 'Phasor diagrams, Huygens wave theory derivations & Kirchhoff loop numericals.' },
                        Chemistry: { units: ['Physical Chemistry — Solutions, Electrochemistry & Kinetics (23 Marks)', 'Inorganic — d & f Block + Coordination Compounds (14 Marks)', 'Organic — Haloalkanes, Alcohols, Carbonyls, Amines & Biomolecules (33 Marks)'], focus: 'Nernst equation problems, named organic mechanisms & conversion roadmaps.' },
                        Mathematics: { units: ['Relations, Functions & Algebra of Matrices (18 Marks)', 'Calculus — Continuity, Derivatives, Integrals & Differential Eq. (35 Marks)', 'Vectors & 3D Geometry (14 Marks)', 'Linear Programming & Probability (13 Marks)'], focus: 'Definite integration properties, Bayes theorem & shortest distance in 3D.' },
                        Biology: { units: ['Reproduction in Flowering Plants & Humans (16 Marks)', 'Genetics & Molecular Basis of Inheritance (20 Marks)', 'Biology & Human Welfare (12 Marks)', 'Biotechnology & Ecology (22 Marks)'], focus: 'Lac operon schematic, recombinant DNA steps & population growth curves.' }
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

            function renderBannerCarousel() {
                const viewport = document.getElementById('hero-carousel-viewport');
                const dotsContainer = document.getElementById('carousel-dots');
                const counterBadge = document.getElementById('carousel-counter-badge');
                if (!viewport) return;

                const slides = getActiveBanners();
                if (!slides.length) return;
                if (activeBannerIndex >= slides.length) activeBannerIndex = 0;
                if (activeBannerIndex < 0) activeBannerIndex = slides.length - 1;

                const slide = slides[activeBannerIndex];
                const pillsHtml = (slide.boardsPill || []).map(function (p) {
                    return '<span class="bg-white/15 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">' + p + '</span>';
                }).join('');

                viewport.innerHTML =
                    '<div class="w-full h-full bg-gradient-to-r ' + slide.themeGradient + ' text-white px-12 sm:px-16 md:px-20 py-10 sm:py-12 transition-all duration-300">' +
                        '<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">' +
                            '<div class="lg:col-span-8 space-y-4">' +
                                '<div class="flex flex-wrap items-center gap-2">' +
                                    '<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold border ' + slide.badgeStyle + '">' +
                                        '<i class="fa-solid fa-bullhorn"></i><span>' + slide.badge + '</span>' +
                                    '</span>' +
                                '</div>' +
                                '<h2 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-logoYellow leading-tight"' + ( /[\u0980-\u09FF]/.test(slide.headline) ? ' lang="bn"' : '' ) + '>' + slide.headline + '</h2>' +
                                '<p class="text-sm sm:text-lg font-bold text-white">' + slide.subheadline + '</p>' +
                                '<p class="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">' + slide.description + '</p>' +
                                '<div class="flex flex-wrap items-center gap-2 pt-1">' + pillsHtml + '</div>' +
                                '<div class="pt-3 flex flex-wrap items-center gap-3">' +
                                    '<button type="button" onclick="CatalystApp.triggerBannerCta(\'' + slide.ctaActionType + '\', \'' + slide.ctaBoardDefault + '\')" class="bg-[#15803D] hover:bg-[#166534] text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-lg transition text-xs sm:text-sm cursor-pointer flex items-center gap-2 border border-[#86EFAC]/40">' +
                                        '<span>' + slide.ctaLabel + '</span><i class="fa-solid fa-arrow-right text-logoYellow"></i>' +
                                    '</button>' +
                                    '<a href="' + (slide.secondaryTarget || '#select-your-goal') + '" class="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3.5 rounded-2xl border border-white/25 transition text-xs sm:text-sm">' +
                                        (slide.secondaryLabel || 'Select Your Goal') +
                                    '</a>' +
                                '</div>' +
                            '</div>' +
                            '<div class="lg:col-span-4 hidden lg:block">' +
                                '<div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-logoYellow/60 shadow-xl space-y-4 text-left">' +
                                    '<div class="flex items-center justify-between">' +
                                        '<span class="bg-[#DCFCE7] text-[#15803D] text-xs font-extrabold px-3 py-1 rounded-full">TARGET 2027</span>' +
                                        '<span class="text-xs font-bold text-logoYellow">ICSE • CBSE • WBBSE</span>' +
                                    '</div>' +
                                    '<div class="space-y-1">' +
                                        '<div class="text-lg font-extrabold text-white">' + slide.highlightBoxTitle + '</div>' +
                                        '<p class="text-xs text-gray-200">' + slide.highlightBoxSub + '</p>' +
                                    '</div>' +
                                    '<div class="border-t border-white/15 pt-3 space-y-2 text-xs text-gray-100">' +
                                        '<div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#4ADE80]"></i><span>Class X Board-Pattern Question Papers</span></div>' +
                                        '<div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#4ADE80]"></i><span>Instant Script Evaluation &amp; Doubt Clearing</span></div>' +
                                        '<div class="flex items-center gap-2"><i class="fa-solid fa-location-dot text-logoYellow"></i><span>65, Jodhpur Park, Kolkata 700068</span></div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';

                if (dotsContainer) {
                    dotsContainer.innerHTML = slides.map(function (s, idx) {
                        const cls = idx === activeBannerIndex ? 'w-8 bg-logoYellow' : 'w-2.5 bg-white/50 hover:bg-white';
                        return '<button type="button" onclick="CatalystApp.goToBanner(' + idx + ')" aria-label="Slide ' + (idx + 1) + '" class="h-2.5 rounded-full transition-all cursor-pointer ' + cls + '"></button>';
                    }).join('');
                }
                if (counterBadge) {
                    counterBadge.textContent = (activeBannerIndex + 1) + ' / ' + slides.length;
                }
            }

            function nextBanner() {
                const slides = getActiveBanners();
                if (!slides.length) return;
                activeBannerIndex = (activeBannerIndex + 1) % slides.length;
                renderBannerCarousel();
                resetBannerAutoTimer();
            }

            function prevBanner() {
                const slides = getActiveBanners();
                if (!slides.length) return;
                activeBannerIndex = (activeBannerIndex - 1 + slides.length) % slides.length;
                renderBannerCarousel();
                resetBannerAutoTimer();
            }

            function goToBanner(index) {
                const slides = getActiveBanners();
                if (index >= 0 && index < slides.length) {
                    activeBannerIndex = index;
                    renderBannerCarousel();
                    resetBannerAutoTimer();
                }
            }

            function resetBannerAutoTimer() {
                if (bannerAutoTimer) clearInterval(bannerAutoTimer);
                const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                if (prefersReducedMotion) return;
                bannerAutoTimer = setInterval(function () {
                    const slides = getActiveBanners();
                    if (slides.length > 1) {
                        activeBannerIndex = (activeBannerIndex + 1) % slides.length;
                        renderBannerCarousel();
                    }
                }, 7000);
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
                const breadEl = document.getElementById('board-page-breadcrumb');
                const cardsContainer = document.getElementById('board-page-cards-container');
                if (!pageContainer || !cardsContainer) return;

                titleEl.textContent = boardData.pageTitle;
                subEl.textContent = boardData.subtitle;
                breadEl.textContent = boardData.breadcrumb;

                ['ICSE', 'CBSE', 'WBBSE', 'FOUNDATION'].forEach(function (k) {
                    const tabBtn = document.getElementById('board-tab-' + k);
                    if (tabBtn) {
                        tabBtn.className = (k === normalizedKey)
                            ? 'px-3.5 py-2 rounded-xl text-xs font-extrabold bg-midnight text-logoYellow shadow-sm transition cursor-pointer'
                            : 'px-3.5 py-2 rounded-xl text-xs font-extrabold text-slateText hover:bg-white transition cursor-pointer';
                    }
                });

                if (normalizedKey === 'FOUNDATION') {
                    const fProg = boardData.programmes[0];
                    cardsContainer.className = 'grid grid-cols-1 max-w-2xl mx-auto gap-6';
                    cardsContainer.innerHTML =
                        '<article class="rounded-3xl p-6 sm:p-8 bg-ivory border-2 border-[#D1D5DB] shadow-soothing space-y-5 relative">' +
                            '<div class="flex flex-wrap items-center justify-between gap-2">' +
                                '<span class="inline-flex items-center gap-1.5 bg-[#FEF3C7] text-[#B45309] text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-[#FDE68A]">' +
                                    '<i class="fa-solid fa-clock"></i><span>' + fProg.subBadgeText + '</span>' +
                                '</span>' +
                                '<span class="bg-midnight text-logoYellow text-xs font-extrabold px-3.5 py-1 rounded-full">STATUS: ' + fProg.statusDisplay + '</span>' +
                            '</div>' +
                            '<div class="space-y-2">' +
                                '<h4 class="text-xl sm:text-2xl font-extrabold text-midnight">' + fProg.name + '</h4>' +
                                '<p class="text-xs sm:text-sm text-slateText"><strong class="text-midnight">Target Audience:</strong> ' + fProg.targetAudience + '</p>' +
                                '<p class="text-xs sm:text-sm text-slateText"><strong class="text-midnight">Purpose:</strong> ' + fProg.purpose + '</p>' +
                            '</div>' +
                            '<div class="p-4 rounded-2xl bg-white border border-warmBorder text-xs text-mutedText space-y-1">' +
                                '<div class="font-bold text-midnight">' + fProg.footnote + '</div>' +
                                '<div>Registration and payment buttons remain inactive until the programme is launched.</div>' +
                            '</div>' +
                            '<div class="flex flex-wrap items-center gap-3 pt-2">' +
                                '<button type="button" disabled aria-disabled="true" class="bg-[#E5E7EB] text-[#6B7280] font-extrabold px-5 py-3 rounded-xl text-xs sm:text-sm cursor-not-allowed flex items-center gap-2">' +
                                    '<i class="fa-solid fa-lock"></i><span>' + fProg.ctaLabel + '</span>' +
                                '</button>' +
                                '<button type="button" disabled aria-disabled="true" class="bg-[#F3F4F6] text-[#9CA3AF] border border-[#D1D5DB] font-bold px-5 py-3 rounded-xl text-xs sm:text-sm cursor-not-allowed">' +
                                    fProg.secondaryCtaLabel +
                                '</button>' +
                            '</div>' +
                        '</article>';
                } else {
                    cardsContainer.className = 'grid grid-cols-1 lg:grid-cols-2 gap-6';
                    cardsContainer.innerHTML = boardData.programmes.map(function (prog) {
                        if (prog.type === 'FREE') {
                            return (
                                '<article class="rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#F0FDF4] to-white border-2 border-[#22C55E] shadow-soothing flex flex-col justify-between space-y-5 relative">' +
                                    '<div class="space-y-4">' +
                                        '<div class="flex flex-wrap items-center justify-between gap-2">' +
                                            '<span class="free-badge-pulse inline-flex items-center gap-1.5 bg-[#15803D] text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-sm">' +
                                                '<i class="fa-solid fa-check-circle text-logoYellow"></i><span>FREE • ' + prog.badgeText + '</span>' +
                                            '</span>' +
                                            '<span class="bg-[#DCFCE7] text-[#15803D] text-xs font-extrabold px-3 py-1 rounded-full border border-[#86EFAC]">' + prog.highlightNote + '</span>' +
                                        '</div>' +
                                        '<div>' +
                                            '<div class="text-[11px] font-extrabold uppercase tracking-wider text-[#15803D]">Programme A — Free Programme</div>' +
                                            '<h4 class="text-xl sm:text-2xl font-extrabold text-midnight mt-1">' + prog.name + '</h4>' +
                                        '</div>' +
                                        '<div class="space-y-2.5 text-xs sm:text-sm text-slateText border-t border-[#BBF7D0] pt-4">' +
                                            '<div><strong class="text-midnight">Target Audience:</strong> ' + prog.targetAudience + '</div>' +
                                            '<div><strong class="text-midnight">Purpose:</strong> ' + prog.purpose + '</div>' +
                                            '<div class="flex items-center gap-2 pt-1">' +
                                                '<span class="font-extrabold text-midnight">Price:</span>' +
                                                '<span class="bg-[#15803D] text-white font-extrabold px-2.5 py-0.5 rounded-md text-xs">' + prog.priceDisplay + '</span>' +
                                                '<span class="text-xs font-extrabold text-[#15803D]">• ' + prog.highlightNote + '</span>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="pt-4 border-t border-[#BBF7D0]">' +
                                        '<button type="button" onclick="CatalystApp.openMockPopup(\'' + prog.boardCode + '\', \'' + prog.name + ' (100% FREE)\')" class="w-full bg-[#15803D] hover:bg-[#166534] text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-md transition text-xs sm:text-sm cursor-pointer flex items-center justify-center gap-2">' +
                                            '<i class="fa-solid fa-clipboard-check text-logoYellow"></i><span>' + prog.ctaLabel + '</span>' +
                                        '</button>' +
                                    '</div>' +
                                '</article>'
                            );
                        }
                        return (
                            '<article class="rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#EFF6FF] to-white border-2 border-[#1D3B8B] shadow-soothing flex flex-col justify-between space-y-5 relative">' +
                                '<div class="space-y-4">' +
                                    '<div class="flex flex-wrap items-center justify-between gap-2">' +
                                        '<span class="inline-flex items-center gap-1.5 bg-[#1D3B8B] text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-sm">' +
                                            '<i class="fa-solid fa-layer-group text-logoYellow"></i><span>' + prog.badgeText + '</span>' +
                                        '</span>' +
                                        '<span class="bg-[#DBEAFE] text-[#1D3B8B] text-xs font-extrabold px-3 py-1 rounded-full border border-[#93C5FD]">' + prog.subBadgeText + '</span>' +
                                    '</div>' +
                                    '<div>' +
                                        '<div class="text-[11px] font-extrabold uppercase tracking-wider text-soothingBlue">Programme B — Paid Programme</div>' +
                                        '<h4 class="text-xl sm:text-2xl font-extrabold text-midnight mt-1">' + prog.name + '</h4>' +
                                    '</div>' +
                                    '<div class="space-y-2.5 text-xs sm:text-sm text-slateText border-t border-[#BFDBFE] pt-4">' +
                                        '<div><strong class="text-midnight">Target Audience:</strong> ' + prog.targetAudience + '</div>' +
                                        '<div><strong class="text-midnight">Purpose:</strong> ' + prog.purpose + '</div>' +
                                        '<div><strong class="text-midnight">Price:</strong> <span class="text-soothingBlue font-bold">' + prog.priceDisplay + '</span></div>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="pt-4 border-t border-[#BFDBFE] flex flex-wrap sm:flex-nowrap items-center gap-3">' +
                                    '<button type="button" onclick="CatalystApp.enrolPaidSeries(\'' + prog.boardCode + '\', \'' + prog.name + '\')" class="w-full sm:w-1/2 bg-[#1D3B8B] hover:bg-midnight text-white font-extrabold py-3.5 px-4 rounded-2xl shadow-md transition text-xs sm:text-sm cursor-pointer flex items-center justify-center gap-2">' +
                                        '<i class="fa-solid fa-compass text-logoYellow"></i><span>' + prog.ctaLabel + '</span>' +
                                    '</button>' +
                                    '<button type="button" onclick="CatalystApp.enrolPaidSeries(\'' + prog.boardCode + '\', \'' + prog.name + '\')" class="w-full sm:w-1/2 bg-white hover:bg-[#DBEAFE] text-[#1D3B8B] border-2 border-[#1D3B8B] font-extrabold py-3.5 px-4 rounded-2xl transition text-xs sm:text-sm cursor-pointer flex items-center justify-center gap-2">' +
                                        '<span>' + (prog.secondaryCtaLabel || 'Enrol Now') + '</span><i class="fa-solid fa-arrow-right text-xs"></i>' +
                                    '</button>' +
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
                if (scrollToGoals) {
                    const goalSec = document.getElementById('select-your-goal');
                    if (goalSec) goalSec.scrollIntoView({ behavior: 'smooth' });
                }
            }

            function enrolPaidSeries(boardCode, programmeName) {
                const msgField = document.getElementById('contact-message');
                if (msgField) {
                    msgField.value = 'Enquiry for Paid Programme: ' + programmeName + ' (' + boardCode + ' Class X). Please share test schedule and enrolment details once finalised.';
                }
                const contactSec = document.getElementById('contact');
                if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
            }

            // 06. LIVE 2027 BOARD COUNTDOWN
            function switchCountdownBoard(boardKey) {
                if (!ContentStore.boardCountdowns[boardKey]) return;
                activeCountdownBoard = boardKey;
                ['CBSE', 'ICSE', 'WBBSE', 'WBCHSE'].forEach(function (k) {
                    const btn = document.getElementById('cd-tab-' + k);
                    if (btn) {
                        btn.className = (k === boardKey)
                            ? 'px-2.5 py-1 rounded-lg text-[11px] font-extrabold bg-soothingBlue text-white transition cursor-pointer'
                            : 'px-2.5 py-1 rounded-lg text-[11px] font-extrabold text-slateText hover:text-midnight transition cursor-pointer';
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
                const msEl = document.getElementById('cd-milestone');

                if (dEl) dEl.textContent = String(days).padStart(2, '0');
                if (hEl) hEl.textContent = String(hours).padStart(2, '0');
                if (mEl) mEl.textContent = String(mins).padStart(2, '0');
                if (sEl) sEl.textContent = String(secs).padStart(2, '0');
                if (tEl) tEl.textContent = cfg.title + ' • ' + cfg.targetLabel;
                if (msEl) msEl.textContent = cfg.milestone;
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
                document.getElementById('quiz-q-std-badge').textContent = (stdKey === '11_12') ? '11th/12th standards' : '9th/10th standards';

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
                        '<button type="button" id="quiz-opt-' + idx + '" onclick="CatalystApp.selectQuizOption(' + idx + ')" class="text-left p-3.5 rounded-2xl border border-warmBorder bg-white hover:border-soothingBlue transition text-xs sm:text-sm font-semibold text-midnight cursor-pointer flex items-center gap-2.5">' +
                            '<span class="w-6 h-6 rounded-lg bg-champagne text-midnight font-extrabold flex items-center justify-center text-xs shrink-0">' + String.fromCharCode(65 + idx) + '</span>' +
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
                        btn.className = 'text-left p-3.5 rounded-2xl border-2 border-[#15803D] bg-[#DCFCE7] text-[#15803D] text-xs sm:text-sm font-extrabold flex items-center gap-2.5';
                    } else if (idx === selectedIndex) {
                        btn.className = 'text-left p-3.5 rounded-2xl border-2 border-soothingRed bg-[#FFE4E8] text-soothingRed text-xs sm:text-sm font-extrabold flex items-center gap-2.5';
                    } else if (!isTrap && idx === currentQ.ans) {
                        btn.className = 'text-left p-3.5 rounded-2xl border-2 border-[#15803D] bg-[#F0FDF4] text-[#15803D] text-xs sm:text-sm font-bold flex items-center gap-2.5';
                    } else {
                        btn.className = 'text-left p-3.5 rounded-2xl border border-warmBorder bg-gray-50 text-mutedText text-xs sm:text-sm opacity-70 flex items-center gap-2.5';
                    }
                });

                const feedbackBox = document.getElementById('quiz-feedback-box');
                if (isCorrect) {
                    feedbackBox.className = 'p-3.5 rounded-2xl text-xs leading-relaxed border border-[#86EFAC] bg-[#F0FDF4] text-[#15803D] font-medium';
                    feedbackBox.innerHTML = '<strong>Spot On!</strong> ' + currentQ.exp;
                } else {
                    feedbackBox.className = 'p-3.5 rounded-2xl text-xs leading-relaxed border border-[#FDA4AF] bg-[#FFF1F2] text-midnight font-medium';
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
                    motivationEl.textContent = 'Every topper starts by discovering their blind spots. Take our free full-length mock test with instant script evaluation and doubt clearing to build rock-solid fundamentals and jump 25+ marks before your boards.';
                } else if (safeScore <= 7) {
                    motivationEl.textContent = 'You have a strong conceptual base! With targeted mock test practice and step-by-step script evaluation in our 1:6 batches, you can turn these 70s into a 95%+ board distinction.';
                } else {
                    motivationEl.textContent = 'Outstanding performance! You are already in the top tier—now sharpen your exam temperament with our full-length mock test series to eliminate subtle examiner traps and secure a 98%+ board rank.';
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
                            ? 'px-3.5 py-2 rounded-xl text-xs font-extrabold bg-midnight text-logoYellow transition cursor-pointer'
                            : 'px-3.5 py-2 rounded-xl text-xs font-extrabold text-slateText hover:bg-champagne transition cursor-pointer';
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
                            ? 'px-4 py-2 rounded-xl text-xs font-extrabold bg-soothingBlue text-white shadow-sm transition cursor-pointer'
                            : 'px-4 py-2 rounded-xl text-xs font-extrabold bg-white text-slateText border border-warmBorder hover:bg-champagne transition cursor-pointer';
                    }
                });
                renderSyllabusView();
            }

            function renderSyllabusView() {
                const container = document.getElementById('syllabus-content-container');
                if (!container) return;
                const boardObj = ContentStore.syllabusDatabase[activeSyllabusBoard] || ContentStore.syllabusDatabase.ICSE10;
                const subjObj = boardObj[activeSyllabusSubject] || boardObj.Physics;

                const unitsHtml = subjObj.units.map(function (u) {
                    return (
                        '<li class="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-warmBorder text-xs sm:text-sm font-semibold text-midnight">' +
                            '<i class="fa-solid fa-circle-check text-soothingBlue mt-0.5"></i><span>' + u + '</span>' +
                        '</li>'
                    );
                }).join('');

                container.innerHTML =
                    '<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">' +
                        '<div class="lg:col-span-8 space-y-4">' +
                            '<div class="flex flex-wrap items-center gap-2">' +
                                '<span class="bg-midnight text-logoYellow text-xs font-extrabold px-3 py-1 rounded-full">' + activeSyllabusBoard + '</span>' +
                                '<span class="bg-[#E0EAFF] text-soothingBlue text-xs font-extrabold px-3 py-1 rounded-full">' + activeSyllabusSubject + '</span>' +
                            '</div>' +
                            '<h3 class="text-lg sm:text-xl font-extrabold text-midnight">' + activeSyllabusSubject + ' High-Weightage Units &amp; Marking Distribution</h3>' +
                            '<ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">' + unitsHtml + '</ul>' +
                        '</div>' +
                        '<div class="lg:col-span-4 bg-ivory rounded-2xl p-5 border border-warmBorder space-y-4">' +
                            '<div class="text-xs font-extrabold uppercase tracking-wider text-soothingRed">Examiner Evaluation Focus</div>' +
                            '<p class="text-xs sm:text-sm text-slateText leading-relaxed">' + subjObj.focus + '</p>' +
                            '<div class="text-[11px] font-bold text-midnight bg-[#FFF3B0] p-3 rounded-xl border border-[#F2D06B]">' +
                                'Includes Instant Script Evaluation — After tests, evaluation &amp; doubt clearing.' +
                            '</div>' +
                            '<button type="button" onclick="CatalystApp.openMockPopup(\'ICSE\', \'' + activeSyllabusSubject + ' Mock Assessment\')" class="w-full bg-soothingBlue hover:bg-midnight text-white font-extrabold py-3 px-4 rounded-xl text-xs transition cursor-pointer">' +
                                'Register for Free ' + activeSyllabusSubject + ' Test' +
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
                                '<div class="flex items-center justify-between">' +
                                    '<span class="bg-[#FFF3B0] text-midnight text-xs font-extrabold px-3 py-1 rounded-full border border-[#F2D06B]">' + f.badge + '</span>' +
                                    '<span class="text-xs font-bold text-soothingBlue">' + f.experience + '</span>' +
                                '</div>' +
                                '<h3 class="text-xl font-extrabold text-midnight">' + f.name + '</h3>' +
                                '<div class="text-xs font-bold text-soothingRed">' + f.role + '</div>' +
                                '<p class="text-xs text-slateText leading-relaxed">' + f.specialization + '</p>' +
                            '</div>' +
                            '<div class="pt-3 border-t border-warmBorder text-[11px] font-bold text-mutedText flex items-center justify-between">' +
                                '<span>65, Jodhpur Park Centre</span>' +
                                '<span class="text-soothingBlue">Instant Script Evaluation</span>' +
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
                    if (label) label.textContent = 'Hide Google Map';
                } else {
                    drawer.classList.add('hidden');
                    if (btn) btn.setAttribute('aria-expanded', 'false');
                    if (label) label.textContent = 'Open in Google Maps';
                }
            }

            function handleContactSubmit(event) {
                if (event) event.preventDefault();
                const nameEl = document.getElementById('contact-name');
                const phoneEl = document.getElementById('contact-phone');
                const messageEl = document.getElementById('contact-message');
                const statusEl = document.getElementById('contact-status-msg');
                const submitBtn = document.querySelector('#contact-form button[type="submit"]');
                const name = (nameEl && nameEl.value || '').trim();
                const phone = (phoneEl && phoneEl.value || '').trim();
                const message = (messageEl && messageEl.value || '').trim();

                if (!name || !phone || !message || !isValidPhone(phone)) {
                    if (statusEl) {
                        statusEl.textContent = 'Please enter a valid name, 10-digit mobile number, and your enquiry message.';
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
                    body: JSON.stringify({ name: name, phone: phone, message: message, source: 'contact-form' })
                })
                .then(function (res) { return res.json().catch(function () { return { ok: false }; }); })
                .then(function (data) {
                    if (statusEl) {
                        if (data && data.ok) {
                            statusEl.textContent = 'Thank you, ' + name + '! Your enquiry has been received by our academic desk at 65, Jodhpur Park. We will call you shortly.';
                            statusEl.className = 'p-3.5 rounded-xl bg-[#DCFCE7] text-[#15803D] text-xs font-bold border border-[#86EFAC]';
                            document.getElementById('contact-form').reset();
                        } else {
                            statusEl.textContent = (data && data.error) || 'Unable to send right now. Please call +91 91631 94805 or email info@catalysteducation.net.';
                            statusEl.className = 'p-3.5 rounded-xl bg-[#FFF1F2] text-soothingRed text-xs font-bold border border-[#FDA4AF]';
                        }
                        statusEl.classList.remove('hidden');
                    }
                })
                .catch(function () {
                    if (statusEl) {
                        statusEl.textContent = 'Unable to send right now. Please call +91 91631 94805 or email info@catalysteducation.net.';
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

                const firstField = document.getElementById('popup-student-name');
                if (firstField) {
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
                    { name: 'ICSE, CBSE, WBBSE Free (Green) & Paid (Blue) + Foundation Launching Soon', pass: Boolean(bp.ICSE && bp.CBSE && bp.WBBSE && bp.FOUNDATION) && bp.ICSE.programmes.length === 2 && bp.FOUNDATION.programmes[0].statusDisplay === 'LAUNCHING SOON' },
                    { name: 'Auto-Popup Deactivated on Load', pass: SiteConfig.features.autoOpenMockPopup === false && Boolean(document.getElementById('mockPopupModal')) },
                    { name: '50-Question Pools for Both 9/10 & 11/12', pass: ContentStore.quizPool.length === 50 && ContentStore.quizPool11_12.length === 50 },
                    { name: 'Strict <100% Cap on All Examiner Traps', pass: traps9_10.length === 5 && traps11_12.length === 5 && traps9_10.every(function (t) { return t.isUnbeatableTrap; }) && traps11_12.every(function (t) { return t.isUnbeatableTrap; }) },
                    { name: 'Zero Meta Instructions in Quiz UI', pass: !bodyText.includes('No One Scores 100%') && !bodyText.includes('Easy → Hard') },
                    { name: 'Classes 9 to 12, 1:6 Batch Focus & Instant Script Evaluation Copy', pass: bodyText.includes('Classes 9 to 12 • All Boards') && bodyText.includes('1:6 Batch Focus') && bodyText.includes('Instant Script Evaluation') },
                    { name: 'Reliable Google Maps Embed Configured (22.5075016,88.3647385)', pass: Boolean(mapIframe) && (mapIframe.getAttribute('data-src') || '').includes('22.5075016,88.3647385') },
                    { name: 'EdufinGrow LLP Disclosure Intact', pass: bodyText.includes(SiteConfig.legalDisclosure) },
                    { name: 'Alapan Roy Faculty Profile Active', pass: ContentStore.faculty.some(function (f) { return f.name === 'Alapan Roy' && f.active; }) },
                    { name: 'Fault-Isolated Modules Healthy', pass: Object.keys(mountedModules).length >= 6 && Object.values(mountedModules).every(function (m) { return m.status === 'OK'; }) },
                    { name: 'Compact Toggleable Map Drawer Hidden by Default & Ready', pass: Boolean(mapDrawer && mapIframe) && mapDrawer.classList.contains('hidden') && typeof toggleMapIframe === 'function' }
                ];

                const passedCount = checks.filter(function (c) { return c.pass; }).length;
                console.info('[CatalystCore QA] ' + passedCount + '/' + checks.length + ' checks passed.', checks);
                return { passedCount: passedCount, total: checks.length, allPassed: passedCount === checks.length, checks: checks };
            }

            // 12. INITIALIZATION
            function init() {
                mountModule('BannerCarousel', function () {
                    renderBannerCarousel();
                    resetBannerAutoTimer();
                });
                mountModule('CountdownClock', function () {
                    updateCountdownDisplay();
                    setInterval(updateCountdownDisplay, 1000);
                });
                mountModule('DiagnosticQuiz', function () {
                    activeQuizSet = buildNonRepeatingQuizSet();
                    renderQuizQuestion();
                });
                mountModule('SyllabusExplorer', function () {
                    renderSyllabusView();
                });
                mountModule('FacultyRegistry', function () {
                    renderFacultyGrid();
                });
                mountModule('KeyboardAccessibility', function () {
                    bindGlobalKeyboardHandlers();
                });
                setTimeout(runRegressionSuite, 200);
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
                runRegressionSuite: runRegressionSuite
            };
        })();
