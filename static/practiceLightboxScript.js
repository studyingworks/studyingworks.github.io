// Script for Practice Lightbox

var lightboxData = {
    isOpen: false,
    courseNum: -1,
    sectionIndex: -1,
    currentQuestion: -1,
    questionAnswered: false,
    inAnswer: -1
}

// Utilities
function getCurrentQuestionData() {
    return courses.sections[courses.names[lightboxData.courseNum]]
    [0][lightboxData.sectionIndex].practiceProblems[lightboxData.currentQuestion];
}
function getCurrentTotalQuestions() {
    return courses.sections[courses.names[lightboxData.courseNum]]
    [0][lightboxData.sectionIndex].practiceProblems.length;
}

// Open lightbox
function openPracticeLightbox(inCourseNum, inSectionIndex) {
    // Set the lightbox values
    lightboxData.isOpen = true;
    lightboxData.courseNum = inCourseNum;
    lightboxData.sectionIndex = inSectionIndex;
    lightboxData.currentQuestion = 0; // todo: random question selection ?
    lightboxData.questionAnswered = false;
    lightboxData.inAnswer = -1;
    // Display the lightbox values
    displayUpdatedPracticeLightbox();
    // Show the lightbox
    document.getElementById('practiceLightboxBg').style.display = 'block';
}

// Display updated lightbox values
function displayUpdatedPracticeLightbox() {
    // Title info
    document.getElementById('plb_class').innerText
        = courses.names_colloquial[lightboxData.courseNum];
    document.getElementById('plb_lesson').innerText = '' + (lightboxData.sectionIndex + 1);
    // Menu buttons
    if (lightboxData.currentQuestion < getCurrentTotalQuestions() - 1) {
        document.getElementById('plb_next').disabled = false;
    } else {
        document.getElementById('plb_next').disabled = true;
    }
    if (lightboxData.currentQuestion > 0) {
        document.getElementById('plb_prev').disabled = false;
    } else {
        document.getElementById('plb_prev').disabled = true;
    }
    // Question text and buttons
    let currentQuestionData = getCurrentQuestionData();
    document.getElementById('plb_questionNum').innerText
        = '' + (lightboxData.currentQuestion + 1);
    document.getElementById('plb_questionNum2').innerText
        = '' + (lightboxData.currentQuestion + 1);
    document.getElementById('plb_totalQuestions').innerText
        = '' + getCurrentTotalQuestions();
    document.getElementById('plb_question').innerText = currentQuestionData.q;
    for (let i = 0; i < 4; i++) {
        document.getElementById('plb_ans' + i).innerText = currentQuestionData.as[i];
        if (lightboxData.questionAnswered) {
            // Question answered: display whether it was correct/incorrect
            document.getElementById('plb_inans' + i).disabled = true;
            if (i == currentQuestionData.a_correct - 1) {
                document.getElementById('plb_inans' + i).style.backgroundColor = 'rgb(105, 209, 25)';
            } else if (i == lightboxData.inAnswer) {
                document.getElementById('plb_inans' + i).style.backgroundColor = 'rgb(214, 11, 28)';
            } else {
                document.getElementById('plb_inans' + i).style.removeProperty('background-color');
            }
        } else {
            document.getElementById('plb_inans' + i).disabled = false;
            document.getElementById('plb_inans' + i).style.removeProperty('background-color');
        }
    }
}

// Answer input buttons
for (let i = 0; i < 4; i++) {
    let thisi = i;
    document.getElementById('plb_inans' + thisi).addEventListener('click', function() {
        // Answer the question
        lightboxData.questionAnswered = true;
        lightboxData.inAnswer = thisi;
        // Display the lightbox values
        displayUpdatedPracticeLightbox();
    });
}

// Menu buttons
document.getElementById('plb_next').addEventListener('click', function() {
    // Next question
    lightboxData.currentQuestion++;
    lightboxData.questionAnswered = false;
    lightboxData.inAnswer = -1;
    // Display the lightbox values
    displayUpdatedPracticeLightbox();
});
document.getElementById('plb_prev').addEventListener('click', function() {
    // Next question
    lightboxData.currentQuestion--;
    lightboxData.questionAnswered = false;
    lightboxData.inAnswer = -1;
    // Display the lightbox values
    displayUpdatedPracticeLightbox();
});
document.getElementById('plb_random').addEventListener('click', function() {
    // Random question
    lightboxData.currentQuestion = Math.floor(Math.random() * getCurrentTotalQuestions());
    lightboxData.questionAnswered = false;
    lightboxData.inAnswer = -1;
    // Display the lightbox values
    displayUpdatedPracticeLightbox();
});

// Close lightbox
function closePracticeLightbox() {
    // Set the lightbox value
    lightboxData.isOpen = false;
    // Hide the lightbox
    document.getElementById('practiceLightboxBg').style.display = 'none';
}

// Close lightbox
document.getElementById('plb_exit').addEventListener('click', closePracticeLightbox);
