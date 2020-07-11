//создаю группу объектов - 8 автомобилей центра
$(function() {
   // window.alert("ВНИМАНИЕ! Если Вы полный даун или под коксом или еще под чем-то, Вам лучше закрыть программу и отложить путевки в сторону, чтобы потом начальнику центра не пришлось всё расхлебывать");//
    
    var $toggle;
    var $hiddenW = $('.hiddenWay');
    var $hiddenS = $('.hiddenSpid');
    $hiddenW.hide();
    $hiddenS.hide();
    $('#btnNoVpadlu').on('click', function() {
        $hiddenW.show();
        $hiddenS.hide();
        $toggle = 0;
    });
    $('#btnYesVpadlu').on('click', function() {
        $hiddenS.show();
        $hiddenW.hide();
        $toggle = 1;
    });
    
function removeInputData() {
    $('#startkm').val('');
    $('#finishkm').val('');
    $('#wayLength').val('');
}
    
function raznostSpidometrov() {
    var $startKm = $('#startkm').val();
    var $finishKm = $('#finishkm').val();
    return $finishKm - $startKm;
}    
    
function Auto(marka, wayLength, linNorm, starenie, gruz, wayGood, tsp) {
    this.marka = marka;
    this.wayLength = wayLength;
    this.linNorm = linNorm;
    this.starenie = starenie;
    this.gruz = gruz;
    this.wayGood = wayGood;
    this.tsp = tsp;
    this.fuelCalculation = function () {
        return this.wayLength * (this.linNorm + this.starenie + this.gruz + this.wayGood + this.tsp);
    };
}

var K8 = new Auto('У-375 р/з МО1250-0', 0, 0.58, 0.0464, 0.056, 0, 0);
var K9 = new Auto('У-4320 р/з МО1251-0', 0, 0.304, 0.0243, 0.06344, 0, 0);
var P232 = new Auto('К-4310 р/з 19-81 кг', 0, 0.301, 0.0241, 0, 0, 0);
var P178 = new Auto('У-375 р/з МО1267-0', 0, 0.58, 0, 0.0464, 0, 0);
var skat = new Auto('К-4310 р/з 19-97 кг', 0, 0.301, 0, 0.0766, 0, 0);
var R409 = new Auto('З-131 р/з МО3445-0', 0, 0.399, 0, 0.09, 0, 0);
var ural1263 = new Auto('У-4320 р/з МО1263-0', 0, 0.304, 0.0243, 0, 0, 0);
var ural1261 = new Auto('У-43202 р/з МО1261-0', 0, 0.304, 0.0243, 0, 0, 0);


/*функция возвращает значение переключателя при ответе на вопрос "По какой дороге ехал автомобиль?"*/
function getRadioValueWay(howIsWay) {
    var group = document.getElementsByName('howIsWay');
    for (x = 0; x < group.length; x++) {
        if (group[x].checked) {
            return (group[x].value);
        }
    }
    return (false);
}

/*функция возвращает значение переключателя при ответе на вопрос "По какой причине выезжал автомобиль?"*/
function getRadioValueReason(reason) {
    var group = document.getElementsByName('reason');
    for (x = 0; x < group.length; x++) {
        if (group[x].checked) {
            return (group[x].value);
        }
    }
    return (false);
}

//запуск расчета при клике на кнопку

button.onclick = function () {

    //получение выбранного значения из списка автомобилей
    var objSel = document.getElementById("mySelect");
    var markaAndNumber = objSel.options[objSel.selectedIndex].value;

    var resultRashod = document.getElementById('resultRashod');
    var colculation = document.getElementById('colculation');
    var massaKunga = document.getElementById('resultKung');

    if (markaAndNumber == 'u375mo1250') {
        if($toggle===0) {
            K8.wayLength = document.getElementById('wayLength').value;
        } else if($toggle===1) {
            K8.wayLength = raznostSpidometrov();
        }
        
        if (getRadioValueWay() == 'asfalt') {
            K8.wayGood = -0.0696;
        } else if (getRadioValueWay() == 'wayMinsk') {
            K8.wayGood = 0.087;
        } else if (getRadioValueWay() == 'ruggedTerrain') {
            K8.wayGood = 0.116;
        } else {
            K8.wayGood = 0;
        };
        if (getRadioValueReason() == 'TSP') {
            K8.tsp = 0.087;
        } else {
            K8.tsp = 0;
        };
        resultRashod.textContent = Math.round(K8.fuelCalculation());
        colculation.textContent = K8.wayLength + 'км X (' + K8.linNorm + ' + ' + K8.starenie + ' + ' + K8.gruz + ' + ' + K8.wayGood + ' + ' +
            K8.tsp + ')';
        massaKunga.textContent = ' 2,8 т';
        removeInputData();
    } else if (markaAndNumber == 'u4320mo1251') {
        if($toggle===0) {
            K9.wayLength = document.getElementById('wayLength').value;
        } else if($toggle===1) {
            K9.wayLength = raznostSpidometrov();
        }
        
        if (getRadioValueWay() == 'asfalt') {
            K9.wayGood = -0.043;
        } else if (getRadioValueWay() == 'wayMinsk') {
            K9.wayGood = 0.05385;
        } else if (getRadioValueWay() == 'ruggedTerrain') {
            K9.wayGood = 0.0718;
        } else {
            K9.wayGood = 0;
        };
        if (getRadioValueReason() == 'TSP') {
            K9.tsp = 0.05385;
        } else {
            K9.tsp = 0;
        };
        resultRashod.textContent = Math.round(K9.fuelCalculation());
        colculation.textContent = K9.wayLength + 'км X (' + K9.linNorm + ' + ' + K9.starenie + ' + ' + K9.gruz + ' + ' + K9.wayGood + ' + ' +
            K9.tsp + ')';
        massaKunga.textContent = ' 4,88 т';
        removeInputData();
    } else if (markaAndNumber == 'k4310rz1981') {
        if($toggle===0) {
            P232.wayLength = document.getElementById('wayLength').value;
        } else if($toggle===1) {
            P232.wayLength = raznostSpidometrov();
        }
        
        if (getRadioValueWay() == 'asfalt') {
            P232.wayGood = -0.03612;
        } else if (getRadioValueWay() == 'wayMinsk') {
            P232.wayGood = 0.04515;
        } else if (getRadioValueWay() == 'ruggedTerrain') {
            P232.wayGood = 0.0602;
        } else {
            P232.wayGood = 0;
        };
        if (getRadioValueReason() == 'TSP') {
            P232.tsp = 0.04515;
        } else {
            P232.tsp = 0;
        };
        resultRashod.textContent = Math.round(P232.fuelCalculation());
        colculation.textContent = P232.wayLength + 'км X (' + P232.linNorm + ' + ' + P232.starenie + ' + ' + P232.gruz + ' + ' + P232.wayGood + ' + ' + P232.tsp + ')';
        massaKunga.textContent = 'хуй знает';
        removeInputData();
    } else if (markaAndNumber == 'u375mo1267') {
        if($toggle===0) {
            P178.wayLength = document.getElementById('wayLength').value;
        } else if($toggle===1) {
            P178.wayLength = raznostSpidometrov();
        }
    
        if (getRadioValueWay() == 'asfalt') {
            P178.wayGood = -0.0696;
        } else if (getRadioValueWay() == 'wayMinsk') {
            P178.wayGood = 0.087;
        } else if (getRadioValueWay() == 'ruggedTerrain') {
            P178.wayGood = 0.116;
        } else {
            P178.wayGood = 0;
        };
        if (getRadioValueReason() == 'TSP') {
            P178.tsp = 0.087;
        } else {
            P178.tsp = 0;
        };
        resultRashod.textContent = Math.round(P178.fuelCalculation());
        colculation.textContent = P178.wayLength + 'км X (' + P178.linNorm + ' + ' + P178.starenie + ' + ' + P178.gruz + ' + ' + P178.wayGood + ' + ' + P178.tsp + ')';
        massaKunga.textContent = ' 3,5 т';
        removeInputData();
    } else if (markaAndNumber == 'k4310rz19-97') {
        if($toggle===0) {
            skat.wayLength = document.getElementById('wayLength').value;
        } else if($toggle===1) {
            skat.wayLength = raznostSpidometrov();
        }
        
        if (getRadioValueWay() == 'asfalt') {
            skat.wayGood = -0.03612;
        } else if (getRadioValueWay() == 'wayMinsk') {
            skat.wayGood = 0.04515;
        } else if (getRadioValueWay() == 'ruggedTerrain') {
            skat.wayGood = 0.0602;
        } else {
            skat.wayGood = 0;
        };
        if (getRadioValueReason() == 'TSP') {
            skat.tsp = 0.04515;
        } else {
            skat.tsp = 0;
        };
        resultRashod.textContent = Math.round(skat.fuelCalculation());
        colculation.textContent = skat.wayLength + 'км X (' + skat.linNorm + ' + ' + skat.starenie + ' + ' + skat.gruz + ' + ' + skat.wayGood + ' + ' + skat.tsp + ')';
        massaKunga.textContent = ' 5,895 т';
        removeInputData();
    } else if (markaAndNumber == 'z131mo3445') {
        if($toggle===0) {
            R409.wayLength = document.getElementById('wayLength').value;
        } else if($toggle===1) {
            R409.wayLength = raznostSpidometrov();
        }
    
        if (getRadioValueWay() == 'asfalt') {
            R409.wayGood = -0.04788;
        } else if (getRadioValueWay() == 'wayMinsk') {
            R409.wayGood = 0.05985;
        } else if (getRadioValueWay() == 'ruggedTerrain') {
            R409.wayGood = 0.0798;
        } else {
            R409.wayGood = 0;
        };
        if (getRadioValueReason() == 'TSP') {
            R409.tsp = 0.05985;
        } else {
            R409.tsp = 0;
        };
        resultRashod.textContent = Math.round(R409.fuelCalculation());
        colculation.textContent = R409.wayLength + 'км X (' + R409.linNorm + ' + ' + R409.starenie + ' + ' + R409.gruz + ' + ' + R409.wayGood + ' + ' + R409.tsp + ')';
        massaKunga.textContent = ' 4,5 т';
        removeInputData();
    } else if (markaAndNumber == 'u4320mo1263') {
        if($toggle===0) {
            ural1263.wayLength = document.getElementById('wayLength').value;
        } else if($toggle===1) {
            ural1263.wayLength = raznostSpidometrov();
        }

        if (getRadioValueWay() == 'asfalt') {
            ural1263.wayGood = -0.043;
        } else if (getRadioValueWay() == 'wayMinsk') {
            ural1263.wayGood = 0.05385;
        } else if (getRadioValueWay() == 'ruggedTerrain') {
            ural1263.wayGood = 0.0718;
        } else {
            ural1263.wayGood = 0;
        };
        if (getRadioValueReason() == 'TSP') {
            ural1263.tsp = 0.05385;
        } else {
            ural1263.tsp = 0;
        };
        resultRashod.textContent = Math.round(ural1263.fuelCalculation());
        colculation.textContent = ural1263.wayLength + 'км X (' + ural1263.linNorm + ' + ' + ural1263.starenie + ' + ' + ural1263.gruz + ' + ' + ural1263.wayGood + ' + ' +
            ural1263.tsp + ')';
        massaKunga.textContent = ' нет кунга';
        removeInputData();
    } else if (markaAndNumber == 'u43202mo1261') {
        if($toggle===0) {
            ural1261.wayLength = document.getElementById('wayLength').value;
        } else if($toggle===1) {
            ural1261.wayLength = raznostSpidometrov();
        }
        
        if (getRadioValueWay() == 'asfalt') {
            ural1261.wayGood = -0.043;
        } else if (getRadioValueWay() == 'wayMinsk') {
            ural1261.wayGood = 0.05385;
        } else if (getRadioValueWay() == 'ruggedTerrain') {
            ural1261.wayGood = 0.0718;
        } else {
            ural1261.wayGood = 0;
        };
        if (getRadioValueReason() == 'TSP') {
            ural1261.tsp = 0.05385;
        } else {
            ural1261.tsp = 0;
        };
        resultRashod.textContent = Math.round(ural1261.fuelCalculation());
        colculation.textContent = ural1261.wayLength + 'км X (' + ural1261.linNorm + ' + ' + ural1261.starenie + ' + ' + ural1261.gruz + ' + ' + ural1261.wayGood + ' + ' +
            ural1261.tsp + ')';
         massaKunga.textContent = ' нет кунга';
        removeInputData();
    } else {
        consumption = 'mistake!';
    }




};


});