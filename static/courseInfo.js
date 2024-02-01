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
                            a_correct: 3, // Correct answer NUMBER (1-4)
                            expl: "Avogadro's Number" // Correct answer EXPLANATION
                        },
                        {
                            q: "Using your ptable, what is the molar mass of Lithium?",
                            as: ["3", "6.94g/mol", "13.88g/mol", "Li"],
                            a_correct: 2,
                            expl: "Study ptable skills"
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
                            q: "As average kinetic energy increases, what happens to pressure?",
                            as: ["P decreases", "P remains the same", "P increases", "Cannot be determined"],
                            a_correct: 3,
                            expl: "Conceptually, higher temperature means particles collide with the walls more frequently and with greater energy\nMathematically, P = nRT/V, so as V increases, P increases"
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
                    url: "https://www.youtube.com/watch?v=sVYNzAbguCg",
                    practiceProblems: [
                        {
                            q: "What is a limit?",
                            as: ["The value when f(x) equals an x", "The value when f(x) approaches an x", "The value of f(infinity)", "The highest limit f(x) approaches (its maximum)"],
                            a_correct: 2,
                            expl: ""
                        },
                        {
                            q: "lim x->3 f(x) exists. What must the graph be near 3?",
                            as: ["A single continuous smooth line/curve", "A single continuous smooth line/curve except for at 3, where there can be a discontinuity", "A line/curve on the left and on the right both approaching the same value", "It can be anything"],
                            a_correct: 3,
                            expl: "This means both the left and the right limits exist and are equal"
                        },
                        {
                            q: "Using a graphing utility, graph f(x)=2x.\nWhat is lim x->3 f(x)?",
                            as: ["3", "6", "-6", "2"],
                            a_correct: 2,
                            expl: "See the value the graph approaches as x approaches 3"
                        }
                    ]
                },
                {
                    name: "Understanding the Derivative",
                    url: "https://www.youtube.com/watch?v=lXWUHTeee4s",
                    practiceProblems: [
                        {
                            q: "What is the derivative?",
                            as: ["The slope", "The y value", "The area under the curve", "The inverse"],
                            a_correct: 1,
                            expl: ""
                        },
                        {
                            q: "What is the derivative of the car's velocity?",
                            as: ["Its position", "Its speed", "It does not exist (DNE)", "Its acceleration"],
                            a_correct: 4,
                            expl: "The rate that the velocity changes is the acceleration"
                        },
                        {
                            q: "What is the derivative of a linear function?",
                            as: ["A constant value", "A y=mx+b equation", "A quadratic", "An exponential"],
                            a_correct: 1,
                            expl: "The linear function has a constant rate of change"
                        }
                    ]
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
                            a_correct: 1,
                            expl: ""
                        },
                        {
                            q: "f(x) is continuous on (a, b). f(a) = f(b) = 7. Can the IVT guarantee a value c on (a, b) such that f(c) = 7?",
                            as: ["Yes, because f(a) <= 7 <= f(b)", "Yes, because f(a) = f(b)", "No, because f(a) = f(b)", "No, because f(x) is not differentiable"],
                            a_correct: 3,
                            expl: "When f(a) = f(b), there is a possibility that f(x) will only be 7 at exactly a and b, and nowhere else"
                        },
                        {
                            q: "Which of the following is always a true statement?",
                            as: ["Differentiability implies continuity", "Continuity implies differentiability", "For f to be a function, it must be continuous", "If f's derivative is continuous, then f is twice-differentiable"],
                            a_correct: 1,
                            expl: "If a function is differentiable somewhere, that means it must be continuous"
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
                            a_correct: 4,
                            expl: "Use the power rule:\ng'(x) = 6x\nf'(x) = 2 * 6x\nf'(2) = 2 * 6 * 2 = 24"
                        },
                    ]
                },
                {
                    name: "How to Use the Chain Rule",
                    url: "https://www.youtube.com/watch?v=Y402bLqX1qg"
                },
                {
                    name: "Complex Differentiation",
                    url: "https://www.youtube.com/watch?v=z2f5_kWjch8",
                    practiceProblems: [
                        {
                            q: "What is the chain rule?",
                            as: ["d/dx f(x) = f'(x)", "d/dx f(g(x)) = f'(g(x))g'(x)", "d/dx f(g(x)) = f(g'(x))f'(x)", "d/dx f(g(x)) = f'(g'(x))"],
                            a_correct: 2,
                            expl: ""
                        },
                        {
                            q: "Given that d/dx sin(x) = cos(x),\nevaluate d/dx sin(2x)",
                            as: ["sin(2x)", "cos(2x)", "2sin(2x)", "2cos(2x)"],
                            a_correct: 4,
                            expl: "d/dx sin(x) = cos(x)\nd/dx 2x = 2"
                        },
                        {
                            q: "y = 3z(2x)\nWhat is dy/dx?",
                            as: ["3", "6", "3z'(2x)", "6z'(2x)"],
                            a_correct: 4,
                            expl: "Use chain rule"
                        },
                        {
                            q: "Describe Chain Rule",
                            as: ["You must also take the derivative of the inner function", "The same as the power rule", "When multiplying two functions, you must distribute them", "The Chain Rule is not real"],
                            a_correct: 1,
                            expl: ""
                        },
                        {
                            q: "Taking the derivative of which of these requires clearly using the Chain Rule?",
                            as: ["y=x^2", "y=2x^2", "y=cos(x)", "y=cos(x^3)"],
                            a_correct: 4,
                            expl: ""
                        },
                        {
                            q: "Review: which rule says that d/dx x^2 = 2x?",
                            as: ["Quotient Rule", "Chain Rule", "Power Rule", "Product Rule"],
                            a_correct: 3,
                            expl: ""
                        },
                        {
                            q: "Given that d/dx ln(x) = 1/x:\nwhat is d/dx ln(4x)?",
                            as: ["1/4x", "4/x", "1/x", "1/4"],
                            a_correct: 3,
                            expl: "d/dx ln(4x) = (1/4x)*4 = 4/4x = 1/x"
                        },
                        {
                            q: "Given that d/dx cos(x) = -sin(x):\nwhat is d/dx cos(x^3)?",
                            as: ["-sin(x^3)", "-3x^2sin(x^3)", "-3x^2sin(x)", "-sin(3x^2)"],
                            a_correct: 2,
                            expl: ""
                        },
                        {
                            q: "Review: which rule says that d/dx f(g(x)) = f'(g(x))g'(x)",
                            as: ["Chain Rule", "Power Rule", "Product Rule", "Rule of Nested Functions"],
                            a_correct: 1,
                            expl: ""
                        },
                        {
                            q: "Review: what is the derivative of 1/x?",
                            as: ["1/x^2", "2/x^2", "-1/x^2", "-2/x^2"],
                            a_correct: 3,
                            expl: ""
                        },
                        {
                            q: "Which case does NOT need chain rule?",
                            as: ["ln(3x)", "3sin(x)", "4ln(2x)", "sin(x^2)"],
                            a_correct: 2,
                            expl: ""
                        }
                    ]
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
                },
                {
                    name: "Integration by Parts",
                    practiceProblems: [
                        {
                            q: "How is integration by parts generally derived?",
                            as: ["Memorising", "Partial Fraction Decomposition", "Integrating the Product Rule", "Integrating the Quotient Rule"],
                            a_correct: 3,
                            expl: "Integrating the Product Rule (the derivative of u * v) will get you the formula for integration by parts"
                        },
                        {
                            q: "In what general scenario is integration by parts used?",
                            as: ["When you don't know how to take the integral of one of the parts", "When one of the LIATE/LIPETs exists", "When there are multiple terms to be integrated", "Both A and B"],
                            a_correct: 1,
                            expl: "LIATE/LIPET is a guide for choosing u, but some of them (such as Algebraic Expressions) can often be integrated without using parts if they're on their own. One time you use Integration by Parts is if you don't know how to integrate one of the terms."
                        },
                        {
                            q: "∫ln(x)dx\nWhat will u be?",
                            as: ["ln(x)", "ln(x)dx", "1", "1dx"],
                            a_correct: 1,
                            expl: "You take the derivative of u to get du. You can take the derivative of ln(x) very easily, so that should be u (the dx is needed so you can integrate dv)."
                        },
                        {
                            q: "∫sin(x)dx\nIs it a good idea to use integration by parts?",
                            as: ["Yes because there is trig, which is in LIATE", "No because trig is towards the end of LIATE", "Yes because sin(x) is easy to take the derivative of", "No because it is unnecessary"],
                            a_correct: 4,
                            expl: ""
                        },
                        {
                            q: "∫f(x)g'(x)dx\nf(x) = x^3\ng'(x) = x^2\nMust integration by parts to be used?",
                            as: ["Yes, u = f(x)", "No, trick question", "Yes, u = g'(x)", "yes, u = g'(x)dx"],
                            a_correct: 2,
                            expl: "Just replace f(x)g'(x) with x^5"
                        },
                    ]
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
                    url: "https://www.youtube.com/watch?v=GsYeFpjyDak",
                    practiceProblems: [
                        {
                            q: "\"Through the author's bountiful selection of numerous rhetorical devices, they attempt to convey the message that their literary work fixates upon.\"\nWhat is wrong with this essay thesis?",
                            as: ["No specific message is stated", "Simply stating \"through the author's rhetorical strategies\" is vague", "There is no implied structure or meaning for the essay to build off of", "All of the above"],
                            a_correct: 4,
                            expl: "This is a poorly written thesis. Remember, in AP Lang/Lit, the contents of your writing--not over-the-top diction--is what earns you points. If you wish to pursue the \"style point\", you need a good base essay to work with."
                        },
                        {
                            q: "Which of the following are specific rhetorical strategies?",
                            as: ["Juxtaposition", "Making a comparison between two ideas", "Trying to draw a picture in the reader's mind", "All of the above"],
                            a_correct: 4,
                            expl: "Though specific words such as \"juxtaposition\" can be helpful for conveying ideas quickly, you can summarize an author's strategy in your own words instead, as long as you are clear and specific enough."
                        },
                        {
                            q: "What is a good, efficient way to make your essay more appealing to a reader?",
                            as: ["Vary your verbs and be precise", "Write in a poetic style", "Use casual diction", "Write in olde English"],
                            a_correct: 1,
                            expl: "Varying your verbs and being precise allows you to convey your ideas more clearly and prevent repetition. See \"prose style\" or other writing books for more.\nSome students try to make their essay unique in other ways, but it generally fails unless they are experienced writers."
                        },
                        {
                            q: "Name the closest synonym of \"illustrates\"",
                            as: ["Urges", "Portrays", "Argues", "Advises"],
                            a_correct: 2,
                            expl: "Portrayal and Illustration are both terms relating to showing the discussed ideas in a certain light--think of it like a painting or drawing. The other terms are similar in usage, but connote different things."
                        },
                        {
                            q: "How is purpose different from message?",
                            as: ["Purpose involves getting the audience to act or encouraging change", "Purpose involves conveying an idea to an audience", "Purpose is focused only on themes and lessons, not actions", "Purpose is only for speeches"],
                            a_correct: 1,
                            expl: "Purpose is about actually making an impact on the world, while message is more about the ideas and themes discussed."
                        }
                    ]
                }
            ]
        ],
        "ap-physics": [
            [
                {
                    name: "Designing a Controlled Experiment",
                    url: "https://www.youtube.com/watch?v=y0LB47mcOM0",
                    practiceProblems: [
                        {
                            q: "Which of these must ALWAYS be used when graphing data in physics?",
                            as: ["Point protectors", "Lines starting at (0, 0)", "Protractors", "Calculators"],
                            a_correct: 1,
                            expl: "Point protectors must always be used to clarify points; the rest are not necessarily going to be used on all problems"
                        },
                        {
                            q: "What is a control variable?",
                            as: ["The variable that is changed", "The variable that is observed", "The things that stay the same", "A synonym for experimental units"],
                            a_correct: 3,
                            expl: ""
                        },
                        {
                            q: "Which of these should use a controlled experiment?",
                            as: ["Determining the average height of the people in the class", "Finding the relationship between height and shoe size for students", "Determining whether listening to music causes more effective studying", "Determining the average height of students in the whole city"],
                            a_correct: 3,
                            expl: "Controlled experiments test cause-and-effect relationships"
                        },
                        {
                            q: "Which of the following is important in an experiment?",
                            as: ["Control", "Replication", "Comparison", "All three"],
                            a_correct: 4,
                            expl: "All three are important"
                        },
                        {
                            q: "I give ten plants in my garden a specific brand of fertilizer and record their growth each day over the next 2 weeks. I ensure they all get an equal amount of sunlight. Is this an experiment?",
                            as: ["Yes: there is control", "Yes: there is observation", "No: there is no comparison", "No: there is no control"],
                            a_correct: 3,
                            expl: "There is control in ensuring sunlight stays the same, but there is no comparison--only one treatment is tried in the experiment, so it cannot be compared to anything."
                        },
                        {
                            q: "Why are experiments important in Physic?\ni. They demonstrate scientific concepts\nii. They allow us to turn theories into facts\niii. They allow us to test our hypotheses",
                            as: ["i", "i & iii", "ii & iii", "i, ii, & iii"],
                            a_correct: 2,
                            expl: "Facts are something known to be true with no possible interpretation or disagreement. Theories are not facts because they are supported by experiments, but they can change as new discoveries are revealed. This idea of change is essential to science--for example, the understanding of the atom has changed across history, and our understanding today could continue to change in the future."
                        }
                    ]
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
                    url: "https://www.youtube.com/shorts/GxPOKSy3GGc",
                    practiceProblems: [
                        {
                            q: "How many significant figures does this number have?\n003.0780",
                            as: ["3", "4", "5", "7"],
                            a_correct: 3,
                            expl: "Leading zeroes never count: 3.0780\nCaptive zeroes always count: 3.0780\nTrailing zeroes only count if a decimal is found: 3.0780\n-> 5 sig figs"
                        },
                        {
                            q: "How many sig figs: 03.14",
                            as: ["2", "3", "4", "5"],
                            a_correct: 2,
                            expl: "(0) 3 . 1 4"
                        },
                        {
                            q: "How many sig figs: 4.0560",
                            as: ["3", "4", "5", "6"],
                            a_correct: 3,
                            expl: "4.0560"
                        },
                        {
                            q: "How many sig figs: 6800",
                            as: ["2", "3", "4", "5"],
                            a_correct: 1,
                            expl: "68 (00)"
                        },
                        {
                            q: "How many sig figs: 6800.",
                            as: ["2", "3", "4", "5"],
                            a_correct: 3,
                            expl: "6800."
                        },
                        {
                            q: "How many sig figs: 10.0",
                            as: ["1", "2", "3", "4"],
                            a_correct: 3,
                            expl: "10.0"
                        },
                        {
                            q: "How many sig figs: 010101010",
                            as: ["6", "7", "8", "9"],
                            a_correct: 2,
                            expl: "(0) 1010101 (0)"
                        },
                        {
                            q: "How many sig figs: 3",
                            as: ["1", "2", "3", "4"],
                            a_correct: 1,
                            expl: "3"
                        },
                        {
                            q: "How many sig figs: 3+4",
                            as: ["1", "2", "3", "4"],
                            a_correct: 1,
                            expl: "3 and 4 each have 1 sig fig and add to 7, which also has 1"
                        },
                        {
                            q: "How many sig figs: 1.2 * 3.45",
                            as: ["1", "2", "3", "4"],
                            a_correct: 2,
                            expl: "1.2 has the fewest sig figs, which is 2, so the answer will have 2"
                        },
                        {
                            q: "How many sig figs: 10.0/5.0",
                            as: ["1", "2", "3", "4"],
                            a_correct: 2,
                            expl: "5.0 has 2 sig figs, which is the fewest"
                        },
                        {
                            q: "How many decimal places in result: 9.0 * 2.0",
                            as: ["0", "1", "2", "3"],
                            a_correct: 1,
                            expl: "9.0 * 2.0 = 18: all have 2 sig figs"
                        },
                        {
                            q: "How many sig figs: 100 * 200",
                            as: ["1", "2", "3", "4"],
                            a_correct: 1,
                            expl: "Both have 1"
                        },
                        {
                            q: "How many sig figs: 333.3 + 3.45",
                            as: ["1", "2", "3", "4"],
                            a_correct: 4,
                            expl: "333.3 has the fewest decimals"
                        },
                        {
                            q: "How many sig figs: 9 + 3",
                            as: ["1", "2", "3", "4"],
                            a_correct: 2,
                            expl: "9 + 3 = 12, with 0 decimal places"
                        },
                        {
                            q: "Why are sig fig rules used?",
                            as: ["To ensure the most precise results", "To make numbers readable and simple in a consistent way", "To make calculations easier for calculators", "To make science and engineering harder"],
                            a_correct: 2,
                            expl: "Sig figs are not precise, nor do most calculators benefit from using them. They also should theoretically make science and engineering easier in the long run once you learn them."
                        }
                    ]
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
                    url: "https://www.youtube.com/shorts/Le12qW4ZaOo",
                    practiceProblems: [
                        {
                            q: "(These questions are just fun trivia):\nWhich of the following AP classes does not exist (DNE)?",
                            as: ["Italian", "Latin", "Hindi", "Japanese"],
                            a_correct: 3,
                            expl: ""
                        },
                        {
                            q: "What does the AP in AP stand for?",
                            as: ["Advance Placement", "Advanced Placing", "Advance Placing", "Advanced Placement"],
                            a_correct: 4,
                            expl: ""
                        },
                        {
                            q: "Who runs the national AP program?",
                            as: ["The College Board", "The CollegeBoard", "The Collegeboard", "The College-Board"],
                            a_correct: 1,
                            expl: ""
                        },
                        {
                            q: "Which of these is a real class?",
                            as: ["AP Computer Science", "AP Computer Science A: Java", "AP Principles", "None of these"],
                            a_correct: 4,
                            expl: "AP CSA does not have \"Java\" at the end"
                        }
                    ]
                },
                {
                    name: "Don't Memorize the Arc Length Formula",
                    url: "https://www.youtube.com/shorts/1mRIZmkFBnY",
                    practiceProblems: [
                        {
                            q: "Which of these is NOT important for understanding arc length?",
                            as: ["The distance formula", "The idea of delta x", "Memorization", "Integrals"],
                            a_correct: 3,
                            expl: "Make sure to understand the formulas you're using!"
                        }
                    ]
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
