function padawanEquipment(money, students, lightsaberPrice, robePrice, beltPrice) {
    
    let lightsabersSum = Math.ceil(students * 1.1) * lightsaberPrice;
    let robesSum = robePrice * students;
    let freeBeltCount = Math.floor(students / 6);
    let beltsSum = beltPrice * (students - freeBeltCount);
    let equipmentPrice = lightsabersSum + robesSum + beltsSum;
    let diff = equipmentPrice - money;
    let isEnoughtMoney = money >= equipmentPrice;

    console.log(isEnoughtMoney ? `The money is enough - it would cost ${equipmentPrice.toFixed(2)}lv.`
                            : `George Lucas will need ${diff.toFixed(2)}lv more.`);


}

padawanEquipment(100, 2, 1.0, 2.0, 3.0);
padawanEquipment(100, 42, 12.0, 4.0, 3.0);