// Course information (ADT: contains data, functions for course data)
class courses {
    // Names of each course
    static names = [
        "ap-chem", "ap-calc", "ap-lang", "apush", "ap-physics", "shorts"
    ];
    static names_colloquial = [
        "AP Chem",
        "AP Calc",
        "AP Lang/Lit",
        "APUSH/Gov/Econ",
        "AP Physics",
        "#Shorts"
    ]
    static names_full = [
        "AP Chemistry",
        "AP Calculus AB/BC",
        "AP English Language/Literature and Composition",
        "AP United States History/Government/Macroeconomics",
        "AP Physics 1/2",
        "#Shorts"
    ];
    // Number of units in each course
    static units = [1, 1, 1, 1, 1, 1];
    // Featured videos on the homepage
    static featured_videos = [
        //"https://www.youtube.com/watch?v=cf33Vr6l7k0",
        "https://www.youtube.com/watch?v=XQveLfZQc6o",
        "https://www.youtube.com/watch?v=sgLjXnt9avo"
    ];
    // Info about each course's sections (videos, etc.)
    static sections = {
        "ap-chem": [ // Course name
            [ // Unit number 1
                /*{ // Section 1
                    name: "Moles and Molar Mass", // Section name
                    practiceProblems: [ // Practice problems array
                        {
                            q: "How many molecules are in one mol?", // Question
                            as: ["6.02", "0.08206", "6.02x10^23", "4.184"], // Answers
                            a_correct: 3 // Correct answer NUMBER (1-4)
                        },
                        {
                            q: "Using your ptable, what is the molar mass of Lithium?",
                            as: ["3", "6.94g/mol", "13.88g/mol", "Li"],
                            a_correct: 2
                        }
                    ]
                },*/
                {
                    name: "Combustion Analysis", // Section name
                    url: "https://www.youtube.com/watch?v=8OrvHqMF220" // Video URL
                    // (keep video URL normal: no '&t=<n>s' appended pls);
                },
                {
                    name: "Finding Equilibrium Concentrations with the ICE chart",
                    url: "https://www.youtube.com/watch?v=tQkbnZsxCew"
                },
                {
                    name: "Balancing Equations using the RIP Chart",
                    url: "https://www.youtube.com/watch?v=CTLxyZQVwVY"
                },
                {
                    name: "Enthalpy and Equilibrium",
                    url: "https://www.youtube.com/watch?v=gZjYA6iDRyk"
                },
                {
                    name: "What is pH? Solving for pH, pOH, and H+ Concentrations",
                    url: "https://www.youtube.com/watch?v=HQuBH4IHVfA"
                },
                {
                    name: "Identifying Reactions",
                    url: "https://www.youtube.com/watch?v=g2v9dVRf5Ow"
                },
                {
                    name: "Understanding Mass Spectroscopy",
                    url: "https://www.youtube.com/watch?v=_yZRS9lJCbA"
                },
                {
                    name: "Graham's Law and Rates of Effusion and Diffusion for Gases",
                    url: "https://www.youtube.com/watch?v=_8ztVO-A_sg"
                },
                {
                    name: "Gas Laws",
                    url: "https://www.youtube.com/watch?v=cf33Vr6l7k0",
                    practiceProblems: [
                        {
                            q: "As temperature increases, what happens to pressure?",
                            as: ["P decreases", "P remains the same", "P increases", "Cannot be determined"],
                            a_correct: 3
                        }
                    ]
                },
                {
                    name: "AP Chemistry FRQ Practice (Part 1)",
                    url: "https://www.youtube.com/watch?v=Qax4Vd7jLSs"
                }
            ]
        ],
        "ap-calc": [
            [
                {
                    name: "Memorizing the Unit Circle (Radians)",
                    url: "https://www.youtube.com/watch?v=2bAXVtKKwX0"
                },
                {
                    name: "Understanding Limits and Finding Them From Graphs",
                    url: "https://www.youtube.com/watch?v=m8G-qeOxX3k"
                },
                {
                    name: "Finding Limits Analytically",
                    url: "https://www.youtube.com/watch?v=sVYNzAbguCg"
                },
                {
                    name: "Understanding the Derivative",
                    url: "https://www.youtube.com/watch?v=lXWUHTeee4s"
                },
                {
                    name: "Derivatives by Definition",
                    url: "https://www.youtube.com/watch?v=PTWZVFXkJDY"
                },
                {
                    name: "Differentiation Rules Part 1",
                    url: "https://www.youtube.com/watch?v=qR9t-LtwwqQ"
                },
                {
                    name: "The Intermediate Value Theorem",
                    url: "https://www.youtube.com/watch?v=vwMJ9i_FE6w",
                    practiceProblems: [
                        {
                            q: "What is most specifically required to use the IVT on f(x) on (a, b)?",
                            as: ["f is continuous on (a, b)", "f is differentiable on (a, b)", "f is defined for (a, b)", "f is defined"],
                            a_correct: 1
                        },
                        {
                            q: "f(x) is continuous on (a, b). f(a) = f(b) = 7. Can the IVT guarantee a value c on (a, b) such that f(c) = 7?",
                            as: ["Yes, because f(a) <= 7 <= f(b)", "Yes, because f(a) = f(b)", "No, because f(a) = f(b)", "No, because f(x) is not differentiable"],
                            a_correct: 3
                        },
                        {
                            q: "Which of the following is always a true statement?",
                            as: ["Differentiability implies continuity", "Continuity implies differentiability", "For f to be a function, it must be continuous", "If f's derivative is continuous, then f is twice-differentiable"],
                            a_correct: 1
                        }
                    ]
                },
                {
                    name: "Differentiation Rules Part 2",
                    url: "https://www.youtube.com/watch?v=5WuGXaFrQ1A",
                    practiceProblems: [
                        {
                            q: "f(x) = 2g(x)\ng(x) = 3x^2\n\nWhat is the value of f'(2)?",
                            as: ["f'(2) = 3", "f'(2) = 6", "f'(2) = 12", "f'(2) = 24"],
                            a_correct: 4
                        },
                    ]
                },
                {
                    name: "How to Use the Chain Rule",
                    url: "https://www.youtube.com/watch?v=Y402bLqX1qg"
                },
                {
                    name: "Complex Differentiation",
                    url: "https://www.youtube.com/watch?v=z2f5_kWjch8"
                },
                {
                    name: "Implicit Differentiation",
                    url: "https://www.youtube.com/watch?v=XhjHIMvo87E"
                },
                {
                    name: "Memorizing Trigonometric Derivatives",
                    url: "https://www.youtube.com/watch?v=yrnuTPR_iRM"
                },
                {
                    name: "Finding Extrema",
                    url: "https://www.youtube.com/watch?v=wC1AjjFy3hU"
                },
                {
                    name: "Complex is Easier?",
                    url: "https://www.youtube.com/watch?v=XQveLfZQc6o"
                },
                {
                    name: "Concavity and Inflection Points",
                    url: "https://www.youtube.com/watch?v=EC5Aj_JaGq0"
                },
                {
                    name: "Related Rates",
                    url: "https://www.youtube.com/watch?v=hX1FeAUu__w"
                }
            ]
        ],
        "apush": [
            [
                {
                    name: "How to Complete the APUSH Summer Assignment",
                    url: "https://www.youtube.com/watch?v=eAnmx9zG_yg" // depr?
                },
                {
                    name: "How to Write the LEQ (APUSH/Euro)",
                    url: "https://www.youtube.com/watch?v=sgLjXnt9avo"
                },
                {
                    name: "City Upon a Hill and American Exceptionalism",
                    url: "https://www.youtube.com/watch?v=TpTv6CeRTUI"
                },
                {
                    name: "Antebellum Reformers",
                    url: "https://www.youtube.com/watch?v=auy4XilzaZw"
                }
            ]
        ],
        "ap-lang": [
            [
                {
                    name: "Rhetorical Analysis Tips",
                    url: "https://www.youtube.com/watch?v=GsYeFpjyDak"
                }
            ]
        ],
        "ap-physics": [
            [
                {
                    name: "Designing a Controlled Experiment",
                    url: "https://www.youtube.com/watch?v=y0LB47mcOM0"
                }
            ]
        ],
        "shorts": [
            [
                {
                    name: "Solve ratio problems using the RAM Chart",
                    url: "https://www.youtube.com/shorts/ubab_GXBAQs"
                },
                {
                    name: "Sig Fig Rhapsody",
                    url: "https://www.youtube.com/shorts/GxPOKSy3GGc"
                },
                {
                    name: "Louie Zong - Asymptotic (StudyingWorks cover)",
                    url: "https://www.youtube.com/shorts/gXrVHUq8iEc"
                },
                {
                    name: "Will Desmos be replaced by AI?",
                    url: "https://www.youtube.com/shorts/uID7pJ_R0qI"
                },
                {
                    name: "Tierlisting AP Classes by Difficulty",
                    url: "https://www.youtube.com/shorts/Le12qW4ZaOo"
                }
            ]
        ]
    };
    // Search sections - searches all sections for a term,
    // returns array of all sections whose name or subject includes it;
    // each section also includes new key, "course"
    static searchSections(searchterm) {
        var res = [];
        // Check valid
        if (searchterm.length < 1) {
            return [];
        }
        // Loop through
        for (let i = 0; i < courses.names.length; i++) { // proper syntaxt for names?
            var thisCourseSections = courses.sections[courses.names[i]][0];
            for (let j = 0; j < Object.keys(thisCourseSections).length; j++) {
                var thisSection = thisCourseSections[Object.keys(thisCourseSections)[j]];
                // Check if match (case insensitive)
                var match = false;
                if (thisSection.name.toLowerCase().includes(searchterm.toLowerCase())) {
                    match = true;
                } else if (courses.names_full[i].toLowerCase().includes(searchterm.toLowerCase())) {
                    match = true;
                }
                // Add if match
                if (match) {
                    thisSection["course"] = courses.names[i];
                    res.push(thisSection);
                }
            }
        }
        // Return
        return res;
    }
}
