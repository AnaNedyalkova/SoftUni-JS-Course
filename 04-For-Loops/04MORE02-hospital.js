function hospital(input) {

    let periodOfTime = Number(input[0]);
    let treatedPatients = 0;
    let untreadedPatients = 0;
    let doctors = 7;

    for (i = 1; i <= periodOfTime; i++) {
        let patients = Number(input[i]);

        if (i % 3 === 0 && treatedPatients < untreadedPatients) {
            doctors++;
        }

        if (patients <= doctors) {
            treatedPatients += patients;
        } else {
            treatedPatients += doctors;
            untreadedPatients += patients - doctors;
        }
    }
    

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreadedPatients}.`);
}


hospital(["4", "7", "27", "9", "1"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);
hospital(["3", "7", "7", "7"]);