function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function () {
    const showMoreCertificatesButton = document.getElementById('show-more-certificates');
    const hiddenCertificates = document.querySelectorAll('.hidden-certificate');
    let currentCertificateIndex = 0;

    showMoreCertificatesButton.addEventListener('click', function () {
        if (currentCertificateIndex < hiddenCertificates.length) {
            hiddenCertificates[currentCertificateIndex].classList.add('show');
            currentCertificateIndex++;
        } else {
            // Reset to the first hidden certificate
            hiddenCertificates.forEach(cert => cert.classList.remove('show'));
            currentCertificateIndex = 0;
        }
    });

    const showMoreProjectsButton = document.getElementById('show-more-projects');
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    let currentProjectIndex = 0;

    showMoreProjectsButton.addEventListener('click', function () {
        if (currentProjectIndex < hiddenProjects.length) {
            hiddenProjects[currentProjectIndex].classList.add('show');
            currentProjectIndex++;
        } else {
            // Reset to the first hidden project
            hiddenProjects.forEach(proj => proj.classList.remove('show'));
            currentProjectIndex = 0;
        }
    });
});