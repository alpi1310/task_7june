function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function openContent(content) {
    var contentDiv = document.getElementById("mainContent");
    switch (content) {
        case 'htmlIntro':
            contentDiv.innerHTML = "<h2>HTML Introduction</h2><p>HTML is the standard markup language for Web pages..</p>";
            break;
        case 'htmlTags':
            contentDiv.innerHTML = "<h2>HTML Tags</h2><p>Here are some common HTML tags.</p><ul><li>&lt;html&gt;</li><li>&lt;head&gt;</li><li>&lt;body&gt;</li></ul>";
            break;
        case 'cssIntro':
            contentDiv.innerHTML = "<h2>CSS Introduction</h2><p>CSS is the language we use to style an HTML document.</p>";
            break;
        case 'cssSelectors':
            contentDiv.innerHTML = "<h2>CSS Selectors</h2><p>Here are some common CSS selectors.</p><ul><li>Class Selector: .class</li><li>ID Selector: #id</li></ul>";
            break;
        case 'jsIntro':
            contentDiv.innerHTML = "<h2>JavaScript Introduction</h2><p>JavaScript is the programming language of the Web.</p>";
            break;
        case 'reactIntro':
            contentDiv.innerHTML = "<h2>ReactJS Introduction</h2><p>React is a JavaScript library for building user interfaces.</p>";
            break;
        case 'pythonIntro':
            contentDiv.innerHTML = "<h2>Python Introduction</h2><p>Python is a popular programming language.</p>";
            break;
        default:
            contentDiv.innerHTML = "<h2>Content not found</h2><p>Sorry, the content for this item is not available.</p>";
    }
}

// ----------------------Click event listener HTML -------------------------------
document.getElementById("htmlItem").addEventListener("click", function () {
    openNav();
    document.getElementById("htmlContent").style.display = "block";
    document.getElementById("cssContent").style.display = "none";
    document.getElementById("jsContent").style.display = "none";
    document.getElementById("reactContent").style.display = "none";
    document.getElementById("pythonContent").style.display = "none";
});

// ----------------------Click event listener CSS -------------------------------
document.getElementById("cssItem").addEventListener("click", function () {
    openNav();
    document.getElementById("htmlContent").style.display = "none";
    document.getElementById("cssContent").style.display = "block";
    document.getElementById("jsContent").style.display = "none";
    document.getElementById("reactContent").style.display = "none";
    document.getElementById("pythonContent").style.display = "none";
});
// ----------------------Click event listener Javascript -------------------------------
document.getElementById("jsItem").addEventListener("click", function () {
    openNav();
    document.getElementById("htmlContent").style.display = "none";
    document.getElementById("cssContent").style.display = "none";
    document.getElementById("jsContent").style.display = "block";
    document.getElementById("reactContent").style.display = "none";
    document.getElementById("pythonContent").style.display = "none";
});

// ----------------------Click event listener ReactJS -------------------------------
document.getElementById("reactItem").addEventListener("click", function () {
    openNav();
    document.getElementById("htmlContent").style.display = "none";
    document.getElementById("cssContent").style.display = "none";
    document.getElementById("jsContent").style.display = "none";
    document.getElementById("reactContent").style.display = "block";
    document.getElementById("pythonContent").style.display = "none";
});

// ----------------------Click event listener Python -------------------------------
document.getElementById("pythonItem").addEventListener("click", function () {
    openNav();
    document.getElementById("htmlContent").style.display = "none";
    document.getElementById("cssContent").style.display = "none";
    document.getElementById("jsContent").style.display = "none";
    document.getElementById("reactContent").style.display = "none";
    document.getElementById("pythonContent").style.display = "block";
});
