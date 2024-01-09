//ex 4.1//
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    Initialize = (x, y) => {
        this.x = x
        this.y = y
    }

    Show = () => {
        let res = ""
        res += `(${this.x},${this.y})`
        return res
    }

    Equals = (p) => p.x === this.x && p.y === this.y
}

//ex 4.2//
const pointExists = (points, x, y) => {
    let point = new Point(x, y)
    return points.find((p) => point.Equals(p)) !== undefined
}
//Example 4.2
let point1 = new Point(0, 1)
let point2 = new Point(1, 1)
let point3 = new Point(3, 4)
let point4 = new Point(2, 0)
let points = [point1, point2, point3, point4]
//True
console.log(pointExists(points, 0, 1))
//False
console.log(pointExists(points, 1, 3))


//ex 4.3//
const pointExists2 = (points, point) => {
    return points.find((p) => point.Equals(p)) !== undefined
}
//Example 4.3
//True
console.log(pointExists2(points, new Point(3, 4)))
//False
console.log(pointExists2(points, new Point(1, 3)))

//ex 4.4//
const distanceBetweenTwoPoints = (point1, point2) => Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2)
const trip = (points) => {
    let result = 0
    for (let i = 0; i < points.length - 1; i++) {
        result += distanceBetweenTwoPoints(points[i], points[i + 1])
    }
    return result
}
//Example 4.4
console.log(trip(points))