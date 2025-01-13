function building(arg1, arg2) {
    let floors = Number(arg1);
    let rooms = Number(arg2);

    for (let floor = floors; floor >= 1; floor--) {
        let buff = "";
        for (let room = 0; room < rooms; room++) {
            if (floor === floors) {
                buff += `L${floor}${room} `;
            } else if (floor % 2 === 0) {
                buff += `O${floor}${room} `;
            }
            else {
                buff += `A${floor}${room} `;
            }
        }
        console.log(buff);

    }

}
building(6, 4);