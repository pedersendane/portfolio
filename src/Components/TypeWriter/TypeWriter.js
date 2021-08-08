
/**
 * Add typewriter effect to text
 * @prop text String to display. Ex: "Hello"
 * @prop speed How fast you want it to type. Ex: 50,100,150
 * @prop id Id of html element to append to. Ex: "text-box"
 * @return void
 */
function TypeWriter(text, speed, id) {
    let i = 0;
    if (document.getElementById(id).innerHTML !== '') {
        document.getElementById(id).innerHTML = '';
    };
    function type() {
        if (i < text.length) {
            if (document.getElementById(id)) {
                document.getElementById(id).innerHTML += text.charAt(i);
            } else {
                return;
            }
            
        i++;
        setTimeout(type, speed);
      }
    }
    type();
}

export default TypeWriter
