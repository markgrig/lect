// Model - отвечает за рачёт
    const Model = {
        number: 0,
        calculate(x, y) {
            this.number = x*y;
            const result = this.number;
            View.showNumber(result);
        }
    };
//View - отвечает зы вывод 
    const View =  {
        showNumber(n) {
         const el = document.querySelector(".showResult");
         el.textContent = n;
        }
    };
//Controler - отвечать на события пользователя 
    const Controler =  {
        handleClick() {
            Model.calculate(3,4);
        }
    };

// init function 

(function() {
    const app = {
        init() {
            this.main();
            this.event();
        },
        main(){
            // подключение и настройка плагинов?)
        },
        event() {
            const buttonForCalc = document.querySelector('.button-calc');
            buttonForCalc.onclick = Controler.handleClick();
        }
    };
    app.init();
}());


