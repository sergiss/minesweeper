window.onload = function() {
    
    let iCols = document.querySelector("#cols");
    let iRows = document.querySelector("#rows");
    let iMines = document.querySelector("#mines");

    let a1 = document.querySelector("#mines_a");
    let b1 = document.querySelector("#mines_b");
    let c1 = document.querySelector("#mines_c");
    let n1 = new Number(a1, b1, c1);
  
    let a2 = document.querySelector("#timer_a");
    let b2 = document.querySelector("#timer_b");
    let c2 = document.querySelector("#timer_c");
    let n2 = new Number(a2, b2, c2);
    
    let interface = {
        cols: 9, 
        rows: 9,
        mineCount: 10,
        mines: n1,
        timer: n2,
        parent: document.querySelector("#grid")
    }

    let button = document.querySelector("#game_button");

    let minefield = new Minefield();   
    minefield.listener = (win)=>{
        button.classList.remove(...button.classList);
        if(win) {
            button.classList.add("tile", "face", "thug-life")
        } else {
            button.classList.add("tile", "face", "dead")
        }
    };

    button.addEventListener('click', (e)=> {
        button.classList.remove(...button.classList);
        button.classList.add("tile", "face", "smile")
        minefield.initialize(interface);
    });

    let changeListener = ()=> {
        iCols.value = Math.max(7, iCols.value);
        iRows.value = Math.max(1, iRows.value);
        iMines.value = Math.max(1, iMines.value);
        interface.cols = iCols.value;
        interface.rows = iRows.value;
        interface.mineCount = iMines.value;
        minefield.initialize(interface); // initialize
    };

    iCols.addEventListener('change', changeListener);
    iRows.addEventListener('change', changeListener);
    iMines.addEventListener('change', changeListener);

    changeListener();

}