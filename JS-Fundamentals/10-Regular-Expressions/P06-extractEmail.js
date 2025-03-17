function extractEmails(str) {

    str = str.toString();
    let patternEmail = /\b(?<user>[a-z0-9!#$%&'*+/=?^`{|}~]+(?:\.?[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?<host>(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])\b/g
    let matches = str.matchAll(patternEmail);

    if (matches) {
        for (let match of matches) {
            console.log(`${match.groups.user}@${match.groups.host}`);
        }
    }
}
extractEmails(
    'Please contact us at: support@github.com.');

extractEmails(
    'Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');

extractEmails(
    'Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')