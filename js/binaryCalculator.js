let res = document.getElementById("res");
let ops = /\+|\-|\*|\//;
let endsInOp = /.+[\+\-\*\/]$/
let completeExpr = /.+[\+\-\*\/].+$/
let disp = "";

let checkOp = (val) => {
    if(disp != "" && !completeExpr.test(disp)) {
        if(endsInOp.test(disp)) {
            disp = disp.substring(0,disp.length-1);
            disp += val;
        } else {
            disp += val;
        }
    }
};

let clear = () => {
    disp = "";
};

let calculate = () => {
    if(completeExpr.test(disp)) {
        let input = disp.split(ops);
        let operation = ops.exec(disp);
        input[0] = parseInt(input[0],2);
        input[1] = parseInt(input[1],2);
        
        disp = eval(input[0] + operation + input[1]);
        disp = parseInt(disp); //Removes decimal from division operations
        disp = disp.toString(2);
        
    }
};

let action = (e) => {
    let btn = e.target || e.srcElement;
    let val = btn.innerHTML;

    if(val == "C") {
        clear();
    } else if(ops.test(val))  { 
        checkOp(val);
    } else if(val == "=") {
        calculate();
    } else {
        disp += val;
    }
    res.innerText = disp;
};

// Loop through child nodes of btns. If the node is a button, add click listener
var btns = document.getElementById("btns").childNodes;
for(let i=0; i<btns.length; i++){
    if(btns[i].tagName == "BUTTON")
        btns[i].addEventListener("click",action);
};
