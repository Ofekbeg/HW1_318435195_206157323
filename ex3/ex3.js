class Clock {
    constructor(hours, minutes, seconds, country) {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
        this.country = country
    }
    ConvertToSeconds = () => (this.hours * 3600 + this.minutes * 60 + this.seconds)

    Show = () => {
        let res = ""
        let h = ""
        let m = ""
        let s = ""
        if (this.hours < 10) {
            h = `0${this.hours}`
        }
        else{
            h=this.hours
        }
        if (this.minutes < 10) {
            m = `0${this.minutes}`
        }
        else{
            m=this.minutes
        }
        if (this.seconds < 10) {
            s = `0${this.seconds}`
        }
        else{
            s=this.seconds
        }
        res += `${this.country}: ${h}:${m }:${s} `
        return res
    }
}