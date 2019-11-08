import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: any, port : any){
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);

    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers:any) {
        controllers.forEach((controller:any) => {
          this.app.use('/', controller.router);
        });
    }

    public listen(){
        this.app.listen(this.port, () => {
            console.log(`App Listening on the port ${this.port}`);
        });
    }

    public connectToTheDatabase() {
        const {
            MONGO_USER,
            MONGO_PASSWORD,
            MONGO_PATH
        } = process.env;

        mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`);
    }
}

export default App;