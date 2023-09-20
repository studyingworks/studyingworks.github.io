// Script for StudyingWorks
var version = "0.0.7";
console.log('STUDYING WORKS: v'+version);

// Existing pages (other than class-specific ones)
var existingPages = ["home", "searchres", "contact"];

/*
TO DO:
General
    - Feat: link back to home on the ptable page
    - Align videos better?
    - Refactor: move all iframe creation into createIframe()
    - Improve logo/title blending in the header
    - Cleaner UI (spacing, style, less whitespace at the bottom, etc.)
    - Improve video loading buffer time (only load videos when tab is clicked?)
    - Get font working on chromebooks
Practice Lightbox
    - Feat: store question states for lightbox session
    - Feat: correct/incorrect counts and percentages
    - Frontend: layout and styles
    - Shuffle answer order
    - Allow embedded timestamps in explanations (ex. 5:12 links to 5 min, 12 sec of the lesson video)
    - Cleaner UI (spacing, style, etc.)
Question Creator
    - Feat: question explanations (optional; compatibility with lightbox)
    - Feat: display all created questions in a list to the side
    - Feat: allow editing or removing questions
*/

// Functions
// Hide existing pages
function hideAllPages() {
    // Hide main pages
    for (let i = 0; i < existingPages.length; i++) {
        try {
            if (document.getElementById('pg-'+existingPages[i]).style.display != 'none') {
				document.getElementById('pg-'+existingPages[i]).style.display = 'none';
            }
        } catch (err) {
            // Pg does not exist
        }
    }
    // Hide lightbox
    closePracticeLightbox();
}
// Create and return a new iframe with the info
function createIframe(inIframeID, inTitle = "YouTube video player") {
    var thisiframe = document.createElement('iframe');
    thisiframe.width = '300';
    thisiframe.height = '200';
    thisiframe.src = 'https://www.youtube.com/embed/'+inIframeID;
    thisiframe.title = inTitle;
    thisiframe.frameborder = "0"; // previously did not have 'thisiframe.' before; same with allow =
    thisiframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    thisiframe.allowFullscreen = true;
    return thisiframe;
}

// Add links / populate page divs
for (let i = 0; i < courses.names.length; i++) {
    // Get ID
    var thislk = document.getElementById("lk-"+courses.names[i]);
    var thislkt = document.getElementById("lkt-"+courses.names[i]);
    // Add links
    var numUnitsInCourse = courses.units[i];
    for (let j = 0; j < numUnitsInCourse; j++) {
        // Link
        var content = "Content"; // (make only one click necessary?) (toadd) //(j+1) + "  ";
        let thisj = j;
        let thiscoursename = courses.names[i];
        let pgtoload = thiscoursename+"-"+(j+1);
        existingPages.push(pgtoload);
        let thisunitlk = document.createElement('a');
        thisunitlk.id = "lk-"+courses.names[i]+"-"+(j+1);
        thisunitlk.innerText = content;
        thisunitlk.dataset.pgtoload = pgtoload;
        if (numUnitsInCourse > 1) { // Such a unit count is currently deprecated
            thislk.append(thisunitlk);
            thisunitlk.addEventListener('click', function() {
                try {
                    // Hide existing pages
                    hideAllPages();
                    // Show this page
                    var divtoload = document.getElementById('pg-'+thisunitlk.dataset.pgtoload);
                    divtoload.style.display = 'block';
                    console.log('Page loaded: pg-'+thisunitlk.dataset.pgtoload);
                }
                catch (err) {
                    console.log('ERR on loading page: pg-'+thisunitlk.dataset.pgtoload);
                }
            });
        } else {
            thislkt.dataset.pgtoload = pgtoload;
            thislkt.addEventListener('click', function() {
                try {
                    // Hide existing pages
                    hideAllPages();
                    // Show this page
                    var divtoload = document.getElementById('pg-'+pgtoload); // thislk.dataset.pgtoload
                    divtoload.style.display = 'block';
                    console.log('Page loaded: pg-'+pgtoload);
                }
                catch (err) {
                    console.log('ERR on loading page: pg-'+pgtoload);
                }
            });
        }
        // Populate page div
        try {
            var thesesections = courses.sections[thiscoursename][thisj];
            for (let t = 0; t < Object.keys(thesesections).length; t++) {
                // Get link divider
                try {
                    // Find this div
                    var divtoload2 = document.getElementById('pg-'+thisunitlk.dataset.pgtoload+'-links');
                    // Append
                    let thissectionlk = document.createElement('span');
                    let vidurl = 'none'; // https://www.youtube.com/channel/UC-9IyDlMjLaLFhD1VJpfBpg
                    thissectionlk.innerHTML = '<div style="display:block; height:10px;"></div>Lesson ' + (t + 1) + ': ' + thesesections[t].name + '<br>';
                    // Add link, if possible
                    if (thesesections[t].url != undefined) {
                        // Add link
                        vidurl = thesesections[t].url;
                        thissectionlk.innerHTML += ''
                        +'&nbsp;&nbsp;&nbsp;&nbsp;'
                        +'<a href="'+vidurl+'" class="link" target="_blank">'
                        +'<img src="static/images/icon-yt.svg" width="12px" height="12px">'
                        +' Video Lesson</a><br>'; // +'Section 1.'+(t+1)+': '+thesesections[t].name+'</a><br>';*/
                    }
                    /*else {
                        thissectionlk.innerHTML = ''
                        +'Lesson '+(t+1)+': '+thesesections[t].name+'<br>';
                    }*/
                    divtoload2.append(thissectionlk);
                    // Add practice problems, if possible
                    if ('practiceProblems' in thesesections[t]) {
                        // Add practice problems under link
                        thissectionlk.innerHTML += ''
                        +'&nbsp;&nbsp;&nbsp;&nbsp;'
                        +'<a class="link" onclick="openPracticeLightbox('+i+', '+t+');">'
                        +'<img src="static/images/icon-practice_large.png" width="12px" height="12px">'
                        +' Try Practice Problems for this lesson</a><br>';
                    }
                    // Create iframe for video at bottom of page (other than shorts)
                    if (thesesections[t].url != undefined && !(thesesections[t].url.includes('shorts'))) {
                        var iframeID = thesesections[t].url.split('?v=')[1]; // iframe ID is end of url; key 'urliframeID' is deprecated
                        var divtoload3 = document.getElementById('pg-'+thisunitlk.dataset.pgtoload+'-vids');
                        let thisiframe = createIframe(iframeID);
                        divtoload3.append(thisiframe);
                    }
                } catch (err) {
                    // Error populating
                    console.log('ERR on populating page: '+thiscoursename+'.'+thisj+'.'+t+' : '+err);
                }
            }
        } catch (err) {
            // Course does not exist in list
        }
    }
}

// Add featured videos to homepage
for (let i = 0; i < courses.featured_videos.length; i++) {
    var iframeID = courses.featured_videos[i].split('?v=')[1]; // iframe ID is end of url
    var divtoload4 = document.getElementById('pg-home-vids');
    var thisiframe = createIframe(iframeID);
    divtoload4.append(thisiframe);
}

// Home link
document.getElementById('lk-home').addEventListener('click', function() {
    hideAllPages();
    document.getElementById('pg-home').style.display = 'block';
});

// Contact link
document.getElementById('lk-contact').addEventListener('click', function() {
    hideAllPages();
    document.getElementById('pg-contact').style.display = 'block';
});
document.getElementById('lk-contact2').addEventListener('click', function() {
    hideAllPages();
    document.getElementById('pg-contact').style.display = 'block';
});

// Search bar
document.getElementById('search-bar').onchange = function() {
    hideAllPages();
    var searchString = document.getElementById('search-bar').value;
    // Search
    var searchResults = courses.searchSections(searchString);
    // Display results
    var divtoload = document.getElementById('pg-searchres-vids');
    while (divtoload.firstChild) {
        divtoload.removeChild(divtoload.firstChild);
    }
    for (let i = 0; i < searchResults.length; i++) {
        // Create iframe for video at bottom of page
        if (searchResults[i].url != undefined && !(searchResults[i].url.includes('shorts'))) {
            var iframeID = searchResults[i].url.split('?v=')[1]; // iframe ID is end of url; key 'urliframeID' is deprecated
            var thisiframe = createIframe(iframeID);
            divtoload.append(thisiframe);
        }
    }
    document.getElementById('search-string-disp').innerText = searchString;
    document.getElementById('pg-searchres').style.display = 'block';
}
