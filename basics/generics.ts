function echo<T>(arg: T): T {
    return arg;
}

var x: number = echo(12)
var y: string = echo("12")
