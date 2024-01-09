class Duck {
    constructor(name, color, age, weight, image) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.image = image;
    }

    Show = () => {
        let res = ""
        res += `Name:${this.name} , Color:${this.color}, Age:${this.age}, Weight:${this.weight}, Image:${this.image}`
        return res
    }

    Quack = () => {
        let num = Math.floor((this.age * this.weight) / 2)
        let res = "Quack ".repeat(num);
        function playAudio() {
            let audio = new Audio('quack_sound.mp3');
            let count = 3;
            audio.addEventListener('ended', () => {
                if (count > 1) {
                    count--;
                    audio.currentTime = 0;
                    audio.play();
                }
            });
            audio.play();
        }
        playAudio()
        return res
    }
}