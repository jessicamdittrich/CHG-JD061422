// FUNCTION TO GENERATE TEAM CARDS AND INPUT INTO MAIN FUNCTION (GENERATE SITE)
function generateTeam(getTeamMember) {

    switch (getTeamMember) {
        case manager:
            let managerHtml = `<div class="card">
                <div class="name-title">
                    <h2>${data.manager_name}</h2>
                    <h4>Manager</h4>
                </div>
                <div class="additional-info">
                    <p class="info-one">${data.manager_id}</p>
                    <p class="info-two">${data.manager_email}</p>
                    <p class="info-three">${data.manager_number}</p>
                </div>
            </div>`
            break;
        case engineer:
            let engineerHtml = `<div class="card">
            <div class="name-title">
                <h2>${data.engineer_name}</h2>
                <h4>Manager</h4>
            </div>
            <div class="additional-info">
                <p class="info-one">${data.engineer_id}</p>
                <p class="info-two">${data.engineer_email}</p>
                <p class="info-three">${data.engineer_gitHub}</p>
            </div>
        </div>`
            break;
        case intern:
            let internHtml = `<div class="card">
            <div class="name-title">
                <h2>${data.intern_name}</h2>
                <h4>Manager</h4>
            </div>
            <div class="additional-info">
                <p class="info-one">${data.intern_id}</p>
                <p class="info-two">${data.intern_email}</p>
                <p class="info-three">${data.intern_school}</p>
            </div>
        </div>`
            break;
    }

    // i need to return them????

}

// MAIN FUNCTION TO GENERATE HTML DOCUMENT
function generateSite(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <link rel="stylesheet" href="style.css">
        <title>Your Team!</title>
    </head>
    <body>
        
        <div id="container">

            <header><h1>Your Team</h1></header>

            <main>${generateTeam(data)}</main>

        </div>

    </body>
    </html>`
}

// EXPORTING
module.exports = generateSite;