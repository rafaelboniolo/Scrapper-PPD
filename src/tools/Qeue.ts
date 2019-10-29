/**
 *
 *
 * @class Qeue
 */
class Qeue{

    private qeue = []

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

export default Qeue.newInstance();