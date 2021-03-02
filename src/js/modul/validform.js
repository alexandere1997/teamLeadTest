let valide = () => {
    let input = document.querySelector(".footer__input_tel");
    function mask1(event) {
        var matrix = "+7(___)-___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type == "blur") {
            if (this.value.length == 2) this.value = ""
        } 
    };
    
    input.addEventListener("input", mask1, false);
    input.addEventListener("focus", mask1, false);
    input.addEventListener("blur", mask1, false);
}
export default valide;