/* =========================================================
   PORTFOLIO RENDERING
========================================================= */


/* =========================================================
   EDUCATION
========================================================= */

function renderEducation() {

    const container =
        document.getElementById("educationList");


    if (!container) {
        return;
    }


    container.innerHTML =
        education
            .map((item) => {

                return `
                    <article class="timeline-item">

                        <div class="timeline-date">
                            ${item.period}
                        </div>

                        <div class="timeline-content">

                            <h3>
                                ${item.degree}
                            </h3>

                            <p class="timeline-institution">
                                ${item.institution}
                            </p>

                            <p class="timeline-description">
                                ${item.description}
                            </p>

                        </div>

                    </article>
                `;

            })
            .join("");

}



/* =========================================================
   RESEARCH INTERESTS
========================================================= */

function renderResearchInterests() {

    const container =
        document.getElementById("researchInterests");


    if (!container) {
        return;
    }


    container.innerHTML =
        researchInterests
            .map((interest) => {

                return `
                    <div class="research-interest">
                        ${interest}
                    </div>
                `;

            })
            .join("");

}



/* =========================================================
   PROJECTS
========================================================= */

function renderProjects() {

    const container =
        document.getElementById("projectsList");


    if (!container) {
        return;
    }


    container.innerHTML =
        projects
            .map((project, index) => {

                const number =
                    String(index + 1)
                        .padStart(2, "0");


                const technologies =
                    project.technologies
                        .map(
                            technology =>
                                `<span>${technology}</span>`
                        )
                        .join("");


                return `
                    <article class="project">

                        <div class="project-number">
                            ${number}
                        </div>

                        <div>

                            <h3>
                                ${project.title}
                            </h3>

                            <p class="project-year">
                                ${project.year}
                            </p>

                        </div>

                        <div>

                            <p class="project-description">
                                ${project.description}
                            </p>

                            <div class="project-technologies">
                                ${technologies}
                            </div>

                        </div>

                    </article>
                `;

            })
            .join("");

}



/* =========================================================
   SKILLS
========================================================= */

function renderSkills() {

    const container =
        document.getElementById("skillsList");


    if (!container) {
        return;
    }


    container.innerHTML =
        skillGroups
            .map((group) => {

                const skills =
                    group.skills
                        .map(
                            skill =>
                                `<span>${skill}</span>`
                        )
                        .join("");


                return `
                    <article class="skill-group">

                        <h3>
                            ${group.category}
                        </h3>

                        <div class="skill-items">
                            ${skills}
                        </div>

                    </article>
                `;

            })
            .join("");

}



/* =========================================================
   ACHIEVEMENTS
========================================================= */

function renderAchievements() {

    const container =
        document.getElementById("achievementList");


    if (!container) {
        return;
    }


    container.innerHTML =
        achievements
            .map((achievement) => {

                return `
                    <article class="achievement">

                        <div class="achievement-year">
                            ${achievement.year}
                        </div>

                        <div>

                            <h3>
                                ${achievement.title}
                            </h3>

                            <p>
                                ${achievement.organization}
                            </p>

                            <p>
                                ${achievement.description}
                            </p>

                        </div>

                    </article>
                `;

            })
            .join("");

}



/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileNavigation() {

    const button =
        document.getElementById("menuButton");

    const navigation =
        document.getElementById("navigation");


    if (!button || !navigation) {
        return;
    }


    button.addEventListener(
        "click",
        () => {

            const isOpen =
                navigation.classList.toggle("open");


            document.body.classList.toggle(
                "menu-open",
                isOpen
            );


            button.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    navigation
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    navigation.classList.remove(
                        "open"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                    button.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}



/* =========================================================
   CURRENT YEAR
========================================================= */

function setCurrentYear() {

    const yearElement =
        document.getElementById("currentYear");


    if (!yearElement) {
        return;
    }


    yearElement.textContent =
        new Date().getFullYear();

}



/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderEducation();

        renderResearchInterests();

        renderProjects();

        renderSkills();

        renderAchievements();

        setupMobileNavigation();

        setCurrentYear();

    }
);
