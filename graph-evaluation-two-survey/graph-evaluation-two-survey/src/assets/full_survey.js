export const SURVEY_JSON = {
    "title": "Dynamic Graphs User Study",
    "description": "Please follow the instructions carefully and don't forget to upload your responses once finished!",
    // "logo": "https://www.cvast.tuwien.ac.at/themes/cvast/css/images/logo.png",
    "logoWidth": 50,
    "logoHeight": 80,
    "firstPageIsStarted": true,
    "showPrevButton": false,
    "showProgressBar": "top",
    "pages": [
        {
            "name": "intro",
            "elements": [
                {
                    "type": "html",
                    "name": "question_intro",
                    "html": `<h1>Start</h1>
                        <p>Please make sure you have read the slides about the user study before starting the survey.</p>
                        <p>Press the 'Start' button to start the survey</p>
                        <p>Do not forget to download the results of the survey and upload them!</p>
                        <p>The datasets are available <a href=\"./assets/datasets.zip\">here</a></p>
                        <p>The results are available for download as a csv <a href=\"./assets/results.csv\">here</a></p>
                        <iframe id="hidden" src=\"https://graph-evaluation-two.herokuapp.com/load\" frameborder=\"0\"></iframe>
                    `
                }
            ]
        },
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "name": "nl_t2_clique_tl",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'AD37', 'NY62', 'LT02', 'VZ38', 'DO54'. Calculate the change of the maximal clique’s size between the given nodes (maximum number of vertices where each pair is connected).  (E.g., The clique had 5 nodes at T1, 4 at T2, 5 at T3, and 6 at T4 - The change of the clique’s size is |(5-4)|+|(4-5)|+|(5-6)|). Only consider the largest possible clique between the given nodes.",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({nl_t2_clique_tl})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "nl_t2_clique_tl_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-tl?graph=graph_twenty\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 1"
        },
        {
            "name": "page2",
            "elements": [
                {
                    "type": "text",
                    "name": "m_t2_clique_jp",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'VU32', 'ZX67', 'WL72', 'MG10', 'JF52'. Calculate the change of the maximal clique’s size between the given nodes (maximum number of vertices where each pair is connected).  (E.g., The clique had 5 nodes at T1, 4 at T2, 5 at T3, and 6 at T4 - The change of the clique’s size is |(5-4)|+|(4-5)|+|(5-6)|). Only consider the largest possible clique between the given nodes.",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({m_t2_clique_jp})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "m_t2_clique_jp_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-jp?graph=graph_seventeen\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 2"
        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "text",
                    "name": "m_t2_single_si",
                    "inputType": "number",
                    "title": "Calculate the absolute number of changes of DH54's degree across all time steps. (E.g., Node A had 4 links at T1, 3 at T2, 5 at T3, 6 at T4 - The absolute change is |(4-3)|+|(3-5)|+|(5-6)|).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({m_t2_single_si})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "m_t2_single_si_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-si?graph=graph_six\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 3"
        },
        {
            "name": "page4",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "m_t1_single_si",
                    "title": "At which time step is the relationship between QU71 and BS04 introduced for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "m_t1_single_si_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },

                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-si?graph=graph_two\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 4"
        },
        {
            "name": "page5",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "nl_t1_clique_jp",
                    "title": "At which time step is the clique between 'JV24', 'LK63', 'TS29', 'QJ68', 'RD54' appearing for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "nl_t1_clique_jp_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-jp?graph=graph_thirteen\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 5"
        },
        {
            "name": "page6",
            "elements": [
                {
                    "type": "text",
                    "name": "nl_t2_single_tl",
                    "inputType": "number",
                    "title": "Calculate the absolute number of changes of FC47’s degree across all time steps. (E.g., Node A had 4 links at T1, 3 at T2, 5 at T3, 6 at T4 - The absolute change is |(4-3)|+|(3-5)|+|(5-6)|).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({nl_t2_single_tl})"
                        }
                    ],
                    "items": [
                        {
                            "name": "change",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "minValue": 0,
                                    "maxValue": 30
                                }
                            ]
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "nl_t2_single_tl_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-tl?graph=graph_eight\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 6"
        },
        {
            "name": "page7",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "m_t1_clique_si",
                    "title": "At which time step is the clique between 'PU49', 'IR03', 'ID62', 'OJ43', 'QP22' appearing for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "m_t1_clique_si_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },

                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-si?graph=graph_fourteen\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 7"
        },
        {
            "name": "page8",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "nl_t1_clique_tl",
                    "title": "At which time step is the clique between 'IH18', 'OF19', 'RF30', 'PM70', 'UZ49' appearing for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "nl_t1_clique_tl_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-tl?graph=graph_sixteen\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 8"
        },
        {
            "name": "page9",
            "elements": [
                {
                    "type": "text",
                    "name": "nl_t3_clique_an",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'WV69', 'II36', 'OA72', 'HR78', 'UO45'. Find the size of the largest maximal clique across all the time steps between the given nodes (maximum number of vertices where each pair is connected).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({nl_t3_clique_an})"
                        }
                    ],
                    "items": [
                        {
                            "name": "change",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "minValue": 0,
                                    "maxValue": 30
                                }
                            ]
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "nl_t3_clique_an_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-an?graph=graph_twentythree\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 9"
        },
        {
            "name": "page10",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "m_t1_clique_tl",
                    "title": "At which time step is the clique between 'IH18', 'OF19', 'RF30', 'PM70', 'UZ49' appearing for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "m_t1_clique_tl_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },

                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-tl?graph=graph_sixteen\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 10"
        },
        {
            "name": "page11",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "m_t1_clique_an",
                    "title": "At which time step is the clique between 'VQ51', 'LN11', 'PJ17', 'NP28', 'VW11' appearing for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "m_t1_clique_an_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-an?graph=graph_fifteen\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 11"
        },
        {
            "name": "page12",
            "elements": [
                {
                    "type": "text",
                    "name": "nl_t3_clique_jp",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'VT05', 'ZP32', 'LQ10', 'EL00', 'JM88'. Find the size of the largest maximal clique across all the time steps between the given nodes (maximum number of vertices where each pair is connected).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({nl_t3_clique_jp})"
                        }
                    ],
                    "items": [
                        {
                            "name": "change",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "minValue": 0,
                                    "maxValue": 30
                                }
                            ]
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "nl_t3_clique_jp_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-jp?graph=graph_twentyone\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 12"
        },
        {
            "name": "page13",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "m_t1_single_jp",
                    "title": "At which time step is the relationship between PX56 and HF81 introduced for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "m_t1_single_jp_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-jp?graph=graph_one\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 13"
        },
        {
            "name": "page14",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "nl_t1_single_jp",
                    "title": "At which time step is the relationship between LO01 and PX56 introduced for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "nl_t1_single_jp_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-jp?graph=graph_one\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 14"
        },
        {
            "name": "page15",
            "elements": [
                {
                    "type": "text",
                    "name": "m_t2_single_tl",
                    "inputType": "number",
                    "title": "Calculate the absolute number of changes of SL24’s degree across all time steps. (E.g., Node A had 4 links at T1, 3 at T2, 5 at T3, 6 at T4 - The absolute change is |(4-3)|+|(3-5)|+|(5-6)|).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({m_t2_single_tl})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "m_t2_single_tl_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-tl?graph=graph_eight\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 15"
        },
        {
            "name": "page16",
            "elements": [
                {
                    "type": "text",
                    "name": "nl_t2_single_an",
                    "inputType": "number",
                    "title": "Calculate the absolute number of changes of CK64’s degree across all time steps. (E.g., Node A had 4 links at T1, 3 at T2, 5 at T3, 6 at T4 - The absolute change is |(4-3)|+|(3-5)|+|(5-6)|).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({nl_t2_single_an})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "nl_t2_single_an_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-an?graph=graph_seven\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 16"
        },
        {
            "name": "page17",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "nl_t1_single_si",
                    "title": "At which time step is the relationship between AW85 and TQ48 introduced for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "nl_t1_single_si_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },

                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-si?graph=graph_two\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 17"
        },
        {
            "name": "page18",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "m_t3_single_si",
                    "title": "At which time step does the node HJ40 have its highest degree?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "m_t3_single_si_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },

                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-si?graph=graph_ten\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 18"
        },
        {
            "name": "page19",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "m_t3_single_an",
                    "title": "At which time step does the node ZH55 have its highest degree?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "m_t3_single_an_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },

                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-an?graph=graph_eleven\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 19"
        },
        {
            "name": "page20",
            "elements": [
                {
                    "type": "text",
                    "name": "nl_t3_clique_si",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'DF19', 'UT89', 'PP68', 'XL27', 'WT27'. Find the size of the largest maximal clique across all the time steps between the given nodes (maximum number of vertices where each pair is connected).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({nl_t3_clique_si})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "nl_t3_clique_si_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-si?graph=graph_twentytwo\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 20"
        },
        {
            "name": "page21",
            "elements": [
                {
                    "type": "text",
                    "name": "m_t2_clique_an",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'BE13', 'XV12', 'WZ93', 'NW74', 'KE65'. Calculate the change of the maximal clique’s size between the given nodes (maximum number of vertices where each pair is connected).  (E.g., The clique had 5 nodes at T1, 4 at T2, 5 at T3, and 6 at T4 - The change of the clique’s size is |(5-4)|+|(4-5)|+|(5-6)|). Only consider the largest possible clique between the given nodes.",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({m_t2_clique_an})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "m_t2_clique_an_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-an?graph=graph_nineteen\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 21"
        },
        {
            "name": "page22",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "nl_t1_single_tl",
                    "title": "At which time step is the relationship between AR48 and OJ37 introduced for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "nl_t1_single_tl_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-tl?graph=graph_four\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 22"
        },
        {
            "name": "page23",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "m_t3_single_tl",
                    "title": "At which time step does the node GI36 have its highest degree?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "m_t3_single_tl_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },

                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-tl?graph=graph_twelve\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 23"
        },
        {
            "name": "page24",
            "elements": [
                {
                    "type": "text",
                    "name": "m_t2_clique_si",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'QD74', 'JU73', 'WI43', 'MH06', 'HI53'. Calculate the change of the maximal clique’s size between the given nodes (maximum number of vertices where each pair is connected).  (E.g., The clique had 5 nodes at T1, 4 at T2, 5 at T3, and 6 at T4 - The change of the clique’s size is |(5-4)|+|(4-5)|+|(5-6)|). Only consider the largest possible clique between the given nodes.",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({m_t2_clique_si})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "m_t2_clique_si_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-si?graph=graph_eighteen\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 24"
        },
        {
            "name": "page25",
            "elements": [
                {
                    "type": "text",
                    "name": "m_t2_single_jp",
                    "inputType": "number",
                    "title": "Calculate the absolute number of changes of FG43’s degree across all time steps. (E.g., Node A had 4 links at T1, 3 at T2, 5 at T3, 6 at T4 - The absolute change is |(4-3)|+|(3-5)|+|(5-6)|).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({m_t2_single_jp})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "m_t2_single_jp_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-jp?graph=graph_five\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 25"
        },
        {
            "name": "page26",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "nl_t3_single_jp",
                    "title": "At which time step does the node KY66 have its highest degree?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "nl_t3_single_jp_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },

                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-jp?graph=graph_nine\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 26"
        },
        {
            "name": "page27",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "nl_t1_clique_si",
                    "title": "At which time step is the clique between 'PU49', 'IR03', 'ID62', 'OJ43', 'QP22' appearing for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "nl_t1_clique_si_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-si?graph=graph_fourteen\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 27"
        },
        {
            "name": "page28",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "m_t1_single_an",
                    "title": "At which time step is the relationship between FR89 and QJ70 introduced for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "m_t1_single_an_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },

                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-an?graph=graph_three\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 28"
        },
        {
            "name": "page29",
            "elements": [
                {
                    "type": "text",
                    "name": "nl_t2_single_si",
                    "inputType": "number",
                    "title": "Calculate the absolute number of changes of GM76’s degree across all time steps. (E.g., Node A had 4 links at T1, 3 at T2, 5 at T3, 6 at T4 - The absolute change is |(4-3)|+|(3-5)|+|(5-6)|).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({nl_t2_single_si})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "nl_t2_single_si_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-si?graph=graph_six\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 29"
        },
        {
            "name": "page30",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "nl_t3_single_si",
                    "title": "At which time step does the node ES97 have its highest degree?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "nl_t3_single_si_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-si?graph=graph_ten\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 30"
        },
        {
            "name": "page31",
            "elements": [
                {
                    "type": "text",
                    "name": "m_t3_clique_si",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'DF19', 'UT89', 'PP68', 'XL27', 'WT27'. Find the size of the largest maximal clique across all the time steps between the given nodes (maximum number of vertices where each pair is connected).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({m_t3_clique_si})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "m_t3_clique_si_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-si?graph=graph_twentytwo\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 31"
        },
        {
            "name": "page32",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "m_t1_single_tl",
                    "title": "At which time step is the relationship between CM66 and TX08 introduced for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "m_t1_single_tl_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-tl?graph=graph_four\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 32"
        },
        {
            "name": "page33",
            "elements": [
                {
                    "type": "text",
                    "name": "m_t3_clique_tl",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'RP58', 'HK67', 'TN54', 'IY29', 'CC71'. Find the size of the largest maximal clique across all the time steps between the given nodes (maximum number of vertices where each pair is connected).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({m_t3_clique_tl})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "m_t3_clique_tl_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-tl?graph=graph_twentyfour\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 33"
        },
        {
            "name": "page34",
            "elements": [
                {
                    "type": "text",
                    "name": "nl_t2_single_jp",
                    "inputType": "number",
                    "title": "Calculate the absolute number of changes of DF67’s degree across all time steps. (E.g., Node A had 4 links at T1, 3 at T2, 5 at T3, 6 at T4 - The absolute change is |(4-3)|+|(3-5)|+|(5-6)|).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({nl_t2_single_jp})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "nl_t2_single_jp_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-jp?graph=graph_five\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 34"
        },
        {
            "name": "page35",
            "elements": [
                {
                    "type": "text",
                    "name": "nl_t3_clique_tl",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'RP58', 'HK67', 'TN54', 'IY29', 'CC71'. Find the size of the largest maximal clique across all the time steps between the given nodes (maximum number of vertices where each pair is connected).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({nl_t3_clique_tl})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "nl_t3_clique_tl_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-tl?graph=graph_twentyfour\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 35"
        },
        {
            "name": "page36",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "nl_t3_single_tl",
                    "title": "At which time step does the node GA72 have its highest degree?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "nl_t3_single_tl_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },

                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-tl?graph=graph_twelve\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 36"
        },
        {
            "name": "page37",
            "elements": [
                {
                    "type": "text",
                    "name": "m_t2_single_an",
                    "inputType": "number",
                    "title": "Calculate the absolute number of changes of DR20’s degree across all time steps. (E.g., Node A had 4 links at T1, 3 at T2, 5 at T3, 6 at T4 - The absolute change is |(4-3)|+|(3-5)|+|(5-6)|).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({m_t2_single_an})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "m_t2_single_an_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-an?graph=graph_seven\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 37"
        },
        {
            "name": "page38",
            "elements": [
                {
                    "type": "text",
                    "name": "m_t3_clique_an",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'WV69', 'II36', 'OA72', 'HR78', 'UO45'. Find the size of the largest maximal clique across all the time steps between the given nodes (maximum number of vertices where each pair is connected).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({m_t3_clique_an})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "m_t3_clique_an_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-an?graph=graph_twentythree\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 38"
        },
        {
            "name": "page39",
            "elements": [
                {
                    "type": "text",
                    "name": "nl_t2_clique_jp",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'VU32', 'ZX67', 'WL72', 'MG10', 'JF52'. Calculate the change of the maximal clique’s size between the given nodes (maximum number of vertices where each pair is connected).  (E.g., The clique had 5 nodes at T1, 4 at T2, 5 at T3, and 6 at T4 - The change of the clique’s size is |(5-4)|+|(4-5)|+|(5-6)|). Only consider the largest possible clique between the given nodes.",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({nl_t2_clique_jp})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "nl_t2_clique_jp_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-jp?graph=graph_seventeen\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 39"
        },
        {
            "name": "page40",
            "elements": [
                {
                    "type": "text",
                    "name": "m_t3_clique_jp",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'VT05', 'ZP32', 'LQ10', 'EL00', 'JM88'. Find the size of the largest maximal clique across all the time steps between the given nodes (maximum number of vertices where each pair is connected).",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({m_t3_clique_jp})"
                        }
                    ],
                    "items": [
                        {
                            "name": "change",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "minValue": 0,
                                    "maxValue": 30
                                }
                            ]
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "m_t3_clique_jp_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-jp?graph=graph_twentyone\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 40"
        },
        {
            "name": "page41",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "nl_t1_clique_an",
                    "title": "At which time step is the clique between 'VQ51', 'LN11', 'PJ17', 'NP28', 'VW11' appearing for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "nl_t1_clique_an_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },

                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-an?graph=graph_fifteen\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 41"
        },
        {
            "name": "page42",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "nl_t3_single_an",
                    "title": "At which time step does the node II44 have its highest degree?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "nl_t3_single_an_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },

                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-an?graph=graph_eleven\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 42"
        },
        {
            "name": "page43",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "nl_t1_single_an",
                    "title": "At which time step is the relationship between OK77 and CT36 introduced for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "nl_t1_single_an_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },

                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-an?graph=graph_three\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 43"
        },
        {
            "name": "page44",
            "elements": [
                {
                    "type": "text",
                    "name": "nl_t2_clique_si",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'QD74', 'JU73', 'WI43', 'MH06', 'HI53'. Calculate the change of the maximal clique’s size between the given nodes (maximum number of vertices where each pair is connected).  (E.g., The clique had 5 nodes at T1, 4 at T2, 5 at T3, and 6 at T4 - The change of the clique’s size is |(5-4)|+|(4-5)|+|(5-6)|). Only consider the largest possible clique between the given nodes.",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({nl_t2_clique_si})"
                        }
                    ],
                    "items": [
                        {
                            "name": "change",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "minValue": 0,
                                    "maxValue": 30
                                }
                            ]
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "nl_t2_clique_si_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-si?graph=graph_eighteen\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 44"
        },
        {
            "name": "page45",
            "elements": [
                {
                    "type": "text",
                    "name": "nl_t2_clique_an",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'BE13', 'XV12', 'WZ93', 'NW74', 'KE65'. Calculate the change of the maximal clique’s size between the given nodes (maximum number of vertices where each pair is connected).  (E.g., The clique had 5 nodes at T1, 4 at T2, 5 at T3, and 6 at T4 - The change of the clique’s size is |(5-4)|+|(4-5)|+|(5-6)|). Only consider the largest possible clique between the given nodes.",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({nl_t2_clique_an})"
                        }
                    ],
                    "items": [
                        {
                            "name": "change",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "minValue": 0,
                                    "maxValue": 30
                                }
                            ]
                        }
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "nl_t2_clique_an_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/nl-an?graph=graph_nineteen\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 45"
        },
        {
            "name": "page46",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "m_t3_single_jp",
                    "title": "At which time step does the node AT79 have its highest degree?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "m_t3_single_jp_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-jp?graph=graph_nine\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 46"
        },
        {
            "name": "page47",
            "elements": [
                {
                    "type": "text",
                    "name": "m_t2_clique_tl",
                    "inputType": "number",
                    "title": "Consider the set of nodes 'AD37', 'NY62', 'LT02', 'VZ38', 'DO54'. Calculate the change of the maximal clique’s size between the given nodes (maximum number of vertices where each pair is connected).  (E.g., The clique had 5 nodes at T1, 4 at T2, 5 at T3, and 6 at T4 - The change of the clique’s size is |(5-4)|+|(4-5)|+|(5-6)|). Only consider the largest possible clique between the given nodes.",
                    "validators": [
                        {
                            "type": "expression",
                            "minValue": 0,
                            "maxValue": 30,
                            "text": "Please correct the answer. Valid answers are in the 0-30 range.",
                            "expression": "validateNumericAnswer({m_t2_clique_tl})"
                        }
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "m_t2_clique_tl_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-tl?graph=graph_twenty\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 47"
        },
        {
            "name": "page48",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "m_t1_clique_jp",
                    "title": "At which time step is the clique between 'JV24', 'LK63', 'TS29', 'QJ68', 'RD54' appearing for the first time?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": [1, 2, 3, 4]
                },
                {
                    "type": "radiogroup",
                    "name": "m_t1_clique_jp_confidence",
                    "title": "How confident are you in your answer? \(1 - not confident; 5 - very confident\)",
                    "isRequired": true,
                    "colCount": 5,
                    "choices": [1, 2, 3, 4, 5]
                },
                {
                    "type": "html",
                    "html": "<iframe id=\"embedded-angular\" src=\"https://graph-evaluation-two.herokuapp.com/m-jp?graph=graph_thirteen\" frameborder=\"0\"></iframe>"
                }
            ],
            "title": "Question 48"
        },
        {
            "name": "page49",
            "elements": [
                {
                    "type": "matrixdropdown",
                    "name": "preferences",
                    "title": "Please rate the following techniques from 1 to 5 (1 - least preferred; 5 - most preferred)?",
                    "cellType": "barrating",
                    "isRequired": true,
                    "ratingTheme": "fontawesome-stars",
                    "choices": [
                        1, 2, 3, 4, 5
                    ],
                    "columns": [
                        { "name": "JP", },
                        { "name": "SI", },
                        { "name": "AN", },
                        { "name": "TL" }
                    ],
                    "rows": [
                        "NL",
                        "M"
                    ]
                },
                {
                    "name": "comments",
                    "type": "comment",
                    "title": "Please enter your personal comments:",
                    "placeHolder": "Comments...",
                    "isRequired": true,
                }
            ],
            "title": "Question 48"
        }
    ]
}