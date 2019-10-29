/**
 *
 *
 * @class Qeue
 */
class Qeue{

    private qeue = []

    constructor() {

        if(!Qeue.instance)
            Qeue.instance = this;

        return Qeue.instance;
    }

    public push(obj:Object){
        this.qeue.push(obj);
    }

    public pop():Object{
        return this.qeue.shift();
    }

    public getFirst():Object{
        return this.qeue[0];
    }

    public isEmpty():Boolean{
        return this.qeue.length > 0;
    }

    public getLength():Number{
        return this.qeue.length;
    }

    public static newInstance():Qeue{
        return new Qeue();
    }

    public getInstance():Qeue{
        return this;
    }

}

const instance = new Qeue();
Object.freeze(instance)

export default instance;